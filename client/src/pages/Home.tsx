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
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-background flex flex-col">
        <Helmet>
          <title>Fotografias de Parto - Camila Amorim</title>
          <meta
            name="description"
            content="Bem-vindo(a) ao portfolio de Camila Amorim. Capturando os primeiros momentos da vida com sensibilidade e autenticidade."
          />
        </Helmet>
        <Header />

        {/* Hero Section */}
        <section
          className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 relative overflow-hidden"
          aria-labelledby="hero-title"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80 pointer-events-none" />
          <div className="container mx-auto relative">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Profile Image with Enhanced Parallax */}
              <Parallax
                translateY={[-30, 30]}
                scale={[0.95, 1.05]}
                className="w-full md:w-1/3 max-w-[160px] md:max-w-[200px] relative focus-within:outline-none"
              >
                <div
                  className="absolute inset-0 bg-primary/10 rounded-full blur-md transform scale-110"
                  tabIndex={0}
                  role="img"
                  aria-label="Foto de perfil de Camila Amorim"
                />
                <AspectRatio ratio={1}>
                  <img
                    src={camilaProfile}
                    alt="Camila Amorim"
                    className="rounded-full object-cover w-full h-full shadow-xl relative z-10 transition-transform duration-300 hover:scale-105"
                    style={{ objectPosition: "center 30%" }}
                    loading="eager"
                    data-fetchpriority="high"
                    width="200"
                    height="200"
                    decoding="async"
                  />
                </AspectRatio>
              </Parallax>

              {/* Hero Text with Enhanced Parallax */}
              <Parallax
                translateY={[-20, 20]}
                translateX={[-10, 10]}
                className="w-full md:w-2/3 text-center md:text-left space-y-4"
              >
                <Parallax translateY={[-10, 10]} className="space-y-2">
                  <h1
                    id="hero-title"
                    className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight font-manrope"
                  >
                    O nascimento do seu bebê merece ser eternizado.
                  </h1>
                  <p className="text-xs md:text-sm text-muted-foreground max-w-xl mx-auto md:mx-0">
                    Fotografias de partos que capturam emoções genuínas e contam
                    histórias únicas com
                    <span className="font-bold text-primary">
                      {" "}
                      sensibilidade
                    </span>
                    ,<span className="font-bold text-primary"> respeito</span> e
                    <span className="font-bold text-primary">
                      {" "}
                      autenticidade
                    </span>
                  </p>
                </Parallax>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4">
                  <a
                    href="#portfolio"
                    className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
                    aria-label="Ver portfólio de fotografias"
                  >
                    Ver Portfólio
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors text-sm"
                  >
                    Entre em Contato
                  </a>
                </div>
              </Parallax>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-12 md:py-16 px-4 bg-gradient-to-b from-background/5 via-muted/30 to-background/5"
        >
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
                  <h2 className="text-lg md:text-xl font-bold">Sobre Mim</h2>
                  <div className="prose dark:prose-invert prose-xs md:prose-sm max-w-none space-y-3">
                    <p className="text-muted-foreground">
                      Olá, sou Camila, fotógrafa apaixonada por contar histórias
                      através da minha lente. Especializada em fotografia de
                      partos, transformo momentos inesquecíveis em memórias
                      eternas, com olhar sensível e técnica apurada.
                    </p>
                    <p className="text-muted-foreground">
                      Com três anos de experiência e formação pelo Espaço da
                      Fotografia e Senac, tenho o privilégio de registrar o amor
                      e a emoção do primeiro encontro entre mães, pais e bebês.
                    </p>
                    <p className="text-muted-foreground">
                      💙 Credenciada para atuar em oito hospitais de São Paulo,
                      incluindo Grupo Santa Joana, Pro Matre, Santa Maria, São
                      Luiz Anália Franco, Star e outros, estou preparada para
                      estar ao seu lado nesse momento tão especial.
                    </p>
                    <p className="text-muted-foreground">
                      Além do registro de partos, ensaios de modelos, retratos e
                      eventos, sempre com o compromisso de capturar a essência
                      de cada história.
                    </p>
                    <p className="text-muted-foreground">
                      Se você busca fotos emocionantes, sensíveis e autênticas,
                      será um prazer fazer parte desse capítulo da sua vida!
                      ✨📸
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
            <h2 className="text-lg md:text-xl font-bold mb-6 text-center">
              Hospitais Acreditados
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Estou credenciada para trabalhar em oito hospitais de São Paulo,
              garantindo minha presença no seu momento especial.
            </p>
            <HospitalLogos />
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="py-12 md:py-16 px-4 bg-gradient-to-b from-background/5 via-muted/30 to-background/5"
        >
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-lg md:text-xl font-bold mb-4 font-manrope">
                Portfólio
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                Cada foto conta uma história. Veja alguns dos momentos especiais
                que tive o privilégio de registrar. Quer conhecer mais? Vamos
                conversar!
              </p>
            </div>
            <PortfolioGrid />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-12 md:py-16 bg-gradient-to-b from-background/5 via-muted/30 to-background/5"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-lg md:text-xl font-bold mb-8 text-center">
              Entre em contato
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
              {/* Left side - Contact Info */}
              <div className="flex flex-col justify-center">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Vamos conversar?
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-6">
                      Se você deseja eternizar esse momento único, estou aqui
                      para transformar sua história em imagens inesquecíveis.
                      Preencha o formulário ao lado ou me envie uma mensagem
                      diretamente! Atendendo em São Paulo e região.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <a
                      href="https://wa.me/5511998624083"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="bg-primary/10 p-3 rounded-full">
                        <SiWhatsapp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-xs text-muted-foreground">
                          11 99862-4083
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:camilansamorim@gmail.com"
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="bg-primary/10 p-3 rounded-full">
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
                          className="w-6 h-6 text-primary"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 6-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 6" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-xs text-muted-foreground">
                          camilansamorim@gmail.com
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right side - Contact Form */}
              <div className="bg-background rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="max-w-md mx-auto">
                  <h3 className="text-xl font-semibold mb-6">
                    Envie sua mensagem
                  </h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollButton />
      </div>
    </ParallaxProvider>
  );
}
