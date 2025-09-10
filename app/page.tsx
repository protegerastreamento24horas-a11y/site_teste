'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [winners, setWinners] = useState([
    { id: 1, name: 'Carlos Silva', prize: 'R$ 500,00', time: '2 minutos atrás' },
    { id: 2, name: 'Ana Oliveira', prize: 'R$ 500,00', time: '5 minutos atrás' },
    { id: 3, name: 'Roberto Santos', prize: 'R$ 1.000,00', time: '7 minutos atrás' },
    { id: 4, name: 'Mariana Costa', prize: 'R$ 500,00', time: '10 minutos atrás' },
    { id: 5, name: 'Pedro Almeida', prize: 'R$ 2.000,00', time: '12 minutos atrás' },
    { id: 6, name: 'Juliana Pereira', prize: 'R$ 500,00', time: '15 minutos atrás' },
  ]);

  const [raffles] = useState([
    { id: 1, title: 'Prêmio de R$ 1.000,00', probability: 95, prize: 1000 },
    { id: 2, title: 'Prêmio de R$ 500,00', probability: 92, prize: 500 },
    { id: 3, title: 'Prêmio de R$ 2.000,00', probability: 90, prize: 2000 },
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Banner */}
      <div className="relative bg-gradient-to-r from-gray-900 to-black py-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="animate-marquee whitespace-nowrap flex">
            {[...winners, ...winners].map((winner, index) => (
              <div key={index} className="mx-8 flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-600 mr-3"></div>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Sorteios </span>
            <span className="text-red-600">Automáticos</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Participe de sorteios instantâneos com prêmios em dinheiro. Probabilidade de ganho acima de 90%!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/sorteios"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
            >
              PARTICIPAR AGORA
            </Link>
            <Link 
              href="/login"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 border border-gray-600"
            >
              ENTRAR
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Raffles */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Sorteios em </span>
            <span className="text-red-600">Destaque</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {raffles.map((raffle) => (
              <div key={raffle.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">
                      R$ {raffle.prize.toFixed(2)}
                    </div>
                    <h3 className="text-xl font-bold text-white">{raffle.title}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Probabilidade de ganho</span>
                      <span>{raffle.probability}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-red-600 h-2.5 rounded-full" 
                        style={{ width: `${raffle.probability}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Link 
                    href="/login"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg text-center block transition duration-300"
                  >
                    PARTICIPAR
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Como </span>
            <span className="text-red-600">Funciona</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-900 rounded-xl">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cadastre-se</h3>
              <p className="text-gray-400">Crie sua conta gratuitamente em segundos</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900 rounded-xl">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Participe</h3>
              <p className="text-gray-400">Escolha um sorteio e participe com um clique</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900 rounded-xl">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ganhe</h3>
              <p className="text-gray-400">Receba prêmios em dinheiro na hora</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}