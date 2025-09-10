'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Contagem regressiva para redirecionar automaticamente
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/minhas-rifas');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Pagamento Confirmado!</h1>
            <p className="text-gray-600 mb-6">
              Seu pagamento foi processado com sucesso. Os números da rifa foram reservados para você.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
              <h2 className="font-bold text-green-800 mb-2">Próximos passos:</h2>
              <ul className="text-green-700 text-left list-disc pl-5 space-y-1">
                <li>Os números da sua rifa já estão reservados</li>
                <li>Você receberá um e-mail com os detalhes da compra</li>
                <li>Acompanhe seus números em "Minhas Rifas"</li>
                <li>O sorteio será realizado na data prevista</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600">
                Você será redirecionado automaticamente para "Minhas Rifas" em{' '}
                <span className="font-bold text-green-600">{countdown}</span> segundos.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/minhas-rifas"
                className="flex-1 bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors font-medium text-center"
              >
                Ir para Minhas Rifas
              </Link>
              <Link 
                href="/rifas"
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors font-medium text-center"
              >
                Ver outras rifas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}