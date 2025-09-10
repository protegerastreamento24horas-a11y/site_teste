'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MinhasRifasPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [raffles, setRaffles] = useState<any[]>([]);

  // Verificar se o usuário está logado
  useEffect(() => {
    const userPhone = localStorage.getItem('userPhone');
    if (userPhone) {
      setIsLoggedIn(true);
      // Carregar rifas compradas (simulação)
      loadUserRaffles();
    }
  }, []);

  const loadUserRaffles = () => {
    // Simular carregamento de rifas compradas
    // Em uma implementação real, isso viria de uma API
    const userRaffles = [
      {
        id: 1,
        title: "iPhone 15 Pro Max",
        description: "Último iPhone da Apple com tecnologia avançada",
        price: 10,
        image: "https://images.unsplash.com/photo-1601593346740-925612772716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        purchaseDate: "10/04/2025",
        numbers: ["001", "015", "023", "045", "102"],
        status: "pending"
      },
      {
        id: 2,
        title: "Notebook Gamer RTX 4090",
        description: "Notebook de alto desempenho para jogos",
        price: 20,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        purchaseDate: "05/04/2025",
        numbers: ["012", "067", "123"],
        status: "won"
      }
    ];
    setRaffles(userRaffles);
  };

  const handleLogout = () => {
    localStorage.removeItem('userPhone');
    window.location.href = '/';
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Acesso Restrito
          </h1>
          <p className="text-gray-600 mb-6">
            Você precisa estar logado para ver suas rifas.
          </p>
          <Link 
            href="/login" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 inline-block"
          >
            Fazer Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl sm:tracking-tight lg:text-6xl">
            Minhas <span className="text-blue-600">Rifas</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-black">
            Veja todas as rifas que você comprou
          </p>
          
          <div className="mt-4">
            <button 
              onClick={handleLogout}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Sair
            </button>
          </div>
        </div>

        {raffles.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto text-center">
            <svg className="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <h2 className="text-2xl font-bold text-black mb-4">Nenhuma rifa comprada ainda</h2>
            <p className="text-black mb-8">
              Você ainda não comprou nenhuma rifa. Que tal dar uma olhada nas rifas disponíveis?
            </p>
            <Link 
              href="/rifas" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 inline-block"
            >
              Ver Rifas Disponíveis
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {raffles.map((raffle) => (
              <div key={raffle.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={raffle.image} 
                    alt={raffle.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold py-1 px-3 rounded-full text-sm">
                    R$ {raffle.price}
                  </div>
                  {raffle.status === 'won' && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white font-bold py-1 px-3 rounded-full text-sm">
                      GANHOU!
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{raffle.title}</h3>
                  <p className="text-black mb-4">{raffle.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-black">
                      <span className="font-medium">Comprada em:</span> {raffle.purchaseDate}
                    </p>
                    <p className="text-sm text-black">
                      <span className="font-medium">Números:</span> {raffle.numbers.join(', ')}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      raffle.status === 'pending' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : raffle.status === 'won' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      {raffle.status === 'pending' ? 'Aguardando sorteio' : raffle.status === 'won' ? 'Ganhou!' : 'Participando'}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/rifas" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Voltar para Rifas
          </Link>
        </div>
      </div>
    </div>
  );
}