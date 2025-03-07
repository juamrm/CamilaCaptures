import { useState } from "react";
import { Link } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#services", label: "Serviços" },
    { href: "/#about", label: "Sobre Mim" },
    { href: "/#hospitals", label: "Hospitais" },
    { href: "/#contact", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl md:text-2xl font-semibold tracking-tight"
          >
            Camila Amorim
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="hover:bg-muted/50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href.replace("/#", ""))}
                className="text-sm font-medium relative group hover:text-primary transition-colors"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <nav className="py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) =>
                    handleNavClick(e, link.href.replace("/#", ""))
                  }
                  className="text-sm font-medium px-4 py-2 relative group hover:text-primary transition-colors"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
