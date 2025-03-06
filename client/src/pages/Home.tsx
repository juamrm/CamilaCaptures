import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ContactForm } from "@/components/ContactForm";
import { HospitalLogos } from "@/components/HospitalLogos";
import { Services } from "@/components/Services";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Helmet } from "react-helmet";
import camilaProfile from "@/assets/images/camilaprofile.webp";
import { SiWhatsapp } from "react-icons/si";
import { ScrollButton } from "@/components/ScrollButton";

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
      <section className="pt-12 md:pt-20 pb-8 md:pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {/* Profile Image */}
            <div className="w-full md:w-1/3 max-w-[200px] md:max-w-[220px]">
              <AspectRatio ratio={1}>
                <img
                  src={camilaProfile}
                  alt="Camila Amorim"
                  className="rounded-full object-cover w-full h-full shadow-md"
                  loading="eager"
                  fetchPriority="high"
                  width="220"
                  height="220"
                  decoding="async"
                />
              </AspectRatio>
            </div>
            {/* Hero Text */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Capturando os primeiros momentos
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
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

      {/* Services Section */}
      <Services />

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
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Contact Info and Image */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="w-full max-w-sm">
                <img
                  src="/baby-foot-bw.jpg"
                  alt="Newborn baby foot"
                  className="w-full h-auto grayscale"
                />
              </div>
              <div className="text-center md:text-left space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Entre em contato comigo!
                </h2>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/5511998624083"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                    <span>11 99862-4083</span>
                  </a>
                  <a
                    href="mailto:ola@camilansamorim.com.br"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 6-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 6" />
                    </svg>
                    <span>ola@camilansamorim.com.br</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Right side - Contact Form */}
            <div className="w-full max-w-md mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollButton />
    </div>
  );
}
