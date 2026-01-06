import { Button } from "@/components/ui/button";
import { MapPin, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">Diretório de Comércios Locais</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Apareça para quem está{" "}
          <span className="text-primary">perto de você</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Anuncie seu comércio ou serviço no <strong>Meu Bairro</strong> e seja encontrado 
          pelos moradores da sua região. Atraia clientes que estão a poucos passos de você.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" onClick={scrollToPlans} className="text-lg px-8 py-6">
            Ver Planos
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
            <a href="https://micro-saa-s-meu-bairro.vercel.app/" target="_blank" rel="noopener noreferrer">
              Conhecer a Plataforma
            </a>
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
