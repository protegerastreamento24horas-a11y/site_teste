'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PaymentClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutos em segundos
  const [raffle, setRaffle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [pixCode] = useState('00020126580014BR.GOV.BCB.PIX0136megaraspadinha-4567-4242-9876-4848512204000053039865406100.005802BR5925MEGA RASPADINHA LTDA6009SAO PAULO622505214567890123456789012346304ABCD');
  const [qrCode] = useState('');
  const [error, setError] = useState('');

  const raffleId = searchParams.get('id');
  const quantity = searchParams.get('quantity');

  // Dados das raspadinhas
  const raffles = [
    { 
      id: 1, 
      title: 'Raspadinha Ouro', 
      price: 10.00, 
      maxPrize: 10000,
      icon: '🥇'
    },
    { 
      id: 2, 
      title: 'Raspadinha Prata', 
      price: 5.00, 
      maxPrize: 5000,
      icon: '🥈'
    },
    { 
      id: 3, 
      title: 'Raspadinha Bronze', 
      price: 2.00, 
      maxPrize: 2000,
      icon: '🥉'
    },
    { 
      id: 4, 
      title: 'Raspadinha Diamante', 
      price: 50.00, 
      maxPrize: 50000,
      icon: '💎'
    },
  ];

  useEffect(() => {
    // Carregar dados da raspadinha
    if (raffleId && quantity) {
      const foundRaffle = raffles.find(r => r.id === parseInt(raffleId));
      if (foundRaffle) {
        const mockRaffle = {
          ...foundRaffle,
          quantity: parseInt(quantity),
          total: foundRaffle.price * parseInt(quantity)
        };
        
        setRaffle(mockRaffle);
        setLoading(false);
      } else {
        router.push('/raspadinhas');
      }
    } else {
      router.push('/raspadinhas');
    }
  }, [raffleId, quantity, router, raffles]);

  useEffect(() => {
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
    const button = document.getElementById('copy-button');
    if (button) {
      button.textContent = 'Copiado!';
      setTimeout(() => {
        button.textContent = 'Copiar código PIX';
      }, 2000);
    }
  };

  const handlePaymentConfirmation = () => {
    router.push('/sucesso');
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Processando pagamento</h1>
          <p className="text-gray-400 mb-8">Gerando código de pagamento seguro...</p>
          
          <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 p-12">
            <div className="flex justify-center mb-8">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500"></div>
            </div>
            <p className="text-center text-gray-400">Preparando seu pagamento...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Pagamento via PIX</h1>
            <p className="text-gray-300">Escaneie o QR Code ou copie o código PIX para pagar suas raspadinhas</p>
          </div>

          <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 p-6">
              <h2 className="text-2xl font-bold text-center text-black">PAGAMENTO</h2>
            </div>
            
            <div className="p-8">
              {error && (
                <div className="mb-8 p-6 bg-red-900/30 border border-red-700 rounded-lg">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-red-400 font-medium">{error}</span>
                  </div>
                </div>
              )}

              <div className="mb-10 bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">Pagamento aguardando confirmação</h2>
                      <p className="text-gray-400">O pagamento expira em <span className="font-bold text-yellow-400">{formatTime(timeLeft)}</span></p>
                    </div>
                  </div>
                  <div className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
                    {formatTime(timeLeft)} restantes
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
                  <h2 className="text-2xl font-bold mb-6 text-center">QR Code PIX</h2>
                  <div className="flex flex-col items-center">
                    <div className="bg-white p-4 rounded-lg mb-6">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center">
                        <span className="text-gray-500">QR Code PIX</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-center">Aponte a câmera do seu banco para o QR Code</p>
                  </div>
                </div>
                
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
                  <h2 className="text-2xl font-bold mb-6 text-center">Código PIX</h2>
                  <div className="mb-6">
                    <div className="bg-black p-6 rounded-lg break-words text-sm font-mono border border-gray-700">
                      {pixCode}
                    </div>
                  </div>
                  <button
                    id="copy-button"
                    onClick={copyToClipboard}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-6 rounded-full transition"
                  >
                    Copiar código PIX
                  </button>
                  <p className="text-gray-500 text-sm text-center mt-4">Toque para copiar o código e cole no app do seu banco</p>
                </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 mb-10">
                <h2 className="text-2xl font-bold mb-6">Resumo do pedido</h2>
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b border-gray-700">
                    <div>
                      <h3 className="font-bold text-lg">{raffle?.title}</h3>
                      <p className="text-gray-400">{raffle?.quantity} raspadinhas</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">R$ {raffle?.total.toFixed(2)}</div>
                      <div className="text-gray-400">R$ {raffle?.price.toFixed(2)} cada</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <div>
                      <h3 className="font-bold">Prêmio máximo possível</h3>
                      <p className="text-gray-400">Valor estimado do maior prêmio</p>
                    </div>
                    <div className="text-right">
                      <div className="text-yellow-400 font-bold text-xl">R$ {raffle?.maxPrize.toLocaleString('pt-BR')}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-6 border-t border-gray-700">
                    <div>
                      <h3 className="font-bold text-xl">Total a pagar</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-yellow-400 font-bold text-2xl">R$ {raffle?.total.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push('/raspadinhas')}
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-full transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={handlePaymentConfirmation}
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-6 rounded-full transition"
                >
                  Já realizei o pagamento
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                <h3 className="text-xl font-bold ml-2">MEGA RASPADINHA</h3>
              </div>
              <p className="text-gray-400">
                Sua chance diária de mudar de vida com prêmios incríveis!
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">INFORMAÇÕES</h4>
              <ul className="space-y-2">
                <li><Link href="/como-jogar" className="text-gray-400 hover:text-yellow-400 transition">Como Jogar</Link></li>
                <li><Link href="/regulamento" className="text-gray-400 hover:text-yellow-400 transition">Regulamento</Link></li>
                <li><Link href="/resultados" className="text-gray-400 hover:text-yellow-400 transition">Resultados</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-yellow-400 transition">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">SUPORTE</h4>
              <ul className="space-y-2">
                <li><Link href="/contato" className="text-gray-400 hover:text-yellow-400 transition">Contato</Link></li>
                <li><Link href="/privacidade" className="text-gray-400 hover:text-yellow-400 transition">Privacidade</Link></li>
                <li><Link href="/termos" className="text-gray-400 hover:text-yellow-400 transition">Termos de Uso</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">CONTATO</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contato@megaraspadinha.com</li>
                <li>WhatsApp: (11) 99999-9999</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Mega Raspadinha. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}