'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      date: "01/04/2025"
    }
  ];

  // Efeito para mudar o ganhador em destaque a cada 5 segundos (movendo para a direita)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWinner((prev) => (prev + 1) % winners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [winners.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Compre Rifas Online com <span className="text-yellow-400">PIX</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Participe de rifas exclusivas e concorra a prêmios incríveis como carros, motos, eletrônicos e muito mais. Tudo de forma fácil, rápida e segura!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/rifas" 
                  className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full text-center transition duration-300 transform hover:scale-105"
                >
                  Comprar Rifa Agora
                </Link>
                <Link 
                  href="/como-funciona" 
                  className="px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-full text-center transition duration-300"
                >
                  Como Funciona
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-900">
                  Imagem de destaque das rifas
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-black font-bold py-2 px-6 rounded-full shadow-lg">
                  100% Seguro
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-500 text-black font-bold py-2 px-6 rounded-full shadow-lg">
                  Pagamento via PIX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Últimos Ganhadores */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-black mb-4">
              Últimos Ganhadores
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Confira os últimos sortudos que ganharam prêmios incríveis em nossas rifas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {winners.map((winner, index) => (
              <div 
                key={winner.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
                  index === currentWinner ? 'ring-4 ring-yellow-400 transform scale-105' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Image 
                      src={winner.photo} 
                      alt={winner.name} 
                      width={56} 
                      height={56} 
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-black">{winner.name}</h3>
                      <p className="text-sm text-black">{winner.date}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-black mb-2">Ganhou</p>
                    <p className="text-xl font-bold text-blue-600">{winner.prize}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefícios */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-black mb-4">
              Por que escolher a RifaFácil?
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Oferecemos a melhor experiência em rifas online com total segurança e transparência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2 text-black">100% Seguro</h3>
              <p className="text-black">
                Pagamentos via PIX com criptografia de ponta a ponta. Seus dados sempre protegidos.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-black">Prêmios Incríveis</h3>
              <p className="text-black">
                Concorra a prêmios variados e exclusivos todas as semanas.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2 text-black">Fácil e Rápido</h3>
              <p className="text-black">
                Compre sua rifa em minutos diretamente do seu celular.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Como Funciona */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-black mb-4">
              Como Funciona?
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Participar das nossas rifas é muito simples e seguro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Escolha a Rifa</h3>
              <p className="text-black text-sm">
                Navegue pelas rifas disponíveis e selecione a que deseja participar
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Compre sua Rifa</h3>
              <p className="text-black text-sm">
                Pague com PIX de forma rápida e segura
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Aguarde o Sorteio</h3>
              <p className="text-black text-sm">
                Os sorteios acontecem nas datas previstas de forma automática
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Receba seu Prêmio</h3>
              <p className="text-black text-sm">
                Se for sorteado, você será contatado para receber seu prêmio
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/como-funciona" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-blue-600 hover:bg-blue-700"
            >
              Saiba Mais
              <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action Final */}
      <div className="py-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Pronto para tentar a sorte?
          </h2>
          <p className="text-xl text-black mb-8">
            Junte-se aos milhares de pessoas que já experimentaram nossa plataforma!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => window.location.href = '/rifas'}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-full transition duration-300 transform hover:scale-105"
            >
              Comprar Rifa Agora
            </button>
            <button 
              onClick={() => window.location.href = '/contato'}
              className="px-8 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-full border-2 border-blue-600 transition duration-300"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}