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
  const [filter, setFilter] = useState('all'); // all, ending-soon, high-value

  useEffect(() => {
    // Simular carregamento de rifas
    const mockRaffles: Raffle[] = [
      {
        id: 1,
        title: 'iPhone 15 Pro Max',
        description: 'iPhone 15 Pro Max 256GB - Cor Titânio Natural',
        price: 5.00,
        image: '/iphone.jpg',
        endDate: '2024-12-31',
        totalNumbers: 1000,
        availableNumbers: 750
      },
      {
        id: 2,
        title: 'MacBook Pro M3',
        description: 'MacBook Pro 14" M3 Pro 18GB RAM 512GB SSD',
        price: 10.00,
        image: '/macbook.jpg',
        endDate: '2024-11-30',
        totalNumbers: 500,
        availableNumbers: 200
      },
      {
        id: 3,
        title: 'Viagem Disney Orlando',
        description: 'Viagem para Disney Orlando para 4 pessoas',
        price: 20.00,
        image: '/disney.jpg',
        endDate: '2024-10-31',
        totalNumbers: 1000,
        availableNumbers: 850
      },
      {
        id: 4,
        title: 'PlayStation 5',
        description: 'PlayStation 5 Standard Edition',
        price: 8.00,
        image: '/ps5.jpg',
        endDate: '2024-11-15',
        totalNumbers: 750,
        availableNumbers: 600
      },
      {
        id: 5,
        title: 'Samsung Smart TV 65"',
        description: 'Samsung Smart TV 4K 65" QLED',
        price: 15.00,
        image: '/tv.jpg',
        endDate: '2024-12-15',
        totalNumbers: 600,
        availableNumbers: 420
      },
      {
        id: 6,
        title: 'Notebook Gamer',
        description: 'Notebook Gamer com RTX 4060',
        price: 12.00,
        image: '/notebook.jpg',
        endDate: '2024-11-20',
        totalNumbers: 800,
        availableNumbers: 720
      }
    ];

    setTimeout(() => {
      setRaffles(mockRaffles);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredRaffles = raffles.filter(raffle => {
    if (filter === 'ending-soon') {
      // Filtrar rifas que terminam em 30 dias
      const endDate = new Date(raffle.endDate);
      const today = new Date();
      const diffTime = endDate.getTime() - today.getTime();
      const diffDays = diffTime / (1000 * 3600 * 24);
      return diffDays <= 30;
    }
    if (filter === 'high-value') {
      // Filtrar rifas com preço acima de R$10
      return raffle.price >= 10;
    }
    return true; // all
  });

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

        {/* Filtros */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Todas
          </button>
          <button 
            onClick={() => setFilter('ending-soon')}
            className={`px-4 py-2 rounded-full ${filter === 'ending-soon' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Terminando em breve
          </button>
          <button 
            onClick={() => setFilter('high-value')}
            className={`px-4 py-2 rounded-full ${filter === 'high-value' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Valores mais altos
          </button>
        </div>

        {filteredRaffles.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Nenhuma rifa encontrada</h2>
            <p className="text-gray-600 mb-6">Não há rifas disponíveis com os filtros selecionados.</p>
            <button 
              onClick={() => setFilter('all')}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Ver todas as rifas
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRaffles.map((raffle) => (
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
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center block font-medium"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}