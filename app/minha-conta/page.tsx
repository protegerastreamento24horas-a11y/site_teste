'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MyAccountPage() {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Dados de exemplo do usuário
  const user = {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 99999-9999',
    balance: 250.50,
    totalPrizes: 1250.75,
    ticketsPurchased: 42
  };

  const recentTickets = [
    { id: 1, raffle: 'Raspadinha Ouro', date: '10/09/2025 14:30', prize: 0, status: 'Perdido' },
    { id: 2, raffle: 'Raspadinha Diamante', date: '10/09/2025 13:45', prize: 250, status: 'Ganhou' },
    { id: 3, raffle: 'Raspadinha Prata', date: '09/09/2025 18:20', prize: 0, status: 'Perdido' },
    { id: 4, raffle: 'Raspadinha Bronze', date: '09/09/2025 16:15', prize: 50, status: 'Ganhou' },
    { id: 5, raffle: 'Raspadinha Ouro', date: '08/09/2025 12:10', prize: 0, status: 'Perdido' },
  ];

  const tabs = [
    { id: 'profile', name: 'Meu Perfil' },
    { id: 'tickets', name: 'Minhas Raspadinhas' },
    { id: 'prizes', name: 'Meus Prêmios' },
    { id: 'settings', name: 'Configurações' }
  ];

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
            <Link href="/resultados" className="hover:text-yellow-400 transition">RESULTADOS</Link>
            <Link href="/como-jogar" className="hover:text-yellow-400 transition">COMO JOGAR</Link>
          </nav>
          
          <div className="mt-4 md:mt-0">
            <Link 
              href="/login" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition"
            >
              SAIR
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="py-4 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <nav className="text-gray-400">
            <Link href="/" className="hover:text-yellow-400 transition">Início</Link> / Minha Conta
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Minha Conta</h1>
            <p className="text-xl text-gray-300">
              Gerencie seu perfil, raspadinhas e prêmios
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 p-6 mb-8">
                <div className="text-center mb-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <p className="text-gray-400">{user.email}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Saldo disponível</div>
                    <div className="text-2xl font-bold text-yellow-400">R$ {user.balance.toFixed(2)}</div>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Total em prêmios</div>
                    <div className="text-2xl font-bold text-green-400">R$ {user.totalPrizes.toFixed(2)}</div>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Raspadinhas compradas</div>
                    <div className="text-2xl font-bold text-purple-400">{user.ticketsPurchased}</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 p-6">
                <h3 className="text-xl font-bold mb-4">Ações Rápidas</h3>
                <div className="space-y-3">
                  <Link 
                    href="/raspadinhas" 
                    className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-4 rounded-lg text-center transition"
                  >
                    Comprar Raspadinhas
                  </Link>
                  <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition">
                    Sacar Prêmios
                  </button>
                  <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition">
                    Histórico de Saques
                  </button>
                </div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 overflow-hidden">
                {/* Tabs */}
                <div className="border-b border-gray-800">
                  <div className="flex overflow-x-auto">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-4 font-medium whitespace-nowrap transition ${
                          activeTab === tab.id
                            ? 'text-yellow-400 border-b-2 border-yellow-400'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Tab Content */}
                <div className="p-6">
                  {activeTab === 'profile' && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Informações Pessoais</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-400 mb-2">Nome Completo</label>
                          <div className="bg-gray-900 p-3 rounded-lg">{user.name}</div>
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">Email</label>
                          <div className="bg-gray-900 p-3 rounded-lg">{user.email}</div>
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">Telefone</label>
                          <div className="bg-gray-900 p-3 rounded-lg">{user.phone}</div>
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">Data de Cadastro</label>
                          <div className="bg-gray-900 p-3 rounded-lg">01/01/2025</div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="text-xl font-bold mb-4">Documentação</h4>
                        <div className="bg-gray-900 p-4 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">CPF</div>
                              <div className="text-gray-400 text-sm">Documento verificado</div>
                            </div>
                            <div className="text-green-500">✓ Verificado</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'tickets' && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Minhas Raspadinhas</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-700">
                              <th className="py-3 px-4 text-left">Raspadinha</th>
                              <th className="py-3 px-4 text-left">Data</th>
                              <th className="py-3 px-4 text-left">Prêmio</th>
                              <th className="py-3 px-4 text-left">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {recentTickets.map((ticket) => (
                              <tr key={ticket.id} className="border-b border-gray-800">
                                <td className="py-3 px-4">{ticket.raffle}</td>
                                <td className="py-3 px-4 text-gray-400">{ticket.date}</td>
                                <td className="py-3 px-4">
                                  {ticket.prize > 0 ? (
                                    <span className="font-bold text-green-400">R$ {ticket.prize}</span>
                                  ) : (
                                    <span className="text-gray-400">-</span>
                                  )}
                                </td>
                                <td className="py-3 px-4">
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    ticket.status === 'Ganhou' 
                                      ? 'bg-green-900 text-green-400' 
                                      : 'bg-red-900 text-red-400'
                                  }`}>
                                    {ticket.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="mt-6 text-center">
                        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full transition">
                          Carregar mais
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'prizes' && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Meus Prêmios</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-900 p-6 rounded-lg">
                          <div className="text-sm text-gray-400 mb-2">Saldo disponível</div>
                          <div className="text-3xl font-bold text-yellow-400 mb-4">R$ {user.balance.toFixed(2)}</div>
                          <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-lg transition">
                            Sacar
                          </button>
                        </div>
                        
                        <div className="bg-gray-900 p-6 rounded-lg">
                          <div className="text-sm text-gray-400 mb-2">Total recebido</div>
                          <div className="text-3xl font-bold text-green-400 mb-4">R$ {user.totalPrizes.toFixed(2)}</div>
                          <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition">
                            Histórico
                          </button>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="text-xl font-bold mb-4">Últimos Saques</h4>
                        <div className="bg-gray-900 p-4 rounded-lg">
                          <div className="text-center text-gray-400 py-8">
                            Nenhum saque realizado ainda
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'settings' && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Configurações da Conta</h3>
                      <div className="space-y-6">
                        <div className="bg-gray-900 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Notificações</h4>
                          <div className="flex items-center justify-between">
                            <span>Receber notificações por email</span>
                            <label className="switch">
                              <input type="checkbox" defaultChecked />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </div>
                        
                        <div className="bg-gray-900 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Segurança</h4>
                          <div className="space-y-3">
                            <button className="w-full text-left py-2 hover:text-yellow-400 transition">
                              Alterar senha
                            </button>
                            <button className="w-full text-left py-2 hover:text-yellow-400 transition">
                              Configurações de autenticação em duas etapas
                            </button>
                            <button className="w-full text-left py-2 hover:text-yellow-400 transition">
                              Histórico de acessos
                            </button>
                          </div>
                        </div>
                        
                        <div className="bg-gray-900 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Conta</h4>
                          <div className="space-y-3">
                            <button className="w-full text-left py-2 hover:text-yellow-400 transition">
                              Editar informações pessoais
                            </button>
                            <button className="w-full text-left py-2 text-red-400 hover:text-red-300 transition">
                              Excluir conta
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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