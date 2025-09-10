'use client';

import { useState } from 'react';

export default function PixPayment() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [payerEmail, setPayerEmail] = useState('');
  const [pixCode, setPixCode] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generatePix = async () => {
    setLoading(true);
    setError('');
    try {
      // Chamar a API do HorsePay através do nosso backend
      const response = await fetch('/api/pix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          amount: parseFloat(amount), 
          description,
          payerEmail
        }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.qr_code_base64) {
        setQrCode(data.qr_code_base64);
        setPixCode(data.qr_code);
      } else {
        const errorMessage = data.message || data.error || 'Erro ao gerar o código PIX';
        setError(errorMessage);
        console.error('Erro na resposta:', data);
      }
    } catch (error) {
      console.error('Erro:', error);
      setError('Erro de conexão. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-center mt-4 mb-8">Gerar pagamento PIX</h1>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-700">{error}</p>
              </div>
            )}
            
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    type="number"
                    step="0.01"
                    placeholder="Valor (R$)"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Valor (R$)
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    type="text"
                    placeholder="Descrição"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Descrição
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    onChange={(e) => setPayerEmail(e.target.value)}
                    value={payerEmail}
                    type="email"
                    placeholder="Email do pagador (opcional)"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Email do pagador (opcional)
                  </label>
                </div>
                
                <div className="relative">
                  <button
                    onClick={generatePix}
                    disabled={loading || !amount || !description}
                    className={`w-full bg-green-500 text-white rounded-md py-2 font-semibold ${
                      loading || !amount || !description 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-green-600'
                    }`}
                  >
                    {loading ? 'Gerando...' : 'Gerar PIX'}
                  </button>
                </div>
              </div>
              
              {qrCode && (
                <div className="pt-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h2 className="text-xl font-bold">Seu código PIX</h2>
                  
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                      <img 
                        src={qrCode} 
                        alt="QR Code PIX" 
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Código PIX (cópia e cola):
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          readOnly
                          value={pixCode}
                          className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm font-mono"
                        />
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(pixCode);
                            alert('Código copiado para a área de transferência!');
                          }}
                          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-r-md text-sm font-medium"
                        >
                          Copiar
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-600">
                        Aponte a câmera do seu banco para o QR Code ou copie o código acima para realizar o pagamento.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}