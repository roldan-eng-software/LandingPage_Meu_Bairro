import { Card, CardContent } from "@/components/ui/card";
import { Phone, Eye, BarChart3 } from "lucide-react";

const advantages = [
  {
    icon: Phone,
    title: "Você tem suporte local, não um bot",
    description: "Qualquer dúvida, você liga e fala com uma pessoa. Não é um chatbot."
  },
  {
    icon: Eye,
    title: "Seu concorrente não sabe que você está aqui",
    description: "Você não depende do algoritmo do Facebook. Aqui, quem busca te encontra naturalmente."
  },
  {
    icon: BarChart3,
    title: "Você vê em tempo real quem está olhando para você",
    description: "Sabe exatamente quantas pessoas viram seu anúncio, de qual bairro vêm e o que clicaram."
  }
];

const UniqueAdvantages = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que o <span className="text-primary">Meu Bairro</span> é diferente
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vantagens que você não encontra em nenhum outro lugar
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueAdvantages;
