'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PaymentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutos em segundos
  const [raffle, setRaffle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [pixCode, setPixCode] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [paymentId, setPaymentId] = useState<number | null>(null);
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [error, setError] = useState('');

  const raffleId = searchParams.get('id');
  const quantity = searchParams.get('quantity');

  useEffect(() => {
    // Carregar dados da rifa
    if (raffleId && quantity) {
      const mockRaffle = {
        id: parseInt(raffleId),
        title: 'iPhone 15 Pro Max',
        price: 5.00,
        quantity: parseInt(quantity),
        total: 5.00 * parseInt(quantity)
      };
      
      setRaffle(mockRaffle);
      
      // Gerar pagamento via HorsePay
      generatePayment(mockRaffle);
    } else {
      // Se não tiver parâmetros, redirecionar para as rifas
      router.push('/rifas');
    }
  }, [raffleId, quantity, router]);

  const generatePayment = async (raffleData: any) => {
    try {
      setLoading(true);
      setError('');
      
      // Chamar a API PIX para gerar o pagamento
      const response = await fetch('/api/pix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: raffleData.total,
          description: `Pagamento de rifa: ${raffleData.title}`,
          payerEmail: '' // Em um sistema real, pegaríamos o email do usuário logado
        }),
      });

      const data = await response.json();

      if (response.ok && data.qr_code_base64) {
        setQrCode(data.qr_code_base64);
        setPixCode(data.qr_code);
        setPaymentId(data.id);
        setPaymentStatus(data.status);
      } else {
        const errorMessage = data.message || data.error || 'Erro ao gerar o pagamento';
        setError(errorMessage);
        console.error('Erro na resposta:', data);
      }
    } catch (err) {
      console.error('Erro ao gerar pagamento:', err);
      setError('Erro de conexão. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Iniciar contador regressivo
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixCode);
    alert('Código PIX copiado para a área de transferência!');
  };

  const handlePaymentConfirmation = () => {
    // Simular confirmação de pagamento
    router.push('/sucesso');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Gerando pagamento...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Pagamento via PIX</h1>
              <p className="text-gray-600">Escaneie o QR Code ou copie o código PIX</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <div className="mb-8">
              <div className="flex justify-between items-center bg-yellow-50 p-4 rounded-md border border-yellow-200">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="font-medium text-yellow-800">Pagamento aguardando confirmação</span>
                </div>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  {formatTime(timeLeft)} restantes
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                    <div className="bg-white p-4 rounded-md mb-4">
                      {qrCode ? (
                        <img src={qrCode} alt="QR Code PIX" className="w-48 h-48" />
                      ) : (
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 flex items-center justify-center">
                          <span className="text-gray-500">QR Code não disponível</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-center">Escaneie com o app do seu banco</p>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Ou copie o código PIX</h2>
                    <div className="mb-4">
                      <div className="bg-gray-100 p-4 rounded-md break-words text-sm font-mono">
                        {pixCode || 'Código PIX não disponível'}
                      </div>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      disabled={!pixCode}
                      className={`w-full py-2 px-4 rounded-md font-medium ${
                        pixCode 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Copiar código PIX
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Resumo do pedido</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Rifa:</span>
                  <span className="font-medium">{raffle?.title}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Quantidade:</span>
                  <span className="font-medium">{raffle?.quantity} números</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Valor unitário:</span>
                  <span className="font-medium">R$ {raffle?.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-200">
                  <span className="text-lg font-bold text-gray-900">Total:</span>
                  <span className="text-lg font-bold text-green-600">R$ {raffle?.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push('/rifas')}
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={handlePaymentConfirmation}
                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Já realizei o pagamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}