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

  const raffleId = searchParams.get('id');
  const quantity = searchParams.get('quantity');

  useEffect(() => {
    // Simular carregamento de dados da rifa
    if (raffleId && quantity) {
      const mockRaffle = {
        id: parseInt(raffleId),
        title: 'iPhone 15 Pro Max',
        price: 5.00,
        quantity: parseInt(quantity),
        total: 5.00 * parseInt(quantity)
      };
      
      setRaffle(mockRaffle);
      
      // Simular geração de código PIX via HorsePay
      setTimeout(() => {
        setPixCode('00020126890014BR.GOV.BCB.PIX2567api.horsepay.com.br/v1/payments/12345678905204000053039865406100.005802BR5925FULANO DE TAL6008BRASILIA61087000000062190515RP12345678-901236304ABC12');
        setQrCode('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACCCAMAAADQNkiAAAAA1BMVEW10NBjBBbqAAAAH0lEQVRo3u3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICLAcTSYAAAAABJRU5ErkJggg==');
        setPaymentId(123456);
        setLoading(false);
      }, 1500);
    } else {
      // Se não tiver parâmetros, redirecionar para as rifas
      router.push('/rifas');
    }
  }, [raffleId, quantity, router]);

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
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48" />
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
                        {pixCode}
                      </div>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
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