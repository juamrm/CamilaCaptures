import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ContactForm } from "@/components/ContactForm";
import { HospitalLogos } from "@/components/HospitalLogos";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Helmet } from "react-helmet";
import camilaProfile from "@/assets/images/camilaprofile.webp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Home - Camila Amorim</title>
        <meta
          name="description"
          content="Bem-vindo(a) ao portfolio de Camila Amorim. Capturando os primeiros momentos da vida com sensibilidade e autenticidade."
        />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="w-full md:w-1/3 max-w-sm">
              <AspectRatio ratio={1}>
                <img
                  src={camilaProfile}
                  alt="Camila Amorim"
                  className="rounded-full object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            {/* Hero Text */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Capturando os primeiros momentos
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                Fotografias de parto que contam sua história única com
                <span className="font-bold" aria-label="sensibilidade">
                  {" "}
                  sensibilidade
                </span>{" "}
                e<span className="font-bold"> autenticidade</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <Card className="max-w-3xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-[5/9] relative">
                <img
                  src={camilaProfile}
                  alt="Camila working"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  Sobre Mim
                </h2>
                <div className="prose dark:prose-invert">
                  <p>
                    Sou Camila, fotógrafa especializada em registrar o momento
                    mais especial da sua vida: o nascimento do seu bebê. Com um
                    olhar sensível e técnica apurada, transformo emoções em
                    memórias eternas através das minhas lentes.
                  </p>
                  <p>
                    Com três anos de experiência e formação pelo Espaço da
                    Fotografia e Senac, dedico-me a capturar a essência única de
                    cada família em seus momentos mais preciosos.
                  </p>
                  <p>
                    Além dos partos e nascimentos, atuo também com fotografia de
                    ensaios, retratos e eventos, sempre buscando um olhar único
                    e atento aos detalhes que fazem a diferença.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Hospital Accreditation Section */}
      <section id="hospitals" className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Hospitais Acreditados
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Estou credenciada para trabalhar nos hospitais de São Paulo,
            garantindo que estou presente para seu momento especial.
          </p>
          <HospitalLogos />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 md:py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Portfolio
          </h2>
          <PortfolioGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Contato
          </h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
