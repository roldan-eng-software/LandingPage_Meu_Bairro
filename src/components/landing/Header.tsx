import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Header = () => {
  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a 
          href="https://micro-saa-s-meu-bairro.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
          <MapPin className="w-6 h-6 text-primary" />
          <span className="font-bold text-xl">Meu Bairro</span>
        </a>
        
        <Button onClick={scrollToPlans}>
          Anuncie Agora
        </Button>
      </div>
    </header>
  );
};

export default Header;
