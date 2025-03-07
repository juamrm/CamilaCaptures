import { PortfolioGrid } from "@/components/PortfolioGrid";
import { CloudinaryTest } from "@/components/CloudinaryTest";
import { Helmet } from "react-helmet";

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Portfolio - Camila Amorim</title>
        <meta
          name="description"
          content="Explore the portfolio of Camila Amorim, showcasing the beauty and emotion of birth photography."
        />
      </Helmet>
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      <CloudinaryTest />
      <PortfolioGrid />
    </div>
  );
}
