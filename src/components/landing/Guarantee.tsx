import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";

const Guarantee = () => {
  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-10 h-10 text-primary" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Comece com confiança
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Você tem 7 dias para testar totalmente grátis. Se não gostar, seu dinheiro volta. 
          Nenhuma pergunta feita.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>Sem contrato</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>Cancelamento a qualquer momento</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>100% reembolsável</span>
          </div>
        </div>
        
        <Button size="lg" onClick={scrollToPlans} className="text-lg px-8 py-6">
          Começar os 7 Dias Grátis
        </Button>
      </div>
    </section>
  );
};

export default Guarantee;
