import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { PORTFOLIO_IMAGES } from "@/data/portfolioImages";

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {PORTFOLIO_IMAGES.map((image, index) => (
        <Card key={index} className="overflow-hidden">
          <AspectRatio ratio={4 / 3}>
            <img
              src={`${image.src}?w=400&auto=format,compress`}
              alt={image.alt}
              className="object-cover w-full h-full transition-transform hover:scale-110"
              loading="lazy"
              width="400"
              height="533"
              fetchPriority={index < 6 ? "high" : "low"}
              decoding="async"
            />
          </AspectRatio>
        </Card>
      ))}
    </div>
  );
}
