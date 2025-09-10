'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Raffle {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  endDate: string;
  totalNumbers: number;
  availableNumbers: number;
}

export default function RafflesPage() {
  const [raffles, setRaffles] = useState<Raffle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de rifas
    const mockRaffles: Raffle[] = [
      {
        id: 1,
        title: 'Rifa iPhone 15 Pro',
        description: 'iPhone 15 Pro 256GB - Cor Titânio Natural',
        price: 5.00,
        image: '/iphone.jpg',
        endDate: '2024-12-31',
        totalNumbers: 1000,
        availableNumbers: 750
      },
      {
        id: 2,
        title: 'Rifa MacBook Pro',
        description: 'MacBook Pro 14" M3 Pro 18GB RAM 512GB SSD',
        price: 10.00,
        image: '/macbook.jpg',
        endDate: '2024-12-15',
        totalNumbers: 500,
        availableNumbers: 200
      },
      {
        id: 3,
        title: 'Rifa Viagem Disney',
        description: 'Viagem para Disney Orlando para 4 pessoas',
        price: 20.00,
        image: '/disney.jpg',
        endDate: '2024-11-30',
        totalNumbers: 1000,
        availableNumbers: 920
      }
    ];

    setTimeout(() => {
      setRaffles(mockRaffles);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando rifas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Nossas Rifas</h1>
          <p className="text-gray-600">Escolha uma rifa e concorra aos prêmios</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {raffles.map((raffle) => (
            <div key={raffle.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{raffle.title}</h2>
                <p className="text-gray-600 mb-4">{raffle.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-600">R$ {raffle.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500">Até {raffle.endDate}</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Números disponíveis</span>
                    <span>{raffle.availableNumbers}/{raffle.totalNumbers}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${((raffle.totalNumbers - raffle.availableNumbers) / raffle.totalNumbers) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <Link 
                  href={`/rifas/${raffle.id}`}
                  className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors text-center block font-medium"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}