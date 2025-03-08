import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4 border-none shadow-none">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Construction className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl font-bold font-manrope">
            Página não encontrada
          </h1>
          <p className="text-sm text-muted-foreground">
            Ops! A página que você procura não existe ou está em construção.
          </p>
        </CardHeader>
        <CardContent className="flex justify-center pt-4">
          <Button variant="default" className="px-8" asChild>
            <a href="/">
              <span>Voltar para a página inicial</span>
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
