import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET,
});

const imagesDir = path.join(process.cwd(), "public", "images", "fotosbebes");

function sanitizePublicId(filename) {
  // Remove file extension
  let publicId = filename.replace(/\.[^/.]+$/, "");

  // Handle special cases with "2" in the filename
  if (publicId.includes(" 2")) {
    publicId = publicId.replace(" 2", "_2");
  }

  // Replace spaces and commas with underscores
  publicId = publicId
    .replace(/[\s,]+/g, "_")
    .replace(/[^a-zA-Z0-9_-]/g, "")
    .replace(/_+/g, "_") // Replace multiple underscores with single underscore
    .replace(/^_|_$/g, "") // Remove leading/trailing underscores
    .replace(/_2$/, "2"); // Remove underscore before "2" at the end

  console.log(`Original filename: ${filename}`);
  console.log(`Sanitized publicId: ${publicId}`);
  return publicId;
}

async function uploadImages() {
  try {
    const files = fs.readdirSync(imagesDir);
    const imageFiles = files.filter(
      (file) =>
        file.endsWith(".jpg") && !file.includes("-") && !file.includes("temp")
    );

    console.log(`Found ${imageFiles.length} images to upload`);

    for (const file of imageFiles) {
      const filePath = path.join(imagesDir, file);
      const publicId = `fotosbebes/${sanitizePublicId(file)}`;

      console.log(`\nUploading ${file}...`);
      console.log(`File path: ${filePath}`);
      console.log(`Public ID: ${publicId}`);

      const result = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        folder: "fotosbebes",
        resource_type: "image",
        overwrite: true,
      });

      console.log(`Successfully uploaded ${file} to Cloudinary`);
      console.log(`Public URL: ${result.secure_url}`);
    }

    console.log("\nAll images uploaded successfully!");
  } catch (error) {
    console.error("Error uploading images:", error);
    process.exit(1);
  }
}

uploadImages();
