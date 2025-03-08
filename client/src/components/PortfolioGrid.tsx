import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { PORTFOLIO_IMAGES } from "@/data/portfolioImages";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PortfolioGrid() {
  const [imageStates, setImageStates] = useState<
    Map<number, { isLoading: boolean; error?: string; isInView?: boolean }>
  >(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Initialize loading states and intersection observer
  useEffect(() => {
    const initialStates = new Map();
    PORTFOLIO_IMAGES.forEach((_, index) => {
      initialStates.set(index, { isLoading: true, isInView: false });
    });
    setImageStates(initialStates);

    // Setup intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (!isNaN(index)) {
            setImageStates((prev) => {
              const newStates = new Map(prev);
              const currentState = newStates.get(index) || { isLoading: true };
              newStates.set(index, {
                ...currentState,
                isInView: entry.isIntersecting,
              });
              return newStates;
            });
          }
        });
      },
      {
        rootMargin: "50px 0px",
        threshold: 0.1,
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Observe new image elements
  const setImageRef = useCallback(
    (node: HTMLDivElement | null, index: number) => {
      if (node) {
        imageRefs.current.set(index, node);
        if (observerRef.current) {
          observerRef.current.observe(node);
        }
      }
    },
    []
  );

  const handleImageLoad = useCallback((index: number) => {
    setImageStates((prev) => {
      const newStates = new Map(prev);
      const currentState = newStates.get(index) || { isInView: false };
      newStates.set(index, { ...currentState, isLoading: false });
      return newStates;
    });
  }, []);

  const handleImageError = useCallback((index: number, error: any) => {
    console.error(`Image ${index} failed to load:`, error);
    setImageStates((prev) => {
      const newStates = new Map(prev);
      const currentState = newStates.get(index) || { isInView: false };
      newStates.set(index, {
        ...currentState,
        isLoading: false,
        error: "Failed to load image",
      });
      return newStates;
    });
  }, []);

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      layout
    >
      <AnimatePresence mode="popLayout">
        {PORTFOLIO_IMAGES.map((image, index) => {
          const state = imageStates.get(index) || {
            isLoading: true,
            isInView: false,
          };

          return (
            <motion.div
              key={image.src}
              ref={(node) => setImageRef(node as HTMLDivElement, index)}
              data-index={index}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden bg-black relative group rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                <AspectRatio ratio={4 / 3} className="bg-black">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-200 z-10" />

                  {/* Blur Placeholder */}
                  {state.isLoading && image.blurDataURL && (
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
                      style={{ backgroundImage: `url(${image.blurDataURL})` }}
                    />
                  )}

                  {/* Main Image */}
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    loading={image.priority ? "eager" : "lazy"}
                    decoding="async"
                    onLoad={() => handleImageLoad(index)}
                    onError={(e) => handleImageError(index, e)}
                    className={`
                      object-cover w-full h-full
                      transition-all duration-300
                      filter grayscale opacity-75
                      group-hover:grayscale-0 group-hover:opacity-100
                      group-hover:scale-[1.02]
                      ${state.isLoading ? "opacity-0" : "opacity-75"}
                    `}
                    style={{
                      objectPosition: image.objectPosition || "center center",
                      willChange: "transform, filter, opacity",
                    }}
                  />

                  {/* Loading skeleton - only show if no blur placeholder */}
                  {state.isLoading && !image.blurDataURL && !state.error && (
                    <div className="absolute inset-0 bg-gray-900 animate-pulse" />
                  )}

                  {/* Error state */}
                  {state.error && (
                    <div className="absolute inset-0 bg-red-50/90 flex flex-col items-center justify-center p-4 text-center text-red-600 z-20">
                      <p>Failed to load image</p>
                    </div>
                  )}
                </AspectRatio>
              </Card>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
