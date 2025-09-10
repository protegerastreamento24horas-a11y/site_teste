'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RafflesPage() {
  const [raffles] = useState([
    { 
      id: 1, 
      title: 'Sorteio Rápido R$ 1.000,00', 
      probability: 95, 
      prize: 1000,
      cost: 10,
      fakeProbability: 92,
      icon: '⚡'
    },
    { 
      id: 2, 
      title: 'Sorteio Médio R$ 500,00', 
      probability: 80, 
      prize: 500,
      cost: 5,
      fakeProbability: 95,
      icon: '💰'
    },
    { 
      id: 3, 
      title: 'Sorteio Premium R$ 2.000,00', 
      probability: 60, 
      prize: 2000,
      cost: 20,
      fakeProbability: 90,
      icon: '🌟'
    },
    { 
      id: 4, 
      title: 'Sorteio Express R$ 100,00', 
      probability: 98, 
      prize: 100,
      cost: 1,
      fakeProbability: 98,
      icon: '🚀'
    },
    { 
      id: 5, 
      title: 'Mega Sorteio R$ 5.000,00', 
      probability: 30, 
      prize: 5000,
      cost: 50,
      fakeProbability: 85,
      icon: '💎'
    },
    { 
      id: 6, 
      title: 'Sorteio Ouro R$ 3.000,00', 
      probability: 50, 
      prize: 3000,
      cost: 30,
      fakeProbability: 88,
      icon: '🥇'
    },
  ]);

  const [filter, setFilter] = useState('all');

  const filteredRaffles = raffles.filter(raffle => {
    if (filter === 'low') return raffle.cost <= 10;
    if (filter === 'medium') return raffle.cost > 10 && raffle.cost <= 30;
    if (filter === 'high') return raffle.cost > 30;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Sorteios Disponíveis</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Participe de nossos sorteios e concorra a prêmios em dinheiro. Probabilidade de ganho acima de 90%!
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
              filter === 'all' 
                ? 'bg-gradient-red text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('low')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
              filter === 'low' 
                ? 'bg-gradient-red text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Até R$ 10
          </button>
          <button
            onClick={() => setFilter('medium')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
              filter === 'medium' 
                ? 'bg-gradient-red text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            R$ 10 - R$ 30
          </button>
          <button
            onClick={() => setFilter('high')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
              filter === 'high' 
                ? 'bg-gradient-red text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Acima de R$ 30
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRaffles.map((raffle) => (
            <div 
              key={raffle.id} 
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 card-hover"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{raffle.icon}</div>
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {raffle.fakeProbability}% de chance
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    R$ {raffle.prize.toLocaleString('pt-BR')}
                  </div>
                  <h3 className="text-lg font-bold text-white">{raffle.title}</h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Probabilidade real</span>
                    <span className="font-bold text-green-400">{raffle.probability}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-gold h-2.5 rounded-full" 
                      style={{ width: `${raffle.probability}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-gray-400 text-sm">Custo</span>
                    <div className="text-white font-bold">R$ {raffle.cost.toFixed(2)}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Prêmio</span>
                    <div className="text-green-400 font-bold">R$ {raffle.prize.toLocaleString('pt-BR')}</div>
                  </div>
                </div>
                
                <Link 
                  href={`/sorteios/${raffle.id}`}
                  className="w-full bg-gradient-red hover:opacity-90 text-white font-bold py-3 px-4 rounded-full text-center block transition duration-300"
                >
                  PARTICIPAR AGORA
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredRaffles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🎲</div>
            <h3 className="text-xl font-bold text-white mb-2">Nenhum sorteio encontrado</h3>
            <p className="text-gray-400 mb-6">Tente ajustar seus filtros de busca</p>
            <button
              onClick={() => setFilter('all')}
              className="bg-gradient-red hover:opacity-90 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Ver todos os sorteios
            </button>
          </div>
        )}
      </div>
    </div>
  );
}