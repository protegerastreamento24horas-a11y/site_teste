'use client';

import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      question: 'Como faço para começar a jogar?',
      answer: 'Para começar a jogar, basta criar uma conta em nossa plataforma, escolher a raspadinha desejada e realizar o pagamento via PIX. Após o pagamento, você pode raspar imediatamente para descobrir se ganhou.'
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Atualmente, aceitamos pagamentos exclusivamente via PIX, que é a forma mais rápida e segura de pagar. O pagamento é processado imediatamente e sua raspadinha fica disponível para raspar assim que confirmado.'
    },
    {
      question: 'Como são determinados os ganhadores?',
      answer: 'Os resultados são determinados por um sistema de números aleatórios certificado, garantindo justiça e transparência em todos os sorteios. Cada raspadinha tem uma taxa de retorno ao jogador (RTP) de no mínimo 90%.'
    },
    {
      question: 'Quanto tempo leva para receber o prêmio?',
      answer: 'Prêmios são creditados imediatamente na sua conta após a revelação da raspadinha. Para sacar, basta seguir o processo de saque na sua conta, que pode variar de algumas horas a alguns dias úteis, dependendo do método escolhido.'
    },
    {
      question: 'Existe algum bônus para novos usuários?',
      answer: 'Sim, oferecemos bônus especiais para novos usuários. Ao se cadastrar e fazer sua primeira compra, você recebe créditos extras para jogar. Confira nossa seção de promoções para mais detalhes.'
    },
    {
      question: 'É seguro jogar na Mega Raspadinha?',
      answer: 'Sim, nossa plataforma utiliza as mais avançadas tecnologias de segurança para proteger seus dados e transações. Todos os nossos sistemas são auditados regularmente por órgãos reguladores e especialistas em segurança.'
    },
    {
      question: 'Qual é a idade mínima para jogar?',
      answer: 'Você precisa ter pelo menos 18 anos de idade para jogar em nossa plataforma. Durante o processo de cadastro, solicitamos documentos para verificar sua identidade e idade.'
    },
    {
      question: 'Posso jogar de qualquer lugar?',
      answer: 'Sim, nossa plataforma é totalmente responsiva e você pode jogar de qualquer dispositivo com acesso à internet, seja computador, tablet ou smartphone. No entanto, você precisa estar localizado no território brasileiro para participar.'
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
            <Link href="/" className="hover:text-yellow-400 transition">Início</Link> / FAQ
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Perguntas Frequentes</h1>
            <p className="text-xl text-gray-300">
              Tire suas dúvidas sobre como jogar e aproveitar ao máximo nossa plataforma
            </p>
          </div>

          <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6">
              <h2 className="text-2xl font-bold text-center">Dúvidas Comuns</h2>
            </div>
            
            <div className="p-8">
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-800 pb-8 last:border-0 last:pb-0">
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-gray-300 mb-6">
              Nossa equipe de suporte está pronta para ajudar você a qualquer momento.
            </p>
            <Link 
              href="/contato" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-6 rounded-full transition inline-block"
            >
              Entre em contato
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