import img1 from "@/assets/images/webp/2024_14_24_47_20250305_134228_0000.webp";
import img2 from "@/assets/images/webp/2024_12_53_51_20250305_134703_0000.webp";
import img3 from "@/assets/images/webp/2024_12_38_09_20250305_130054_0000.webp";
import img4 from "@/assets/images/webp/2024_12_18_01_20250305_134723_0000.webp";
import img5 from "@/assets/images/webp/2024_10_22_53_20250305_125149_0000.webp";
import img6 from "@/assets/images/webp/_MG_7479_20250305_125949_0000.webp";
import img7 from "@/assets/images/webp/IMG_9901.webp";
import img8 from "@/assets/images/webp/IMG_8688.webp";
import img9 from "@/assets/images/webp/IMG_8463.webp";
import img10 from "@/assets/images/webp/IMG_7792.webp";
import img11 from "@/assets/images/webp/IMG_4429_20250305_125437_0000ok.webp";
import img12 from "@/assets/images/webp/IMG_3904.webp";
import img13 from "@/assets/images/webp/2024_20_54_26_20250305_125940_0000.webp";
import img14 from "@/assets/images/webp/2024_20_49_19_20250305_130010_0000.webp";
import img15 from "@/assets/images/webp/2024_18_38_29_20250305_125832_0000.webp";
import img16 from "@/assets/images/webp/2024_18_28_19_20250305_134254_0000.webp";
import img17 from "@/assets/images/webp/2024_14_49_31_20250305_134348_0000.webp";
import img18 from "@/assets/images/webp/2024_14_26_46_20250305_134217_0000.webp";

export interface PortfolioImage {
  src: string;
  alt: string;
  priority?: boolean; // For loading priority
  objectPosition?: string; // Custom positioning for the image
  blurDataURL?: string; // Base64 tiny placeholder image
  width?: number;
  height?: number;
}

// Placeholder blur data URL (a very small, blurred image)
const defaultBlurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE6Oz5DRVlLT01RW2NhYGBtcW1+f5Hh4f/2wBDARUXFyAcIHxISHz4qIio+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  {
    src: img1,
    alt: "Birth photography moment - Medical setting",
    priority: true,
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img2,
    alt: "Birth photography moment - First breath",
    priority: true,
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img3,
    alt: "Birth photography moment - Baby smile",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img4,
    alt: "Birth photography moment - Baby details",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img5,
    alt: "Birth photography moment - Medical procedure",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img6,
    alt: "Birth photography moment - Baby cuddles",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img7,
    alt: "Birth photography moment - Delivery room",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img8,
    alt: "Birth photography moment - Baby's first smile",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img9,
    alt: "Birth photography moment - Family bonding",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img10,
    alt: "Birth photography moment - Birth process",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img11,
    alt: "Birth photography moment - Baby's first moments",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img12,
    alt: "Birth photography moment - Newborn details",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img13,
    alt: "Birth photography moment - Delivery moment",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img14,
    alt: "Birth photography moment - Birth process",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img15,
    alt: "Birth photography moment - Baby's first look",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img16,
    alt: "Birth photography moment - Medical procedure",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img17,
    alt: "Birth photography moment - Baby's first touch",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img18,
    alt: "Birth photography moment - Delivery room",
    objectPosition: "center top",
    blurDataURL: defaultBlurDataURL,
  },
];
