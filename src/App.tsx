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

  const whatsappNumber = '16981442301';
  const whatsappMessage = 'Olá! Quero saber mais sobre o Meu Bairro para aparecer para meus vizinhos.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
              onClick={handleButtonClick}
            >
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline"
              >
                Começar Agora
              </a>
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
                    onClick={handleButtonClick}
                  >
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white no-underline"
                    >
                      Garantir Meu Agora
                    </a>
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
                  <div className="text-3xl font-bold text-gray-900">R$ 19,90</div>
                  <p className="text-gray-600">por mês</p>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>✓ Listagem no bairro</li>
                    <li>✓ Até 5 fotos</li>
                    <li>✓ Contato direto</li>
                    <li>✓ Suporte por email</li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 no-underline"
                    >
                      Começar Teste
                    </a>
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
                  <div className="text-3xl font-bold text-gray-900">R$ 49,90</div>
                  <p className="text-gray-600">por mês</p>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>✓ Tudo do Básico</li>
                    <li>✓ Fotos ilimitadas</li>
                    <li>✓ Destaque em busca</li>
                    <li>✓ Estatísticas simples</li>
                    <li>✓ Suporte prioritário</li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white no-underline"
                    >
                      Escolher Este Plano
                    </a>
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
                  <div className="text-3xl font-bold text-gray-900">R$ 79,90</div>
                  <p className="text-gray-600">por mês</p>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li>✓ Tudo do Intermediário</li>
                    <li>✓ Posicionamento premium</li>
                    <li>✓ Análises avançadas</li>
                    <li>✓ Gerente dedicado</li>
                    <li>✓ Sem concorrentes próximos</li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 no-underline"
                    >
                      Falar com Consultor
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Seção de Prova Social - Depoimentos */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Veja quem já está crescendo</h2>
              <p className="text-lg text-gray-600">Comerciantes como você estão transformando seus negócios</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Depoimento 1 */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex text-blue-500 mb-3">
                      <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                    </div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "Contratar o Meu Bairro foi a melhor decisão que tomei. No mês passado, tive 40 clientes novos do bairro. Agora não consigo nem acompanhar."
                    </blockquote>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      JS
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">João Silva</div>
                      <div className="text-sm text-gray-600">Padaria do Centro</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Depoimento 2 */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex text-green-500 mb-3">
                      <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                    </div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "Não sabia como aparecer no Google Maps. Aqui foi fácil e barato. Meu telefone não para de tocar."
                    </blockquote>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      MS
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Maria Santos</div>
                      <div className="text-sm text-gray-600">Salão de Beleza</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Depoimento 3 */}
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex text-purple-500 mb-3">
                      <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                    </div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "Testei por 7 dias e no primeiro mês já tinha recuperado o investimento com novos clientes."
                    </blockquote>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      PC
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Pedro Costa</div>
                      <div className="text-sm text-gray-600">Mecânico</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Seção de Objeções Antecipadas - FAQ Reformulado */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Respostas Rápidas para Você Começar</h2>
              <p className="text-lg text-gray-600">Tudo que você precisa saber antes de decidir</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {/* FAQ 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-blue-500 mr-3">⏰</span>
                    Quanto tempo leva para aparecer?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Seus primeiros clientes podem chegar em horas. Geralmente em 24-48 horas já há visitantes na sua página.
                  </p>
                </CardContent>
              </Card>
              
              {/* FAQ 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-green-500 mr-3">🏪</span>
                    Funciona mesmo para pequenos negócios?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Sim! Especialmente para pequenos negócios. Quanto mais especializado o seu serviço, mais nosso sistema te ajuda a aparecer para quem está procurando.
                  </p>
                </CardContent>
              </Card>
              
              {/* FAQ 3 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-purple-500 mr-3">🔓</span>
                    Posso parar quando quiser?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Sem contrato. Sem multa. Você é livre para cancelar a qualquer momento.
                  </p>
                </CardContent>
              </Card>
              
              {/* FAQ 4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-orange-500 mr-3">📍</span>
                    Vou aparecer para quem está muito longe?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Não. Nosso sistema mostra seu negócio apenas para pessoas no seu bairro e arredores. Zero desperdício.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Seção de Garantia */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="text-center py-12">
                <div className="max-w-3xl mx-auto">
                  <div className="text-5xl mb-6">🛡️</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Comece com confiança
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Você tem 30 dias para testar totalmente grátis.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <div className="flex items-center text-green-600">
                      <span className="text-2xl mr-2">✓</span>
                      <span className="font-medium">30 dias garantia</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <span className="text-2xl mr-2">✓</span>
                      <span className="font-medium">Devolução 100%</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <span className="text-2xl mr-2">✓</span>
                      <span className="font-medium">Sem perguntas</span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 mt-6 text-lg font-semibold"
                    onClick={handleButtonClick}
                  >
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white no-underline"
                    >
                      Ativar Meu Comércio Agora
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* Seção 9 - Diferenciais - Por Que Escolher Você */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Por que escolher o Meu Bairro?</h2>
              <p className="text-lg text-gray-600">Diferenciais que fazem toda a diferença</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Diferencial 1 */}
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">👥</div>
                  <CardTitle className="text-xl">
                    Você tem suporte local, não um bot
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Qualquer dúvida, você liga e fala com uma pessoa. Não é um chatbot.
                  </p>
                </CardContent>
              </Card>
              
              {/* Diferencial 2 */}
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">🔍</div>
                  <CardTitle className="text-xl">
                    Seu concorrente não sabe que você está aqui
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Você não depende do algoritmo do Facebook. Aqui, quem busca te encontra naturalmente.
                  </p>
                </CardContent>
              </Card>
              
              {/* Diferencial 3 */}
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">📊</div>
                  <CardTitle className="text-xl">
                    Você vê em tempo real quem está olhando para você
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sabe exatamente quantas pessoas viram seu anúncio, de qual bairro vêm e o que clicaram.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Seção 10 - Incentivo Final */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardContent className="text-center py-16">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold mb-6">
                    Comece hoje.
                  </h2>
                  <p className="text-xl mb-8 leading-relaxed">
                    Seus clientes ideais estão procurando alguém exatamente como você, 
                    neste exato momento, no seu bairro.
                  </p>
                  <p className="text-2xl font-bold mb-8">
                    Não deixe para amanhã.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold"
                    onClick={handleButtonClick}
                  >
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 no-underline"
                    >
                      Aparecer Para Meus Vizinhos Agora
                    </a>
                  </Button>
                  <p className="text-sm mt-6 opacity-90">
                    Última chance: 30 dias grátis termina em breve
                  </p>
                </div>
              </CardContent>
            </Card>
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
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              Desenvolvido por:{' '}
              <a 
                href="https://roldan-eng-software.github.io/roldan-page/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Roldan Eng Software
              </a>
            </p>
          </div>
        </footer>
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
