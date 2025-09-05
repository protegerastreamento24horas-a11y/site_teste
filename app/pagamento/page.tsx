'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function PagamentoPage() {
  const searchParams = useSearchParams();
  const qrCode = searchParams.get('qr_code');
  const qrCodeBase64 = searchParams.get('qr_code_base64');
  const paymentId = searchParams.get('id');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos em segundos
  const [paymentStatus, setPaymentStatus] = useState('pending');

  // Efeito para o temporizador
  useEffect(() => {
    if (timeLeft <= 0) {
      setPaymentStatus('expired');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Efeito para verificar o status do pagamento
  useEffect(() => {
    if (!paymentId || paymentStatus === 'paid' || paymentStatus === 'expired') return;

    const checkPaymentStatus = async () => {
      try {
        // Chamar a API para verificar o status do pagamento
        const response = await fetch(`/api/payment-status?paymentId=${paymentId}`);
        
        if (response.ok) {
          const data = await response.json();
          if (data.status === 'paid') {
            setPaymentStatus('paid');
          } else if (data.status === 'failed') {
            setPaymentStatus('failed');
          }
        }
      } catch (error) {
        console.error('Erro ao verificar status do pagamento:', error);
      }
    };

    // Verificar o status a cada 10 segundos
    const interval = setInterval(checkPaymentStatus, 10000);
    
    return () => clearInterval(interval);
  }, [paymentId, paymentStatus]);

  // Função para formatar o tempo restante
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-black sm:text-4xl">
            Pagamento via <span className="text-blue-600">PIX</span>
          </h1>
          <p className="mt-3 text-xl text-black">
            Complete seu pagamento para confirmar sua participação na rifa
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
          {paymentStatus === 'paid' ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black mb-2">Pagamento Confirmado!</h2>
              <p className="text-black mb-6">
                Seu pagamento foi processado com sucesso. Você receberá um email com os detalhes da sua rifa.
              </p>
              <button 
                onClick={() => window.location.href = '/minhas-rifas'}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
              >
                Ver Minhas Rifas
              </button>
            </div>
          ) : paymentStatus === 'failed' ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black mb-2">Pagamento Falhou</h2>
              <p className="text-black mb-6">
                Ocorreu um erro ao processar seu pagamento. Por favor, tente novamente.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
              >
                Tentar Novamente
              </button>
            </div>
          ) : paymentStatus === 'expired' ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black mb-2">Tempo Esgotado</h2>
              <p className="text-black mb-6">
                O tempo para pagamento expirou. Por favor, faça uma nova tentativa.
              </p>
              <button 
                onClick={() => window.location.href = '/rifas'}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
              >
                Voltar para Rifas
              </button>
            </div>
          ) : (
            <>
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-black">Pague com PIX</h2>
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {formatTime(timeLeft)} restantes
                  </div>
                </div>
                <p className="text-black">
                  Escaneie o QR Code ou copie o código PIX abaixo para finalizar seu pagamento
                </p>
              </div>
              
              <div className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {/* Verificar se temos uma imagem QR Code em base64 */}
                    {qrCodeBase64 ? (
                      <img 
                        src={qrCodeBase64} 
                        alt="QR Code PIX" 
                        className="w-64 h-64"
                      />
                    ) : qrCode && qrCode.startsWith('data:image') ? (
                      <img 
                        src={qrCode} 
                        alt="QR Code PIX" 
                        className="w-64 h-64"
                      />
                    ) : qrCode && qrCode.startsWith('http') ? (
                      // Se for uma URL, exibir como imagem
                      <img 
                        src={qrCode} 
                        alt="QR Code PIX" 
                        className="w-64 h-64"
                      />
                    ) : (
                      // Se for texto (código PIX copia e cola), exibir como código QR gerado
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center">
                        <div className="text-center">
                          <div className="bg-white p-2 rounded mb-2 inline-block">
                            <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 3H9V9H3V3Z" fill="black"/>
                              <path d="M3 15H9V21H3V15Z" fill="black"/>
                              <path d="M15 3H21V9H15V3Z" fill="black"/>
                              <path d="M15 15H21V21H15V15Z" fill="black"/>
                            </svg>
                          </div>
                          <p className="text-xs text-black">QR Code</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-black mb-2 text-center">
                    Abra seu aplicativo bancário e escaneie o QR Code acima
                  </p>
                  <p className="text-black text-sm mb-6 text-center">
                    Ou copie o código PIX abaixo e cole no seu app bancário
                  </p>
                  
                  <div className="w-full max-w-md">
                    <div className="flex">
                      <input
                        type="text"
                        value={qrCode || ''}
                        readOnly
                        className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      />
                      <button 
                        onClick={() => navigator.clipboard.writeText(qrCode || '')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition duration-300"
                      >
                        Copiar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 border-t border-gray-200">
                <h3 className="font-bold text-black mb-2">Instruções para pagamento:</h3>
                <ol className="list-decimal list-inside text-black space-y-1 text-sm">
                  <li>Abra o app do seu banco ou carteira digital</li>
                  <li>Escolha a opção de pagamento via PIX</li>
                  <li>Escaneie o QR Code ou cole o código copiado</li>
                  <li>Confirme as informações e finalize o pagamento</li>
                  <li>Após o pagamento, aguarde alguns segundos para confirmação</li>
                </ol>
              </div>
            </>
          )}
        </div>
        
        <div className="mt-6 text-center">
          <button 
            onClick={() => window.location.href = '/rifas'}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Voltar para Rifas
          </button>
        </div>
      </div>
    </div>
  );
}