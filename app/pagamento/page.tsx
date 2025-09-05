'use client';

import { Children } from 'react';

interface ClientComponentProps {
  children: React.ReactNode;
}

export default function ClientComponent({ children }: ClientComponentProps) {
  return (
    <>
      {children}
    </>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ClientComponent } from '@/components/ClientComponent';

export default function PagamentoPage() {
  return (
    <ClientComponent>
export default function PagamentoPage() {
  return (
    <ClientComponent>
  const searchParams = useSearchParams();
  const qrCode = searchParams.get('qr_code');
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
        // Em uma implementação real, você chamaria a API para verificar o status
        // Por enquanto, vamos simular uma verificação
        const response = await fetch(`/api/webhook`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            external_id: paymentId,
            status: 1, // 1 = pago, 0 = pendente
            amount: 50.00
          }),
        });

        if (response.ok) {
          setPaymentStatus('paid');
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

  if (!qrCode) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Erro</h1>
          <p className="text-gray-600 mb-6">
            Não foi possível carregar as informações de pagamento. Por favor, tente novamente.
          </p>
          <button 
            onClick={() => window.location.href = '/rifas'}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Voltar para Rifas
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Finalize seu Pagamento
          </h1>
          <p className="text-gray-600">
            Escaneie o QR Code abaixo com seu aplicativo bancário para pagar com PIX
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {paymentStatus === 'paid' ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Pagamento Confirmado!
              </h2>
              <p className="text-gray-600 mb-6">
                Seu pagamento foi processado com sucesso. Os números da sua rifa serão enviados para o seu e-mail.
              </p>
              <button 
                onClick={() => window.location.href = '/minhas-rifas'}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Ver Minhas Rifas
              </button>
            </div>
          ) : paymentStatus === 'expired' ? (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Tempo Esgotado!
              </h2>
              <p className="text-gray-600 mb-6">
                O tempo para pagamento expirou. Por favor, faça uma nova tentativa.
              </p>
              <button 
                onClick={() => window.location.href = '/rifas'}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Tentar Novamente
              </button>
            </div>
          ) : (
            <>
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">
                    Pagamento via PIX
                  </h2>
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {formatTime(timeLeft)} restantes
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col items-center">
                  <div className="border-4 border-gray-300 rounded-xl p-4 mb-6">
                    {qrCode.startsWith('data:image') ? (
                      <img 
                        src={qrCode} 
                        alt="QR Code PIX" 
                        className="w-64 h-64"
                      />
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center">
                        <span className="text-gray-500">QR Code</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-2 text-center">
                    Abra seu aplicativo bancário e escaneie o QR Code acima
                  </p>
                  <p className="text-gray-500 text-sm mb-6 text-center">
                    Ou copie o código PIX abaixo e cole no seu app bancário
                  </p>
                  
                  <div className="w-full max-w-md">
                    <div className="flex">
                      <input
                        type="text"
                        value={qrCode}
                        readOnly
                        className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button 
                        onClick={() => navigator.clipboard.writeText(qrCode)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition duration-300"
                      >
                        Copiar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 border-t border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">Instruções para pagamento:</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-1 text-sm">
                  <li>Abra o app do seu banco ou carteira digital</li>
                  <li>Escolha a opção de pagamento via PIX</li>
                  <li>Escaneie o QR Code ou cole o código copiado</li>
                  <li>Confirme as informações e finalize o pagamento</li>
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