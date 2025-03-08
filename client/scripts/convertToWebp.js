import sharp from "sharp";
import fs from "fs";
import path from "path";

// Configuration options
const config = {
  input: {
    dir: path.join(process.cwd(), "src", "assets", "images", "fotosbebes"),
    // Add specific files to process, or leave empty to process all
    specificFiles: [],
  },
  output: {
    dir: path.join(process.cwd(), "src", "assets", "images", "webp"),
    webp: {
      quality: 80, // 0-100: Higher = better quality but larger file
      effort: 6, // 0-6: Higher = better compression but slower
      nearLossless: true,
      smartSubsample: true, // Better chroma subsampling
    },
    sizes: [
      // Generate multiple sizes for responsive images
      { width: 1920, suffix: "large" },
      { width: 1280, suffix: "medium" },
      { width: 640, suffix: "small" },
    ],
  },
  optimization: {
    removeMetadata: true,
    stripColorProfile: false, // Keep color profiles for accuracy
    normalize: true, // Normalize dynamic range
  },
};

// Ensure directories exist
if (!fs.existsSync(config.output.dir)) {
  fs.mkdirSync(config.output.dir, { recursive: true });
}

// Get all image files or specific ones
const files = fs.readdirSync(config.input.dir).filter((file) => {
  const isImage = /\.(jpg|jpeg|png)$/i.test(file);
  const isSpecific =
    config.input.specificFiles.length === 0 ||
    config.input.specificFiles.includes(file);
  return isImage && isSpecific;
});

// Process a single image with given size
async function processImage(inputPath, outputPath, size = null) {
  let pipeline = sharp(inputPath);

  // Apply optimizations
  if (config.optimization.removeMetadata) {
    pipeline = pipeline.withMetadata(false);
  }
  if (config.optimization.stripColorProfile) {
    pipeline = pipeline.withoutColourProfile();
  }
  if (config.optimization.normalize) {
    pipeline = pipeline.normalize();
  }

  // Resize if size specified
  if (size) {
    pipeline = pipeline.resize(size.width, null, {
      withoutEnlargement: true,
      fit: "inside",
    });
  }

  // Convert to WebP with quality settings
  return pipeline.webp(config.output.webp).toFile(outputPath);
}

// Convert images to WebP with different sizes
async function convertToWebP() {
  console.log(`Processing ${files.length} images...`);

  for (const file of files) {
    const inputPath = path.join(config.input.dir, file);
    const baseFilename = file
      .replace(/\.(jpg|jpeg|png)$/i, "")
      .replace(/,\s+/g, "_"); // Replace commas and spaces with underscore

    try {
      // Generate full-size version
      const fullSizeOutput = path.join(
        config.output.dir,
        `${baseFilename}.webp`
      );
      await processImage(inputPath, fullSizeOutput);
      console.log(`✓ Converted ${file} to WebP`);

      // Generate responsive sizes
      for (const size of config.output.sizes) {
        const sizeOutput = path.join(
          config.output.dir,
          `${baseFilename}-${size.suffix}.webp`
        );
        await processImage(inputPath, sizeOutput, size);
        console.log(`  ↳ Generated ${size.suffix} version (${size.width}px)`);
      }

      // Log optimization details
      const stats = await sharp(inputPath).stats();
      const outputStats = await sharp(fullSizeOutput).stats();
      const savings = ((1 - outputStats.size / stats.size) * 100).toFixed(1);

      console.log(`  ↳ Size reduction: ${savings}%`);
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  }
}

// Run the conversion
console.log("Starting image conversion...");
console.log("Configuration:", JSON.stringify(config, null, 2));

convertToWebP()
  .then(() => console.log("Conversion complete!"))
  .catch((err) => console.error("Conversion failed:", err));
