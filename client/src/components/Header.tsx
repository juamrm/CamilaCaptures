import { Link } from "wouter";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-semibold tracking-tight">
            Camila Amorim
          </a>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/#portfolio">
            <a className="text-sm font-medium hover:text-primary">Portfolio</a>
          </Link>
          <Link href="/#about">
            <a className="text-sm font-medium hover:text-primary">About</a>
          </Link>
          <Link href="/#contact">
            <a className="text-sm font-medium hover:text-primary">Contact</a>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
