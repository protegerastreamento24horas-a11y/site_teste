'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [winners] = useState([
    { id: 1, name: 'Carlos Silva', prize: 'R$ 5.500,00', time: 'Agora mesmo' },
    { id: 2, name: 'Ana Oliveira', prize: 'R$ 2.800,00', time: '2 minutos atrás' },
    { id: 3, name: 'Roberto Santos', prize: 'R$ 10.000,00', time: '5 minutos atrás' },
    { id: 4, name: 'Mariana Costa', prize: 'R$ 1.500,00', time: '7 minutos atrás' },
    { id: 5, name: 'Pedro Almeida', prize: 'R$ 15.000,00', time: '10 minutos atrás' },
  ]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Prêmios Instantâneos",
      description: "Ganhe prêmios em dinheiro real imediatamente após raspar",
      icon: "💰"
    },
    {
      title: "Sorteios Exclusivos",
      description: "Participe de sorteios especiais com prêmios maiores",
      icon: "🎁"
    },
    {
      title: "Diversas Temáticas",
      description: "Jogos com diferentes temas para todos os gostos",
      icon: "🍀"
    },
    {
      title: "Jogue a Qualquer Hora",
      description: "Acesse de onde estiver, a qualquer momento",
      icon: "📲"
    }
  ];

  const raffles = [
    { id: 1, title: 'Raspadinha Ouro', prize: 5000, icon: '🥇' },
    { id: 2, title: 'Raspadinha Prata', prize: 2000, icon: '🥈' },
    { id: 3, title: 'Raspadinha Bronze', prize: 1000, icon: '🥉' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="block">🎯 Raspe e Ganhe</span>
              <span className="block text-gradient-gold mt-2">de Verdade!</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Sua chance diária de mudar de vida com prêmios incríveis!
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
              Inspirada no estilo das grandes loterias, trazemos jogos divertidos, dinâmicos e com prêmios reais de até R$777.777!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/rifas" 
                className="btn btn-gold px-8 py-4 text-lg font-bold rounded-xl text-black"
              >
                Raspar Agora
              </Link>
              <Link 
                href="/como-funciona" 
                className="btn btn-outline px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Como Funciona
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Winners Marquee */}
      <div className="py-4 bg-card border-y border-border">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...winners, ...winners].map((winner, index) => (
            <div key={index} className="mx-8 flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
              <span className="text-green-500 font-bold">GANHADOR!</span>
              <span className="text-white mx-2">•</span>
              <span className="text-white font-medium">{winner.name}</span>
              <span className="text-white mx-2">ganhou</span>
              <span className="text-yellow-400 font-bold">{winner.prize}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card p-6 text-center grid-item"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Raffles */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Raspadinhas em Destaque</h2>
            <p className="text-xl text-gray-400">Escolha sua raspadinha e comece a raspar agora mesmo!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {raffles.map((raffle) => (
              <div 
                key={raffle.id} 
                className="scratch-card grid-item"
              >
                <div className="card p-8 h-full">
                  <div className="text-6xl mb-6 text-center">{raffle.icon}</div>
                  <h3 className="text-2xl font-bold text-center mb-4">{raffle.title}</h3>
                  <div className="text-3xl font-bold text-gold text-center mb-6">
                    R$ {raffle.prize.toLocaleString('pt-BR')}
                  </div>
                  <Link 
                    href={`/rifas/${raffle.id}`}
                    className="btn btn-gold w-full py-3 rounded-lg font-bold text-black"
                  >
                    Raspar Agora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Raspe e tenha a chance de ganhar!
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-10">
            Junte-se a milhares de usuários que já ganharam dinheiro conosco
          </p>
          <Link 
            href="/cadastro" 
            className="btn btn-primary px-8 py-4 text-lg font-bold rounded-xl text-white"
          >
            Criar Minha Conta Agora
          </Link>
        </div>
      </div>
    </div>
  );
}