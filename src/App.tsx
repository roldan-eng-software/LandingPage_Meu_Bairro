import React from 'react';
import './index.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';

const queryClient = new QueryClient();

const HomePage = () => {
  const { trackEvent } = useGoogleAnalytics();

  const handleButtonClick = () => {
    trackEvent('click', 'navigation', 'start_button');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Meu Bairro</h1>
          <p className="text-xl text-gray-600 mb-8">Plataforma de conexão comunitária do seu bairro</p>
          
          {/* Hero Option A - Focado em Resultados */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Aumente suas vendas com clientes que já estão perto de você
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Descobrimos que 73% das pessoas procuram por serviços no seu próprio bairro. 
              Não deixe esse dinheiro ir para seus concorrentes.
            </p>
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg px-8 py-4"
              asChild
              onClick={handleButtonClick}
            >
              <Link to="/sobre">Começar Agora</Link>
            </Button>
          </div>
        </header>
        
        <main className="max-w-6xl mx-auto">
          {/* Seção de Problema e Solução */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Por que comerciantes estão trocando para o Meu Bairro?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Problema 1 */}
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">🎯</div>
                  <CardTitle className="text-xl">
                    Você aparece para quem realmente pode comprar de você
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Seus clientes ideais estão no seu bairro, ao lado do seu comércio. 
                    Não gaste dinheiro alcançando quem mora longe demais.
                  </p>
                </CardContent>
              </Card>
              
              {/* Problema 2 */}
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">⏰</div>
                  <CardTitle className="text-xl">
                    Você não precisa ser especialista em redes sociais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Diferente do Instagram e Facebook, aqui você não compete por atenção. 
                    Os moradores estão buscando justamente o seu tipo de serviço, neste exato local.
                  </p>
                </CardContent>
              </Card>
              
              {/* Problema 3 */}
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">💰</div>
                  <CardTitle className="text-xl">
                    Você paga apenas pelos clientes que você quer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sem surpresas. Sem cobranças extras. Você sabe exatamente quanto vai 
                    investir em cada plano.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Seção de Reafirmação - Opção A - Com Urgência Social */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
              <CardContent className="text-center py-12">
                <div className="max-w-3xl mx-auto">
                  <div className="text-5xl mb-6">⚡</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Seus concorrentes já estão lá. Não perca mais clientes para quem está visível.
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Enquanto você hesita, outros comerciantes do seu bairro estão 
                    atraindo seus clientes potenciais todos os dias.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                    asChild
                    onClick={handleButtonClick}
                  >
                    <Link to="/sobre">Garantir Meu Agora</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* Seção de Planos */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Escolha seu plano</h2>
              <p className="text-lg text-gray-600">Comece a atrair clientes do seu bairro hoje mesmo</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Plano Básico */}
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">Plano Básico</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600">
                    Perfeito para quem está começando e quer testar
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-gray-900">R$ 47</div>
                  <p className="text-gray-600">por mês</p>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>✓ Listagem no bairro</li>
                    <li>✓ Até 5 fotos</li>
                    <li>✓ Contato direto</li>
                    <li>✓ Suporte por email</li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Começar Teste
                  </Button>
                </CardContent>
              </Card>
              
              {/* Plano Intermediário - DESTAQUE */}
              <Card className="text-center border-2 border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    O mais escolhido
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Plano Intermediário</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600">
                    Ideal para crescer rápido
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-gray-900">R$ 97</div>
                  <p className="text-gray-600">por mês</p>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>✓ Tudo do Básico</li>
                    <li>✓ Fotos ilimitadas</li>
                    <li>✓ Destaque em busca</li>
                    <li>✓ Estatísticas simples</li>
                    <li>✓ Suporte prioritário</li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Escolher Este Plano
                  </Button>
                </CardContent>
              </Card>
              
              {/* Plano Premium */}
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">Plano Premium</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600">
                    Para quem quer dominar o bairro
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-gray-900">R$ 197</div>
                  <p className="text-gray-600">por mês</p>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>✓ Tudo do Intermediário</li>
                    <li>✓ Posicionamento premium</li>
                    <li>✓ Análises avançadas</li>
                    <li>✓ Gerente dedicado</li>
                    <li>✓ Sem concorrentes próximos</li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Falar com Consultor
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Cards de funcionalidades originais */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Eventos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fique por dentro dos acontecimentos do seu bairro.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Comércio Local</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Apoie os negócios da sua comunidade.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Serviços</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Encontre serviços próximos de você.</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

const SobrePage = () => {
  const { trackEvent } = useGoogleAnalytics();

  const handleBackClick = () => {
    trackEvent('click', 'navigation', 'back_to_home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Sobre o Meu Bairro</CardTitle>
            <CardDescription>
              Conheça nossa missão de conectar comunidades
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              O Meu Bairro é uma plataforma digital criada para fortalecer laços comunitários 
              e facilitar a comunicação entre vizinhos.
            </p>
            <p>
              Nossa missão é criar bairros mais conectados, seguros e vibrantes através da 
              tecnologia e colaboração.
            </p>
            <Button asChild onClick={handleBackClick}>
              <Link to="/">Voltar para Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/LandingPage_Meu_Bairro">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
