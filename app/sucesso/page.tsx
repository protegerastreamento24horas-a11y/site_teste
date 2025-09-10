'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SucessoPage() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/minhas-rifas';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          
          <h1 className="text-3xl font-extrabold text-black mb-4">
            Compra Realizada com Sucesso!
          </h1>
          
          <p className="text-xl text-black mb-8">
            Parabéns! Sua compra foi confirmada e os números da sorte já estão disponíveis.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-black mb-4">Detalhes da Compra</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-black">Rifa</p>
                <p className="font-medium text-black">iPhone 15 Pro Max</p>
              </div>
              <div>
                <p className="text-sm text-black">Quantidade</p>
                <p className="font-medium text-black">4 rifas</p>
              </div>
              <div>
                <p className="text-sm text-black">Números da Sorte</p>
                <p className="font-medium text-black">#0142, #0387, #0729, #0901</p>
              </div>
              <div>
                <p className="text-sm text-black">Valor Total</p>
                <p className="font-medium text-black">R$ 40,00</p>
              </div>
              <div>
                <p className="text-sm text-black">Data da Compra</p>
                <p className="font-medium text-black">15/04/2025</p>
              </div>
              <div>
                <p className="text-sm text-black">Data do Sorteio</p>
                <p className="font-medium text-black">30/06/2025</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Importante</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Um email com todos os detalhes da sua compra foi enviado para seu endereço de email cadastrado.
                    Guarde esse email para referência futura.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link 
              href="/minhas-rifas" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300"
            >
              Ver Minhas Rifas
            </Link>
            <Link 
              href="/rifas" 
              className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-lg border border-blue-600 transition duration-300"
            >
              Comprar Mais Rifas
            </Link>
          </div>
          
          <p className="text-black">
            Você será redirecionado automaticamente para a página de "Minhas Rifas" em {countdown} segundos.
          </p>
        </div>
      </div>
    </div>
  );
}