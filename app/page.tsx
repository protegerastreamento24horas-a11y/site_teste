'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [winners] = useState([
    { id: 1, name: 'Carlos Silva', prize: 'R$ 1.500,00', time: 'Agora mesmo' },
    { id: 2, name: 'Ana Oliveira', prize: 'R$ 800,00', time: '2 minutos atrás' },
    { id: 3, name: 'Roberto Santos', prize: 'R$ 2.000,00', time: '5 minutos atrás' },
    { id: 4, name: 'Mariana Costa', prize: 'R$ 500,00', time: '7 minutos atrás' },
    { id: 5, name: 'Pedro Almeida', prize: 'R$ 3.000,00', time: '10 minutos atrás' },
    { id: 6, name: 'Juliana Pereira', prize: 'R$ 1.200,00', time: '12 minutos atrás' },
  ]);

  const [raffles] = useState([
    { 
      id: 1, 
      title: 'Mega Prêmio', 
      prize: 5000,
      probability: 95,
      icon: '💰'
    },
    { 
      id: 2, 
      title: 'Sorte Rápida', 
      prize: 1000,
      probability: 92,
      icon: '⚡'
    },
    { 
      id: 3, 
      title: 'Sorte Premium', 
      prize: 2000,
      probability: 90,
      icon: '🌟'
    },
  ]);

  const features = [
    {
      title: 'Sorteios Instantâneos',
      description: 'Resultados em tempo real com um clique',
      icon: '⏱️'
    },
    {
      title: 'Pagamento Seguro',
      description: 'Integração com HorsePay para transações 100% seguras',
      icon: '🔒'
    },
    {
      title: 'Prêmios Reais',
      description: 'Ganhe dinheiro real em sua conta',
      icon: '💸'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Banner */}
      <div className="relative bg-gradient-dark py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="animate-marquee whitespace-nowrap flex">
            {[...winners, ...winners].map((winner, index) => (
              <div key={index} className="mx-8 flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-600 mr-3 animate-pulse"></div>
                <span className="text-red-500 font-bold">GANHADOR!</span>
                <span className="text-white mx-2">•</span>
                <span className="text-white font-medium">{winner.name}</span>
                <span className="text-white mx-2">ganhou</span>
                <span className="text-yellow-400 font-bold">{winner.prize}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6">
            <span className="block text-white">SORTEIOS</span>
            <span className="block text-gradient mt-2">AUTOMÁTICOS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Participe de sorteios instantâneos com prêmios em dinheiro
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Probabilidade de ganho acima de 90% - Ganhe dinheiro real na hora!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/sorteios"
              className="bg-gradient-red text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 glow btn-hover"
            >
              PARTICIPAR AGORA
            </Link>
            <Link 
              href="/login"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 hover:bg-white hover:text-gray-900 btn-hover"
            >
              ENTRAR
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-red-500">90%+</div>
              <div className="text-gray-400 mt-2">Taxa de Vitória</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500">R$10k+</div>
              <div className="text-gray-400 mt-2">Já Pagos</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-green-500">24/7</div>
              <div className="text-gray-400 mt-2">Sorteios</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-blue-500">100%</div>
              <div className="text-gray-400 mt-2">Seguro</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Raffles */}
      <div className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-white">Sorteios em </span>
              <span className="text-gradient">Destaque</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Escolha um dos nossos sorteios especiais e concorra a prêmios incríveis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {raffles.map((raffle) => (
              <div 
                key={raffle.id} 
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl card-hover border border-gray-700"
              >
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{raffle.icon}</div>
                    <div className="text-4xl font-bold text-yellow-400 mb-2">
                      R$ {raffle.prize.toLocaleString('pt-BR')}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{raffle.title}</h3>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Probabilidade de ganho</span>
                      <span className="font-bold text-green-400">{raffle.probability}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-gold h-3 rounded-full" 
                        style={{ width: `${raffle.probability}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Link 
                    href="/login"
                    className="w-full bg-gradient-red text-white font-bold py-4 px-6 rounded-full text-center block transition duration-300 hover:opacity-90"
                  >
                    PARTICIPAR AGORA
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por que escolher nossos sorteios?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Oferecemos a melhor experiência em sorteios online com tecnologia de ponta
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-500 transition duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar a ganhar?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que já ganharam dinheiro conosco
          </p>
          <Link 
            href="/cadastro"
            className="bg-white text-red-600 font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 btn-hover"
          >
            CRIAR MINHA CONTA
          </Link>
        </div>
      </div>
    </div>
  );
}