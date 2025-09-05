'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentWinner, setCurrentWinner] = useState(0);
  
  // Dados fictícios de ganhadores
  const winners = [
    {
      id: 1,
      name: "Carlos Silva",
      prize: "R$ 5.000,00",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "15/04/2025"
    },
    {
      id: 2,
      name: "Ana Oliveira",
      prize: "iPhone 15 Pro",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "10/04/2025"
    },
    {
      id: 3,
      name: "Roberto Santos",
      prize: "R$ 2.500,00",
      photo: "https://randomuser.me/api/portraits/men/67.jpg",
      date: "05/04/2025"
    },
    {
      id: 4,
      name: "Mariana Costa",
      prize: "Notebook Gamer",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "30/03/2025"
    }
  ];

  // Efeito para rotacionar os ganhadores automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWinner((prev) => (prev + 1) % winners.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [winners.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      {/* Banner Principal */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Rifas Automatizadas Premium
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Participe das nossas rifas exclusivas e concorra a prêmios incríveis! 
            Pagamento 100% seguro via PIX.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => window.location.href = '/rifas'}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Comprar Rifa Agora
            </button>
            <button 
              onClick={() => window.location.href = '#como-funciona'}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Como Funciona?
            </button>
          </div>
        </div>
      </div>

      {/* Seção de Últimos Ganhadores */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Últimos Ganhadores
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-400">
                <Image 
                  src={winners[currentWinner].photo} 
                  alt={winners[currentWinner].name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {winners[currentWinner].name}
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Ganhou: <span className="font-bold text-green-600">{winners[currentWinner].prize}</span>
              </p>
              <p className="text-gray-500 mt-1">
                Sorteado em: {winners[currentWinner].date}
              </p>
              <div className="flex justify-center mt-4 space-x-2">
                {winners.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentWinner ? 'bg-blue-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Como Funciona */}
      <div id="como-funciona" className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Como Funciona?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Escolha sua Rifa</h3>
              <p className="text-gray-600">
                Navegue pelas rifas disponíveis e escolha aquela que mais te agrada.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Pague com PIX</h3>
              <p className="text-gray-600">
                Realize o pagamento de forma rápida e segura via PIX.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Aguarde o Sorteio</h3>
              <p className="text-gray-600">
                Após o sorteio, divulgamos o ganhador e entramos em contato.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Benefícios */}
      <div className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Por que escolher nossas rifas?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">100% Seguro</h3>
              <p className="opacity-90">
                Pagamentos via PIX garantem total segurança na transação.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Automatizado</h3>
              <p className="opacity-90">
                Sistema automático que escolhe os números para você.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Prêmios Incríveis</h3>
              <p className="opacity-90">
                Concorra a prêmios variados e exclusivos todas as semanas.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Fácil e Rápido</h3>
              <p className="opacity-90">
                Compre sua rifa em minutos diretamente do seu celular.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Final */}
      <div className="py-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Pronto para tentar a sorte?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se aos milhares de pessoas que já experimentaram nossa plataforma!
          </p>
          <button 
            onClick={() => window.location.href = '/rifas'}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105"
          >
            Comprar Rifa Agora
          </button>
        </div>
      </div>
    </div>
  );
}