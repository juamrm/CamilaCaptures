import { Card } from "@/components/ui/card";

const HOSPITAL_LOGOS = [
  {
    name: "Hospital Israelita Albert Einstein",
    logo: "/src/assets/logos/eisnteinlogo.webp",
  },
  {
    name: "Hospital Santa Joana",
    logo: "/src/assets/logos/santajoanalogo.svg",
  },
  {
    name: "Hospital Promatre",
    logo: "/src/assets/logos/promatrelogo.png",
  },
  {
    name: "Hospital Santa Maria",
    logo: "/src/assets/logos/santamarialogo.png",
  },
  {
    name: "Hospital Vitória",
    logo: "/src/assets/logos/hospitalvitorialogo.png",
  },
  {
    name: "Hospital Sao Luís Anália Franco",
    logo: "/src/assets/logos/saoluizlogo.svg",
  },
  {
    name: "Hospital Vila Nova Star",
    logo: "/src/assets/logos/redestarlogo.svg",
  },
  {
    name: "Hospital Sepaco",
    logo: "/src/assets/logos/sepacologo.webp",
  },
];

export function HospitalLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {HOSPITAL_LOGOS.map((hospital, index) => (
        <Card
          key={index}
          className="p-4 flex items-center justify-center bg-muted/30 hover:bg-muted/50 transition-colors h-[120px]"
        >
          <img
            src={hospital.logo}
            alt={`${hospital.name} logo`}
            className="w-auto h-full max-h-[80px] object-contain"
            loading={index < 4 ? "eager" : "lazy"}
            decoding="async"
          />
        </Card>
      ))}
    </div>
  );
}
