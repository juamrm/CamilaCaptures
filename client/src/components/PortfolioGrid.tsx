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
  },
  {
    src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
    alt: "Birth photography moment 7"
  },
  {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba",
    alt: "Birth photography moment 8"
  },
  {
    src: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b",
    alt: "Birth photography moment 9"
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
    alt: "Birth photography moment 10"
  },
  {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba",
    alt: "Birth photography moment 11"
  },
  {
    src: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f",
    alt: "Birth photography moment 12"
  },
  {
    src: "https://images.unsplash.com/photo-1519669417670-68775a50919c",
    alt: "Birth photography moment 13"
  },
  {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba",
    alt: "Birth photography moment 14"
  },
  {
    src: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c",
    alt: "Birth photography moment 15"
  },
  {
    src: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    alt: "Birth photography moment 16"
  },
  {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba",
    alt: "Birth photography moment 17"
  },
  {
    src: "https://images.unsplash.com/photo-1519750783869-8c705ca3c5cc",
    alt: "Birth photography moment 18"
  }
];

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {PORTFOLIO_IMAGES.map((image, index) => (
        <Card key={index} className="overflow-hidden">
          <AspectRatio ratio={3/4}>
            <img
              src={`${image.src}?w=400&auto=format,compress`}
              alt={image.alt}
              className="object-cover w-full h-full transition-transform hover:scale-105"
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