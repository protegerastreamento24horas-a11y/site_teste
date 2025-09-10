'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MinhaContaPage() {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Dados fictícios do usuário
  const user = {
    name: "João Silva",
    email: "joao.silva@example.com",
    phone: "(11) 99999-9999",
    cpf: "123.456.789-00",
    address: "Av. Paulista, 1000 - São Paulo/SP"
  };

  const raffles = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      numbers: [142, 387, 729, 901],
      purchaseDate: "2025-04-10",
      drawDate: "2025-06-30",
      status: "active"
    },
    {
      id: 2,
      title: "Notebook Gamer RTX 4090",
      numbers: [256, 481],
      purchaseDate: "2025-04-05",
      drawDate: "2025-06-15",
      status: "drawn",
      winner: false
    }
  ];

  const payments = [
    {
      id: 1,
      raffle: "iPhone 15 Pro Max",
      amount: 40,
      date: "2025-04-10",
      status: "paid"
    },
    {
      id: 2,
      raffle: "Notebook Gamer RTX 4090",
      amount: 40,
      date: "2025-04-05",
      status: "paid"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl sm:tracking-tight lg:text-6xl">
            Minha <span className="text-blue-600">Conta</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-black">
            Gerencie suas informações e visualize suas rifas
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto">
          {/* Navegação por abas */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'profile'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Meu Perfil
              </button>
              <button
                onClick={() => setActiveTab('raffles')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'raffles'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Minhas Rifas ({raffles.length})
              </button>
              <button
                onClick={() => setActiveTab('payments')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'payments'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Histórico de Pagamentos
              </button>
            </nav>
          </div>

          {/* Conteúdo das abas */}
          <div className="p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Informações Pessoais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">Nome Completo</label>
                    <p className="text-black bg-gray-50 p-3 rounded-lg">{user.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">Email</label>
                    <p className="text-black bg-gray-50 p-3 rounded-lg">{user.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">Telefone</label>
                    <p className="text-black bg-gray-50 p-3 rounded-lg">{user.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">CPF</label>
                    <p className="text-black bg-gray-50 p-3 rounded-lg">{user.cpf}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-black mb-1">Endereço</label>
                    <p className="text-black bg-gray-50 p-3 rounded-lg">{user.address}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Editar Informações
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'raffles' && (
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Minhas Rifas</h2>
                {raffles.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-black mb-6">Você ainda não comprou nenhuma rifa.</p>
                    <Link 
                      href="/rifas" 
                      className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Comprar Rifas
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {raffles.map((raffle) => (
                      <div key={raffle.id} className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-black mb-2">{raffle.title}</h3>
                        <div className="space-y-2 text-sm">
                          <p className="text-black">
                            <span className="font-medium">Data da Compra:</span> {new Date(raffle.purchaseDate).toLocaleDateString('pt-BR')}
                          </p>
                          <p className="text-black">
                            <span className="font-medium">Data do Sorteio:</span> {new Date(raffle.drawDate).toLocaleDateString('pt-BR')}
                          </p>
                          <p className="text-black">
                            <span className="font-medium">Números:</span> {raffle.numbers.join(', ')}
                          </p>
                          <p className="text-black">
                            <span className="font-medium">Status:</span> 
                            <span className={`ml-2 px-2 py-1 rounded text-xs ${
                              raffle.status === 'active' 
                                ? 'bg-blue-100 text-blue-800' 
                                : raffle.winner 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                            }`}>
                              {raffle.status === 'active' ? 'Ativa' : raffle.winner ? 'Ganhador' : 'Sorteada'}
                            </span>
                          </p>
                        </div>
                        <div className="mt-4">
                          <Link 
                            href={`/minhas-rifas/${raffle.id}`} 
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            Ver Detalhes →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'payments' && (
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Histórico de Pagamentos</h2>
                {payments.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-black">Você ainda não realizou nenhum pagamento.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                            Rifa
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                            Valor
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                            Data
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {payments.map((payment) => (
                          <tr key={payment.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                              {payment.raffle}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                              R$ {payment.amount.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                              {new Date(payment.date).toLocaleDateString('pt-BR')}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Pago
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}