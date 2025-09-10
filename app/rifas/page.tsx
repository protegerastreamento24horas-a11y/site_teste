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
  prizeValue: number;
  category: string;
}

export default function RafflesPage() {
  const [raffles, setRaffles] = useState<Raffle[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, ending-soon, high-value
  const [searchTerm, setSearchTerm] = useState('');

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
        availableNumbers: 750,
        prizeValue: 6500,
        category: 'Eletrônicos'
      },
      {
        id: 2,
        title: 'MacBook Pro M3',
        description: 'MacBook Pro 14" M3 Pro 18GB RAM 512GB SSD',
        price: 10.00,
        image: '/macbook.jpg',
        endDate: '2024-11-30',
        totalNumbers: 500,
        availableNumbers: 200,
        prizeValue: 15000,
        category: 'Eletrônicos'
      },
      {
        id: 3,
        title: 'Viagem Disney Orlando',
        description: 'Viagem para Disney Orlando para 4 pessoas',
        price: 20.00,
        image: '/disney.jpg',
        endDate: '2024-10-31',
        totalNumbers: 1000,
        availableNumbers: 850,
        prizeValue: 25000,
        category: 'Viagens'
      },
      {
        id: 4,
        title: 'PlayStation 5',
        description: 'PlayStation 5 Standard Edition',
        price: 8.00,
        image: '/ps5.jpg',
        endDate: '2024-11-15',
        totalNumbers: 750,
        availableNumbers: 600,
        prizeValue: 3500,
        category: 'Eletrônicos'
      },
      {
        id: 5,
        title: 'Samsung Smart TV 65"',
        description: 'Samsung Smart TV 4K 65" QLED',
        price: 15.00,
        image: '/tv.jpg',
        endDate: '2024-12-15',
        totalNumbers: 600,
        availableNumbers: 420,
        prizeValue: 5500,
        category: 'Eletrônicos'
      },
      {
        id: 6,
        title: 'Notebook Gamer',
        description: 'Notebook Gamer com RTX 4060',
        price: 12.00,
        image: '/notebook.jpg',
        endDate: '2024-11-20',
        totalNumbers: 800,
        availableNumbers: 720,
        prizeValue: 8000,
        category: 'Eletrônicos'
      },
      {
        id: 7,
        title: 'Carro 0KM',
        description: 'Volkswagen Gol 1.0 2024',
        price: 50.00,
        image: '/car.jpg',
        endDate: '2024-12-20',
        totalNumbers: 2000,
        availableNumbers: 1850,
        prizeValue: 85000,
        category: 'Automóveis'
      },
      {
        id: 8,
        title: 'Motocicleta Harley Davidson',
        description: 'Harley Davidson Street 750',
        price: 30.00,
        image: '/motorcycle.jpg',
        endDate: '2024-11-10',
        totalNumbers: 1000,
        availableNumbers: 750,
        prizeValue: 45000,
        category: 'Automóveis'
      }
    ];

    setTimeout(() => {
      setRaffles(mockRaffles);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredRaffles = raffles.filter(raffle => {
    const matchesFilter = filter === 'all' || 
      (filter === 'ending-soon' && new Date(raffle.endDate) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)) ||
      (filter === 'high-value' && raffle.prizeValue >= 10000);
      
    const matchesSearch = raffle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      raffle.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      raffle.category.toLowerCase().includes(searchTerm.toLowerCase());
      
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Nossas Rifas</h1>
            <p className="text-gray-400 text-xl">Carregando rifas premium...</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-card-bg rounded-2xl overflow-hidden shadow-xl border border-gray-700 animate-pulse">
                <div className="bg-gray-700 h-64 w-full"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-700 rounded mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded mb-6 w-3/4"></div>
                  <div className="h-10 bg-gray-700 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Rifas Premium</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Escolha entre as melhores rifas com prêmios incríveis e alta probabilidade de ganho
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-10 bg-card-bg rounded-2xl p-6 border border-gray-700">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar rifas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-dark-bg border border-gray-700 rounded-full py-3 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 absolute right-6 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => setFilter('all')}
                className={`px-5 py-2 rounded-full font-medium transition duration-300 ${
                  filter === 'all' 
                    ? 'bg-gradient-gold text-black' 
                    : 'bg-dark-bg text-gray-300 hover:bg-gray-800'
                }`}
              >
                Todas
              </button>
              <button 
                onClick={() => setFilter('ending-soon')}
                className={`px-5 py-2 rounded-full font-medium transition duration-300 ${
                  filter === 'ending-soon' 
                    ? 'bg-gradient-gold text-black' 
                    : 'bg-dark-bg text-gray-300 hover:bg-gray-800'
                }`}
              >
                Terminando em breve
              </button>
              <button 
                onClick={() => setFilter('high-value')}
                className={`px-5 py-2 rounded-full font-medium transition duration-300 ${
                  filter === 'high-value' 
                    ? 'bg-gradient-gold text-black' 
                    : 'bg-dark-bg text-gray-300 hover:bg-gray-800'
                }`}
              >
                Prêmios acima de R$10k
              </button>
            </div>
          </div>
        </div>

        {filteredRaffles.length === 0 ? (
          <div className="bg-card-bg rounded-2xl shadow-xl p-12 text-center border border-gray-700">
            <div className="text-6xl mb-6">🎲</div>
            <h2 className="text-2xl font-bold text-white mb-4">Nenhuma rifa encontrada</h2>
            <p className="text-gray-400 mb-8">Não há rifas disponíveis com os filtros selecionados.</p>
            <button 
              onClick={() => {
                setFilter('all');
                setSearchTerm('');
              }}
              className="bg-gradient-gold text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition duration-300"
            >
              Ver todas as rifas
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRaffles.map((raffle) => (
              <div 
                key={raffle.id} 
                className="bg-card-bg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 card-hover relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold"></div>
                <div className="bg-gray-200 border-2 border-dashed rounded-t-2xl w-full h-64" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="chip chip-red text-xs">{raffle.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Prêmio</div>
                      <div className="text-xl font-bold text-gold">R$ {raffle.prizeValue.toLocaleString('pt-BR')}</div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-2">{raffle.title}</h2>
                  <p className="text-gray-400 mb-5">{raffle.description}</p>
                  
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <div className="text-xs text-gray-400">Valor por número</div>
                      <div className="text-xl font-bold text-green-500">R$ {raffle.price.toFixed(2)}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Sorteio</div>
                      <div className="text-sm font-medium text-white">{raffle.endDate}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Números disponíveis</span>
                      <span>{raffle.availableNumbers}/{raffle.totalNumbers}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-gold h-3 rounded-full" 
                        style={{ width: `${((raffle.totalNumbers - raffle.availableNumbers) / raffle.totalNumbers) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/rifas/${raffle.id}`}
                    className="w-full bg-gradient-gold text-black font-bold py-3 px-4 rounded-full hover:opacity-90 transition-colors text-center block font-bold border-2 border-gold"
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