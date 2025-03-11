declare module "react-scroll-parallax" {
  import { ReactNode } from "react";

  interface ParallaxProps {
    children: ReactNode;
    translateY?: [number, number];
    translateX?: [number, number];
    scale?: [number, number];
    className?: string;
  }

  export const Parallax: React.FC<ParallaxProps>;
  export const ParallaxProvider: React.FC<{ children: ReactNode }>;
}
