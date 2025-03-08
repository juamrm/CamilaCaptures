import sharp from "sharp";
import path from "path";

const outputPath = path.join(process.cwd(), "public", "placeholder.webp");

// Create a 800x600 gray placeholder with text
sharp({
  create: {
    width: 800,
    height: 600,
    channels: 4,
    background: { r: 200, g: 200, b: 200, alpha: 1 },
  },
})
  .composite([
    {
      input: {
        text: {
          text: "Image Placeholder",
          font: "sans-serif",
          fontSize: 48,
          rgba: true,
        },
      },
    },
  ])
  .webp({
    quality: 80,
    effort: 6,
  })
  .toFile(outputPath)
  .then(() => console.log("Created placeholder image"))
  .catch((err) => console.error("Error creating placeholder:", err));
