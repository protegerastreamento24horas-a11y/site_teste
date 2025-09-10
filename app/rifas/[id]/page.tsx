'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function RifaDetalhesPage() {
  const params = useParams();
  const { id } = params;
  
  // Dados fictícios de uma rifa específica
  const raffle = {
    id: id || 1,
    title: "iPhone 15 Pro Max",
    description: "Último iPhone da Apple com tecnologia avançada. Display Super Retina XDR de 6,7 polegadas, câmera principal de 48 MP, chip A17 Pro e bateria que dura o dia todo.",
    price: 10,
    totalNumbers: 1000,
    availableNumbers: 847,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    endDate: "30/06/2025",
    drawDate: "30/06/2025",
    numbers: [142, 387, 729, 901],
    purchaseDate: "2025-04-10"
  };

  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setIsProcessing(true);
    setError(null);
    
    try {
      // Calcular o valor total
      const totalAmount = raffle.price * quantity;
      
      // Chamar a API para gerar o PIX
      const response = await fetch('/api/pix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount,
          description: `Rifa: ${raffle.title} - Quantidade: ${quantity}`,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao gerar PIX');
      }
      
      // Redirecionar para a página de pagamento
      window.location.href = `/pagamento?qr_code=${encodeURIComponent(data.qr_code)}&qr_code_base64=${encodeURIComponent(data.qr_code_base64)}&external_id=${data.id}`;
    } catch (err) {
      console.error('Erro ao processar pagamento:', err);
      setError(err instanceof Error ? err.message : 'Erro ao processar pagamento');
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/rifas" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Voltar para Rifas
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={raffle.image} 
                alt={raffle.title}
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div className="md:w-1/2 p-8">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold text-black">{raffle.title}</h1>
                <span className="bg-yellow-500 text-black font-bold py-1 px-3 rounded-full">
                  R$ {raffle.price}
                </span>
              </div>
              
              <p className="text-black mb-6">{raffle.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-black">Números disponíveis</p>
                  <p className="text-xl font-bold text-black">{raffle.availableNumbers} de {raffle.totalNumbers}</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-black">Data do sorteio</p>
                  <p className="text-xl font-bold text-black">{raffle.drawDate}</p>
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
                    max={raffle.availableNumbers}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.min(parseInt(e.target.value) || 1, raffle.availableNumbers)))}
                    className="w-20 text-center border-y border-gray-300 py-2 text-black"
                  />
                  <button 
                    onClick={() => setQuantity(Math.min(quantity + 1, raffle.availableNumbers))}
                    className="bg-gray-200 text-black px-4 py-2 rounded-r-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <p className="text-sm text-black mt-1">
                  Máximo: {raffle.availableNumbers} rifas
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-black">Subtotal:</span>
                  <span className="font-medium text-black">R$ {(raffle.price * quantity).toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-black">Taxa de processamento:</span>
                  <span className="font-medium text-black">R$ 0,00</span>
                </div>
                <div className="border-t border-gray-300 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="text-black font-bold">Total:</span>
                    <span className="font-bold text-black">R$ {(raffle.price * quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {error && (
                <div className="mb-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Erro</h3>
                        <div className="mt-2 text-sm text-red-700">
                          <p>{error}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  isProcessing 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white'
                }`}
              >
                {isProcessing ? 'Processando...' : 'Comprar com PIX'}
              </button>
              
              <p className="text-xs text-black mt-3 text-center">
                Ao finalizar a compra, você concorda com os <Link href="/termos" className="text-blue-600 hover:underline">termos de uso</Link>.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-black mb-6">Como funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold text-black mb-2">Escolha a quantidade</h3>
              <p className="text-black text-sm">
                Selecione quantas rifas deseja comprar. Cada rifa aumenta suas chances de ganhar.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-bold text-black mb-2">Pague com PIX</h3>
              <p className="text-black text-sm">
                Faça o pagamento via PIX de forma rápida e segura pelo seu banco.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-bold text-black mb-2">Aguarde o sorteio</h3>
              <p className="text-black text-sm">
                Os números sorteados serão divulgados na data prevista. Boa sorte!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}