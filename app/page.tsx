'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [winners, setWinners] = useState([
    { id: 1, name: 'Carlos Silva', prize: 'R$ 5.500,00', time: 'Agora mesmo' },
    { id: 2, name: 'Ana Oliveira', prize: 'R$ 2.800,00', time: '2 minutos atrás' },
    { id: 3, name: 'Roberto Santos', prize: 'R$ 10.000,00', time: '5 minutos atrás' },
    { id: 4, name: 'Mariana Costa', prize: 'R$ 1.500,00', time: '7 minutos atrás' },
    { id: 5, name: 'Pedro Almeida', prize: 'R$ 15.000,00', time: '10 minutos atrás' },
  ]);

  const raffles = [
    { id: 1, title: 'Rifa iPhone 15 Pro', prize: 12000, entries: 1250, maxEntries: 2000, icon: '📱' },
    { id: 2, title: 'Rifa BMW X1', prize: 350000, entries: 890, maxEntries: 1000, icon: '🚗' },
    { id: 3, title: 'Rifa Casa de Praia', prize: 750000, entries: 3200, maxEntries: 5000, icon: '🏖️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="block">RIFAS ONLINE</span>
              <span className="block text-yellow-400 mt-2">GANHE PRÊMIOS TODO DIA!</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Participe de rifas diárias e concorra a prêmios incríveis. 
              Jogue mini games grátis e ganhe créditos para mais rifas!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/rifas" 
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition"
              >
                PARTICIPAR AGORA
              </Link>
              <Link 
                href="/como-funciona" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition"
              >
                COMO FUNCIONA
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Últimos Ganhadores */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">🏆 ÚLTIMOS GANHADORES</h2>
            <p className="text-gray-600">OS GANHADORES SÃO NOTIFICADOS IMEDIATAMENTE APÓS O SORTEIO!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {winners.map((winner) => (
              <div key={winner.id} className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-6 shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{winner.name}</h3>
                    <p className="text-yellow-300 font-bold">GANHOU {winner.prize}</p>
                  </div>
                  <div className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    {winner.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rifas em Destaque */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🔥 RIFAS EM DESTAQUE</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Escolha entre nossas rifas mais concorridas e concorra a prêmios incríveis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {raffles.map((raffle) => (
              <div key={raffle.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="p-6">
                  <div className="text-5xl mb-4 text-center">{raffle.icon}</div>
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-900">{raffle.title}</h3>
                  
                  <div className="mb-4">
                    <div className="text-center text-2xl font-bold text-green-600">
                      R$ {raffle.prize.toLocaleString('pt-BR')}
                    </div>
                    <div className="text-center text-gray-500 text-sm">PRÊMIO MÁXIMO</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Números vendidos</span>
                      <span>{raffle.entries}/{raffle.maxEntries}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" 
                        style={{ width: `${(raffle.entries / raffle.maxEntries) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/rifas/${raffle.id}`}
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition"
                  >
                    PARTICIPAR
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/rifas" 
              className="inline-block bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition"
            >
              VER TODAS AS RIFAS
            </Link>
          </div>
        </div>
      </div>

      {/* Como Funciona */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">❓ COMO FUNCIONA</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Participar é muito simples! Siga os passos abaixo e concorra a prêmios incríveis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">ESCOLHA UMA RIFA</h3>
              <p className="text-gray-600">
                Navegue pelas rifas disponíveis e escolha a que deseja participar
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">PAGUE SEU NÚMERO</h3>
              <p className="text-gray-600">
                Realize o pagamento via PIX e garanta seu número da sorte
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AGUARDE O SORTEIO</h3>
              <p className="text-gray-600">
                Aguarde o sorteio e torça para ser o grande ganhador!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            PRONTO PARA TENTAR A SORTE?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Junte-se a milhares de usuários que já ganharam dinheiro conosco. 
            Comece agora e tenha a chance de ganhar prêmios incríveis!
          </p>
          <Link 
            href="/rifas" 
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition"
          >
            PARTICIPAR AGORA
          </Link>
        </div>
      </div>
    </div>
  );
}