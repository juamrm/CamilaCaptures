export interface PortfolioImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  {
    src: "/images/portfolio/image1.jpg", // Path relative to public folder
    alt: "Project 1",
    title: "Project 1",
    description: "Description for Project 1",
  },
  {
    src: "/images/portfolio/image2.jpg",
    alt: "Project 2",
    title: "Project 2",
    description: "Description for Project 2",
  },
  // ... more images
];
