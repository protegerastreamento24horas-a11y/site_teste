'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface UserRaffle {
  id: number;
  title: string;
  numbers: number[];
  status: 'active' | 'drawn' | 'winner';
  purchaseDate: string;
  drawDate?: string;
  prize?: string;
}

export default function MyRafflesPage() {
  const [raffles, setRaffles] = useState<UserRaffle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento das rifas do usuário
    const mockRaffles: UserRaffle[] = [
      {
        id: 1,
        title: 'iPhone 15 Pro Max',
        numbers: [123, 456, 789],
        status: 'active',
        purchaseDate: '2024-09-01'
      },
      {
        id: 2,
        title: 'MacBook Pro M3',
        numbers: [234, 567],
        status: 'drawn',
        purchaseDate: '2024-08-15',
        drawDate: '2024-09-01',
        prize: 'MacBook Pro 14" M3 Pro'
      },
      {
        id: 3,
        title: 'Viagem Disney Orlando',
        numbers: [345, 678, 901, 234],
        status: 'winner',
        purchaseDate: '2024-07-20',
        drawDate: '2024-08-15',
        prize: 'Viagem para Disney Orlando para 4 pessoas'
      }
    ];

    setTimeout(() => {
      setRaffles(mockRaffles);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'drawn': return 'bg-gray-100 text-gray-800';
      case 'winner': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Ativa';
      case 'drawn': return 'Sorteada';
      case 'winner': return 'Ganhadora!';
      default: return 'Desconhecido';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando suas rifas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Minhas Rifas</h1>
          <p className="text-gray-600">Acompanhe suas rifas adquiridas</p>
        </div>

        {raffles.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Nenhuma rifa encontrada</h2>
            <p className="text-gray-600 mb-6">Você ainda não adquiriu nenhuma rifa.</p>
            <Link 
              href="/rifas"
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium inline-block"
            >
              Ver rifas disponíveis
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {raffles.map((raffle) => (
              <div key={raffle.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-gray-900">{raffle.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(raffle.status)}`}>
                      {getStatusText(raffle.status)}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-2">Números adquiridos:</p>
                    <div className="flex flex-wrap gap-2">
                      {raffle.numbers.map((number) => (
                        <span 
                          key={number} 
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md font-mono"
                        >
                          {number.toString().padStart(3, '0')}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Data da compra:</span>
                      <span>{raffle.purchaseDate}</span>
                    </div>
                    
                    {raffle.drawDate && (
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Data do sorteio:</span>
                        <span>{raffle.drawDate}</span>
                      </div>
                    )}
                    
                    {raffle.status === 'winner' && raffle.prize && (
                      <div className="mt-3 p-3 bg-green-50 rounded-md">
                        <p className="text-sm text-green-800">
                          <span className="font-bold">Prêmio:</span> {raffle.prize}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4">
                    <Link 
                      href={`/rifas/${raffle.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Ver detalhes da rifa
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}