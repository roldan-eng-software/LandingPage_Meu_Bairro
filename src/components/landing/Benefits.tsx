import { Card, CardContent } from "@/components/ui/card";
import { MapPin, MessageCircle, Star, TrendingUp, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Visibilidade Local",
    description: "Apareça para moradores do seu bairro que estão buscando exatamente o que você oferece."
  },
  {
    icon: MessageCircle,
    title: "Contato Direto",
    description: "Botão de WhatsApp integrado para que clientes entrem em contato na hora."
  },
  {
    icon: Star,
    title: "Destaque Garantido",
    description: "Posição privilegiada nas buscas, aparecendo antes dos concorrentes."
  },
  {
    icon: TrendingUp,
    title: "Sem Complicação",
    description: "Cadastro simples e rápido. Comece a aparecer para clientes em minutos."
  },
  {
    icon: Clock,
    title: "24 Horas no Ar",
    description: "Seu anúncio disponível 24h por dia, 7 dias por semana para quem buscar."
  },
  {
    icon: Users,
    title: "Público Qualificado",
    description: "Alcance pessoas que realmente precisam dos seus produtos ou serviços."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que anunciar no <span className="text-primary">Meu Bairro</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conectamos seu negócio diretamente com quem está perto e procura o que você oferece.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
