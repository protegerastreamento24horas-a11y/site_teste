'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface DrawResult {
  id: number;
  raffleTitle: string;
  drawDate: string;
  winningNumber: number;
  winnerName?: string;
  prize: string;
}

export default function ResultsPage() {
  const [results, setResults] = useState<DrawResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento dos resultados dos sorteios
    const mockResults: DrawResult[] = [
      {
        id: 1,
        raffleTitle: 'iPhone 15 Pro Max',
        drawDate: '2024-09-01',
        winningNumber: 456,
        winnerName: 'Carlos Silva',
        prize: 'iPhone 15 Pro Max 256GB'
      },
      {
        id: 2,
        raffleTitle: 'MacBook Pro M3',
        drawDate: '2024-08-15',
        winningNumber: 789,
        winnerName: 'Ana Oliveira',
        prize: 'MacBook Pro 14" M3 Pro'
      },
      {
        id: 3,
        raffleTitle: 'Viagem Disney Orlando',
        drawDate: '2024-08-15',
        winningNumber: 234,
        winnerName: 'Você', // Usuário ganhador
        prize: 'Viagem para Disney Orlando para 4 pessoas'
      },
      {
        id: 4,
        raffleTitle: 'PlayStation 5',
        drawDate: '2024-07-30',
        winningNumber: 123,
        winnerName: 'Roberto Santos',
        prize: 'PlayStation 5 Standard Edition'
      }
    ];

    setTimeout(() => {
      setResults(mockResults);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando resultados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Resultados dos Sorteios</h1>
          <p className="text-gray-600">Confira os resultados dos sorteios realizados</p>
        </div>

        {results.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Nenhum sorteio realizado ainda</h2>
            <p className="text-gray-600 mb-6">Os resultados dos sorteios aparecerão aqui após a data marcada.</p>
            <Link 
              href="/rifas"
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium inline-block"
            >
              Ver rifas disponíveis
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result) => (
              <div 
                key={result.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden ${
                  result.winnerName === 'Você' ? 'ring-2 ring-green-500' : ''
                }`}
              >
                {result.winnerName === 'Você' && (
                  <div className="bg-green-500 text-white text-center py-2 font-bold">
                    VOCÊ GANHOU ESTE PRÊMIO!
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{result.raffleTitle}</h2>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Data do sorteio:</span>
                      <span>{result.drawDate}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-1">Número sorteado:</p>
                    <div className="text-3xl font-bold text-center py-3 bg-gray-100 rounded-md">
                      {result.winningNumber.toString().padStart(3, '0')}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-1">Ganhador:</p>
                    <p className="font-medium">
                      {result.winnerName || 'Será revelado em breve...'}
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm mb-1">Prêmio:</p>
                    <p className="font-medium">{result.prize}</p>
                  </div>
                  
                  <div className="mt-4">
                    <Link 
                      href={`/rifas/${result.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Ver detalhes da rifa
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}