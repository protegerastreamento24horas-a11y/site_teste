'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RifasPage() {
  const [selectedRaffle, setSelectedRaffle] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Verificar se o usuário está logado
  useEffect(() => {
    const userPhone = localStorage.getItem('userPhone');
    if (userPhone) {
      setIsLoggedIn(true);
    }
  }, []);

  // Dados fictícios de rifas disponíveis
  const raffles = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      description: "Último iPhone da Apple com tecnologia avançada",
      price: 10,
      totalNumbers: 1000,
      availableNumbers: 847,
      image: "https://images.unsplash.com/photo-1601593346740-925612772716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      endDate: "30/06/2025"
    },
    {
      id: 2,
      title: "Notebook Gamer RTX 4090",
      description: "Notebook de alto desempenho para jogos",
      price: 20,
      totalNumbers: 500,
      availableNumbers: 263,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      endDate: "15/06/2025"
    },
    {
      id: 3,
      title: "Viagem para Disney",
      description: "Pacote completo para família de 4 pessoas",
      price: 5,
      totalNumbers: 2000,
      availableNumbers: 1521,
      image: "https://images.unsplash.com/photo-1591838308448-ba95a9eeae5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      endDate: "10/07/2025"
    },
    {
      id: 4,
      title: "R$ 10.000,00 em Dinheiro",
      description: "Valor em dinheiro para realizar seus sonhos",
      price: 5,
      totalNumbers: 2000,
      availableNumbers: 1842,
      image: "https://images.unsplash.com/photo-1580519543914-d0da051c49a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      endDate: "20/06/2025"
    }
  ];

  const handlePayment = async () => {
    if (selectedRaffle === null) return;
    
    setIsProcessing(true);
    setError(null);
    
    try {
      // Calcular o valor total
      const totalAmount = raffles[selectedRaffle].price * quantity;
      
      // Chamar a API para gerar o PIX
      const response = await fetch('/api/pix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount,
          description: `Rifa: ${raffles[selectedRaffle].title} - Quantidade: ${quantity}`,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao gerar PIX');
      }
      
      // Redirecionar para a página de pagamento
      window.location.href = `/pagamento?qr_code=${encodeURIComponent(data.qr_code)}&qr_code_base64=${encodeURIComponent(data.qr_code_base64)}&id=${data.id}`;
    } catch (err) {
      console.error('Erro ao processar pagamento:', err);
      setError(err instanceof Error ? err.message : 'Erro ao processar pagamento');
      setIsProcessing(false);
    }
  };

  const handleSelectRaffle = (index: number) => {
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }
    setSelectedRaffle(index);
  };

  const handleLogout = () => {
    localStorage.removeItem('userPhone');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl sm:tracking-tight lg:text-6xl">
            Rifas <span className="text-blue-600">Disponíveis</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-black">
            Escolha uma de nossas rifas e concorra a prêmios incríveis
          </p>
          
          {isLoggedIn && (
            <div className="mt-4">
              <button 
                onClick={handleLogout}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Sair
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {raffles.map((raffle, index) => (
            <div 
              key={raffle.id} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                selectedRaffle === index ? 'ring-4 ring-blue-500' : 'hover:shadow-xl'
              }`}
            >
              <div className="relative">
                <img 
                  src={raffle.image} 
                  alt={raffle.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold py-1 px-3 rounded-full text-sm">
                  R$ {raffle.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{raffle.title}</h3>
                <p className="text-black mb-4">{raffle.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-black">Números disponíveis:</span>
                    <span className="font-medium text-black">
                      {raffle.availableNumbers} de {raffle.totalNumbers}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(raffle.availableNumbers / raffle.totalNumbers) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-black">Sorteio:</span>
                    <span className="font-medium text-black">{raffle.endDate}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleSelectRaffle(index)}
                  className={`w-full py-2 rounded-lg font-medium transition-colors ${
                    selectedRaffle === index 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  {selectedRaffle === index ? 'Selecionada' : 'Selecionar Rifa'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedRaffle !== null && (
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-black mb-6 text-center">
              Finalizar Compra
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-black mb-2">
                    {raffles[selectedRaffle].title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <img 
                      src={raffles[selectedRaffle].image} 
                      alt={raffles[selectedRaffle].title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <p className="text-black">
                        Preço por rifa: <span className="font-bold">R$ {raffles[selectedRaffle].price}</span>
                      </p>
                      <p className="text-black">
                        Disponíveis: {raffles[selectedRaffle].availableNumbers}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-black font-medium mb-2">
                    Quantidade de Rifas
                  </label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-gray-200 text-black px-4 py-2 rounded-l-lg hover:bg-gray-300"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      max={raffles[selectedRaffle].availableNumbers}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Math.min(parseInt(e.target.value) || 1, raffles[selectedRaffle].availableNumbers)))}
                      className="w-20 text-center border-y border-gray-300 py-2 text-black"
                    />
                    <button 
                      onClick={() => setQuantity(Math.min(quantity + 1, raffles[selectedRaffle].availableNumbers))}
                      className="bg-gray-200 text-black px-4 py-2 rounded-r-lg hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm text-black mt-2">
                    Total de números: {quantity}
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-black mb-4">Resumo do Pedido</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-black">Preço unitário:</span>
                      <span className="font-medium text-black">R$ {raffles[selectedRaffle].price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black">Quantidade:</span>
                      <span className="font-medium text-black">{quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black">Subtotal:</span>
                      <span className="font-medium text-black">R$ {(raffles[selectedRaffle].price * quantity).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black">Taxa de processamento:</span>
                      <span className="font-medium text-black">R$ 0,00</span>
                    </div>
                    <div className="border-t border-gray-300 pt-3">
                      <div className="flex justify-between">
                        <span className="text-black font-bold">Total:</span>
                        <span className="font-bold text-black">R$ {(raffles[selectedRaffle].price * quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className={`w-full py-3 rounded-lg font-bold transition-colors mt-6 ${
                      isProcessing 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white'
                    }`}
                  >
                    {isProcessing ? 'Processando...' : 'Pagar com PIX'}
                  </button>
                  
                  <p className="text-xs text-black mt-3 text-center">
                    Ao finalizar a compra, você concorda com os <Link href="/termos" className="text-blue-600 hover:underline">termos de uso</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <p className="text-red-800 text-center">{error}</p>
            </div>
          </div>
        )}

        <div className="text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}