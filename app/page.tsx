'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    totalPrizes: 0,
    activeRaffles: 0,
    happyWinners: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animação dos números
    const timer1 = setTimeout(() => setStats({ totalPrizes: 1500000, activeRaffles: 247, happyWinners: 12500 }), 300);
    const timer2 = setTimeout(() => setStats({ totalPrizes: 3200000, activeRaffles: 428, happyWinners: 28700 }), 600);
    const timer3 = setTimeout(() => setStats({ totalPrizes: 7777777, activeRaffles: 777, happyWinners: 77700 }), 900);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const features = [
    {
      title: "Instant Prizes",
      description: "Win real money prizes instantly after playing",
      icon: "⚡"
    },
    {
      title: "Fair Draws",
      description: "Provably fair draws with blockchain technology",
      icon: "⚖️"
    },
    {
      title: "Premium Themes",
      description: "Diverse raffle themes for all tastes",
      icon: "🎨"
    },
    {
      title: "Play Anytime",
      description: "Access from anywhere, anytime",
      icon: "📱"
    }
  ];

  const raffles = [
    { id: 1, title: 'Golden Ticket', prize: 100000, entries: 1250, maxEntries: 2000, icon: '🥇', badge: 'premium' },
    { id: 2, title: 'Diamond Dreams', prize: 500000, entries: 890, maxEntries: 1000, icon: '💎', badge: 'popular' },
    { id: 3, title: 'Platinum Power', prize: 250000, entries: 3200, maxEntries: 5000, icon: '🔮', badge: 'new' },
  ];

  const winners = [
    { name: 'Michael T.', prize: 'R$ 150.000', time: '2 minutes ago' },
    { name: 'Sarah K.', prize: 'R$ 75.000', time: '15 minutes ago' },
    { name: 'Robert J.', prize: 'R$ 300.000', time: '1 hour ago' },
    { name: 'Emma L.', prize: 'R$ 45.000', time: '2 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block bg-surface rounded-full px-4 py-1 mb-6 border border-border">
              <span className="text-sm font-medium text-gradient-primary">🎉 BIGGEST RAFFLE PLATFORM IN LATIN AMERICA</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6">
              <span className="block">Scratch, Win &</span>
              <span className="block bg-gradient-primary text-transparent bg-clip-text">Become a Millionaire</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-10">
              Join millions of players worldwide in the most exciting online raffle platform. 
              Play instantly and win real money prizes up to R$7,777,777!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/rifas" 
                className="btn btn-primary btn-lg px-8 py-4 rounded-full font-bold text-lg"
              >
                Start Playing Now
              </Link>
              <Link 
                href="/como-funciona" 
                className="btn btn-outline btn-lg px-8 py-4 rounded-full font-bold text-lg"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-60 h-60 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-card">
              <div className="stat-value text-gradient-primary">
                {stats.totalPrizes.toLocaleString('pt-BR')}
              </div>
              <div className="stat-label">Total Prizes Won (R$)</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value text-gradient-secondary">
                {stats.activeRaffles}
              </div>
              <div className="stat-label">Active Raffles</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value text-gradient-accent">
                {stats.happyWinners.toLocaleString('pt-BR')}
              </div>
              <div className="stat-label">Happy Winners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RaffleMaster?</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We offer the best raffle experience with real money prizes and cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card p-8 text-center grid-item hover:glow"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Raffles */}
      <div className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Raffles</h2>
            <p className="text-xl text-text-secondary">
              Play our most lucrative raffles with massive prizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {raffles.map((raffle) => (
              <div 
                key={raffle.id} 
                className="card-premium grid-item"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-5xl">{raffle.icon}</div>
                    <div className="text-right">
                      <div className="badge badge-{raffle.badge}">
                        {raffle.badge.charAt(0).toUpperCase() + raffle.badge.slice(1)}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-white">{raffle.title}</h3>
                  
                  <div className="mb-6">
                    <div className="text-xs text-text-tertiary mb-1">MAX PRIZE</div>
                    <div className="prize-display text-gradient-gold">
                      R$ {raffle.prize.toLocaleString('pt-BR')}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-text-tertiary mb-1">
                      <span>Entries</span>
                      <span>{raffle.entries}/{raffle.maxEntries}</span>
                    </div>
                    <div className="w-full bg-surface rounded-full h-2.5">
                      <div 
                        className="bg-gradient-gold h-2.5 rounded-full" 
                        style={{ width: `${(raffle.entries / raffle.maxEntries) * 100}%` }}
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
          
          <div className="text-center mt-12">
            <Link href="/rifas" className="btn btn-outline">
              View All Raffles
            </Link>
          </div>
        </div>
      </div>

      {/* Winners Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Winners</h2>
            <p className="text-xl text-text-secondary">
              Join our community of happy winners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {winners.map((winner, index) => (
              <div key={index} className="winner-notification">
                <div className="winner-icon">
                  <span className="text-success text-xl">🏆</span>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white">{winner.name}</div>
                  <div className="text-success font-bold">Won {winner.prize}</div>
                  <div className="text-text-tertiary text-sm">{winner.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Try Your Luck?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            Join millions of players who have already won real money prizes. 
            Start playing now and you could be our next big winner!
          </p>
          <Link 
            href="/rifas" 
            className="btn btn-accent btn-lg px-10 py-4 rounded-full font-bold text-lg"
          >
            Start Playing Now
          </Link>
        </div>
      </div>
    </div>
  );
}