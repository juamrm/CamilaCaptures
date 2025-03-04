import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

const PORTFOLIO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1566004100631-35d015d6a491",
    alt: "Birth photography moment 1"
  },
  {
    src: "https://images.unsplash.com/photo-1609220136736-443140cffec6",
    alt: "Birth photography moment 2"
  },
  {
    src: "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378",
    alt: "Birth photography moment 3"
  },
  {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba",
    alt: "Birth photography moment 4"
  },
  {
    src: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01",
    alt: "Birth photography moment 5"
  },
  {
    src: "https://images.unsplash.com/photo-1519670851831-933dbf00b6ef",
    alt: "Birth photography moment 6"
  }
];

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {PORTFOLIO_IMAGES.map((image, index) => (
        <Card key={index} className="overflow-hidden">
          <AspectRatio ratio={3/4}>
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full transition-transform hover:scale-105"
              loading="lazy"
            />
          </AspectRatio>
        </Card>
      ))}
    </div>
  );
}
