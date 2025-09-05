'use client';

import { useState } from 'react';

export default function MinhasRifasPage() {
  // Dados fictícios das rifas compradas pelo usuário
  const [userRaffles] = useState([
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      description: "Último iPhone da Apple com tecnologia avançada",
      price: 10,
      numbers: [142, 387, 729, 901],
      purchaseDate: "2025-04-10",
      drawDate: "2025-06-30",
      status: "active",
      image: "https://images.unsplash.com/photo-1601593346740-925612772716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Notebook Gamer RTX 4090",
      description: "Notebook de alto desempenho para jogos",
      price: 20,
      numbers: [256, 481],
      purchaseDate: "2025-04-05",
      drawDate: "2025-06-15",
      status: "drawn",
      winner: false,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Viagem para Disney",
      description: "Pacote completo para família de 4 pessoas",
      price: 5,
      numbers: [512, 733, 845, 921, 1005],
      purchaseDate: "2025-03-28",
      drawDate: "2025-06-10",
      status: "drawn",
      winner: true,
      image: "https://images.unsplash.com/photo-1591838308448-ba95a9eeae5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ]);

  const getStatusText = (status: string, winner: boolean = false) => {
    if (winner) return "Ganhador!";
    switch (status) {
      case "active": return "Ativa";
      case "drawn": return "Sorteada";
      default: return "Indefinido";
    }
  };

  const getStatusColor = (status: string, winner: boolean = false) => {
    if (winner) return "bg-green-100 text-green-800";
    switch (status) {
      case "active": return "bg-blue-100 text-blue-800";
      case "drawn": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl sm:tracking-tight lg:text-6xl">
            Minhas <span className="text-blue-600">Rifas</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-black">
            Veja todas as rifas que você adquiriu e acompanhe os sorteios
          </p>
        </div>

        {userRaffles.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-3xl mx-auto">
            <div className="text-5xl mb-6">🎫</div>
            <h2 className="text-2xl font-bold text-black mb-4">Você ainda não comprou nenhuma rifa</h2>
            <p className="text-black mb-8">
              Que tal começar agora? Temos rifas incríveis com prêmios exclusivos esperando por você!
            </p>
            <button 
              onClick={() => window.location.href = '/rifas'}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300"
            >
              Ver Rifas Disponíveis
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {userRaffles.map((raffle) => (
              <div key={raffle.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={raffle.image} 
                    alt={raffle.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(raffle.status, raffle.winner)}`}>
                      {getStatusText(raffle.status, raffle.winner)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{raffle.title}</h3>
                  <p className="text-black mb-4">{raffle.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-black">Data da Compra:</span>
                      <span className="font-medium text-black">
                        {new Date(raffle.purchaseDate).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-black">Data do Sorteio:</span>
                      <span className="font-medium text-black">
                        {new Date(raffle.drawDate).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-black">Números da Sorte:</span>
                      <span className="font-medium text-black">{raffle.numbers.length}</span>
                    </div>
                    
                    <div className="pt-2">
                      <p className="text-sm text-black mb-2">Seus números:</p>
                      <div className="flex flex-wrap gap-2">
                        {raffle.numbers.map((number) => (
                          <span 
                            key={number} 
                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium"
                          >
                            {number.toString().padStart(4, '0')}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {raffle.winner && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center">
                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="font-bold text-green-800">
                          Parabéns! Você ganhou esta rifa!
                        </span>
                      </div>
                      <p className="text-green-700 text-sm mt-2">
                        Entraremos em contato em breve para combinar a entrega do prêmio.
                      </p>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => window.location.href = `/rifas/${raffle.id}`}
                    className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-black rounded-lg font-medium transition duration-300"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-4">
            Como funcionam nossas rifas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold text-black mb-2">Compra Automática</h3>
              <p className="text-black text-sm">
                O sistema escolhe automaticamente números disponíveis para você.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-bold text-black mb-2">Pagamento via PIX</h3>
              <p className="text-black text-sm">
                Pagamento rápido e seguro com QR Code PIX.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-bold text-black mb-2">Sorteio Justo</h3>
              <p className="text-black text-sm">
                Sorteios realizados de forma transparente e automática.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}