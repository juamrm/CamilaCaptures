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
  priority?: boolean;
  objectPosition?: string;
  blurDataURL?: string;
  width?: number;
  height?: number;
  title?: string; // SEO title for the image
  description?: string; // Rich description for SEO
  keywords?: string[]; // Related keywords for the image
}

// Placeholder blur data URL (a very small, blurred image)
const defaultBlurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE6Oz5DRVlLT01RW2NhYGBtcW1+f5Hh4f/2wBDARUXFyAcIHxISHz4qIio+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  {
    src: img1,
    alt: "Fotografia de parto em ambiente hospitalar - Momento do nascimento em São Paulo",
    title: "Fotografia de Parto Hospitalar",
    description:
      "Registro profissional do momento do nascimento em ambiente hospitalar, capturando a emoção e os detalhes do primeiro contato entre mãe e bebê",
    keywords: [
      "parto hospitalar",
      "nascimento",
      "fotografia de parto",
      "São Paulo",
    ],
    priority: true,
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img2,
    alt: "Primeiro respiro do recém-nascido - Fotografia de parto humanizado em São Paulo",
    title: "Primeiro Respiro do Bebê",
    description:
      "Captura do momento único do primeiro respiro do bebê, documentando a transição para a vida extra-uterina com sensibilidade",
    keywords: [
      "primeiro respiro",
      "recém-nascido",
      "parto humanizado",
      "São Paulo",
    ],
    priority: true,
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img3,
    alt: "Sorriso do recém-nascido - Fotografia emotiva de parto em São Paulo",
    title: "Sorriso do Recém-nascido",
    description:
      "Registro delicado das primeiras expressões do bebê, capturando a pureza e alegria dos primeiros momentos de vida",
    keywords: ["sorriso bebê", "recém-nascido", "expressões", "São Paulo"],
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img4,
    alt: "Momento de fotografia de nascimento - Detalhes do bebê",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img5,
    alt: "Momento de fotografia de nascimento - Procedimento médico",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img6,
    alt: "Momento de fotografia de nascimento - Abraços do bebê",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img7,
    alt: "Momento de fotografia de nascimento - Sala de parto",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img8,
    alt: "Momento de fotografia de nascimento - Primeiro sorriso do bebê",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img9,
    alt: "Momento de fotografia de nascimento - Vínculo familiar",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img10,
    alt: "Momento de fotografia de nascimento - Processo de nascimento",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img11,
    alt: "Momento de fotografia de nascimento - Primeiros momentos do bebê",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img12,
    alt: "Momento de fotografia de nascimento - Detalhes do recém-nascido",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img13,
    alt: "Momento de fotografia de nascimento - Momento do parto",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img14,
    alt: "Momento de fotografia de nascimento - Processo de nascimento",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img15,
    alt: "Momento de fotografia de nascimento - Primeiro olhar do bebê",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img16,
    alt: "Momento de fotografia de nascimento - Procedimento médico",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img17,
    alt: "Momento de fotografia de nascimento - Primeiro toque do bebê",
    blurDataURL: defaultBlurDataURL,
  },
  {
    src: img18,
    alt: "Sala de parto humanizado - Fotografia profissional em hospital de São Paulo",
    title: "Ambiente de Parto Humanizado",
    description:
      "Documentação do ambiente acolhedor da sala de parto, mostrando a estrutura hospitalar preparada para um nascimento humanizado",
    keywords: ["sala de parto", "parto humanizado", "hospital", "São Paulo"],
    objectPosition: "center top",
    blurDataURL: defaultBlurDataURL,
  },
];

// Add JSON-LD structured data for image gallery
export const galleryStructuredData = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Galeria de Fotografia de Parto - Camila Amorim",
  description:
    "Galeria profissional de fotografias de parto e nascimento em São Paulo, capturando momentos únicos com sensibilidade e respeito",
  image: PORTFOLIO_IMAGES.map((img) => ({
    "@type": "ImageObject",
    contentUrl: img.src,
    name: img.title,
    description: img.description,
    keywords: img.keywords?.join(", "),
  })),
};
