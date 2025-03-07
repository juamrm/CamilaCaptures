import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { PORTFOLIO_IMAGES } from "@/data/portfolioImages";
import { useState, useEffect } from "react";
import {
  getCloudinaryUrl,
  getImagePlaceholder,
  preloadImages,
} from "@/utils/cloudinary";

interface ImageState {
  isLoading: boolean;
  error?: string;
  placeholder?: string;
}

export function PortfolioGrid() {
  const [imageStates, setImageStates] = useState<Map<number, ImageState>>(
    new Map()
  );
  const [hasPreloaded, setHasPreloaded] = useState(false);

  // Preload first 4 images for better performance
  useEffect(() => {
    if (!hasPreloaded) {
      const firstFourImages = PORTFOLIO_IMAGES.slice(0, 4).map(
        (img) => img.src
      );
      preloadImages(firstFourImages)
        .then(() => setHasPreloaded(true))
        .catch(console.error);
    }
  }, [hasPreloaded]);

  // Initialize placeholders
  useEffect(() => {
    PORTFOLIO_IMAGES.forEach((image, index) => {
      try {
        const placeholder = getImagePlaceholder(image.src);
        setImageStates((prev) =>
          new Map(prev).set(index, {
            isLoading: true,
            placeholder,
          })
        );
      } catch (error) {
        console.error(
          `Failed to generate placeholder for image ${index}:`,
          error
        );
      }
    });
  }, []);

  const handleImageLoad = (index: number) => {
    setImageStates((prev) => {
      const newStates = new Map(prev);
      const currentState = newStates.get(index) || { isLoading: false };
      newStates.set(index, { ...currentState, isLoading: false });
      return newStates;
    });
  };

  const handleImageError = (index: number) => {
    setImageStates((prev) => {
      const newStates = new Map(prev);
      const currentState = newStates.get(index) || { isLoading: false };
      newStates.set(index, {
        ...currentState,
        isLoading: false,
        error: "Failed to load image",
      });
      return newStates;
    });
  };

  const failedCount = Array.from(imageStates.values()).filter(
    (state) => state.error
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {failedCount > 0 && (
        <div className="col-span-full text-yellow-600 p-4 bg-yellow-50 rounded-lg">
          {failedCount} image{failedCount > 1 ? "s" : ""} failed to load.
        </div>
      )}
      {PORTFOLIO_IMAGES.map((image, index) => {
        const state = imageStates.get(index) || { isLoading: true };
        const imageUrl = getCloudinaryUrl(
          image.src,
          index < 4 ? "default" : "thumbnail"
        );

        return (
          <Card key={index} className="overflow-hidden bg-white relative group">
            <AspectRatio ratio={4 / 3}>
              {/* Placeholder image */}
              {state.placeholder && (
                <img
                  src={state.placeholder}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                  style={{
                    opacity: state.isLoading ? 1 : 0,
                  }}
                />
              )}

              {/* Main image */}
              <img
                src={imageUrl}
                alt={image.alt}
                className={`object-cover transition-all duration-500 ${
                  !state.isLoading ? "opacity-100" : "opacity-0"
                } group-hover:scale-105`}
                loading={index < 4 ? "eager" : "lazy"}
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
              />

              {/* Error overlay */}
              {state.error && (
                <div className="absolute inset-0 bg-red-50/90 flex items-center justify-center p-4 text-center text-red-600">
                  <p>Failed to load image</p>
                </div>
              )}
            </AspectRatio>
          </Card>
        );
      })}
    </div>
  );
}
