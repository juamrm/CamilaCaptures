import { useState } from "react";
import { Link } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useSmoothScroll();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#hospitals", label: "Hospitals" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link href="/">
            <a className="text-xl md:text-2xl font-semibold tracking-tight">
              Camila Amorim
            </a>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href.replace("/#", ""))}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href.replace("/#", ""))}
                  className="text-sm font-medium hover:text-primary transition-colors px-2 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}