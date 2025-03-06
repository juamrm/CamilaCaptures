import { Card } from "@/components/ui/card";
import einsteinLogo from "@/assets/logos/eisnteinlogo.webp";
import santaJoanaLogo from "@/assets/logos/santajoanalogo.svg";
import promatreLogo from "@/assets/logos/promatrelogo.png";
import santaMariaLogo from "@/assets/logos/santamarialogo.png";
import hospitalVitoriaLogo from "@/assets/logos/hospitalvitorialogo.png";
import saoLuizLogo from "@/assets/logos/saoluizlogo.svg";
import vilaNovaStarLogo from "@/assets/logos/redestarlogo.svg";
import sepacoLogo from "@/assets/logos/sepacologo.webp";

const HOSPITAL_LOGOS = [
  {
    name: "Hospital Israelita Albert Einstein",
    logo: einsteinLogo,
  },
  {
    name: "Hospital Santa Joana",
    logo: santaJoanaLogo,
  },
  {
    name: "Hospital Promatre",
    logo: promatreLogo,
    className: "w-auto h-full max-h-[100px]",
  },
  {
    name: "Hospital Santa Maria",
    logo: santaMariaLogo,
    className:
      "w-auto h-full max-h-[80px] p-2 rounded-lg border border-gray-200 dark:border-gray-600",
  },
  {
    name: "Hospital Vitória",
    logo: hospitalVitoriaLogo,
  },
  {
    name: "Hospital Sao Luís Anália Franco",
    logo: saoLuizLogo,
  },
  {
    name: "Hospital Vila Nova Star",
    logo: vilaNovaStarLogo,
  },
  {
    name: "Hospital Sepaco",
    logo: sepacoLogo,
  },
];

export function HospitalLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {HOSPITAL_LOGOS.map((hospital, index) => (
        <Card
          key={index}
          className="p-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 h-[120px] group cursor-pointer"
        >
          <img
            src={hospital.logo}
            alt={`${hospital.name} logo`}
            className={`w-auto h-full max-h-[80px] object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 ${hospital.className || ""}`}
            loading={index < 4 ? "eager" : "lazy"}
            decoding="async"
          />
        </Card>
      ))}
    </div>
  );
}
