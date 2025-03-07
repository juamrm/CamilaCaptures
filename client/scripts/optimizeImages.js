import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(process.cwd(), "public", "images", "fotosbebes");
const outputDir = path.join(process.cwd(), "public", "images", "fotosbebes");
const tempDir = path.join(
  process.cwd(),
  "public",
  "images",
  "fotosbebes",
  "temp"
);

// Ensure directories exist
[inputDir, outputDir, tempDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Clean up old optimized files
function cleanupFiles() {
  const files = fs.readdirSync(outputDir);
  files.forEach((file) => {
    if (
      file.endsWith("-320.jpg") ||
      file.endsWith("-320.webp") ||
      file.endsWith("-480.jpg") ||
      file.endsWith("-480.webp") ||
      file.endsWith("-800.jpg") ||
      file.endsWith("-800.webp")
    ) {
      fs.unlinkSync(path.join(outputDir, file));
    }
  });
}

async function optimizeImages() {
  try {
    // Clean up old files first
    cleanupFiles();

    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(
      (file) =>
        file.endsWith(".jpg") && !file.includes("-") && !file.includes("temp")
    );

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const baseName = path.parse(file).name;

      // Generate WebP versions
      await sharp(inputPath)
        .resize(320, 320, { fit: "inside" })
        .webp({ quality: 80 })
        .toFile(path.join(tempDir, `${baseName}-320.webp`));

      await sharp(inputPath)
        .resize(480, 480, { fit: "inside" })
        .webp({ quality: 80 })
        .toFile(path.join(tempDir, `${baseName}-480.webp`));

      await sharp(inputPath)
        .resize(800, 800, { fit: "inside" })
        .webp({ quality: 85 })
        .toFile(path.join(tempDir, `${baseName}-800.webp`));

      // Generate JPEG versions
      await sharp(inputPath)
        .resize(320, 320, { fit: "inside" })
        .jpeg({ quality: 80 })
        .toFile(path.join(tempDir, `${baseName}-320.jpg`));

      await sharp(inputPath)
        .resize(480, 480, { fit: "inside" })
        .jpeg({ quality: 80 })
        .toFile(path.join(tempDir, `${baseName}-480.jpg`));

      await sharp(inputPath)
        .resize(800, 800, { fit: "inside" })
        .jpeg({ quality: 85 })
        .toFile(path.join(tempDir, `${baseName}-800.jpg`));

      console.log(`Optimized ${file}`);
    }

    // Move files from temp to output directory
    const tempFiles = fs.readdirSync(tempDir);
    tempFiles.forEach((file) => {
      fs.renameSync(path.join(tempDir, file), path.join(outputDir, file));
    });

    // Clean up temp directory
    fs.rmdirSync(tempDir);

    console.log("Image optimization completed successfully!");
  } catch (error) {
    console.error("Error during image optimization:", error);
    // Clean up temp directory if it exists
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    process.exit(1);
  }
}

optimizeImages();
