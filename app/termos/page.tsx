'use client';

import Link from 'next/link';

export default function TermsPage() {
  const termsSections = [
    {
      title: '1. Aceitação dos Termos',
      content: 'Ao acessar e utilizar a plataforma MEGA RASPADINHA, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, não utilize nosso site e serviços.'
    },
    {
      title: '2. Descrição do Serviço',
      content: 'A MEGA RASPADINHA oferece uma plataforma online de jogos de raspadinhas virtuais, onde os usuários podem adquirir raspadinhas e concorrer a prêmios em dinheiro real. Os resultados dos jogos são determinados por um sistema de números aleatórios certificado.'
    },
    {
      title: '3. Elegibilidade',
      content: 'Para utilizar nossos serviços, você deve ter pelo menos 18 anos de idade e ser residente no território brasileiro. Ao utilizar nossa plataforma, você declara e garante que atende a todos os requisitos de elegibilidade.'
    },
    {
      title: '4. Conta de Usuário',
      content: 'Para participar das raspadinhas, você deve criar uma conta fornecendo informações verdadeiras, precisas e completas. Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorram em sua conta.'
    },
    {
      title: '5. Pagamentos e Prêmios',
      content: 'Todos os pagamentos são processados via PIX. Os prêmios são creditados imediatamente na conta do usuário após a revelação da raspadinha. A MEGA RASPADINHA se reserva o direito de verificar a identidade dos ganhadores antes do pagamento dos prêmios.'
    },
    {
      title: '6. Direitos de Propriedade Intelectual',
      content: 'Todo o conteúdo presente em nossa plataforma, incluindo textos, gráficos, logos, ícones, imagens, clips de áudio e software, é de propriedade exclusiva da MEGA RASPADINHA ou de seus licenciadores e é protegido pelas leis de direitos autorais.'
    },
    {
      title: '7. Conduta do Usuário',
      content: 'Você concorda em não utilizar a plataforma para qualquer finalidade ilegal ou proibida por estes Termos. Você não deve interferir ou interromper a plataforma ou os servidores conectados a ela, nem violar quaisquer leis ao usar nossos serviços.'
    },
    {
      title: '8. Limitação de Responsabilidade',
      content: 'A MEGA RASPADINHA não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de usar nossos serviços, exceto conforme exigido por lei.'
    },
    {
      title: '9. Indenização',
      content: 'Você concorda em indenizar e isentar a MEGA RASPADINHA, seus diretores, funcionários, agentes e afiliados de qualquer reivindicação, demanda, perda, dano, custo ou despesa decorrente do seu uso da plataforma ou violação destes Termos.'
    },
    {
      title: '10. Alterações nos Termos',
      content: 'Podemos revisar estes Termos de Uso a qualquer momento sem aviso prévio. Ao continuar a usar o site após quaisquer alterações, você concorda em ficar vinculado à versão atual desses Termos de Uso.'
    },
    {
      title: '11. Lei Aplicável',
      content: 'Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer controvérsia decorrente destes Termos será resolvida pelos tribunais competentes do Estado de São Paulo.'
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
            <Link href="/" className="hover:text-yellow-400 transition">Início</Link> / Termos de Uso
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Termos de Uso</h1>
            <p className="text-xl text-gray-300">
              Leia atentamente os termos e condições para uso de nossa plataforma
            </p>
          </div>

          <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6">
              <h2 className="text-2xl font-bold text-center">Condições Gerais de Uso</h2>
            </div>
            
            <div className="p-8">
              <div>
                <p className="text-gray-300 mb-8">
                  Estes Termos de Uso regem o acesso e uso da plataforma MEGA RASPADINHA, estabelecendo 
                  os direitos e obrigações dos usuários ao utilizar nossos serviços. Ao acessar ou usar 
                  a plataforma, você concorda em cumprir estes termos.
                </p>
                
                <p className="text-gray-300 mb-8">
                  <strong>Data da última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
                </p>
                
                <div className="space-y-8">
                  {termsSections.map((section, index) => (
                    <div key={index} className="border-b border-gray-800 pb-8 last:border-0 last:pb-0">
                      <h3 className="text-xl font-bold mb-4 text-yellow-400">{section.title}</h3>
                      <p className="text-gray-300">{section.content}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Aceitação dos Termos</h3>
                  <p className="text-gray-300 mb-4">
                    Ao utilizar a plataforma MEGA RASPADINHA, você reconhece que:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Leu e compreendeu estes Termos de Uso</li>
                    <li>Concorda em cumprir todos os termos e condições aqui estabelecidos</li>
                    <li>Tem pelo menos 18 anos de idade</li>
                    <li>É residente no território brasileiro</li>
                    <li>Utilizará a plataforma de forma ética e legal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-full text-lg transition inline-block"
            >
              Voltar para a página inicial
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