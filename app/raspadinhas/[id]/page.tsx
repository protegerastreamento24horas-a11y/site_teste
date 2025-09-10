'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RaffleDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchResult, setScratchResult] = useState<{win: boolean, prize?: number} | null>(null);
  const [raffle, setRaffle] = useState<any>(null);

  // Dados das raspadinhas
  const raffles = [
    { 
      id: 1, 
      title: 'Raspadinha Ouro', 
      description: 'Raspadinha com prêmios de até R$10.000', 
      price: 10.00, 
      maxPrize: 10000,
      icon: '🥇',
      color: 'from-yellow-600 to-yellow-800'
    },
    { 
      id: 2, 
      title: 'Raspadinha Prata', 
      description: 'Raspadinha com prêmios de até R$5.000', 
      price: 5.00, 
      maxPrize: 5000,
      icon: '🥈',
      color: 'from-gray-400 to-gray-600'
    },
    { 
      id: 3, 
      title: 'Raspadinha Bronze', 
      description: 'Raspadinha com prêmios de até R$2.000', 
      price: 2.00, 
      maxPrize: 2000,
      icon: '🥉',
      color: 'from-amber-800 to-amber-900'
    },
    { 
      id: 4, 
      title: 'Raspadinha Diamante', 
      description: 'Raspadinha com prêmios de até R$50.000', 
      price: 50.00, 
      maxPrize: 50000,
      icon: '💎',
      color: 'from-blue-400 to-blue-600'
    },
  ];

  useEffect(() => {
    // Encontrar a raspadinha pelo ID
    const foundRaffle = raffles.find(r => r.id === parseInt(params.id));
    if (foundRaffle) {
      setRaffle(foundRaffle);
    } else {
      // Se não encontrar, redirecionar para a página de raspadinhas
      router.push('/raspadinhas');
    }
  }, [params.id, router]);

  const handleQuantityChange = (value: number) => {
    const newQuantity = Math.max(1, value);
    setQuantity(newQuantity);
  };

  const handleScratch = () => {
    if (isScratching) return;
    
    setIsScratching(true);
    
    // Simular o processo de raspar com um atraso
    setTimeout(() => {
      // Gerar resultado aleatório (10% de chance de ganhar)
      const win = Math.random() < 0.1;
      const prize = win ? Math.floor(Math.random() * raffle.maxPrize * 0.1) + 10 : 0;
      
      setScratchResult({ win, prize: win ? prize : undefined });
      setIsScratching(false);
    }, 2000);
  };

  const handleBuy = () => {
    router.push(`/pagamento?id=${raffle.id}&quantity=${quantity}`);
  };

  if (!raffle) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-6">🎲</div>
          <h1 className="text-3xl font-bold mb-4">Raspadinha não encontrada</h1>
          <p className="text-gray-400 mb-8">A raspadinha que você procura não existe.</p>
          <Link 
            href="/raspadinhas" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full"
          >
            Ver raspadinhas disponíveis
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-pink-800 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <h1 className="text-2xl font-bold ml-3">MEGA RASPADINHA</h1>
          </div>
          
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-yellow-400 transition">INÍCIO</Link>
            <Link href="/raspadinhas" className="font-bold text-yellow-400">RASPADINHAS</Link>
            <Link href="/resultados" className="hover:text-yellow-400 transition">RESULTADOS</Link>
            <Link href="/como-jogar" className="hover:text-yellow-400 transition">COMO JOGAR</Link>
          </nav>
          
          <div className="mt-4 md:mt-0">
            <Link 
              href="/login" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition"
            >
              ENTRAR
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="py-4 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <nav className="text-gray-400">
            <Link href="/" className="hover:text-yellow-400 transition">Início</Link> / 
            <Link href="/raspadinhas" className="hover:text-yellow-400 transition"> Raspadinhas</Link> / {raffle.title}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 overflow-hidden">
            <div className={`bg-gradient-to-r ${raffle.color} p-6 text-center`}>
              <div className="text-7xl mb-4">{raffle.icon}</div>
              <h1 className="text-3xl font-bold">{raffle.title}</h1>
            </div>
            
            <div className="md:flex">
              {/* Informações da raspadinha */}
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-4">Sobre esta raspadinha</h2>
                <p className="text-gray-300 mb-6">{raffle.description}</p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Valor por raspadinha</div>
                    <div className="text-2xl font-bold text-yellow-400">R$ {raffle.price.toFixed(2)}</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="text-sm text-gray-400">Prêmio máximo</div>
                    <div className="text-2xl font-bold text-green-400">R$ {raffle.maxPrize.toLocaleString('pt-BR')}</div>
                  </div>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Como jogar</h3>
                  <ol className="space-y-2 text-gray-300">
                    <li>1. Escolha a quantidade de raspadinhas</li>
                    <li>2. Pague via PIX</li>
                    <li>3. Raspe virtualmente para revelar seu prêmio</li>
                    <li>4. Prêmios são creditados imediatamente</li>
                  </ol>
                </div>
              </div>
              
              {/* Área de jogo */}
              <div className="md:w-1/2 p-8 border-t md:border-t-0 md:border-l border-purple-800">
                <h2 className="text-2xl font-bold mb-6">Raspar Agora</h2>
                
                {scratchResult ? (
                  <div className="text-center py-8">
                    {scratchResult.win ? (
                      <div>
                        <div className="text-7xl mb-6">🎉</div>
                        <h3 className="text-3xl font-bold text-green-500 mb-4">PARABÉNS! VOCÊ GANHOU!</h3>
                        <p className="text-5xl font-bold text-yellow-400 mb-8">R$ {scratchResult.prize?.toLocaleString('pt-BR')}</p>
                        <p className="text-gray-300 mb-8">O prêmio já foi creditado na sua conta!</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <button
                            onClick={() => {
                              setScratchResult(null);
                              setQuantity(1);
                            }}
                            className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-6 rounded-full transition"
                          >
                            Raspar Novamente
                          </button>
                          <Link 
                            href="/minha-conta" 
                            className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold py-4 px-6 rounded-full transition"
                          >
                            Ver Meus Prêmios
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-7xl mb-6">😞</div>
                        <h3 className="text-3xl font-bold text-red-500 mb-6">NÃO FOI DESSA VEZ!</h3>
                        <p className="text-gray-300 mb-8">Tente novamente, sua sorte está próxima!</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <button
                            onClick={() => setScratchResult(null)}
                            className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-6 rounded-full transition"
                          >
                            Tentar Novamente
                          </button>
                          <Link 
                            href="/raspadinhas" 
                            className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold py-4 px-6 rounded-full transition"
                          >
                            Outras Raspadinhas
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : isScratching ? (
                  <div className="text-center py-16">
                    <div className="inline-block animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-yellow-500 mb-8"></div>
                    <h3 className="text-2xl font-bold mb-4">Raspando sua raspadinha...</h3>
                    <p className="text-gray-400">Aguarde enquanto revelamos seu prêmio</p>
                  </div>
                ) : (
                  <div>
                    <div className="mb-8">
                      <label className="block text-gray-300 font-medium mb-4">Quantidade de raspadinhas:</label>
                      <div className="flex items-center">
                        <button 
                          onClick={() => handleQuantityChange(quantity - 1)}
                          className="bg-gray-800 text-white px-6 py-4 rounded-l-lg hover:bg-gray-700 border border-gray-700 border-r-0"
                          disabled={quantity <= 1}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                          className="border-t border-b border-gray-700 px-6 py-4 w-24 text-center bg-black text-white"
                        />
                        <button 
                          onClick={() => handleQuantityChange(quantity + 1)}
                          className="bg-gray-800 text-white px-6 py-4 rounded-r-lg hover:bg-gray-700 border border-gray-700 border-l-0"
                        >
                          +
                        </button>
                      </div>
                      <p className="mt-4 text-gray-300">
                        Total: <span className="font-bold text-2xl text-yellow-400">R$ {(raffle.price * quantity).toFixed(2)}</span>
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <button
                        onClick={handleScratch}
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-6 rounded-full text-lg transition"
                      >
                        Raspar Agora
                      </button>
                      
                      <div className="text-center py-4">
                        <p className="text-gray-500 mb-2">Ou prefere comprar e raspar depois?</p>
                        <button
                          onClick={handleBuy}
                          className="text-purple-400 hover:text-purple-300 font-medium"
                        >
                          Comprar raspadinhas
                        </button>
                      </div>
                    </div>
                  </div>
                )}
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