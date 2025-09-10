'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('raffles');
  const [showRaffleModal, setShowRaffleModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  // Dados simulados
  const [raffles, setRaffles] = useState([
    { id: 1, title: 'Sorteio R$ 1.000', probability: 95, prize: 1000, active: true, featured: true },
    { id: 2, title: 'Sorteio R$ 500', probability: 80, prize: 500, active: true, featured: false },
    { id: 3, title: 'Sorteio R$ 2.000', probability: 60, prize: 2000, active: false, featured: true },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'Carlos Silva', email: 'carlos@example.com', balance: 150.00, status: 'active' },
    { id: 2, name: 'Ana Oliveira', email: 'ana@example.com', balance: 320.50, status: 'active' },
    { id: 3, name: 'Roberto Santos', email: 'roberto@example.com', balance: 75.20, status: 'banned' },
  ]);

  const [settings, setSettings] = useState({
    showWinnersCarousel: true,
    fakeProbabilityDisplay: 95,
  });

  const toggleRaffleStatus = (id: number) => {
    setRaffles(raffles.map(raffle => 
      raffle.id === id ? { ...raffle, active: !raffle.active } : raffle
    ));
  };

  const toggleRaffleFeatured = (id: number) => {
    setRaffles(raffles.map(raffle => 
      raffle.id === id ? { ...raffle, featured: !raffle.featured } : raffle
    ));
  };

  const toggleUserStatus = (id: number) => {
    setUsers(users.map(user => 
      user.id === id ? { 
        ...user, 
        status: user.status === 'active' ? 'banned' : 'active' 
      } : user
    ));
  };

  const updateSettings = (newSettings: any) => {
    setSettings({ ...settings, ...newSettings });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Painel Administrativo</h1>
          <p className="text-gray-400">Gerencie sorteios, usuários e configurações</p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-64 mb-6 md:mb-0 md:mr-6">
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('raffles')}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                      activeTab === 'raffles' 
                        ? 'bg-red-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    Gerenciar Sorteios
                  </button>
                  <button
                    onClick={() => setActiveTab('users')}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                      activeTab === 'users' 
                        ? 'bg-red-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    Gerenciar Usuários
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                      activeTab === 'settings' 
                        ? 'bg-red-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    Configurações
                  </button>
                  <button
                    onClick={() => setActiveTab('reports')}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                      activeTab === 'reports' 
                        ? 'bg-red-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    Relatórios
                  </button>
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'raffles' && (
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-700">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">Gerenciar Sorteios</h2>
                    <button
                      onClick={() => setShowRaffleModal(true)}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                    >
                      Criar Sorteio
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Sorteio</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Probabilidade</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Prêmio</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Destaque</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {raffles.map((raffle) => (
                        <tr key={raffle.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{raffle.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{raffle.probability}%</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 font-bold">R$ {raffle.prize.toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              raffle.active ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'
                            }`}>
                              {raffle.active ? 'Ativo' : 'Inativo'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              raffle.featured ? 'bg-blue-800 text-blue-100' : 'bg-gray-800 text-gray-100'
                            }`}>
                              {raffle.featured ? 'Destacado' : 'Normal'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            <button
                              onClick={() => toggleRaffleStatus(raffle.id)}
                              className="text-red-400 hover:text-red-300 mr-3"
                            >
                              {raffle.active ? 'Desativar' : 'Ativar'}
                            </button>
                            <button
                              onClick={() => toggleRaffleFeatured(raffle.id)}
                              className="text-blue-400 hover:text-blue-300"
                            >
                              {raffle.featured ? 'Rem. destaque' : 'Destacar'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-700">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">Gerenciar Usuários</h2>
                    <button
                      onClick={() => setShowUserModal(true)}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                    >
                      Adicionar Usuário
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Usuário</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Saldo</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{user.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 font-bold">R$ {user.balance.toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.status === 'active' ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'
                            }`}>
                              {user.status === 'active' ? 'Ativo' : 'Banido'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            <button
                              onClick={() => toggleUserStatus(user.id)}
                              className="text-red-400 hover:text-red-300"
                            >
                              {user.status === 'active' ? 'Banir' : 'Desbanir'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-700">
                  <h2 className="text-xl font-bold text-white">Configurações</h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-white mb-4">Exibição</h3>
                    <div className="flex items-center justify-between bg-gray-900 p-4 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">Carrossel de Ganhadores</h4>
                        <p className="text-gray-400 text-sm">Exibir carrossel de últimos ganhadores na página inicial</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={settings.showWinnersCarousel}
                          onChange={(e) => updateSettings({ showWinnersCarousel: e.target.checked })}
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-white mb-4">Probabilidade</h3>
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <h4 className="text-white font-medium mb-2">Exibição de Probabilidade Fake</h4>
                      <p className="text-gray-400 text-sm mb-4">Valor exibido para os usuários (sempre maior que 90%)</p>
                      <div className="flex items-center">
                        <input
                          type="range"
                          min="90"
                          max="100"
                          value={settings.fakeProbabilityDisplay}
                          onChange={(e) => updateSettings({ fakeProbabilityDisplay: parseInt(e.target.value) })}
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="ml-4 text-white font-bold">{settings.fakeProbabilityDisplay}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Integração HorsePay</h3>
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Client Key</label>
                          <input
                            type="password"
                            defaultValue="hp_ck_****************"
                            className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-red-500 focus:border-red-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Client Secret</label>
                          <input
                            type="password"
                            defaultValue="hp_cs_****************"
                            className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-red-500 focus:border-red-500"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                          Testar Conexão
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-700">
                  <h2 className="text-xl font-bold text-white">Relatórios</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-900 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-white mb-2">Total de Participações</h3>
                      <p className="text-3xl font-bold text-red-500">1,248</p>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-white mb-2">Total Pago em Prêmios</h3>
                      <p className="text-3xl font-bold text-green-500">R$ 12,450.00</p>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-white mb-2">Lucro Total</h3>
                      <p className="text-3xl font-bold text-yellow-500">R$ 8,750.00</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-white mb-4">Transações Recentes</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Data</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Usuário</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Tipo</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Valor</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">15/06/2023</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Carlos Silva</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Prêmio</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 font-bold">+R$ 1,000.00</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">15/06/2023</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Ana Oliveira</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Recarga</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-400 font-bold">-R$ 50.00</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">14/06/2023</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Roberto Santos</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Prêmio</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400 font-bold">+R$ 500.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}