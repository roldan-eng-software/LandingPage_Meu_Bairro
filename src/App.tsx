import React from 'react';
import './index.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Meu Bairro</h1>
        <p className="text-xl text-gray-600">Plataforma de conexão comunitária do seu bairro</p>
      </header>
      
      <main className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Bem-vindo!</CardTitle>
            <CardDescription>
              Conecte-se com seus vizinhos, descubra eventos locais e participe da comunidade.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/sobre">Começar Agora</Link>
            </Button>
          </CardContent>
        </Card>
        
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

const SobrePage = () => (
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
          <Button asChild>
            <Link to="/">Voltar para Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter basename="/LandingPage_Meu_Bairro">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
