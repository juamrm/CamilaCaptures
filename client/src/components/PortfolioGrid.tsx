import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { PORTFOLIO_IMAGES } from "@/data/portfolioImages";
import { useState, useEffect, useCallback } from "react";

interface ImageState {
  isLoading: boolean;
  error?: string;
  loaded?: boolean;
}

export function PortfolioGrid() {
  const [imageStates, setImageStates] = useState<Map<number, ImageState>>(
    new Map()
  );
  const [isVisible, setIsVisible] = useState(false);

  // Initialize loading states
  useEffect(() => {
    const initialStates = new Map();
    PORTFOLIO_IMAGES.forEach((_, index) => {
      initialStates.set(index, { isLoading: true });
    });
    setImageStates(initialStates);
    setIsVisible(true);
  }, []);

  // Preload images
  useEffect(() => {
    PORTFOLIO_IMAGES.forEach((image, index) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => handleImageLoad(index);
      img.onerror = (e) => handleImageError(index, e);
    });
  }, []);

  const handleImageLoad = useCallback((index: number) => {
    setImageStates((prev) => {
      const newStates = new Map(prev);
      newStates.set(index, { isLoading: false, loaded: true });
      return newStates;
    });
  }, []);

  const handleImageError = useCallback((index: number, error: any) => {
    console.error(`Image ${index} failed to load:`, error);
    setImageStates((prev) => {
      const newStates = new Map(prev);
      newStates.set(index, {
        isLoading: false,
        error: "Failed to load image",
      });
      return newStates;
    });
  }, []);

  const failedCount = Array.from(imageStates.values()).filter(
    (state) => state.error
  ).length;

  if (!isVisible) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {failedCount > 0 && (
        <div className="col-span-full text-yellow-600 p-4 bg-yellow-50 rounded-lg">
          <p>
            {failedCount} image{failedCount > 1 ? "s" : ""} failed to load.
          </p>
          <p className="text-sm mt-2">
            Check console for detailed error information.
          </p>
        </div>
      )}
      {PORTFOLIO_IMAGES.map((image, index) => {
        const state = imageStates.get(index) || { isLoading: true };

        return (
          <Card
            key={index}
            className="overflow-hidden bg-black relative group rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
          >
            <AspectRatio ratio={4 / 3} className="bg-black">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-200 z-10" />
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className={`
                  object-cover w-full h-full
                  transition-all duration-200
                  filter grayscale opacity-75
                  group-hover:grayscale-0 group-hover:opacity-100
                  group-hover:scale-[1.02]
                  ${state.loaded ? "opacity-75" : "opacity-0"}
                `}
                style={{
                  objectPosition: "center center",
                  willChange: "transform, filter, opacity",
                }}
              />

              {/* Error overlay */}
              {state.error && (
                <div className="absolute inset-0 bg-red-50/90 flex flex-col items-center justify-center p-4 text-center text-red-600 z-20">
                  <p>Failed to load image</p>
                </div>
              )}

              {/* Loading skeleton */}
              {!state.loaded && !state.error && (
                <div className="absolute inset-0 bg-gray-900 animate-pulse" />
              )}
            </AspectRatio>
          </Card>
        );
      })}
    </div>
  );
}
