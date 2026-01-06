import { Button } from "@/components/ui/button";
import { MessageCircle, Zap } from "lucide-react";

const CTA = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Quero saber mais sobre anunciar no Meu Bairro.");
    window.open(`https://wa.me/5500000000000?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full mb-6">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-medium">Comece agora mesmo</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Seja o primeiro do seu ramo no bairro!
        </h2>
        
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Quanto mais cedo você começar, mais tempo terá de vantagem sobre a concorrência. 
          Não deixe os clientes do seu bairro irem para outro lugar.
        </p>
        
        <Button 
          size="lg" 
          variant="secondary"
          onClick={handleWhatsApp}
          className="text-lg px-8 py-6 gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Falar no WhatsApp
        </Button>
        
        <p className="text-primary-foreground/60 text-sm mt-4">
          Resposta em até 2 horas em horário comercial
        </p>
      </div>
    </section>
  );
};

export default CTA;
