import { Card } from "@/components/ui/card";
import einsteinLogo from "@/assets/logos/eisnteinlogo.webp";
import santaJoanaLogo from "@/assets/logos/logosantajoanaok.png";
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
    className: "w-auto h-full max-h-[80px] opacity-90",
  },
  {
    name: "Hospital Santa Joana",
    logo: santaJoanaLogo,
    className: "w-auto h-full max-h-[80px] opacity-90",
  },
  {
    name: "Hospital Promatre",
    logo: promatreLogo,
    className:
      "w-auto h-full max-h-[80px] brightness-150 dark:brightness-150 contrast-125 opacity-90",
  },
  {
    name: "Hospital Santa Maria",
    logo: santaMariaLogo,
    className: "w-auto h-full max-h-[80px]",
    containerClassName: "bg-blue-900 rounded-lg p-4",
  },
  {
    name: "Hospital Vitória",
    logo: hospitalVitoriaLogo,
    className: "w-auto h-full max-h-[100px] opacity-90",
  },
  {
    name: "Hospital Sao Luís Anália Franco",
    logo: saoLuizLogo,
    className: "w-auto h-full max-h-[80px] opacity-90",
  },
  {
    name: "Hospital Vila Nova Star",
    logo: vilaNovaStarLogo,
    className: "w-auto h-full max-h-[80px] opacity-90",
  },
  {
    name: "Hospital Sepaco",
    logo: sepacoLogo,
    className: "w-auto h-full max-h-[80px] opacity-90",
  },
];

export function HospitalLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {HOSPITAL_LOGOS.map((hospital, index) => (
        <Card
          key={index}
          className="p-4 flex items-center justify-center bg-gray-50 dark:bg-gray-50 h-[120px]"
        >
          <div
            className={`w-full h-full flex items-center justify-center rounded-lg p-2 ${hospital.containerClassName || "bg-gray-50"}`}
          >
            <img
              src={hospital.logo}
              alt={`${hospital.name} logo`}
              className={`w-auto h-full max-h-[80px] object-contain ${hospital.className || ""}`}
              loading={index < 4 ? "eager" : "lazy"}
              fetchPriority={index < 4 ? "high" : "low"}
              decoding="async"
              width="200"
              height="80"
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
