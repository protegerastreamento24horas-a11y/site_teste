'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Raffle {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  endDate: string;
  totalNumbers: number;
  availableNumbers: number;
  prize: string;
  rules: string[];
}

export default function RaffleDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [raffle, setRaffle] = useState<Raffle | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  useEffect(() => {
    // Simular carregamento de dados da rifa
    const mockRaffle: Raffle = {
      id: parseInt(params.id),
      title: 'Rifa iPhone 15 Pro',
      description: 'iPhone 15 Pro 256GB - Cor Titânio Natural',
      price: 5.00,
      image: '/iphone.jpg',
      endDate: '2024-12-31',
      totalNumbers: 1000,
      availableNumbers: 750,
      prize: 'iPhone 15 Pro 256GB - Cor Titânio Natural',
      rules: [
        'Cada número custa R$ 5,00',
        'O sorteio será realizado dia 31/12/2024',
        'O vencedor será contato pelo WhatsApp',
        'Não há reembolso de valores',
        'O prêmio será entregue em até 30 dias após o sorteio'
      ]
    };

    setTimeout(() => {
      setRaffle(mockRaffle);
      setLoading(false);
    }, 800);
  }, [params.id]);

  const handleQuantityChange = (value: number) => {
    const newQuantity = Math.max(1, Math.min(value, raffle?.availableNumbers || 1));
    setQuantity(newQuantity);
    
    // Gerar números aleatórios selecionados
    const numbers = [];
    for (let i = 0; i < newQuantity; i++) {
      numbers.push(Math.floor(Math.random() * 1000) + 1);
    }
    setSelectedNumbers(numbers);
  };

  const handleBuy = () => {
    // Navegar para a página de pagamento com os dados da compra
    router.push(`/pagamento?id=${raffle?.id}&quantity=${quantity}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando detalhes da rifa...</p>
        </div>
      </div>
    );
  }

  if (!raffle) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Rifa não encontrada</h1>
          <Link href="/rifas" className="text-green-500 hover:text-green-600">
            Voltar para as rifas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/rifas" className="text-green-500 hover:text-green-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar para as rifas
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            </div>
            
            <div className="p-6 md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{raffle.title}</h1>
              <p className="text-gray-600 mb-6">{raffle.description}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Detalhes do Prêmio</h2>
                <p className="text-gray-700">{raffle.prize}</p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Regras da Rifa</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {raffle.rules.map((rule, index) => (
                    <li key={index} className="text-gray-700">{rule}</li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-600">R$ {raffle.price.toFixed(2)} <span className="text-base font-normal text-gray-600">por número</span></span>
                  <span className="text-sm text-gray-500">Até {raffle.endDate}</span>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Números disponíveis</span>
                    <span>{raffle.availableNumbers}/{raffle.totalNumbers}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${((raffle.totalNumbers - raffle.availableNumbers) / raffle.totalNumbers) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Quantidade de números:</label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      max={raffle.availableNumbers}
                      value={quantity}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                      className="border-t border-b border-gray-300 px-4 py-2 w-20 text-center"
                    />
                    <button 
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-md hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Total: <span className="font-bold">R$ {(raffle.price * quantity).toFixed(2)}</span>
                  </p>
                </div>
                
                <button
                  onClick={handleBuy}
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors font-medium text-lg"
                >
                  Comprar números
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}