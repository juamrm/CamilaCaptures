import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import {AdvancedImage} from '@cloudinary/react';
import { PORTFOLIO_IMAGES } from "@/data/portfolioImages";
import { useState, useEffect } from "react";
// import { AdvancedImage } from "@cloudinary/react";
import { getCloudinaryImage } from "@/utils/cloudinary";

interface ImageState {
  isLoading: boolean;
  error?: string;
  url?: string;
}

export function PortfolioGrid() {
  const [imageStates, setImageStates] = useState<Map<number, ImageState>>(
    new Map()
  );

  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    // Log the cloud name and first few image URLs for debugging
    console.log("Rendering images with following data:");
    const result = PORTFOLIO_IMAGES.slice(0, 3).map((image, index) => {
      const cldImage = getCloudinaryImage(image.src);
      console.log(`Image ${index} URL:`, cldImage.toURL());
      return cldImage;
    });
    setImages(result);
  }, []);

  // const handleImageLoad = (index: number) => {
  //   console.log(`Image ${index} loaded successfully`);
  //   setImageStates((prev) => {
  //     const newStates = new Map(prev);
  //     newStates.set(index, { isLoading: false });
  //     return newStates;
  //   });
  // };

  // const handleImageError = (index: number, error: any) => {
  //   console.error(`Image ${index} failed to load:`, error);
  //   setImageStates((prev) => {
  //     const newStates = new Map(prev);
  //     const cldImage = getCloudinaryImage(PORTFOLIO_IMAGES[index].src);
  //     newStates.set(index, {
  //       isLoading: false,
  //       error: "Failed to load image",
  //       url: cldImage.toURL(),
  //     });
  //     return newStates;
  //   });
  // };

  const failedCount = Array.from(imageStates.values()).filter(
    (state) => state.error
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      {images.map(src => (
        <AdvancedImage cldImg={src} />
      ))}
      {/* {PORTFOLIO_IMAGES.map((image, index) => {
        const state = imageStates.get(index) || { isLoading: true };
        const cldImage = getCloudinaryImage(image.src);

        return (
          <Card key={index} className="overflow-hidden bg-white relative group">
            <AspectRatio ratio={4 / 3}>
              <AdvancedImage
                cldImg={cldImage}
                onLoad={() => handleImageLoad(index)}
                onError={(e: Error) => handleImageError(index, e)}
                alt={image.alt}
                className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                  !state.isLoading ? "opacity-100" : "opacity-0"
                }`}
              />

              
              {state.error && (
                <div className="absolute inset-0 bg-red-50/90 flex flex-col items-center justify-center p-4 text-center text-red-600">
                  <p>Failed to load image</p>
                  {state.url && (
                    <p className="text-xs mt-2 break-all">URL: {state.url}</p>
                  )}
                </div>
              )}
            </AspectRatio>
          </Card>
        );
      })} */}
    </div>
  );
}
