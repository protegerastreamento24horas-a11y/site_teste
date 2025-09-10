'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [balance, setBalance] = useState(150.00);
  const [participations, setParticipations] = useState([
    { id: 1, date: '2023-06-15', prize: 0, status: 'Perdeu' },
    { id: 2, date: '2023-06-10', prize: 500, status: 'Ganhou' },
    { id: 3, date: '2023-06-05', prize: 0, status: 'Perdeu' },
    { id: 4, date: '2023-06-01', prize: 1000, status: 'Ganhou' },
  ]);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Painel do Usuário</h1>
          <p className="text-gray-400">Bem-vindo de volta!</p>
        </div>

        {/* Balance Card */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-300">Saldo disponível</h2>
              <p className="text-4xl font-bold text-white mt-2">R$ {balance.toFixed(2)}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                href="/recarga"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Recarregar via PIX
              </Link>
            </div>
          </div>
        </div>

        {/* Participations History */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Histórico de Participações</h2>
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
                  <tr key={participation.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {participation.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        participation.status === 'Ganhou' 
                          ? 'bg-green-800 text-green-100' 
                          : 'bg-red-800 text-red-100'
                      }`}>
                        {participation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
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
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg inline-flex items-center transition duration-300"
                >
                  Ver Sorteios
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}