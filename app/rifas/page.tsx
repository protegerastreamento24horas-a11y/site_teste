'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RifasPage() {
  const [selectedRaffle, setSelectedRaffle] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      endDate: "05/06/2025"
    }
  ];

  const handlePurchase = async () => {
    if (selectedRaffle === null) {
      setError("Por favor, selecione uma rifa!");
      return;
    }

    setIsProcessing(true);
    setError(null);
    
    try {
      console.log('Iniciando processo de pagamento para rifa:', raffles[selectedRaffle]);
      
      const response = await fetch('/api/pix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: raffles[selectedRaffle].price * quantity,
          description: `Compra de ${quantity} rifa(s) para ${raffles[selectedRaffle].title}`,
          payerEmail: 'comprador@exemplo.com'
        }),
      });

      console.log('Resposta da API PIX:', response.status);

      const data = await response.json();
      console.log('Dados recebidos da API PIX:', data);

      if (response.ok) {
        // Redirecionar para página de pagamento com todos os parâmetros necessários
        const paymentUrl = `/pagamento?qr_code=${encodeURIComponent(data.qr_code)}&qr_code_base64=${encodeURIComponent(data.qr_code_base64 || '')}&id=${data.id}`;
        window.location.href = paymentUrl;
      } else {
        setError(`Erro ao processar pagamento: ${data.message}`);
      }
    } catch (error: any) {
      console.error("Erro ao processar pagamento:", error);
      setError("Erro ao processar pagamento. Tente novamente.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossas Rifas Disponíveis
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha uma de nossas rifas premium e concorra aos prêmios incríveis. 
            O sistema escolhe automaticamente os números para você!
          </p>
        </div>

        {error && (
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Erro! </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {raffles.map((raffle, index) => (
            <div 
              key={raffle.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                selectedRaffle === index ? 'ring-4 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedRaffle(index)}
            >
              <div className="relative">
                <img 
                  src={raffle.image} 
                  alt={raffle.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold py-1 px-3 rounded-full">
                  R$ {raffle.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {raffle.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {raffle.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Números disponíveis:</span>
                    <span className="font-medium">
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
                    <span className="text-gray-500">Sorteio:</span>
                    <span className="font-medium">{raffle.endDate}</span>
                  </div>
                </div>
                
                <button 
                  className={`w-full py-2 rounded-lg font-medium transition-colors ${
                    selectedRaffle === index 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Finalizar Compra
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {raffles[selectedRaffle].title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <img 
                      src={raffles[selectedRaffle].image} 
                      alt={raffles[selectedRaffle].title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <p className="text-gray-600">
                        Preço por rifa: <span className="font-bold">R$ {raffles[selectedRaffle].price}</span>
                      </p>
                      <p className="text-gray-600">
                        Disponíveis: {raffles[selectedRaffle].availableNumbers}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Quantidade de Rifas
                  </label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l-lg hover:bg-gray-300"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      max={raffles[selectedRaffle].availableNumbers}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Math.min(parseInt(e.target.value) || 1, raffles[selectedRaffle].availableNumbers)))}
                      className="w-20 text-center border-y border-gray-300 py-2"
                    />
                    <button 
                      onClick={() => setQuantity(Math.min(quantity + 1, raffles[selectedRaffle].availableNumbers))}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-lg hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Máximo: {raffles[selectedRaffle].availableNumbers} rifas
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Resumo do Pedido
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="font-medium">R$ {(raffles[selectedRaffle].price * quantity).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxa de serviço:</span>
                      <span className="font-medium">R$ 0,00</span>
                    </div>
                    <div className="border-t border-gray-300 pt-3 flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span>R$ {(raffles[selectedRaffle].price * quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handlePurchase}
                    disabled={isProcessing}
                    className={`w-full py-3 rounded-lg font-bold text-white transition-colors ${
                      isProcessing 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800'
                    }`}
                  >
                    {isProcessing ? 'Processando...' : 'Pagar com PIX'}
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    Ao finalizar a compra, você concorda com os <Link href="/termos" className="text-blue-600 hover:underline">termos de uso</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Como funciona o sistema automático?
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>Escolha a rifa que deseja participar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>Defina a quantidade de rifas que deseja comprar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>O sistema automaticamente escolhe números disponíveis para você</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>Realize o pagamento via PIX de forma segura</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>Aguarde o sorteio e boa sorte!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}