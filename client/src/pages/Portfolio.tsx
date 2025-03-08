import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Helmet } from "react-helmet";

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Portfolio - Camila Amorim</title>
        <meta
          name="description"
          content="Explore o portfolio de Camila Amorim, mostrando a beleza e emoção da fotografia de parto."
        />
      </Helmet>
      <h1 className="text-4xl font-bold mb-8 font-manrope">Portfolio</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Veja alguns dos meus trabalhos. Ficarei feliz em compartilhar mais
        imagens com você.
      </p>
      <PortfolioGrid />
    </div>
  );
}
