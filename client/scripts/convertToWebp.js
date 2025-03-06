import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = path.join(process.cwd(), "public", "images", "fotosbebes");
const outputDir = path.join(process.cwd(), "public", "images", "fotosbebes");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all jpg files
const files = fs.readdirSync(inputDir).filter((file) => file.endsWith(".jpg"));

// Convert each file to WebP
async function convertToWebP() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(".jpg", ".webp"));

    try {
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
      console.log(`Converted ${file} to WebP`);
    } catch (error) {
      console.error(`Error converting ${file}:`, error);
    }
  }
}

convertToWebP();
