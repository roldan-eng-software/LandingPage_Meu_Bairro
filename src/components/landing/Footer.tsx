import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-semibold">Meu Bairro</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Meu Bairro. Conectando você ao seu bairro.
          </p>
          
          <a 
            href="https://micro-saa-s-meu-bairro.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            Acessar plataforma
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
