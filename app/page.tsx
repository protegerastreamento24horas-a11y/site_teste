'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Prêmios Instantâneos",
      description: "Ganhe prêmios em dinheiro real imediatamente após raspar",
      icon: "⚡"
    },
    {
      title: "Sorteios Exclusivos",
      description: "Participe de sorteios especiais com prêmios maiores",
      icon: "🏆"
    },
    {
      title: "Diversas Temáticas",
      description: "Jogos com diferentes temas para todos os gostos",
      icon: "🎨"
    },
    {
      title: "Jogue a Qualquer Hora",
      description: "Acesse de onde estiver, a qualquer momento",
      icon: "📱"
    }
  ];

  const raffles = [
    { id: 1, title: 'Raspadinha Ouro', prize: 10000, icon: '🥇' },
    { id: 2, title: 'Raspadinha Diamante', prize: 50000, icon: '💎' },
    { id: 3, title: 'Raspadinha Platina', prize: 25000, icon: '🔮' },
  ];

  const testimonials = [
    { 
      name: 'Carlos Silva', 
      prize: 'R$ 15.000,00', 
      text: 'Ganhei meu primeiro prêmio em apenas 5 minutos! Incrível!',
      avatar: 'CS'
    },
    { 
      name: 'Ana Oliveira', 
      prize: 'R$ 7.500,00', 
      text: 'O melhor site de raspadinhas que já experimentei. Totalmente confiável!',
      avatar: 'AO'
    },
    { 
      name: 'Roberto Santos', 
      prize: 'R$ 30.000,00', 
      text: 'Já ganhei 3 vezes! Recomendo para todos os meus amigos.',
      avatar: 'RS'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6">
              <span className="block bg-gradient-primary text-transparent bg-clip-text">Raspe & Ganhe</span>
              <span className="block text-2xl md:text-3xl font-bold text-foreground mt-4">Prêmios Reais de até R$777.777!</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Experimente a emoção de raspar e ganhar prêmios em dinheiro real. 
              Jogue a qualquer hora, de qualquer lugar!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/rifas" 
                className="btn btn-primary btn-lg px-8 py-4 rounded-full font-bold text-lg"
              >
                Começar Agora
              </Link>
              <Link 
                href="/como-funciona" 
                className="btn btn-outline btn-lg px-8 py-4 rounded-full font-bold text-lg"
              >
                Como Funciona
              </Link>
            </div>
          </div>
        </div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-60 h-60 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-background to-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher nossas raspadinhas?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Oferecemos a melhor experiência de jogo com prêmios reais e segurança garantida
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card p-8 text-center grid-item hover:glow"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Raffles */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Raspadinhas em Destaque</h2>
            <p className="text-xl text-gray-400">
              Escolha entre nossas raspadinhas mais lucrativas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {raffles.map((raffle) => (
              <div 
                key={raffle.id} 
                className="scratch-card grid-item"
              >
                <div className="card p-8 h-full">
                  <div className="text-7xl mb-6 text-center">{raffle.icon}</div>
                  <h3 className="text-2xl font-bold text-center mb-4">{raffle.title}</h3>
                  <div className="text-4xl font-bold text-gradient-primary text-center mb-8">
                    R$ {raffle.prize.toLocaleString('pt-BR')}
                  </div>
                  <Link 
                    href={`/rifas/${raffle.id}`}
                    className="btn btn-primary w-full py-4 rounded-full font-bold"
                  >
                    Raspar Agora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos jogadores dizem</h2>
            <p className="text-xl text-gray-400">
              Histórias reais de vitórias e prêmios conquistados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="card p-8 grid-item"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-gradient-primary font-bold">Ganhou {testimonial.prize}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para tentar a sorte?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Junte-se a milhares de usuários que já ganharam dinheiro conosco. 
              Comece agora e tenha a chance de ganhar prêmios incríveis!
            </p>
            <Link 
              href="/rifas" 
              className="btn btn-accent btn-lg px-10 py-4 rounded-full font-bold text-lg"
            >
              Raspar Agora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}