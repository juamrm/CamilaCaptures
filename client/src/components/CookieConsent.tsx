import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if we've already shown the consent
    const consent = localStorage.getItem("cookie-consent");

    // If we haven't shown it yet, show it
    if (!consent) {
      setVisible(true);
    }

    // Log for debugging
    console.log("Cookie consent status:", { consent, visible });
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    console.log("Cookies accepted");
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
    console.log("Cookies rejected");
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 p-3 bg-background/80 backdrop-blur-md border-t z-50 animate-in slide-in-from-bottom duration-500"
      role="dialog"
      aria-labelledby="cookie-consent-title"
    >
      <div className="container mx-auto max-w-5xl">
        <Card className="p-3 md:p-4 flex flex-col sm:flex-row items-center gap-3 md:gap-4 bg-background shadow-lg">
          <div className="bg-primary/10 p-2 rounded-full shrink-0">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p
              className="text-xs md:text-sm font-inter"
              id="cookie-consent-title"
            >
              Utilizamos cookies para melhorar sua experiência em nosso site. Ao
              continuar navegando, você concorda com nossa{" "}
              <a
                href="/privacy"
                className="text-primary hover:underline font-amstelvar"
              >
                Política de Privacidade
              </a>
              .
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="font-amstelvar min-w-[90px] text-xs h-8"
              onClick={reject}
            >
              Recusar
            </Button>
            <Button
              variant="default"
              size="sm"
              className="font-amstelvar min-w-[90px] text-xs h-8"
              onClick={accept}
            >
              Aceitar
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
