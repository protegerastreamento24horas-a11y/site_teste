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
        title: 'Raspadinha Ouro',
        description: 'Raspadinha com prêmios de até R$10.000',
        price: 5.00,
        endDate: '2024-12-31',
        totalNumbers: 1000,
        availableNumbers: 750,
        prizeValue: 10000,
        category: 'Premium',
        icon: '🥇'
      },
      {
        id: 2,
        title: 'Raspadinha Diamante',
        description: 'Raspadinha com prêmios de até R$50.000',
        price: 20.00,
        endDate: '2024-12-15',
        totalNumbers: 200,
        availableNumbers: 50,
        prizeValue: 50000,
        category: 'Premium',
        icon: '💎'
      },
      {
        id: 3,
        title: 'Raspadinha Platina',
        description: 'Raspadinha com prêmios de até R$25.000',
        price: 10.00,
        endDate: '2024-11-20',
        totalNumbers: 300,
        availableNumbers: 150,
        prizeValue: 25000,
        category: 'Popular',
        icon: '🔮'
      },
      {
        id: 4,
        title: 'Raspadinha Prata',
        description: 'Raspadinha com prêmios de até R$5.000',
        price: 3.00,
        endDate: '2024-11-30',
        totalNumbers: 500,
        availableNumbers: 200,
        prizeValue: 5000,
        category: 'Popular',
        icon: '🥈'
      },
      {
        id: 5,
        title: 'Raspadinha Bronze',
        description: 'Raspadinha com prêmios de até R$2.000',
        price: 1.00,
        endDate: '2024-10-31',
        totalNumbers: 1000,
        availableNumbers: 850,
        prizeValue: 2000,
        category: 'Iniciante',
        icon: '🥉'
      },
      {
        id: 6,
        title: 'Raspadinha Safira',
        description: 'Raspadinha com prêmios de até R$8.000',
        price: 4.00,
        endDate: '2024-10-25',
        totalNumbers: 600,
        availableNumbers: 200,
        prizeValue: 8000,
        category: 'Iniciante',
        icon: '💙'
      }
    ];

    setTimeout(() => {
      setRaffles(mockRaffles);
      setLoading(false);
    }, 800);
  }, []);

  const filteredRaffles = raffles.filter(raffle => {
    const matchesFilter = filter === 'all' || 
      (filter === 'premium' && raffle.category === 'Premium') ||
      (filter === 'popular' && raffle.category === 'Popular') ||
      (filter === 'iniciante' && raffle.category === 'Iniciante');
      
    const matchesSearch = raffle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      raffle.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      raffle.category.toLowerCase().includes(searchTerm.toLowerCase());
      
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Nossas Raspadinhas</h1>
            <p className="text-gray-400">Carregando raspadinhas premium...</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card p-6 animate-pulse">
                <div className="bg-gray-700 h-32 rounded-lg mb-6"></div>
                <div className="h-6 bg-gray-700 rounded mb-4"></div>
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded mb-6 w-3/4"></div>
                <div className="h-10 bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Raspadinhas Premium</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Escolha entre as melhores raspadinhas com prêmios incríveis. 
            Cada raspadinha oferece a chance de ganhar prêmios em dinheiro real!
          </p>
        </div>

        {/* Search and Filters */}
        <div className="card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar raspadinhas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-card-bg border border-border rounded-lg py-3 px-4 text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    ? 'bg-gradient-primary text-white' 
                    : 'bg-card-bg text-gray-300 hover:bg-gray-800 border border-border'
                }`}
              >
                Todas
              </button>
              <button 
                onClick={() => setFilter('premium')}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === 'premium' 
                    ? 'bg-gradient-secondary text-white' 
                    : 'bg-card-bg text-gray-300 hover:bg-gray-800 border border-border'
                }`}
              >
                Premium
              </button>
              <button 
                onClick={() => setFilter('popular')}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === 'popular' 
                    ? 'bg-gradient-accent text-white' 
                    : 'bg-card-bg text-gray-300 hover:bg-gray-800 border border-border'
                }`}
              >
                Popular
              </button>
              <button 
                onClick={() => setFilter('iniciante')}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === 'iniciante' 
                    ? 'bg-gradient-primary text-white' 
                    : 'bg-card-bg text-gray-300 hover:bg-gray-800 border border-border'
                }`}
              >
                Iniciante
              </button>
            </div>
          </div>
        </div>

        {filteredRaffles.length === 0 ? (
          <div className="card p-12 text-center">
            <div className="text-5xl mb-6">🎲</div>
            <h2 className="text-2xl font-bold mb-4">Nenhuma raspadinha encontrada</h2>
            <p className="text-gray-400 mb-8">Não há raspadinhas disponíveis com os filtros selecionados.</p>
            <button 
              onClick={() => {
                setFilter('all');
                setSearchTerm('');
              }}
              className="btn btn-primary px-6 py-3 rounded-full"
            >
              Ver todas as raspadinhas
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRaffles.map((raffle) => (
              <div 
                key={raffle.id} 
                className="scratch-card grid-item hover:glow"
              >
                <div className="card overflow-hidden h-full">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-5xl">{raffle.icon}</div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">Prêmio máximo</div>
                        <div className="text-xl font-bold text-gradient-primary">R$ {raffle.prizeValue.toLocaleString('pt-BR')}</div>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-2">{raffle.title}</h2>
                    <p className="text-gray-400 text-sm mb-4">{raffle.description}</p>
                    
                    <div className="flex justify-between items-center mb-5">
                      <div>
                        <div className="text-xs text-gray-400">Valor por raspadinha</div>
                        <div className="text-lg font-bold text-primary">R$ {raffle.price.toFixed(2)}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">Categoria</div>
                        <div className="text-sm font-medium">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            raffle.category === 'Premium' ? 'bg-gradient-secondary text-white' :
                            raffle.category === 'Popular' ? 'bg-gradient-accent text-white' :
                            'bg-gradient-primary text-white'
                          }`}>
                            {raffle.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Raspadinhas disponíveis</span>
                        <span>{raffle.availableNumbers}/{raffle.totalNumbers}</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className={`${
                            raffle.category === 'Premium' ? 'bg-gradient-secondary' :
                            raffle.category === 'Popular' ? 'bg-gradient-accent' :
                            'bg-gradient-primary'
                          } h-2 rounded-full`} 
                          style={{ width: `${((raffle.totalNumbers - raffle.availableNumbers) / raffle.totalNumbers) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/rifas/${raffle.id}`}
                      className="btn btn-primary w-full py-3 rounded-full font-bold"
                    >
                      Raspar Agora
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