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
  icon: string;
}

export default function RaffleDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [raffle, setRaffle] = useState<Raffle | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchResult, setScratchResult] = useState<{win: boolean, prize?: number} | null>(null);

  useEffect(() => {
    // Simular carregamento de dados da rifa
    const mockRaffle: Raffle = {
      id: parseInt(params.id),
      title: 'Raspadinha Ouro',
      description: 'Raspadinha com prêmios de até R$10.000',
      price: 5.00,
      endDate: '2024-12-31',
      totalNumbers: 1000,
      availableNumbers: 750,
      prize: 'Raspadinha Ouro com prêmios de até R$10.000',
      prizeValue: 10000,
      category: 'Premium',
      icon: '🥇',
      rules: [
        'Cada raspadinha custa R$ 5,00',
        'O prêmio máximo é de R$ 10.000',
        'O sorteio é realizado automaticamente ao raspar',
        'Prêmios são creditados imediatamente',
        'Não há reembolso de valores'
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

  const handleScratch = () => {
    if (isScratching) return;
    
    setIsScratching(true);
    
    // Simular o processo de raspar com um atraso
    setTimeout(() => {
      // Gerar resultado aleatório (90% de chance de perder, 10% de chance de ganhar)
      const win = Math.random() < 0.1;
      const prize = win ? Math.floor(Math.random() * 1000) + 100 : 0;
      
      setScratchResult({ win, prize: win ? prize : undefined });
      setIsScratching(false);
    }, 2000);
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
          <h1 className="text-3xl font-bold mb-4">Raspadinha não encontrada</h1>
          <p className="text-gray-400 mb-8">A raspadinha que você procura não existe ou foi removida.</p>
          <Link 
            href="/rifas" 
            className="btn btn-primary px-6 py-3 rounded-lg"
          >
            Ver raspadinhas disponíveis
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
            Voltar para as raspadinhas
          </Link>
        </div>

        <div className="card">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <div className="text-8xl text-center mb-6">{raffle.icon}</div>
              <h1 className="text-3xl font-bold text-center mb-4">{raffle.title}</h1>
              <p className="text-gray-400 text-center mb-8">{raffle.description}</p>
              
              <div className="bg-card p-6 rounded-lg border border-border mb-8">
                <h2 className="text-xl font-bold mb-4 text-center">Prêmio Máximo</h2>
                <div className="text-4xl font-bold text-gold text-center">R$ {raffle.prizeValue.toLocaleString('pt-BR')}</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-sm text-gray-400">Valor por raspadinha</div>
                  <div className="text-xl font-bold text-primary">R$ {raffle.price.toFixed(2)}</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-sm text-gray-400">Categoria</div>
                  <div className="text-xl font-bold">
                    <span className={`px-2 py-1 rounded-full ${
                      raffle.category === 'Premium' ? 'bg-gold text-black' :
                      raffle.category === 'Popular' ? 'bg-secondary text-black' :
                      'bg-accent text-white'
                    }`}>
                      {raffle.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Raspadinhas disponíveis</span>
                  <span>{raffle.availableNumbers}/{raffle.totalNumbers}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div 
                    className={`${
                      raffle.category === 'Premium' ? 'bg-gold' :
                      raffle.category === 'Popular' ? 'bg-secondary' :
                      'bg-accent'
                    } h-3 rounded-full`} 
                    style={{ width: `${((raffle.totalNumbers - raffle.availableNumbers) / raffle.totalNumbers) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 border-l border-border">
              <h2 className="text-2xl font-bold mb-6">Raspar Agora</h2>
              
              {scratchResult ? (
                <div className="text-center py-8">
                  {scratchResult.win ? (
                    <div>
                      <div className="text-6xl mb-4">🎉</div>
                      <h3 className="text-2xl font-bold text-green-500 mb-2">PARABÉNS! VOCÊ GANHOU!</h3>
                      <p className="text-4xl font-bold text-gold mb-6">R$ {scratchResult.prize?.toLocaleString('pt-BR')}</p>
                      <p className="text-gray-400 mb-8">O prêmio já foi creditado na sua conta!</p>
                      <div className="flex gap-4">
                        <button
                          onClick={() => {
                            setScratchResult(null);
                            setQuantity(1);
                          }}
                          className="btn btn-gold flex-1 py-3 rounded-lg font-bold text-black"
                        >
                          Raspar Novamente
                        </button>
                        <Link 
                          href="/dashboard" 
                          className="btn btn-primary flex-1 py-3 rounded-lg font-bold"
                        >
                          Ver Meus Prêmios
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-6xl mb-4">😞</div>
                      <h3 className="text-2xl font-bold text-red-500 mb-6">NÃO FOI DESSA VEZ!</h3>
                      <p className="text-gray-400 mb-8">Tente novamente, sua sorte está próxima!</p>
                      <div className="flex gap-4">
                        <button
                          onClick={() => setScratchResult(null)}
                          className="btn btn-gold flex-1 py-3 rounded-lg font-bold text-black"
                        >
                          Tentar Novamente
                        </button>
                        <Link 
                          href="/rifas" 
                          className="btn btn-primary flex-1 py-3 rounded-lg font-bold"
                        >
                          Outras Raspadinhas
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : isScratching ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gold mb-6"></div>
                  <h3 className="text-xl font-bold mb-2">Raspando sua raspadinha...</h3>
                  <p className="text-gray-400">Aguarde enquanto revelamos seu prêmio</p>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <label className="block text-gray-300 font-medium mb-3">Quantidade de raspadinhas:</label>
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
                    onClick={handleScratch}
                    className="btn btn-gold w-full py-4 rounded-lg font-bold text-lg text-black mb-6"
                  >
                    Raspar Agora
                  </button>
                  
                  <div className="text-center">
                    <p className="text-gray-500 text-sm mb-2">Ou prefere comprar e raspar depois?</p>
                    <button
                      onClick={handleBuy}
                      className="text-primary hover:text-primary-dark font-medium"
                    >
                      Comprar raspadinhas
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Rules Section */}
        <div className="card mt-8 p-8">
          <h2 className="text-2xl font-bold mb-6">Regras da Raspadinha</h2>
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