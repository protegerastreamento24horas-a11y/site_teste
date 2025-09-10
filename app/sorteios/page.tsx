'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RafflesPage() {
  const [raffles, setRaffles] = useState([
    { 
      id: 1, 
      title: 'Sorteio Rápido R$ 1.000,00', 
      probability: 95, 
      prize: 1000,
      cost: 10,
      fakeProbability: 92
    },
    { 
      id: 2, 
      title: 'Sorteio Médio R$ 500,00', 
      probability: 80, 
      prize: 500,
      cost: 5,
      fakeProbability: 95
    },
    { 
      id: 3, 
      title: 'Sorteio Premium R$ 2.000,00', 
      probability: 60, 
      prize: 2000,
      cost: 20,
      fakeProbability: 90
    },
    { 
      id: 4, 
      title: 'Sorteio Express R$ 100,00', 
      probability: 98, 
      prize: 100,
      cost: 1,
      fakeProbability: 98
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Sorteios Disponíveis</h1>
          <p className="text-gray-400">Participe de nossos sorteios e concorra a prêmios em dinheiro</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {raffles.map((raffle) => (
            <div key={raffle.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    R$ {raffle.prize.toFixed(2)}
                  </div>
                  <h3 className="text-lg font-bold text-white">{raffle.title}</h3>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Probabilidade de ganho</span>
                    <span>{raffle.fakeProbability}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-red-600 h-2 rounded-full" 
                      style={{ width: `${raffle.fakeProbability}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-gray-400 text-sm">Custo por participação</span>
                    <div className="text-white font-bold">R$ {raffle.cost.toFixed(2)}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Prêmio</span>
                    <div className="text-green-400 font-bold">R$ {raffle.prize.toFixed(2)}</div>
                  </div>
                </div>
                
                <Link 
                  href={`/sorteios/${raffle.id}`}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg text-center block transition duration-300"
                >
                  PARTICIPAR AGORA
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}