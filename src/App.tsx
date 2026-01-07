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
