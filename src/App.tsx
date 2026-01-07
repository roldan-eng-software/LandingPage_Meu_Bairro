import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meu Bairro</h1>
          <p className="text-xl text-gray-600">Plataforma de conexão comunitária do seu bairro</p>
        </header>
        
        <main className="max-w-4xl mx-auto">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Bem-vindo!</h2>
            <p className="text-gray-700 mb-4">
              Conecte-se com seus vizinhos, descubra eventos locais e participe da comunidade.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Começar Agora
            </button>
          </section>
          
          <section className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Eventos</h3>
              <p className="text-gray-600">Fique por dentro dos acontecimentos do seu bairro.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Comércio Local</h3>
              <p className="text-gray-600">Apoie os negócios da sua comunidade.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Serviços</h3>
              <p className="text-gray-600">Encontre serviços próximos de você.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
