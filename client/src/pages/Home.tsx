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
import camilaAbout from "@/assets/images/camilaprofile2.webp";
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
      <section className="pt-24 md:pt-28 pb-8 md:pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80 pointer-events-none" />
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-8">
            {/* Profile Image */}
            <div className="w-full md:w-1/3 max-w-[160px] md:max-w-[200px] relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transform scale-110" />
              <AspectRatio ratio={1}>
                <img
                  src={camilaProfile}
                  alt="Camila Amorim"
                  className="rounded-full object-cover w-full h-full shadow-xl relative z-10"
                  style={{ objectPosition: "center 30%" }}
                  loading="eager"
                  fetchPriority="high"
                  width="200"
                  height="200"
                  decoding="async"
                />
              </AspectRatio>
            </div>
            {/* Hero Text */}
            <div className="w-full md:w-2/3 text-center md:text-left space-y-3">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Capturando os primeiros momentos
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto md:mx-0">
                Fotografias de partos que contam histórias únicas com
                <span
                  className="font-bold text-primary"
                  aria-label="sensibilidade"
                >
                  {" "}
                  sensibilidade
                </span>{" "}
                e<span className="font-bold text-primary"> autenticidade</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-3">
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
                >
                  Ver Portfolio
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors text-sm"
                >
                  Entre em Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <Card className="max-w-5xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              <div className="relative order-2 h-full flex items-center">
                <div className="absolute inset-0 bg-primary/5 rounded-lg" />
                <div className="relative w-full">
                  <AspectRatio ratio={3 / 4}>
                    <img
                      src={camilaAbout}
                      alt="Camila with her camera"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      style={{ objectPosition: "center center" }}
                    />
                  </AspectRatio>
                </div>
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col justify-center order-1 space-y-4">
                <h2 className="text-xl md:text-2xl font-bold">Sobre Mim</h2>
                <div className="prose dark:prose-invert prose-sm md:prose-base max-w-none space-y-3">
                  <p className="text-muted-foreground">
                    Sou Camila, fotógrafa especializada em registrar o
                    nascimento do seu bebê com sensibilidade e técnica,
                    transformando emoções em memórias inesquecíveis.
                  </p>
                  <p className="text-muted-foreground">
                    Com três anos de experiência e formação pelo Espaço da
                    Fotografia e Senac, capturo momentos únicos com olhar atento
                    e artístico.
                  </p>
                  <p className="text-muted-foreground">
                    Sou credenciada para atuar em oito hospitais de São Paulo,
                    incluindo Grupo Santa Joana, Pro Matre, Santa Maria, São
                    Luiz Anália Franco, Star e outros, garantindo minha presença
                    no seu momento especial.
                  </p>
                  <p className="text-muted-foreground">
                    Além dos partos, realizo ensaios de modelos, eventos e
                    retratos, sempre buscando autenticidade e emoção em cada
                    imagem.
                  </p>
                  <p className="text-muted-foreground">
                    Se você deseja fotos cheias de emoção, sensibilidade e
                    autenticidade, será um prazer fazer parte dessa história!
                    ✨📷
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
