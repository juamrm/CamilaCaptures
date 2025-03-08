import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const [location, setLocation] = useLocation();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href.startsWith("/#")) {
      // Handle hash links with smooth scroll
      const sectionId = href.replace("/#", "");
      scrollToSection(sectionId);
    } else {
      // Handle regular routes
      setLocation(href);
    }

    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location === "/") {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on another page, navigate to home
      setLocation("/");
    }
  };

  const navLinks = [
    { href: "/#about", label: "Sobre" },
    { href: "/#services", label: "Serviços" },
    { href: "/#portfolio", label: "Portfólio" },
    { href: "/#contact", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="text-xl md:text-2xl font-light tracking-wider font-manrope hover:text-primary transition-colors duration-300"
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
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
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
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-inter font-medium tracking-wide relative group hover:text-primary transition-colors duration-300"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="py-6 border-t">
            <div className="flex flex-col gap-4 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-inter font-medium tracking-wide px-4 py-2 relative group hover:text-primary transition-colors duration-400"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
