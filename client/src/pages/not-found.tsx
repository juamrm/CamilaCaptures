import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              404 Página não encontrada
            </h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Esta página não está listada ou está em construção.
          </p>

          <a
            href="/"
            className="mt-6 inline-block text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            Voltar para a página inicial
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
