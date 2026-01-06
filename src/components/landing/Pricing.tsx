import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "29",
    description: "Perfeito para quem está começando e quer testar",
    features: [
      "Cadastro completo do negócio",
      "1 foto do estabelecimento",
      "Descrição do negócio",
      "Botão de WhatsApp",
      "Endereço e mapa",
      "Horário de funcionamento"
    ],
    popular: false
  },
  {
    name: "Destaque",
    price: "59",
    description: "O mais escolhido - Melhor custo-benefício",
    features: [
      "Tudo do plano Básico",
      "Aparece primeiro nas buscas",
      "Badge de \"Destaque\"",
      "Até 5 fotos",
      "Categorias ilimitadas",
      "Estatísticas de visualização"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "99",
    description: "Para quem quer dominar o bairro",
    features: [
      "Tudo do plano Destaque",
      "Banner exclusivo na home",
      "Até 10 fotos + vídeo",
      "Selo de verificado",
      "Suporte prioritário",
      "Relatórios mensais"
    ],
    popular: false
  }
];

const Pricing = () => {
  const handleWhatsApp = (planName: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planName} do Meu Bairro.`);
    window.open(`https://wa.me/5500000000000?text=${message}`, "_blank");
  };

  return (
    <section id="planos" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Planos mensais flexíveis. Cancele quando quiser, sem burocracia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? "border-primary shadow-xl shadow-primary/20" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">R$ {plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleWhatsApp(plan.name)}
                >
                  Ativar Meu Comércio Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
