'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [balance] = useState(150.00);
  const [participations] = useState([
    { id: 1, date: '2023-06-15', prize: 0, status: 'Perdeu' },
    { id: 2, date: '2023-06-10', prize: 500, status: 'Ganhou' },
    { id: 3, date: '2023-06-05', prize: 0, status: 'Perdeu' },
    { id: 4, date: '2023-06-01', prize: 1000, status: 'Ganhou' },
  ]);

  const stats = [
    { name: 'Saldo disponível', value: `R$ ${balance.toFixed(2)}`, change: '+R$ 50,00', changeType: 'positive' },
    { name: 'Total ganho', value: 'R$ 1.500,00', change: '+R$ 100,00', changeType: 'positive' },
    { name: 'Participações', value: '24', change: '+2 hoje', changeType: 'positive' },
    { name: 'Taxa de vitória', value: '83%', change: '+5%', changeType: 'positive' },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Painel do Usuário</h1>
          <p className="text-gray-400">Bem-vindo de volta! Pronto para mais uma chance de ganhar?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-gray-800 overflow-hidden rounded-2xl shadow-lg border border-gray-700">
              <div className="p-6">
                <p className="text-sm font-medium text-gray-400 truncate">{stat.name}</p>
                <div className="mt-1 flex items-baseline">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-red rounded-2xl shadow-xl p-6 mb-8 border border-red-600 glow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-200">Saldo disponível para sorteios</h2>
              <p className="text-4xl font-bold text-white mt-2">R$ {balance.toFixed(2)}</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Link 
                href="/recarga"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Recarregar
              </Link>
              <Link 
                href="/sorteios"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                Participar
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Participations History */}
          <div className="lg:col-span-2 bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Histórico de Participações</h2>
              <Link href="/sorteios" className="text-red-400 hover:text-red-300 text-sm font-medium">
                Ver todos →
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Data
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Prêmio
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {participations.map((participation) => (
                    <tr key={participation.id} className="hover:bg-gray-750 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {participation.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          participation.status === 'Ganhou' 
                            ? 'bg-green-800 text-green-100' 
                            : 'bg-red-800 text-red-100'
                        }`}>
                          {participation.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {participation.prize > 0 ? (
                          <span className="text-green-400 font-bold">R$ {participation.prize.toFixed(2)}</span>
                        ) : (
                          <span className="text-gray-500">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {participations.length === 0 && (
              <div className="text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-white">Nenhuma participação ainda</h3>
                <p className="mt-2 text-gray-400">Participe de um sorteio para começar a jogar.</p>
                <div className="mt-6">
                  <Link 
                    href="/sorteios"
                    className="bg-gradient-red hover:opacity-90 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
                  >
                    Ver Sorteios
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-6">Ações Rápidas</h2>
            
            <div className="space-y-4">
              <Link 
                href="/sorteios"
                className="flex items-center p-4 bg-gray-750 rounded-xl hover:bg-gray-700 transition duration-300 border border-gray-700"
              >
                <div className="flex-shrink-0 h-10 w-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-white">Participar de Sorteios</h3>
                  <p className="text-sm text-gray-400">Escolha entre vários prêmios</p>
                </div>
              </Link>
              
              <Link 
                href="/recarga"
                className="flex items-center p-4 bg-gray-750 rounded-xl hover:bg-gray-700 transition duration-300 border border-gray-700"
              >
                <div className="flex-shrink-0 h-10 w-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-white">Recarregar Saldo</h3>
                  <p className="text-sm text-gray-400">Adicione créditos à sua conta</p>
                </div>
              </Link>
              
              <Link 
                href="/minhas-rifas"
                className="flex items-center p-4 bg-gray-750 rounded-xl hover:bg-gray-700 transition duration-300 border border-gray-700"
              >
                <div className="flex-shrink-0 h-10 w-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-white">Minhas Rifas</h3>
                  <p className="text-sm text-gray-400">Veja suas rifas ativas</p>
                </div>
              </Link>
              
              <Link 
                href="/resultados"
                className="flex items-center p-4 bg-gray-750 rounded-xl hover:bg-gray-700 transition duration-300 border border-gray-700"
              >
                <div className="flex-shrink-0 h-10 w-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-white">Resultados</h3>
                  <p className="text-sm text-gray-400">Veja os últimos ganhadores</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}