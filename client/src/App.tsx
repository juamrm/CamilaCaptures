import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet";
import { Router } from "./Router";
import { CookieConsent } from "@/components/CookieConsent";
import { galleryStructuredData } from "./data/portfolioImages";

const queryClient = new QueryClient();

// Website structured data
const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Camila Amorim Fotografia",
  description:
    "Serviço profissional de fotografia de parto em São Paulo, capturando momentos únicos do nascimento com sensibilidade e autenticidade.",
  image: "https://camilacaptures.com.br/logo.webp",
  url: "https://camilacaptures.com.br",
  telephone: "+5511999999999",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.55052,
    longitude: -46.633308,
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.instagram.com/camilansamorim",
    "https://www.facebook.com/camilaamorimfotografia",
  ],
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Camila Amorim's birth photography portfolio. Capturing life's first moments with elegance and authenticity."
        />
        <title>Camila Amorim - Birth Photography</title>
        <script type="application/ld+json">
          {JSON.stringify(websiteStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(galleryStructuredData)}
        </script>
      </Helmet>
      <Router />
      <Toaster />
      <CookieConsent />
    </QueryClientProvider>
  );
}

export default App;
