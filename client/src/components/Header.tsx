import { Link } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function Header() {
  const scrollToSection = useSmoothScroll();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-semibold tracking-tight">
            Camila Amorim
          </a>
        </Link>
        <nav className="flex items-center gap-6">
          <a
            href="/#portfolio"
            onClick={(e) => handleNavClick(e, 'portfolio')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Portfolio
          </a>
          <a
            href="/#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}