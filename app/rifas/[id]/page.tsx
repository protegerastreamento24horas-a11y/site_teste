'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Raffle {
  id: number;
  title: string;
  description: string;
  price: number;
  endDate: string;
  totalNumbers: number;
  availableNumbers: number;
  prize: string;
  rules: string[];
  prizeValue: number;
  category: string;
}

export default function RaffleDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [raffle, setRaffle] = useState<Raffle | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados da rifa
    const mockRaffle: Raffle = {
      id: parseInt(params.id),
      title: 'iPhone 15 Pro Max',
      description: 'iPhone 15 Pro Max 256GB - Cor Titânio Natural',
      price: 5.00,
      endDate: '2024-12-31',
      totalNumbers: 1000,
      availableNumbers: 750,
      prize: 'iPhone 15 Pro Max 256GB - Cor Titânio Natural',
      prizeValue: 6500,
      category: 'Eletrônicos',
      rules: [
        'Cada número custa R$ 5,00',
        'O sorteio será realizado automaticamente no dia 31/12/2024',
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
  };

  const handleBuy = () => {
    router.push(`/pagamento?id=${raffle?.id}&quantity=${quantity}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-700 rounded w-1/4 mb-8"></div>
            <div className="card">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="bg-gray-700 h-96 w-full"></div>
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="h-8 bg-gray-700 rounded mb-6"></div>
                  <div className="h-4 bg-gray-700 rounded mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded mb-8 w-3/4"></div>
                  <div className="space-y-4 mb-8">
                    <div className="h-4 bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-700 rounded w-4/6"></div>
                  </div>
                  <div className="h-12 bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!raffle) {
    return (
      <div className="min-h-screen bg-background py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-6">🎲</div>
          <h1 className="text-3xl font-bold mb-4">Rifa não encontrada</h1>
          <p className="text-gray-400 mb-8">A rifa que você procura não existe ou foi removida.</p>
          <Link 
            href="/rifas" 
            className="btn btn-primary px-6 py-3 rounded-lg"
          >
            Ver rifas disponíveis
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/rifas" className="text-primary hover:text-primary-dark flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar para as rifas
          </Link>
        </div>

        <div className="card">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed w-full h-96" />
            </div>
            
            <div className="p-8 md:w-1/2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-3">
                    {raffle.category}
                  </span>
                  <h1 className="text-3xl font-bold">{raffle.title}</h1>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Prêmio</div>
                  <div className="text-2xl font-bold text-secondary">R$ {raffle.prizeValue.toLocaleString('pt-BR')}</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-8">{raffle.description}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-sm text-gray-400">Valor por número</div>
                  <div className="text-xl font-bold text-primary">R$ {raffle.price.toFixed(2)}</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-sm text-gray-400">Sorteio</div>
                  <div className="text-xl font-bold">{raffle.endDate}</div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Números disponíveis</span>
                  <span>{raffle.availableNumbers}/{raffle.totalNumbers}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div 
                    className="bg-primary h-3 rounded-full" 
                    style={{ width: `${((raffle.totalNumbers - raffle.availableNumbers) / raffle.totalNumbers) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="border-t border-border pt-8">
                <div className="mb-6">
                  <label className="block text-gray-300 font-medium mb-3">Quantidade de números:</label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="bg-card text-white px-5 py-3 rounded-l-lg hover:bg-gray-700 border border-border border-r-0"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      max={raffle.availableNumbers}
                      value={quantity}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                      className="border-t border-b border-border px-6 py-3 w-24 text-center bg-background text-white"
                    />
                    <button 
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="bg-card text-white px-5 py-3 rounded-r-lg hover:bg-gray-700 border border-border border-l-0"
                      disabled={quantity >= raffle.availableNumbers}
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-3 text-gray-400">
                    Total: <span className="font-bold text-xl text-primary">R$ {(raffle.price * quantity).toFixed(2)}</span>
                  </p>
                </div>
                
                <button
                  onClick={handleBuy}
                  className="btn btn-primary w-full py-4 rounded-lg font-semibold text-lg"
                >
                  Comprar números
                </button>
                
                <div className="mt-6 text-center">
                  <Link href="/regulamento" className="text-gray-500 hover:text-gray-400 text-sm">
                    Consultar regulamento completo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Rules Section */}
        <div className="card mt-8 p-8">
          <h2 className="text-2xl font-bold mb-6">Regras da Rifa</h2>
          <ul className="space-y-4">
            {raffle.rules.map((rule, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                <span className="text-gray-300">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}