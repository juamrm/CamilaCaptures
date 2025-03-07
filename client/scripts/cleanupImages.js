import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(process.cwd(), "public", "images", "fotosbebes");

function cleanupImages() {
  try {
    const files = fs.readdirSync(imagesDir);
    let removedCount = 0;

    files.forEach((file) => {
      const filePath = path.join(imagesDir, file);

      // Remove files that match these patterns:
      // - Files with size suffixes (-320, -480, -800)
      // - WebP versions
      // - Temporary files
      if (
        file.includes("-320") ||
        file.includes("-480") ||
        file.includes("-800") ||
        file.endsWith(".webp") ||
        file.includes("temp")
      ) {
        fs.unlinkSync(filePath);
        removedCount++;
        console.log(`Removed: ${file}`);
      }
    });

    console.log(
      `\nCleanup completed! Removed ${removedCount} optimized images.`
    );
    console.log("Original images have been preserved.");
  } catch (error) {
    console.error("Error during cleanup:", error);
    process.exit(1);
  }
}

cleanupImages();
