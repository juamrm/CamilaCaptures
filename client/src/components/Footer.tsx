import { Link } from "wouter";
import { SiFacebook, SiInstagram } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/camilansamorim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="w-6 h-6" />
            </a>
          </div>
          <div className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Camila Amorim Fotografia. Todos os
            direitos reservados.
          </div>
          <div className="text-xs text-muted-foreground font-light text-center">
            Desenvolvido com ❤️ por{" "}
            <a
              href="https://www.linkedin.com/in/julianaamrm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Juliana Amorim
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
