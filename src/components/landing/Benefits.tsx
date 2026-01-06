import { Card, CardContent } from "@/components/ui/card";
import { MapPin, MessageCircle, Star, TrendingUp, Clock, Users, Quote } from "lucide-react";

const testimonials = [
  {
    content: "Contratar o Meu Bairro foi a melhor decisão que tomei. No mês passado, tive 40 clientes novos do bairro. Agora não consigo nem acompanhar.",
    author: "João Silva",
    business: "Padaria do Centro"
  },
  {
    content: "Não sabia como aparecer no Google Maps. Aqui foi fácil e barato. Meu telefone não para de tocar.",
    author: "Maria Santos",
    business: "Salão de Beleza"
  },
  {
    content: "Testei por 7 dias e no primeiro mês já tinha recuperado o investimento com novos clientes.",
    author: "Pedro Costa",
    business: "Mecânico"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veja quem já está <span className="text-primary">crescendo</span> com a gente
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Centenas de comerciantes como você já triplicaram o número de clientes do bairro em apenas 3 meses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold text-primary mb-2">
            Seus concorrentes já estão lá.
          </p>
          <p className="text-lg text-muted-foreground">
            Não perca mais clientes para quem está visível.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
