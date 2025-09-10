'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [winners] = useState([
    { id: 1, name: 'Carlos Silva', prize: 'R$ 5.500,00', time: 'Agora mesmo' },
    { id: 2, name: 'Ana Oliveira', prize: 'R$ 2.800,00', time: '2 minutos atrás' },
    { id: 3, name: 'Roberto Santos', prize: 'R$ 10.000,00', time: '5 minutos atrás' },
    { id: 4, name: 'Mariana Costa', prize: 'R$ 1.500,00', time: '7 minutos atrás' },
    { id: 5, name: 'Pedro Almeida', prize: 'R$ 15.000,00', time: '10 minutos atrás' },
    { id: 6, name: 'Juliana Pereira', prize: 'R$ 3.200,00', time: '12 minutos atrás' },
  ]);

  const [raffles] = useState([
    { 
      id: 1, 
      title: 'Mega Jackpot', 
      prize: 50000,
      probability: 95,
      fakeProbability: 92,
      entries: 1245,
      icon: '💎'
    },
    { 
      id: 2, 
      title: 'Sorte Rápida', 
      prize: 5000,
      probability: 92,
      fakeProbability: 95,
      entries: 876,
      icon: '⚡'
    },
    { 
      id: 3, 
      title: 'Sorte Premium', 
      prize: 15000,
      probability: 90,
      fakeProbability: 90,
      entries: 2103,
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
    },
    {
      title: 'Sorteios Diários',
      description: 'Novos sorteios todos os dias',
      icon: '🎲'
    }
  ];

  // Efeito para criar confetes animados
  useEffect(() => {
    const createConfetti = () => {
      const confettiContainer = document.getElementById('confetti-container');
      if (!confettiContainer) return;

      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = ['#dc2626', '#d4af37', '#f59e0b', '#7e22ce'][Math.floor(Math.random() * 4)];
      confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
      confettiContainer.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 5000);
    };

    const interval = setInterval(createConfetti, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg relative overflow-hidden">
      {/* Confetti container */}
      <div id="confetti-container" className="fixed inset-0 pointer-events-none z-10"></div>

      {/* Hero Section with Animated Banner */}
      <div className="relative bg-gradient-dark py-24 overflow-hidden">
        <div className="absolute inset-0 animated-bg opacity-30"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="animate-marquee whitespace-nowrap flex">
            {[...winners, ...winners].map((winner, index) => (
              <div key={index} className="mx-10 flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-600 mr-3 animate-pulse"></div>
                <span className="text-red-500 font-bold text-lg">GANHADOR!</span>
                <span className="text-white mx-3">•</span>
                <span className="text-white font-medium text-lg">{winner.name}</span>
                <span className="text-white mx-3">ganhou</span>
                <span className="text-yellow-400 font-bold text-lg">{winner.prize}</span>
                <span className="text-gray-400 mx-3">•</span>
                <span className="text-gray-400 text-lg">{winner.time}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <div className="mb-6">
            <span className="chip chip-gold text-sm font-bold px-3 py-1 rounded-full">
              JACKPOT ACUMULADO
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6">
            <span className="block text-white">RIFAS</span>
            <span className="block text-gradient-gold mt-2 animate-jackpot">PREMIADAS</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Participe de rifas exclusivas com prêmios em dinheiro real
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Probabilidade de ganho acima de 90% - Ganhe dinheiro real na hora!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/rifas"
              className="bg-gradient-gold text-black font-black py-5 px-10 rounded-full text-xl md:text-2xl transition duration-300 transform hover:scale-105 glow-gold btn-hover border-2 border-gold shadow-2xl"
            >
              PARTICIPAR AGORA
            </Link>
            <Link 
              href="/login"
              className="bg-transparent border-2 border-white text-white font-bold py-5 px-10 rounded-full text-xl md:text-2xl transition duration-300 hover:bg-white hover:text-gray-900 btn-hover shadow-2xl"
            >
              ENTRAR
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-card-bg border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-dark-bg rounded-2xl border border-gray-700">
              <div className="text-3xl md:text-5xl font-bold text-gold mb-2">90%+</div>
              <div className="text-gray-400 text-sm md:text-base">Taxa de Vitória</div>
            </div>
            <div className="p-6 bg-dark-bg rounded-2xl border border-gray-700">
              <div className="text-3xl md:text-5xl font-bold text-green-500 mb-2">R$1M+</div>
              <div className="text-gray-400 text-sm md:text-base">Já Pagos</div>
            </div>
            <div className="p-6 bg-dark-bg rounded-2xl border border-gray-700">
              <div className="text-3xl md:text-5xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-400 text-sm md:text-base">Sorteios</div>
            </div>
            <div className="p-6 bg-dark-bg rounded-2xl border border-gray-700">
              <div className="text-3xl md:text-5xl font-bold text-blue-500 mb-2">100%</div>
              <div className="text-gray-400 text-sm md:text-base">Seguro</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Raffles */}
      <div className="py-24 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Rifas em </span>
              <span className="text-gradient-gold">Destaque</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Escolha uma de nossas rifas especiais e concorra a prêmios incríveis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {raffles.map((raffle) => (
              <div 
                key={raffle.id} 
                className="bg-card-bg rounded-3xl overflow-hidden shadow-2xl card-hover border-2 border-gray-700 relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold"></div>
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">{raffle.icon}</div>
                    <div className="text-4xl md:text-5xl font-black text-gold mb-3">
                      R$ {raffle.prize.toLocaleString('pt-BR')}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{raffle.title}</h3>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Probabilidade de ganho</span>
                      <span className="font-bold text-green-400">{raffle.fakeProbability}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                      <div 
                        className="bg-gradient-gold h-4 rounded-full" 
                        style={{ width: `${raffle.fakeProbability}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-gray-400 text-sm mb-8">
                    <div>
                      <span className="block">Participantes</span>
                      <span className="text-white font-bold">{raffle.entries.toLocaleString('pt-BR')}</span>
                    </div>
                    <div>
                      <span className="block">Valor do prêmio</span>
                      <span className="text-gold font-bold">R$ {raffle.prize.toLocaleString('pt-BR')}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href="/rifas"
                    className="w-full bg-gradient-gold text-black font-black py-4 px-6 rounded-full text-center block transition duration-300 hover:opacity-90 border-2 border-gold"
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
      <div className="py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por que escolher nossas rifas?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Oferecemos a melhor experiência em rifas online com tecnologia de ponta
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card-bg p-8 rounded-2xl border border-gray-700 hover:border-gold transition duration-300 text-center"
              >
                <div className="text-5xl mb-6 text-center w-full">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Q0YWYzNyIvPjxwYXRoIGQ9Ik0wIDUwIEw1MCAwIEwxMDAgNTAgTDUwIDEwMCBaIiBmaWxsPSIjYjg4NjBiIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8">
            Pronto para começar a ganhar?
          </h2>
          <p className="text-2xl md:text-3xl text-gray-900 mb-12 max-w-4xl mx-auto">
            Junte-se a milhares de usuários que já ganharam dinheiro conosco
          </p>
          <Link 
            href="/cadastro"
            className="bg-black text-gold font-black py-6 px-12 rounded-full text-2xl md:text-3xl transition duration-300 transform hover:scale-105 btn-hover border-4 border-black shadow-2xl"
          >
            CRIAR MINHA CONTA
          </Link>
        </div>
      </div>
    </div>
  );
}