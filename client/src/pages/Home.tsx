import { Header } from "@/components/Header";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Capturing Life's First Moments
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Birth photography that tells your unique story with elegance and authenticity
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
          <PortfolioGrid />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="prose dark:prose-invert">
                <p>
                  Hello! I'm Camila Amorim, a birth photographer based in São Paulo, Brazil.
                  With over a decade of experience, I specialize in capturing the raw emotion
                  and beauty of childbirth.
                </p>
                <p>
                  My approach is unobtrusive yet intimate, ensuring that every precious
                  moment is preserved while respecting the sacred space of birth. I believe
                  that these first moments are invaluable memories that deserve to be
                  captured with artistry and sensitivity.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-md">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
