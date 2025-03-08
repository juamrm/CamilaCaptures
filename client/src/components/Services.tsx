import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Video, Wand2, Building2 } from "lucide-react";

const SERVICES = [
  {
    title: "Fotografia de Partos e Ensaios",
    description:
      "Registros autênticos e emocionantes do nascimento e momentos especiais da família.",
    icon: Camera,
    className: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    title: "Edição Profissional",
    description:
      "Aprimoramento de imagens com técnicas avançadas para um resultado impecável.",
    icon: Wand2,
    className: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    title: "Vídeos de Parto e Ensaios",
    description:
      "Captação e edição de vídeos para eternizar seu momento com ainda mais emoção.",
    icon: Video,
    className: "bg-red-50 dark:bg-red-950/20",
  },
  {
    title: "Hospitais Credenciados",
    description:
      "Atuação em oito hospitais de São Paulo, garantindo minha presença para registrar esse dia único com segurança e profissionalismo.",
    icon: Building2,
    className: "bg-green-50 dark:bg-green-950/20",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-xl font-bold text-center mb-12">
          Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-500"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className={`p-2 rounded-lg ${service.className}`}>
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-base md:text-lg">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
