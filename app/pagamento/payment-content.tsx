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
        total: 5.00 * parseInt(quantity),
        prizeValue: 6500
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
    // Animação de feedback
    const button = document.getElementById('copy-button');
    if (button) {
      button.textContent = 'Copiado!';
      setTimeout(() => {
        button.textContent = 'Copiar código PIX';
      }, 2000);
    }
  };

  const handlePaymentConfirmation = () => {
    // Simular confirmação de pagamento
    router.push('/sucesso');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white mb-4">Processando pagamento</h1>
            <p className="text-gray-400">Gerando código de pagamento seguro...</p>
          </div>
          
          <div className="bg-card-bg rounded-2xl shadow-xl p-12 border border-gray-700">
            <div className="flex justify-center mb-8">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gold"></div>
            </div>
            <p className="text-center text-gray-400">Preparando seu pagamento...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/rifas" className="text-gold hover:text-yellow-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar para as rifas
          </Link>
        </div>

        <div className="bg-card-bg rounded-2xl shadow-xl overflow-hidden border border-gray-700">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold"></div>
          <div className="p-8">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Pagamento via PIX</h1>
              <p className="text-gray-400 text-xl">Escaneie o QR Code ou copie o código PIX</p>
            </div>

            {error && (
              <div className="mb-8 p-6 bg-red-900/30 border border-red-700 rounded-2xl">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-red-400 font-medium">{error}</span>
                </div>
              </div>
            )}

            <div className="mb-10 bg-dark-bg rounded-2xl p-6 border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Pagamento aguardando confirmação</h2>
                    <p className="text-gray-400">O pagamento expira em <span className="font-bold text-gold">{formatTime(timeLeft)}</span></p>
                  </div>
                </div>
                <div className="bg-gold text-black px-4 py-2 rounded-full font-bold">
                  {formatTime(timeLeft)} restantes
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              <div className="bg-dark-bg rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">QR Code PIX</h2>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-6 rounded-2xl mb-6">
                    {qrCode ? (
                      <img src={qrCode} alt="QR Code PIX" className="w-64 h-64" />
                    ) : (
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center">
                        <span className="text-gray-500">QR Code não disponível</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-400 text-center">Aponte a câmera do seu banco para o QR Code</p>
                </div>
              </div>
              
              <div className="bg-dark-bg rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Código PIX</h2>
                <div className="mb-6">
                  <div className="bg-card-bg p-6 rounded-2xl break-words text-sm font-mono border border-gray-700">
                    {pixCode || 'Código PIX não disponível'}
                  </div>
                </div>
                <button
                  id="copy-button"
                  onClick={copyToClipboard}
                  disabled={!pixCode}
                  className={`w-full py-4 px-6 rounded-full font-bold text-lg transition duration-300 ${
                    pixCode 
                      ? 'bg-gradient-gold text-black hover:opacity-90' 
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Copiar código PIX
                </button>
                <p className="text-gray-500 text-sm text-center mt-4">Toque para copiar o código e cole no app do seu banco</p>
              </div>
            </div>

            <div className="bg-dark-bg rounded-2xl p-8 border border-gray-700 mb-10">
              <h2 className="text-2xl font-bold text-white mb-6">Resumo do pedido</h2>
              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b border-gray-700">
                  <div>
                    <h3 className="font-bold text-white text-lg">{raffle?.title}</h3>
                    <p className="text-gray-400">{raffle?.quantity} números selecionados</p>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">R$ {raffle?.total.toFixed(2)}</div>
                    <div className="text-gray-400">R$ {raffle?.price.toFixed(2)} cada</div>
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <div>
                    <h3 className="font-bold text-white">Prêmio</h3>
                    <p className="text-gray-400">Valor estimado do prêmio</p>
                  </div>
                  <div className="text-right">
                    <div className="text-gold font-black text-2xl">R$ {raffle?.prizeValue.toLocaleString('pt-BR')}</div>
                  </div>
                </div>
                
                <div className="flex justify-between pt-6 border-t border-gray-700">
                  <div>
                    <h3 className="font-bold text-white text-xl">Total a pagar</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-gold font-black text-3xl">R$ {raffle?.total.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push('/rifas')}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-full transition duration-300 text-lg"
              >
                Cancelar
              </button>
              <button
                onClick={handlePaymentConfirmation}
                className="flex-1 bg-gradient-gold text-black font-black py-4 px-6 rounded-full hover:opacity-90 transition duration-300 text-lg border-2 border-gold"
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