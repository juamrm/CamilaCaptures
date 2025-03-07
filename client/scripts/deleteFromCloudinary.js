import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import path from "path";

// Load environment variables
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET,
});

async function deleteAllImages() {
  try {
    // List all resources in the fotosbebes folder
    const result = await cloudinary.search
      .expression("folder:fotosbebes/*")
      .execute();

    console.log(`Found ${result.total_count} images to delete`);

    // Delete each image
    for (const resource of result.resources) {
      await cloudinary.uploader.destroy(resource.public_id);
      console.log(`Deleted: ${resource.public_id}`);
    }

    console.log("\nAll images deleted successfully!");
  } catch (error) {
    console.error("Error deleting images:", error);
    process.exit(1);
  }
}

deleteAllImages();
