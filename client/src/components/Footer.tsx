import { Link } from "wouter";
import { SiFacebook, SiInstagram } from "react-icons/si";

export function Footer() {
  return (
    <footer className="relative bg-muted/30 border-t overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 725.12 580.096"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <rect
            className="bg"
            id="bg"
            x="0"
            y="0"
            width="725.12"
            height="580.096"
            fill="#ffffff"
          />
          <g transform="rotate(143 362.56 290.048)">
            <path
              d="M -362.56 410.10 S -191.28 278.10 0.00 410.10 94.56 302.10 362.56 410.10 533.84 261.10 725.12 410.10 858.68 323.10 1087.68 410.10 h 110 V 1180.096 H -362.56 Z"
              fill="#FFFCB0"
            />
            <path
              d="M -362.56 195.00 S -191.28 81.00 0.00 195.00 9.56 85.00 362.56 195.00 533.84 107.50 725.12 195.00 896.40 51.00 1087.68 195.00 h 110 V -600 H -362.56 Z"
              fill="#F7FDD8"
            />
          </g>
        </svg>
      </div>
      <div className="container mx-auto px-4 py-8 relative">
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
