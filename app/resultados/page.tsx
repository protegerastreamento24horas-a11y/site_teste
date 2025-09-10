'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ResultsPage() {
  const [winners] = useState([
    { 
      id: 1, 
      name: 'Carlos Silva', 
      prize: 5500, 
      raffle: 'Raspadinha Ouro',
      date: '10/09/2025 14:30',
      icon: '🥇'
    },
    { 
      id: 2, 
      name: 'Ana Oliveira', 
      prize: 2800, 
      raffle: 'Raspadinha Prata',
      date: '10/09/2025 13:45',
      icon: '🥈'
    },
    { 
      id: 3, 
      name: 'Roberto Santos', 
      prize: 10000, 
      raffle: 'Raspadinha Diamante',
      date: '10/09/2025 12:15',
      icon: '💎'
    },
    { 
      id: 4, 
      name: 'Mariana Costa', 
      prize: 1500, 
      raffle: 'Raspadinha Bronze',
      date: '10/09/2025 11:20',
      icon: '🥉'
    },
    { 
      id: 5, 
      name: 'Pedro Almeida', 
      prize: 15000, 
      raffle: 'Raspadinha Diamante',
      date: '10/09/2025 10:05',
      icon: '💎'
    },
    { 
      id: 6, 
      name: 'Juliana Pereira', 
      prize: 3200, 
      raffle: 'Raspadinha Ouro',
      date: '10/09/2025 09:30',
      icon: '🥇'
    },
    { 
      id: 7, 
      name: 'Ricardo Lima', 
      prize: 800, 
      raffle: 'Raspadinha Bronze',
      date: '10/09/2025 08:45',
      icon: '🥉'
    },
    { 
      id: 8, 
      name: 'Fernanda Souza', 
      prize: 25000, 
      raffle: 'Raspadinha Diamante',
      date: '09/09/2025 18:20',
      icon: '💎'
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
            <Link href="/raspadinhas" className="hover:text-yellow-400 transition">RASPADINHAS</Link>
            <Link href="/resultados" className="font-bold text-yellow-400">RESULTADOS</Link>
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
            <Link href="/" className="hover:text-yellow-400 transition">Início</Link> / Resultados
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Últimos Resultados</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Confira os últimos ganhadores e os prêmios conquistados em nossas raspadinhas
            </p>
          </div>

          <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 p-6">
              <h2 className="text-2xl font-bold text-center text-black">GANHADORES RECENTES</h2>
            </div>
            
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-4 px-4 text-left">Ganhador</th>
                      <th className="py-4 px-4 text-left">Raspadinha</th>
                      <th className="py-4 px-4 text-left">Prêmio</th>
                      <th className="py-4 px-4 text-left">Data/Hora</th>
                    </tr>
                  </thead>
                  <tbody>
                    {winners.map((winner) => (
                      <tr key={winner.id} className="border-b border-gray-800 hover:bg-purple-900/20 transition">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div className="text-2xl mr-3">{winner.icon}</div>
                            <span className="font-medium">{winner.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-300">{winner.raffle}</td>
                        <td className="py-4 px-4">
                          <span className="font-bold text-green-400">R$ {winner.prize.toLocaleString('pt-BR')}</span>
                        </td>
                        <td className="py-4 px-4 text-gray-400">{winner.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full transition">
                  Carregar mais resultados
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Maiores Prêmios do Mês</h3>
              <div className="space-y-4">
                {winners.slice(0, 3).map((winner, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                      </div>
                      <div>
                        <div className="font-bold">{winner.name}</div>
                        <div className="text-sm text-gray-400">{winner.raffle}</div>
                      </div>
                    </div>
                    <div className="font-bold text-green-400">R$ {winner.prize.toLocaleString('pt-BR')}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Estatísticas</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Total de prêmios pagos</span>
                    <span className="font-bold text-yellow-400">R$ 1.245.670,00</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Maior prêmio pago</span>
                    <span className="font-bold text-green-400">R$ 100.000,00</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Total de ganhadores</span>
                    <span className="font-bold text-purple-400">2.458</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
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