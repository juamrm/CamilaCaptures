import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  input: {
    dir: path.join(process.cwd(), "public", "images"),
    // Add specific files to process, or leave empty to process all
    specificFiles: [],
  },
  optimization: {
    // Compression settings
    webp: {
      quality: 75, // Slightly more aggressive compression
      effort: 6, // Maximum compression effort
      nearLossless: true,
      smartSubsample: true,
      mixed: true, // Better compression for mixed content
    },
    // Image processing
    processing: {
      sharpen: true, // Apply subtle sharpening
      median: 1, // Remove noise (0 to disable)
      gamma: 1.1, // Slightly boost midtones
      normalize: true, // Normalize dynamic range
    },
    // Metadata handling
    metadata: {
      keep: ["exif", "icc"], // Metadata to preserve
      strip: ["xmp", "iptc"], // Metadata to remove
    },
  },
};

// Get all WebP files or specific ones
const files = fs.readdirSync(config.input.dir).filter((file) => {
  const isWebP = file.endsWith(".webp");
  const isSpecific =
    config.input.specificFiles.length === 0 ||
    config.input.specificFiles.includes(file);
  return isWebP && isSpecific;
});

// Process a single image
async function optimizeImage(inputPath) {
  const stats = await sharp(inputPath).stats();

  let pipeline = sharp(inputPath);

  // Apply image processing
  if (config.optimization.processing.sharpen) {
    pipeline = pipeline.sharpen({
      sigma: 1,
      m1: 0.5,
      m2: 0.5,
    });
  }

  if (config.optimization.processing.median > 0) {
    pipeline = pipeline.median(config.optimization.processing.median);
  }

  if (config.optimization.processing.gamma !== 1) {
    pipeline = pipeline.gamma(config.optimization.processing.gamma);
  }

  if (config.optimization.processing.normalize) {
    pipeline = pipeline.normalize();
  }

  // Handle metadata
  pipeline = pipeline.withMetadata({
    keepExif: config.optimization.metadata.keep.includes("exif"),
    keepIcc: config.optimization.metadata.keep.includes("icc"),
  });

  // Convert back to WebP with optimization settings
  const optimizedBuffer = await pipeline
    .webp(config.optimization.webp)
    .toBuffer();

  // Only save if the optimized version is smaller
  const optimizedSize = optimizedBuffer.length;
  if (optimizedSize < stats.size) {
    await fs.promises.writeFile(inputPath, optimizedBuffer);
    return {
      original: stats.size,
      optimized: optimizedSize,
      saved: stats.size - optimizedSize,
    };
  }

  return {
    original: stats.size,
    optimized: stats.size,
    saved: 0,
  };
}

// Optimize all images
async function optimizeImages() {
  console.log(`Optimizing ${files.length} images...`);
  console.log("Configuration:", JSON.stringify(config, null, 2));

  let totalSaved = 0;
  let totalOriginal = 0;

  for (const file of files) {
    const inputPath = path.join(config.input.dir, file);

    try {
      const result = await optimizeImage(inputPath);
      totalSaved += result.saved;
      totalOriginal += result.original;

      const savingsPercent = ((result.saved / result.original) * 100).toFixed(
        1
      );
      console.log(
        `${result.saved > 0 ? "✓" : "•"} ${file}: ` +
          `${(result.original / 1024).toFixed(1)}KB → ` +
          `${(result.optimized / 1024).toFixed(1)}KB ` +
          `(${result.saved > 0 ? "-" : ""}${savingsPercent}%)`
      );
    } catch (error) {
      console.error(`✗ Error optimizing ${file}:`, error.message);
    }
  }

  const totalSavingsPercent = ((totalSaved / totalOriginal) * 100).toFixed(1);
  console.log("\nOptimization complete!");
  console.log(
    `Total space saved: ${(totalSaved / 1024).toFixed(1)}KB (${totalSavingsPercent}%)`
  );
}

optimizeImages().catch((err) => console.error("Optimization failed:", err));
