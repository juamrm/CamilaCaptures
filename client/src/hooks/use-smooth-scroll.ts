import { useCallback } from 'react';
import { useIsMobile } from './use-mobile';

export function useSmoothScroll() {
  const isMobile = useIsMobile();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return { scrollToSection };
}