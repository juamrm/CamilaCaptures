import { Card } from "@/components/ui/card";

const HOSPITAL_LOGOS = [
  {
    name: "Hospital Israelita Albert Einstein",
    logo: "src/assets/logos/einsteinlogo.svg",
  },
  {
    name: "Hospital Santa Joana",
    logo: "src/assets/logos/santajoanologo.svg",
  },
  {
    name: "Hospital Promatre",
    logo: "src/assets/logos/promatelogos.svg",
  },
  {
    name: "Hospital Santa Maria",
    logo: "src/assets/logos/santamaria.svg",
  },
  {
    name: "Hospital Vitória",
    logo: "src/assets/logos/vitoria.svg",
  },
  {
    name: "Hospital Sao Luís Anália Franco",
    logo: "src/assets/logos/saoluizanialafranologo.svg",
  },
  {
    name: "Hospital Vila Nova Star",
    logo: "src/assets/logos/vilanovastar.svg",
  },
  {
    name: "Hospital Sepaco",
    logo: "src/assets/logos/sepaco.svg",
  },
];

export function HospitalLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {HOSPITAL_LOGOS.map((hospital, index) => (
        <Card
          key={index}
          className="p-4 flex items-center justify-center bg-muted/30 hover:bg-muted/50 transition-colors"
        >
          <img
            src={hospital.logo}
            alt={`${hospital.name} logo`}
            className="max-w-full h-auto"
            width="200"
            height="100"
            loading={index < 4 ? "eager" : "lazy"}
            decoding="async"
          />
        </Card>
      ))}
    </div>
  );
}
