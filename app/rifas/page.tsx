'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Raffle {
  id: number;
  title: string;
  description: string;
  price: number;
  endDate: string;
  totalNumbers: number;
  availableNumbers: number;
  prizeValue: number;
  category: string;
  icon: string;
}

export default function RafflesPage() {
  const [raffles, setRaffles] = useState<Raffle[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simular carregamento de rifas
    const mockRaffles: Raffle[] = [
      {
        id: 1,
        title: 'iPhone 15 Pro',
        description: 'Rifa iPhone 15 Pro 256GB',
        price: 10.00,
        endDate: '2024-12-31',
        totalNumbers: 2000,
        availableNumbers: 750,
        prizeValue: 12000,
        category: 'Eletrônicos',
        icon: '📱'
      },
      {
        id: 2,
        title: 'BMW X1',
        description: 'Rifa BMW X1 2024',
        price: 50.00,
        endDate: '2024-12-15',
        totalNumbers: 1000,
        availableNumbers: 150,
        prizeValue: 350000,
        category: 'Automóveis',
        icon: '🚗'
      },
      {
        id: 3,
        title: 'Casa de Praia',
        description: 'Rifa Casa de Praia em Florianópolis',
        price: 100.00,
        endDate: '2024-11-20',
        totalNumbers: 5000,
        availableNumbers: 1500,
        prizeValue: 750000,
        category: 'Imóveis',
        icon: '🏖️'
      },
      {
        id: 4,
        title: 'Viagem para Disney',
        description: 'Rifa Viagem para Disney com 4 pessoas',
        price: 25.00,
        endDate: '2024-11-30',
        totalNumbers: 10000,
        availableNumbers: 3200,
        prizeValue: 25000,
        category: 'Viagens',
        icon: '🎢'
      },
      {
        id: 5,
        title: 'PlayStation 5',
        description: 'Rifa PlayStation 5 + 5 jogos',
        price: 5.00,
        endDate: '2024-10-31',
        totalNumbers: 20000,
        availableNumbers: 8500,
        prizeValue: 5000,
        category: 'Eletrônicos',
        icon: '🎮'
      },
      {
        id: 6,
        title: 'Motocicleta Harley',
        description: 'Rifa Harley Davidson Street 750',
        price: 30.00,
        endDate: '2024-10-25',
        totalNumbers: 8000,
        availableNumbers: 2400,
        prizeValue: 85000,
        category: 'Automóveis',
        icon: '🏍️'
      }
    ];

    setTimeout(() => {
      setRaffles(mockRaffles);
      setLoading(false);
    }, 800);
  }, []);

  const filteredRaffles = raffles.filter(raffle => {
    const matchesFilter = filter === 'all' || 
      (filter === 'Eletrônicos' && raffle.category === 'Eletrônicos') ||
      (filter === 'Automóveis' && raffle.category === 'Automóveis') ||
      (filter === 'Imóveis' && raffle.category === 'Imóveis') ||
      (filter === 'Viagens' && raffle.category === 'Viagens');
      
    const matchesSearch = raffle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      raffle.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      raffle.category.toLowerCase().includes(searchTerm.toLowerCase());
      
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Nossas Rifas</h1>
            <p className="text-gray-600">Carregando rifas premium...</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow p-6 animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-6"></div>
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-6 w-3/4"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🔥 RIFAS DISPONÍVEIS</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Escolha entre as melhores rifas com prêmios incríveis. 
            Cada rifa oferece a chance de ganhar prêmios em dinheiro real!
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar rifas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 absolute right-4 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todas
              </button>
              <button 
                onClick={() => setFilter('Eletrônicos')}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === 'Eletrônicos' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Eletrônicos
              </button>
              <button 
                onClick={() => setFilter('Automóveis')}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === 'Automóveis' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Automóveis
              </button>
              <button 
                onClick={() => setFilter('Imóveis')}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === 'Imóveis' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Imóveis
              </button>
              <button 
                onClick={() => setFilter('Viagens')}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === 'Viagens' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Viagens
              </button>
            </div>
          </div>
        </div>

        {filteredRaffles.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-12 text-center">
            <div className="text-5xl mb-6">🎲</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nenhuma rifa encontrada</h2>
            <p className="text-gray-600 mb-8">Não há rifas disponíveis com os filtros selecionados.</p>
            <button 
              onClick={() => {
                setFilter('all');
                setSearchTerm('');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700"
            >
              Ver todas as rifas
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRaffles.map((raffle) => (
              <div 
                key={raffle.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition grid-item"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-5xl">{raffle.icon}</div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">PRÊMIO MÁXIMO</div>
                      <div className="text-xl font-bold text-green-600">
                        R$ {raffle.prizeValue.toLocaleString('pt-BR')}
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2 text-gray-900">{raffle.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{raffle.description}</p>
                  
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <div className="text-xs text-gray-500">VALOR POR NÚMERO</div>
                      <div className="text-lg font-bold text-blue-600">R$ {raffle.price.toFixed(2)}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">CATEGORIA</div>
                      <div className="text-sm font-medium text-gray-900">
                        {raffle.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Números disponíveis</span>
                      <span>{raffle.availableNumbers.toLocaleString('pt-BR')}/{raffle.totalNumbers.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" 
                        style={{ width: `${((raffle.totalNumbers - raffle.availableNumbers) / raffle.totalNumbers) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/rifas/${raffle.id}`}
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-full font-bold hover:from-blue-700 hover:to-purple-700"
                  >
                    PARTICIPAR
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