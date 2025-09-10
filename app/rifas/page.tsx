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
  badge: string;
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
        title: 'Golden Fortune',
        description: 'Premium raffle with up to R$100,000 prize',
        price: 10.00,
        endDate: '2024-12-31',
        totalNumbers: 2000,
        availableNumbers: 750,
        prizeValue: 100000,
        category: 'Premium',
        icon: '🥇',
        badge: 'premium'
      },
      {
        id: 2,
        title: 'Diamond Dreams',
        description: 'Luxury raffle with up to R$500,000 prize',
        price: 50.00,
        endDate: '2024-12-15',
        totalNumbers: 1000,
        availableNumbers: 150,
        prizeValue: 500000,
        category: 'Premium',
        icon: '💎',
        badge: 'popular'
      },
      {
        id: 3,
        title: 'Platinum Power',
        description: 'High-value raffle with up to R$250,000 prize',
        price: 25.00,
        endDate: '2024-11-20',
        totalNumbers: 5000,
        availableNumbers: 1500,
        prizeValue: 250000,
        category: 'Popular',
        icon: '🔮',
        badge: 'new'
      },
      {
        id: 4,
        title: 'Silver Star',
        description: 'Popular raffle with up to R$50,000 prize',
        price: 5.00,
        endDate: '2024-11-30',
        totalNumbers: 10000,
        availableNumbers: 3200,
        prizeValue: 50000,
        category: 'Popular',
        icon: '🥈',
        badge: 'popular'
      },
      {
        id: 5,
        title: 'Bronze Boost',
        description: 'Beginner raffle with up to R$10,000 prize',
        price: 2.00,
        endDate: '2024-10-31',
        totalNumbers: 20000,
        availableNumbers: 8500,
        prizeValue: 10000,
        category: 'Beginner',
        icon: '🥉',
        badge: 'new'
      },
      {
        id: 6,
        title: 'Sapphire Special',
        description: 'Special raffle with up to R$75,000 prize',
        price: 7.50,
        endDate: '2024-10-25',
        totalNumbers: 8000,
        availableNumbers: 2400,
        prizeValue: 75000,
        category: 'Beginner',
        icon: '🔷',
        badge: 'new'
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
      (filter === 'beginner' && raffle.category === 'Beginner');
      
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
            <h1 className="text-3xl font-bold mb-2">Our Premium Raffles</h1>
            <p className="text-text-secondary">Loading premium raffles...</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card p-6 animate-pulse">
                <div className="bg-surface rounded-lg mb-6 h-48"></div>
                <div className="h-6 bg-surface rounded mb-4"></div>
                <div className="h-4 bg-surface rounded mb-2"></div>
                <div className="h-4 bg-surface rounded mb-6 w-3/4"></div>
                <div className="h-12 bg-surface rounded"></div>
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Premium Raffles</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose from our best raffles with incredible prizes. 
            Each raffle offers the chance to win real money prizes!
          </p>
        </div>

        {/* Search and Filters */}
        <div className="card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search raffles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-surface border border-border rounded-lg py-3 px-4 text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-tertiary absolute right-4 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    : 'bg-surface text-text-secondary hover:bg-surface-hover border border-border'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('premium')}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === 'premium' 
                    ? 'bg-gradient-secondary text-white' 
                    : 'bg-surface text-text-secondary hover:bg-surface-hover border border-border'
                }`}
              >
                Premium
              </button>
              <button 
                onClick={() => setFilter('popular')}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === 'popular' 
                    ? 'bg-gradient-accent text-white' 
                    : 'bg-surface text-text-secondary hover:bg-surface-hover border border-border'
                }`}
              >
                Popular
              </button>
              <button 
                onClick={() => setFilter('beginner')}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === 'beginner' 
                    ? 'bg-gradient-gold text-black' 
                    : 'bg-surface text-text-secondary hover:bg-surface-hover border border-border'
                }`}
              >
                Beginner
              </button>
            </div>
          </div>
        </div>

        {filteredRaffles.length === 0 ? (
          <div className="card p-12 text-center">
            <div className="text-5xl mb-6">🎲</div>
            <h2 className="text-2xl font-bold mb-4">No raffles found</h2>
            <p className="text-text-secondary mb-8">There are no raffles available with the selected filters.</p>
            <button 
              onClick={() => {
                setFilter('all');
                setSearchTerm('');
              }}
              className="btn btn-primary px-6 py-3 rounded-full"
            >
              View All Raffles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRaffles.map((raffle) => (
              <div 
                key={raffle.id} 
                className="card-premium grid-item"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-5xl">{raffle.icon}</div>
                    <div className="flex flex-col items-end">
                      <div className="badge badge-{raffle.badge}">
                        {raffle.badge.charAt(0).toUpperCase() + raffle.badge.slice(1)}
                      </div>
                      <div className="text-right mt-2">
                        <div className="text-xs text-text-tertiary">MAX PRIZE</div>
                        <div className="prize-display-sm text-gradient-gold">
                          R$ {raffle.prizeValue.toLocaleString('pt-BR')}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2 text-white">{raffle.title}</h2>
                  <p className="text-text-secondary text-sm mb-4">{raffle.description}</p>
                  
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <div className="text-xs text-text-tertiary">PRICE PER TICKET</div>
                      <div className="text-lg font-bold text-primary">R$ {raffle.price.toFixed(2)}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-text-tertiary">CATEGORY</div>
                      <div className="text-sm font-medium">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          raffle.category === 'Premium' ? 'bg-gradient-secondary text-white' :
                          raffle.category === 'Popular' ? 'bg-gradient-accent text-white' :
                          'bg-gradient-gold text-black'
                        }`}>
                          {raffle.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-text-tertiary mb-1">
                      <span>Tickets Available</span>
                      <span>{raffle.availableNumbers.toLocaleString('pt-BR')}/{raffle.totalNumbers.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="w-full bg-surface rounded-full h-2.5">
                      <div 
                        className={`${
                          raffle.category === 'Premium' ? 'bg-gradient-secondary' :
                          raffle.category === 'Popular' ? 'bg-gradient-accent' :
                          'bg-gradient-gold'
                        } h-2.5 rounded-full`} 
                        style={{ width: `${((raffle.totalNumbers - raffle.availableNumbers) / raffle.totalNumbers) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/rifas/${raffle.id}`}
                    className="btn btn-primary w-full py-3 rounded-full font-bold"
                  >
                    Play Now
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