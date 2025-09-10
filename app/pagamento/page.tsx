'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PagamentoPage() {
  const searchParams = useSearchParams();
  const qrCode = searchParams.get('qr_code');
  const qrCodeBase64 = searchParams.get('qr_code_base64');
  const paymentId = searchParams.get('id');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos em segundos
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [isSendingWhatsApp, setIsSendingWhatsApp] = useState(false);

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
    if (!paymentId || paymentStatus === 'paid' || paymentStatus === 'expired' || paymentStatus === 'refunded') return;

    const checkPaymentStatus = async () => {
      try {
        const response = await fetch(`/api/payment-status?paymentId=${paymentId}`);
        const data = await response.json();
        
        if (data.status === 'paid') {
          setPaymentStatus('paid');
          // Enviar confirmação via WhatsApp
          sendWhatsAppConfirmation();
        } else if (data.status === 'failed') {
          setPaymentStatus('failed');
        } else if (data.status === 'refunded') {
          setPaymentStatus('refunded');
        }
      } catch (error) {
        console.error('Erro ao verificar status do pagamento:', error);
      }
    };

    const interval = setInterval(checkPaymentStatus, 10000);
    
    return () => clearInterval(interval);
  }, [paymentId, paymentStatus]);

  // Função para enviar confirmação via WhatsApp
  const sendWhatsAppConfirmation = async () => {
    setIsSendingWhatsApp(true);
    try {
      // Obter número de telefone do usuário
      const userPhone = localStorage.getItem('userPhone');
      
      if (!userPhone) {
        throw new Error('Número de telefone do usuário não encontrado');
      }

      // Detalhes da rifa (simulados)
      const raffleDetails = {
        title: "iPhone 15 Pro Max",
        numbers: ["001", "015", "023", "045", "102"],
        purchaseDate: new Date().toLocaleDateString('pt-BR'),
        totalAmount: "R$ 50,00"
      };

      // Montar mensagem
      const message = `✅ *Pagamento Confirmado - RifaFácil*

Olá! Seu pagamento foi confirmado com sucesso.

🎁 *Rifa*: ${raffleDetails.title}
🔢 *Números sorteados*: ${raffleDetails.numbers.join(', ')}
📅 *Data da compra*: ${raffleDetails.purchaseDate}
💰 *Valor pago*: ${raffleDetails.totalAmount}

Acompanhe suas rifas em: https://rifa-facil.com/minhas-rifas

Boa sorte! 🍀`;

      // Chamar API para enviar mensagem via WhatsApp
      const response = await fetch('/api/whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: userPhone,
          message: message,
          raffleDetails: raffleDetails
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem via WhatsApp');
      }
      
      console.log('Confirmação enviada com sucesso!', data);
    } catch (error) {
      console.error('Erro ao enviar confirmação via WhatsApp:', error);
    } finally {
      setIsSendingWhatsApp(false);
    }
  };

  // Função para formatar o tempo restante
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Função para enviar mensagem via WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '5511999999999'; // Substituir pelo número real de suporte
    const message = 'Olá, gostaria de informações sobre meu pagamento.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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
                Seu pagamento foi processado com sucesso. Você receberá um WhatsApp com os detalhes da sua rifa.
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
                
                <div className="mt-6">
                  <p className="text-black text-sm mb-3">
                    Precisa de ajuda? Fale conosco pelo WhatsApp:
                  </p>
                  <button
                    onClick={openWhatsApp}
                    className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Falar com Suporte
                  </button>
                </div>
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