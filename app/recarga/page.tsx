'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RechargePage() {
  const router = useRouter();
  const [amount, setAmount] = useState('50');
  const [loading, setLoading] = useState(false);
  const [pixGenerated, setPixGenerated] = useState(false);
  const [pixCode] = useState('00020126890014BR.GOV.BCB.PIX2567api.horsepay.com.br/v1/payments/12345678905204000053039865406100.005802BR5925FULANO DE TAL6008BRASILIA61087000000062190515RP12345678-901236304ABC12');
  const [qrCode] = useState('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMDAwIi8+PC9zdmc+');

  const handleGeneratePix = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Por favor, informe um valor válido');
      return;
    }

    setLoading(true);
    
    // Simular geração de PIX via HorsePay
    setTimeout(() => {
      setLoading(false);
      setPixGenerated(true);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixCode);
    alert('Código PIX copiado para a área de transferência!');
  };

  const handlePaymentConfirmation = () => {
    alert('Pagamento confirmado! Seu saldo será atualizado em breve.');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/dashboard" className="text-red-400 hover:text-red-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar para o painel
          </Link>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Recarregar Saldo</h1>
              <p className="text-gray-400">Pague via PIX e receba créditos na hora</p>
            </div>

            {!pixGenerated ? (
              <div className="max-w-md mx-auto">
                <div className="bg-gray-900 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-white mb-4">Informe o valor</h2>
                  
                  <div className="mb-6">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">
                      Valor em Reais (R$)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400 sm:text-sm">R$</span>
                      </div>
                      <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="block w-full pl-10 pr-12 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-red-500 focus:border-red-500"
                        placeholder="0,00"
                        min="1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[10, 30, 50, 100, 200, 500].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setAmount(value.toString())}
                        className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded-md text-sm font-medium transition duration-300"
                      >
                        R$ {value}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={handleGeneratePix}
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Gerando PIX...
                      </span>
                    ) : (
                      'GERAR PIX'
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-gray-900 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-white mb-4 text-center">Pague com PIX</h2>
                  
                  <div className="flex flex-col items-center mb-6">
                    <div className="bg-white p-4 rounded-lg mb-4">
                      {qrCode ? (
                        <img src={qrCode} alt="QR Code PIX" className="w-48 h-48" />
                      ) : (
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48" />
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">Aponte a câmera do seu banco para o QR Code</p>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Ou copie o código PIX
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        readOnly
                        value={pixCode}
                        className="flex-1 border border-gray-600 rounded-l-md px-3 py-2 text-sm font-mono bg-gray-700 text-white"
                      />
                      <button
                        onClick={copyToClipboard}
                        className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-r-md text-sm font-medium text-white"
                      >
                        Copiar
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center bg-yellow-900 p-3 rounded-md">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-yellow-400 font-medium">Aguardando pagamento</span>
                      </div>
                      <span className="text-yellow-400 font-bold">R$ {amount}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handlePaymentConfirmation}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                  >
                    JÁ REALIZEI O PAGAMENTO
                  </button>
                  
                  <button
                    onClick={() => setPixGenerated(false)}
                    className="w-full mt-3 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                  >
                    Voltar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}