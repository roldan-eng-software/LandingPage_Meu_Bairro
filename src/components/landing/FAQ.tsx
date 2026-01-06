import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, MapPin, Shield } from "lucide-react";

const faqs = [
  {
    icon: Clock,
    question: "Quanto tempo leva para aparecer?",
    answer: "Seus primeiros clientes podem chegar em horas. Geralmente em 24-48 horas já há visitantes na sua página."
  },
  {
    icon: Users,
    question: "Funciona mesmo para pequenos negócios?",
    answer: "Sim! Especialmente para pequenos negócios. Quanto mais especializado o seu serviço, mais nosso sistema te ajuda a aparecer para quem está procurando."
  },
  {
    icon: Shield,
    question: "Posso parar quando quiser?",
    answer: "Sem contrato. Sem multa. Você é livre para cancelar a qualquer momento."
  },
  {
    icon: MapPin,
    question: "Vou aparecer para quem está muito longe?",
    answer: "Não. Nosso sistema mostra seu negócio apenas para pessoas no seu bairro e arredores. Zero desperdício."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Respostas Rápidas para Você Começar
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo que você precisa saber antes de começar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <faq.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
