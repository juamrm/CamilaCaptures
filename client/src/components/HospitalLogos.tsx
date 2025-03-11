import { Card } from "@/components/ui/card";
import einsteinLogo from "@/assets/logos/eisnteinlogo.webp";
import santaJoanaLogo from "@/assets/logos/logosantajoanaok.png";
import promatreLogo from "@/assets/logos/promatrelogo.png";
import santaMariaLogo from "@/assets/logos/santamariaverticallogo.png";
import hospitalVitoriaLogo from "@/assets/logos/hospitalvitorialogo.png";
import saoLuizLogo from "@/assets/logos/saoluizlogo.svg";
import vilaNovaStarLogo from "@/assets/logos/redestarlogo.svg";
import sepacoLogo from "@/assets/logos/sepacologo2.png";
import metropolitanLogo from "@/assets/logos/hospitalmetropolitanologo.png";

const HOSPITAL_LOGOS = [
  {
    name: "Hospital Israelita Albert Einstein",
    logo: einsteinLogo,
    className: "w-auto h-full max-h-[60px] object-contain",
  },
  {
    name: "Hospital Santa Joana",
    logo: santaJoanaLogo,
    className: "w-auto h-full max-h-[80px] object-contain",
  },
  {
    name: "Hospital Promatre",
    logo: promatreLogo,
    className: "w-auto h-full max-h-[70px] object-contain brightness-110",
  },
  {
    name: "Hospital Santa Maria",
    logo: santaMariaLogo,
    className: "w-auto h-full max-h-[75px] object-contain",
    containerClassName: "bg-white rounded-lg p-2",
  },
  {
    name: "Hospital Vitória",
    logo: hospitalVitoriaLogo,
    className: "w-auto h-full max-h-[60px] object-contain",
  },
  {
    name: "Hospital Sao Luís Anália Franco",
    logo: saoLuizLogo,
    className: "w-auto h-full max-h-[60px] object-contain",
  },
  {
    name: "Hospital Vila Nova Star",
    logo: vilaNovaStarLogo,
    className: "w-auto h-full max-h-[60px] object-contain",
  },
  {
    name: "Hospital Sepaco",
    logo: sepacoLogo,
    className: "w-auto h-full max-h-[60px] object-contain",
    containerClassName: "bg-white rounded-lg p-2",
  },
  {
    name: "Hospital Metropolitan",
    logo: metropolitanLogo,
    className: "w-auto h-full max-h-[60px] object-contain",
  },
];

export function HospitalLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {HOSPITAL_LOGOS.map((hospital, index) => (
        <Card
          key={index}
          className="p-4 flex items-center justify-center bg-gray-50 dark:bg-gray-50 h-[120px] shadow-sm hover:shadow-md transition-shadow"
        >
          <div
            className={`w-full h-full flex items-center justify-center rounded-lg ${
              hospital.containerClassName ? "bg-gray-50 rounded-lg p-2" : ""
            }`}
          >
            <img
              src={hospital.logo}
              alt={`${hospital.name} logo`}
              className={hospital.className}
              loading={index < 4 ? "eager" : "lazy"}
              data-fetchpriority={index < 4 ? "high" : "low"}
              decoding="async"
              width="200"
              height="60"
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
