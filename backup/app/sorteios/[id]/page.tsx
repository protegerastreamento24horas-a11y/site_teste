'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RaffleDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [balance] = useState(150.00); // Simular saldo do usuário
  const [participating, setParticipating] = useState(false);
  const [result, setResult] = useState<{won: boolean, prize?: number} | null>(null);

  // Simular dados do sorteio
  const raffle = {
    id: parseInt(params.id),
    title: 'Sorteio Rápido R$ 1.000,00',
    probability: 95,
    prize: 1000,
    cost: 10,
    fakeProbability: 92
  };

  const handleParticipate = () => {
    if (balance < raffle.cost) {
      alert('Saldo insuficiente. Por favor, recarregue sua conta.');
      router.push('/recarga');
      return;
    }

    setParticipating(true);
    
    // Simular processo de sorteio
    setTimeout(() => {
      // Gerar resultado aleatório baseado na probabilidade real
      const random = Math.random() * 100;
      const won = random <= raffle.probability;
      
      setResult({
        won,
        prize: won ? raffle.prize : undefined
      });
      
      setParticipating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/sorteios" className="text-red-400 hover:text-red-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar para sorteios
          </Link>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">{raffle.title}</h1>
              <div className="text-4xl font-bold text-yellow-400 mb-4">
                R$ {raffle.prize.toFixed(2)}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-900 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Detalhes do Sorteio</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-gray-400 mb-1">
                      <span>Probabilidade de ganho</span>
                      <span>{raffle.fakeProbability}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-red-600 h-2.5 rounded-full" 
                        style={{ width: `${raffle.fakeProbability}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-400">Custo por participação</span>
                    <span className="text-white font-bold">R$ {raffle.cost.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-400">Prêmio</span>
                    <span className="text-green-400 font-bold">R$ {raffle.prize.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between py-2">
                    <span className="text-gray-400">Seu saldo</span>
                    <span className="text-white font-bold">R$ {balance.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Como funciona</h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5">•</div>
                    <p className="ml-2">Clique em "Participar Agora" para entrar no sorteio</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5">•</div>
                    <p className="ml-2">O sistema sorteia automaticamente se você ganhou ou não</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5">•</div>
                    <p className="ml-2">Prêmios são creditados automaticamente na sua conta</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5">•</div>
                    <p className="ml-2">Probabilidade real de {raffle.probability}% de ganhar</p>
                  </li>
                </ul>
              </div>
            </div>

            {result ? (
              <div className={`rounded-lg p-6 text-center ${result.won ? 'bg-green-900' : 'bg-red-900'}`}>
                <div className="text-5xl mb-4">
                  {result.won ? '🎉' : '😞'}
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {result.won ? 'Parabéns! Você ganhou!' : 'Não foi dessa vez!'}
                </h2>
                {result.won && (
                  <p className="text-xl text-yellow-400 font-bold mb-4">
                    Você ganhou R$ {result.prize?.toFixed(2)}!
                  </p>
                )}
                <p className="text-gray-300 mb-6">
                  {result.won 
                    ? 'O prêmio já foi creditado na sua conta.' 
                    : 'Tente novamente em outro sorteio!'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/dashboard"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
                  >
                    Ver meu saldo
                  </Link>
                  <Link 
                    href="/sorteios"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
                  >
                    Ver outros sorteios
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <button
                  onClick={handleParticipate}
                  disabled={participating}
                  className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 disabled:opacity-50"
                >
                  {participating ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processando sorteio...
                    </span>
                  ) : (
                    `PARTICIPAR AGORA - R$ ${raffle.cost.toFixed(2)}`
                  )}
                </button>
                <p className="mt-4 text-gray-400 text-sm">
                  Ao participar, você concorda com os <Link href="/termos" className="text-red-400 hover:text-red-300">termos de uso</Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}