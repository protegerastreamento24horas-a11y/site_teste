'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [winners] = useState([
    { id: 1, name: 'Carlos Silva', prize: 'R$ 5.500,00', time: 'Agora mesmo' },
    { id: 2, name: 'Ana Oliveira', prize: 'R$ 2.800,00', time: '2 minutos atrás' },
    { id: 3, name: 'Roberto Santos', prize: 'R$ 10.000,00', time: '5 minutos atrás' },
    { id: 4, name: 'Mariana Costa', prize: 'R$ 1.500,00', time: '7 minutos atrás' },
    { id: 5, name: 'Pedro Almeida', prize: 'R$ 15.000,00', time: '10 minutos atrás' },
    { id: 6, name: 'Juliana Pereira', prize: 'R$ 3.200,00', time: '12 minutos atrás' },
  ]);

  const [raffles] = useState([
    { id: 1, title: 'Raspadinha Ouro', prize: 10000, icon: '🥇' },
    { id: 2, title: 'Raspadinha Prata', prize: 5000, icon: '🥈' },
    { id: 3, title: 'Raspadinha Bronze', prize: 2000, icon: '🥉' },
    { id: 4, title: 'Raspadinha Diamante', prize: 50000, icon: '💎' },
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
            <Link href="/" className="font-bold text-yellow-400">INÍCIO</Link>
            <Link href="/raspadinhas" className="hover:text-yellow-400 transition">RASPADINHAS</Link>
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

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-purple-900/50 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="text-yellow-400">🎯 MEGA RASPADINHA</span> - Raspe e Ganhe de Verdade!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto">
            Sua chance diária de mudar de vida com prêmios incríveis! Inspirada no estilo das grandes loterias, trazemos jogos divertidos, dinâmicos e com prêmios reais de até <span className="text-yellow-400 font-bold">R$777.777!</span>
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto">
            Raspe, torça e comemore com a raspadinha mais emocionante do Brasil.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link 
              href="/raspadinhas" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105"
            >
              RASPAR AGORA
            </Link>
            <Link 
              href="/como-jogar" 
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition"
            >
              COMO FUNCIONA
            </Link>
          </div>
        </div>
      </section>

      {/* Winners Marquee */}
      <div className="py-3 bg-gradient-to-r from-green-700 to-green-900 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...winners, ...winners].map((winner, index) => (
            <div key={index} className="mx-8 flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-400 mr-3 animate-pulse"></div>
              <span className="text-green-300 font-bold">GANHADOR!</span>
              <span className="text-white mx-2">•</span>
              <span className="text-white font-medium">{winner.name}</span>
              <span className="text-white mx-2">ganhou</span>
              <span className="text-yellow-400 font-bold">{winner.prize}</span>
              <span className="text-gray-300 mx-2">•</span>
              <span className="text-gray-300">{winner.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-b from-purple-900/30 to-black rounded-xl border border-purple-800">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Prêmios instantâneos</h3>
              <p className="text-gray-300">Ganhe prêmios em dinheiro real imediatamente após raspar</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-purple-900/30 to-black rounded-xl border border-purple-800">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Sorteios exclusivos</h3>
              <p className="text-gray-300">Participe de sorteios especiais com prêmios maiores</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-purple-900/30 to-black rounded-xl border border-purple-800">
              <div className="text-5xl mb-4">🍀</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Diversas temáticas de jogos</h3>
              <p className="text-gray-300">Jogos com diferentes temas para todos os gostos</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-purple-900/30 to-black rounded-xl border border-purple-800">
              <div className="text-5xl mb-4">📲</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Jogue de onde estiver, a qualquer hora!</h3>
              <p className="text-gray-300">Acesse de onde estiver, a qualquer momento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Raffles */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Raspadinhas em Destaque</h2>
            <p className="text-xl text-gray-300">Escolha sua raspadinha e comece a raspar agora mesmo!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {raffles.map((raffle) => (
              <div 
                key={raffle.id} 
                className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 overflow-hidden hover:border-yellow-500 transition"
              >
                <div className="p-6 text-center">
                  <div className="text-6xl mb-4">{raffle.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{raffle.title}</h3>
                  <div className="text-2xl font-bold text-yellow-400 mb-6">
                    R$ {raffle.prize.toLocaleString('pt-BR')}
                  </div>
                  <Link 
                    href={`/raspadinhas/${raffle.id}`}
                    className="block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-4 rounded-full transition"
                  >
                    Raspar Agora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-600 to-yellow-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Raspe e tenha a chance de ganhar!
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-10">
            Junte-se a milhares de usuários que já ganharam dinheiro conosco
          </p>
          <Link 
            href="/cadastro" 
            className="bg-black text-yellow-400 hover:bg-gray-900 font-bold py-4 px-8 rounded-full text-lg transition"
          >
            CRIAR MINHA CONTA AGORA
          </Link>
        </div>
      </section>

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