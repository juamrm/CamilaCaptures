import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4 border-none shadow-none">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <CardTitle className="text-2xl">
              404 Página não encontrada
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            A página que você procura não existe ou está em construção.
          </p>
          <Button variant="default" className="w-full" asChild>
            <a href="/">Voltar para a página inicial</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
