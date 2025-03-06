import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { PORTFOLIO_IMAGES } from "@/data/portfolioImages";
import { useState } from "react";

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {PORTFOLIO_IMAGES.map((image, index) => (
        <Card key={index} className="overflow-hidden bg-white">
          <AspectRatio ratio={4 / 3}>
            <picture>
              {/* WebP format for modern browsers */}
              <source
                type="image/webp"
                media="(min-width: 1024px)"
                srcSet={`${image.src.replace(".jpg", ".webp")}?w=800&auto=format,compress&q=80 800w, ${image.src.replace(".jpg", ".webp")}?w=1200&auto=format,compress&q=80 1200w`}
              />
              <source
                type="image/webp"
                media="(min-width: 768px)"
                srcSet={`${image.src.replace(".jpg", ".webp")}?w=600&auto=format,compress&q=80 600w, ${image.src.replace(".jpg", ".webp")}?w=800&auto=format,compress&q=80 800w`}
              />
              <source
                type="image/webp"
                srcSet={`${image.src.replace(".jpg", ".webp")}?w=400&auto=format,compress&q=80`}
              />
              {/* Fallback to JPEG for older browsers */}
              <source
                media="(min-width: 1024px)"
                srcSet={`${image.src}?w=800&auto=format,compress&q=80 800w, ${image.src}?w=1200&auto=format,compress&q=80 1200w`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${image.src}?w=600&auto=format,compress&q=80 600w, ${image.src}?w=800&auto=format,compress&q=80 800w`}
              />
              <img
                src={`${image.src}?w=400&auto=format,compress&q=80`}
                alt={image.alt}
                className="object-cover w-full h-full transition-all duration-300 opacity-75 hover:opacity-100 hover:scale-110"
                loading={index < 4 ? "eager" : "lazy"}
                width="400"
                height="300"
                fetchPriority={index < 4 ? "high" : "low"}
                decoding="async"
                style={{
                  backgroundColor: "#f3f4f6", // Light gray placeholder
                  filter: "blur(10px)",
                  transform: "scale(1.1)",
                }}
                onLoad={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.filter = "none";
                  img.style.transform = "scale(1)";
                }}
              />
            </picture>
          </AspectRatio>
        </Card>
      ))}
    </div>
  );
}
