'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Raffle {
  id: number;
  title: string;
  description: string;
  price: number;
  maxPrize: number;
  icon: string;
  color: string;
}

export default function RafflesPage() {
  const [raffles] = useState<Raffle[]>([
    { 
      id: 1, 
      title: 'Raspadinha Ouro', 
      description: 'Raspadinha com prêmios de até R$10.000', 
      price: 10.00, 
      maxPrize: 10000,
      icon: '🥇',
      color: 'from-yellow-600 to-yellow-800'
    },
    { 
      id: 2, 
      title: 'Raspadinha Prata', 
      description: 'Raspadinha com prêmios de até R$5.000', 
      price: 5.00, 
      maxPrize: 5000,
      icon: '🥈',
      color: 'from-gray-400 to-gray-600'
    },
    { 
      id: 3, 
      title: 'Raspadinha Bronze', 
      description: 'Raspadinha com prêmios de até R$2.000', 
      price: 2.00, 
      maxPrize: 2000,
      icon: '🥉',
      color: 'from-amber-800 to-amber-900'
    },
    { 
      id: 4, 
      title: 'Raspadinha Diamante', 
      description: 'Raspadinha com prêmios de até R$50.000', 
      price: 50.00, 
      maxPrize: 50000,
      icon: '💎',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      id: 5, 
      title: 'Raspadinha Esmeralda', 
      description: 'Raspadinha com prêmios de até R$15.000', 
      price: 15.00, 
      maxPrize: 15000,
      icon: '💚',
      color: 'from-green-500 to-green-700'
    },
    { 
      id: 6, 
      title: 'Raspadinha Safira', 
      description: 'Raspadinha com prêmios de até R$8.000', 
      price: 8.00, 
      maxPrize: 8000,
      icon: '💙',
      color: 'from-indigo-500 to-indigo-700'
    },
    { 
      id: 7, 
      title: 'Raspadinha Rubi', 
      description: 'Raspadinha com prêmios de até R$25.000', 
      price: 25.00, 
      maxPrize: 25000,
      icon: '❤️',
      color: 'from-red-500 to-red-700'
    },
    { 
      id: 8, 
      title: 'Raspadinha Platina', 
      description: 'Raspadinha com prêmios de até R$100.000', 
      price: 100.00, 
      maxPrize: 100000,
      icon: '🏆',
      color: 'from-gray-300 to-gray-500'
    },
  ]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-pink-800 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <h1 className="text-2xl font-bold ml-3">MEGA RASPADINHA</h1>
          </div>
          
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-yellow-400 transition">INÍCIO</Link>
            <Link href="/raspadinhas" className="font-bold text-yellow-400">RASPADINHAS</Link>
            <Link href="/resultados" className="hover:text-yellow-400 transition">RESULTADOS</Link>
            <Link href="/como-jogar" className="hover:text-yellow-400 transition">COMO JOGAR</Link>
          </nav>
          
          <div className="mt-4 md:mt-0">
            <Link 
              href="/login" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition"
            >
              ENTRAR
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="py-4 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <nav className="text-gray-400">
            <Link href="/" className="hover:text-yellow-400 transition">Início</Link> / Raspadinhas
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Nossas Raspadinhas</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Escolha entre as melhores raspadinhas com prêmios incríveis. Cada raspadinha oferece a chance de ganhar prêmios em dinheiro real!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {raffles.map((raffle) => (
              <div 
                key={raffle.id} 
                className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 overflow-hidden hover:border-yellow-500 transition"
              >
                <div className={`bg-gradient-to-r ${raffle.color} p-4 text-center`}>
                  <div className="text-5xl">{raffle.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{raffle.title}</h3>
                  <p className="text-gray-300 mb-4">{raffle.description}</p>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="text-sm text-gray-400">Valor</div>
                      <div className="text-xl font-bold text-yellow-400">R$ {raffle.price.toFixed(2)}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Prêmio máximo</div>
                      <div className="text-xl font-bold text-green-400">R$ {raffle.maxPrize.toLocaleString('pt-BR')}</div>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/raspadinhas/${raffle.id}`}
                    className="block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-4 rounded-full text-center transition"
                  >
                    Raspar Agora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                <h3 className="text-xl font-bold ml-2">MEGA RASPADINHA</h3>
              </div>
              <p className="text-gray-400">
                Sua chance diária de mudar de vida com prêmios incríveis!
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">INFORMAÇÕES</h4>
              <ul className="space-y-2">
                <li><Link href="/como-jogar" className="text-gray-400 hover:text-yellow-400 transition">Como Jogar</Link></li>
                <li><Link href="/regulamento" className="text-gray-400 hover:text-yellow-400 transition">Regulamento</Link></li>
                <li><Link href="/resultados" className="text-gray-400 hover:text-yellow-400 transition">Resultados</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-yellow-400 transition">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">SUPORTE</h4>
              <ul className="space-y-2">
                <li><Link href="/contato" className="text-gray-400 hover:text-yellow-400 transition">Contato</Link></li>
                <li><Link href="/privacidade" className="text-gray-400 hover:text-yellow-400 transition">Privacidade</Link></li>
                <li><Link href="/termos" className="text-gray-400 hover:text-yellow-400 transition">Termos de Uso</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">CONTATO</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contato@megaraspadinha.com</li>
                <li>WhatsApp: (11) 99999-9999</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Mega Raspadinha. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}