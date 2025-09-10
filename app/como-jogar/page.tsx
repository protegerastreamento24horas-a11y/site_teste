'use client';

import Link from 'next/link';

export default function HowToPlayPage() {
  const steps = [
    {
      id: 1,
      title: 'Escolha sua Raspadinha',
      description: 'Navegue pelas nossas opções de raspadinhas e escolha a que mais combina com você. Cada uma tem valores e prêmios máximos diferentes.',
      icon: '🎰'
    },
    {
      id: 2,
      title: 'Realize o Pagamento',
      description: 'Pague sua raspadinha via PIX de forma rápida e segura. O pagamento é processado imediatamente.',
      icon: '💳'
    },
    {
      id: 3,
      title: 'Comece a Raspar',
      description: 'Após o pagamento, você pode raspar imediatamente para descobrir se ganhou um prêmio em dinheiro real.',
      icon: '🎮'
    },
    {
      id: 4,
      title: 'Receba seu Prêmio',
      description: 'Se você for sorteado, o prêmio será creditado automaticamente na sua conta. Você pode sacar quando quiser!',
      icon: '💰'
    }
  ];

  const faqs = [
    {
      question: 'As raspadinhas são justas?',
      answer: 'Sim, todos os nossos sorteios são realizados de forma justa e transparente, com algoritmos auditados por órgãos reguladores.'
    },
    {
      question: 'Qual é a chance de ganhar?',
      answer: 'Cada raspadinha tem uma taxa de vitória acima de 90%, garantindo diversão e chances reais de ganhar.'
    },
    {
      question: 'Quanto tempo leva para receber o prêmio?',
      answer: 'Prêmios são creditados imediatamente na sua conta após a revelação da raspadinha.'
    },
    {
      question: 'Posso jogar de qualquer lugar?',
      answer: 'Sim, nosso site é totalmente responsivo e você pode jogar de qualquer dispositivo com acesso à internet.'
    }
  ];

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
            <Link href="/raspadinhas" className="hover:text-yellow-400 transition">RASPADINHAS</Link>
            <Link href="/resultados" className="hover:text-yellow-400 transition">RESULTADOS</Link>
            <Link href="/como-jogar" className="font-bold text-yellow-400">COMO JOGAR</Link>
          </nav>
          
          <div className="mt-4 md:mt-0">
            <Link 
              href="/login" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition duration-300"
            >
              ENTRAR
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="py-4 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <nav className="text-gray-400 flex items-center space-x-2">
            <Link href="/" className="hover:text-yellow-400 transition duration-300">Início</Link>
            <span>/</span>
            <span>Como Jogar</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Como Jogar na Mega Raspadinha</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              É simples, rápido e divertido! Siga estes passos para começar a raspar e ganhar prêmios em dinheiro real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 p-8 text-center hover:border-yellow-500 transition"
              >
                <div className="text-6xl mb-6 flex justify-center">{step.icon}</div>
                <div className="text-4xl font-bold text-yellow-400 mb-4">0{step.id}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 overflow-hidden mb-16">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 p-6">
              <h2 className="text-2xl font-bold text-center text-black">Vantagens de Jogar Conosco</h2>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl mb-4 flex justify-center">⚡</div>
                  <h3 className="text-xl font-bold mb-2">Resultados Imediatos</h3>
                  <p className="text-gray-300">Descubra se ganhou assim que raspar sua raspadinha</p>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl mb-4 flex justify-center">🔒</div>
                  <h3 className="text-xl font-bold mb-2">Pagamentos Seguros</h3>
                  <p className="text-gray-300">Todas as transações são protegidas com tecnologia de ponta</p>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl mb-4 flex justify-center">🏆</div>
                  <h3 className="text-xl font-bold mb-2">Prêmios Reais</h3>
                  <p className="text-gray-300">Ganhe dinheiro real que pode ser sacado para sua conta bancária</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6">
              <h2 className="text-2xl font-bold text-center">Perguntas Frequentes</h2>
            </div>
            
            <div className="p-8">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-800 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold mb-6">Pronto para começar a raspar?</h3>
            <Link 
              href="/raspadinhas" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-full text-lg transition duration-300 inline-block"
            >
              Escolher Minha Raspadinha
            </Link>
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