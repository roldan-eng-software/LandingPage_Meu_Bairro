import { Target, Clock, DollarSign } from "lucide-react";

const ProblemsSolved = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que comerciantes estão trocando para o Meu Bairro?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg border bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Você aparece para quem realmente pode comprar de você
            </h3>
            <p className="text-muted-foreground">
              Seus clientes ideais estão no seu bairro, ao lado do seu comércio. 
              Não gaste dinheiro alcançando quem mora longe demais.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg border bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Você não precisa ser especialista em redes sociais
            </h3>
            <p className="text-muted-foreground">
              Diferente do Instagram e Facebook, aqui você não compete por atenção. 
              Os moradores estão buscando justamente o seu tipo de serviço, neste exato local.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg border bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Você paga apenas pelos clientes que você quer
            </h3>
            <p className="text-muted-foreground">
              Sem surpresas. Sem cobranças extras. Você sabe exatamente quanto vai investir em cada plano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolved;
