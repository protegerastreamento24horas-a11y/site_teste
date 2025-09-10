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
  prizeValue: number;
  category: string;
}

export default function RaffleDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [raffle, setRaffle] = useState<Raffle | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [showNumbers, setShowNumbers] = useState(false);

  useEffect(() => {
    // Simular carregamento de dados da rifa
    const mockRaffle: Raffle = {
      id: parseInt(params.id),
      title: 'iPhone 15 Pro Max',
      description: 'iPhone 15 Pro Max 256GB - Cor Titânio Natural',
      price: 5.00,
      image: '/iphone.jpg',
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
        'O prêmio será entregue em até 30 dias após o sorteio',
        'Os números são selecionados aleatoriamente',
        'O pagamento deve ser confirmado em até 5 minutos'
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
      const randomNum = Math.floor(Math.random() * 1000) + 1;
      numbers.push(randomNum);
    }
    setSelectedNumbers(numbers);
  };

  const handleBuy = () => {
    // Navegar para a página de pagamento com os dados da compra
    router.push(`/pagamento?id=${raffle?.id}&quantity=${quantity}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-700 rounded w-1/4 mb-8"></div>
            <div className="bg-card-bg rounded-2xl shadow-xl overflow-hidden border border-gray-700">
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
      <div className="min-h-screen bg-dark-bg py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6">🎲</div>
          <h1 className="text-3xl font-bold text-white mb-4">Rifa não encontrada</h1>
          <p className="text-gray-400 mb-8">A rifa que você procura não existe ou foi removida.</p>
          <Link 
            href="/rifas" 
            className="bg-gradient-gold text-black font-bold py-3 px-8 rounded-full hover:opacity-90 transition duration-300"
          >
            Ver rifas disponíveis
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/rifas" className="text-gold hover:text-yellow-300 flex items-center text-lg font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar para as rifas
          </Link>
        </div>

        <div className="bg-card-bg rounded-2xl shadow-xl overflow-hidden border border-gray-700">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold"></div>
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none w-full h-96" />
            </div>
            
            <div className="p-8 md:w-1/2">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="chip chip-red mb-2">{raffle.category}</span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">{raffle.title}</h1>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Prêmio</div>
                  <div className="text-2xl md:text-3xl font-black text-gold">R$ {raffle.prizeValue.toLocaleString('pt-BR')}</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-lg mb-8">{raffle.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-dark-bg p-4 rounded-xl border border-gray-700">
                  <div className="text-sm text-gray-400">Valor por número</div>
                  <div className="text-2xl font-bold text-green-500">R$ {raffle.price.toFixed(2)}</div>
                </div>
                <div className="bg-dark-bg p-4 rounded-xl border border-gray-700">
                  <div className="text-sm text-gray-400">Sorteio</div>
                  <div className="text-2xl font-bold text-white">{raffle.endDate}</div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">Detalhes do Prêmio</h2>
                <p className="text-gray-300">{raffle.prize}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Números disponíveis</span>
                  <span>{raffle.availableNumbers}/{raffle.totalNumbers}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-gold h-3 rounded-full" 
                    style={{ width: `${((raffle.totalNumbers - raffle.availableNumbers) / raffle.totalNumbers) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-8">
                <div className="mb-6">
                  <label className="block text-gray-300 font-medium mb-3">Quantidade de números:</label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="bg-dark-bg text-white px-5 py-3 rounded-l-xl hover:bg-gray-700 border border-gray-700 border-r-0 transition duration-300"
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
                      className="border-t border-b border-gray-700 px-6 py-3 w-24 text-center bg-card-bg text-white"
                    />
                    <button 
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="bg-dark-bg text-white px-5 py-3 rounded-r-xl hover:bg-gray-700 border border-gray-700 border-l-0 transition duration-300"
                      disabled={quantity >= raffle.availableNumbers}
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-3 text-gray-400">
                    Total: <span className="font-bold text-xl text-gold">R$ {(raffle.price * quantity).toFixed(2)}</span>
                  </p>
                  
                  {selectedNumbers.length > 0 && (
                    <div className="mt-6">
                      <button 
                        onClick={() => setShowNumbers(!showNumbers)}
                        className="text-gold hover:text-yellow-300 font-medium flex items-center"
                      >
                        {showNumbers ? 'Ocultar números' : 'Ver números selecionados'}
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-2 transition-transform ${showNumbers ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      {showNumbers && (
                        <div className="mt-4">
                          <p className="text-gray-400 mb-3">Números selecionados:</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedNumbers.map((num, index) => (
                              <span key={index} className="bg-gold text-black px-4 py-2 rounded-full font-mono font-bold">
                                {num.toString().padStart(3, '0')}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <button
                  onClick={handleBuy}
                  className="w-full bg-gradient-gold text-black font-black py-4 px-6 rounded-full hover:opacity-90 transition duration-300 text-xl border-2 border-gold"
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
        <div className="mt-12 bg-card-bg rounded-2xl shadow-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Regras da Rifa</h2>
          <ul className="space-y-4">
            {raffle.rules.map((rule, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-black text-xs font-bold">{index + 1}</span>
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