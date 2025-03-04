import { Card } from "@/components/ui/card";

const HOSPITAL_LOGOS = [
  {
    name: "Hospital Israelita Albert Einstein",
    logo: "https://placehold.co/200x100/e2e8f0/64748b?text=Einstein"
  },
  {
    name: "Hospital Sírio-Libanês",
    logo: "https://placehold.co/200x100/e2e8f0/64748b?text=Sírio-Libanês"
  },
  {
    name: "Hospital São Luiz",
    logo: "https://placehold.co/200x100/e2e8f0/64748b?text=São+Luiz"
  },
  {
    name: "Hospital Santa Catarina",
    logo: "https://placehold.co/200x100/e2e8f0/64748b?text=Santa+Catarina"
  },
  {
    name: "Hospital 9 de Julho",
    logo: "https://placehold.co/200x100/e2e8f0/64748b?text=9+de+Julho"
  },
  {
    name: "Hospital Santa Joana",
    logo: "https://placehold.co/200x100/e2e8f0/64748b?text=Santa+Joana"
  },
  {
    name: "Hospital Vila Nova Star",
    logo: "https://placehold.co/200x100/e2e8f0/64748b?text=Vila+Nova+Star"
  },
  {
    name: "Hospital São Camilo",
    logo: "https://placehold.co/200x100/e2e8f0/64748b?text=São+Camilo"
  }
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
