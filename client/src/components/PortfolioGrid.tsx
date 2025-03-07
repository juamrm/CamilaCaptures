import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { PORTFOLIO_IMAGES } from "@/data/portfolioImages";
import { useState, useEffect } from "react";

// Cloudinary configuration
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;

export function PortfolioGrid() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [error, setError] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Log environment variables and configuration
    console.log("Cloudinary Configuration:", {
      cloudName,
      baseUrl,
      totalImages: PORTFOLIO_IMAGES.length,
      imageList: PORTFOLIO_IMAGES.map((img) => img.src),
    });

    // Validate Cloudinary configuration
    if (!cloudName) {
      setError("Cloudinary cloud name is not configured");
      console.error("Missing Cloudinary cloud name");
    }
  }, []);

  const handleImageLoad = (index: number) => {
    console.log(
      `Successfully loaded image ${index}:`,
      PORTFOLIO_IMAGES[index].src
    );
    setLoadedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  const handleImageError = (index: number, imageUrl: string) => {
    const image = PORTFOLIO_IMAGES[index];
    console.error(`Failed to load image ${index}:`, {
      src: image.src,
      imageUrl,
      cloudName,
      fullUrl: `${baseUrl}/v1/f_auto,q_auto,w_800,c_fill,g_auto/${image.src}`,
    });

    setFailedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });

    // Only set the error message if this is the first failed image
    if (failedImages.size === 0) {
      setError(`Failed to load images. Please check the console for details.`);
    }
  };

  const getImageUrl = (publicId: string) => {
    // Remove any file extensions and clean up the publicId
    const cleanPublicId = publicId.replace(/\.[^/.]+$/, "");

    // Construct the URL with optimal transformations
    return `${baseUrl}/v1/f_auto,q_auto,w_800,c_fill,g_auto/${cleanPublicId}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {error && (
        <div className="col-span-full text-red-500 p-4 bg-red-50 rounded-lg">
          Error: {error}
        </div>
      )}
      {PORTFOLIO_IMAGES.map((image, index) => {
        const imageUrl = getImageUrl(image.src);

        return (
          <Card key={index} className="overflow-hidden bg-white">
            <AspectRatio ratio={4 / 3}>
              <img
                src={imageUrl}
                alt={image.alt}
                className={`object-cover transition-all duration-500 ${
                  loadedImages.has(index)
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                } hover:scale-105`}
                loading={index < 4 ? "eager" : "lazy"}
                style={{
                  backgroundColor: "#f3f4f6",
                  filter: loadedImages.has(index) ? "none" : "blur(10px)",
                }}
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index, imageUrl)}
              />
            </AspectRatio>
          </Card>
        );
      })}
      {failedImages.size > 0 && (
        <div className="col-span-full text-yellow-600 p-4 bg-yellow-50 rounded-lg">
          {failedImages.size} image{failedImages.size > 1 ? "s" : ""} failed to
          load. Check the console for details.
        </div>
      )}
    </div>
  );
}
