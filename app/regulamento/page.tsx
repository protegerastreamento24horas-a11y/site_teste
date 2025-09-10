'use client';

import Link from 'next/link';

export default function RegulationsPage() {
  const regulations = [
    {
      title: '1. Das Disposições Gerais',
      content: 'O presente regulamento estabelece as regras gerais aplicáveis às raspadinhas virtuais oferecidas pela MEGA RASPADINHA. Ao participar, o usuário declara ter lido, compreendido e aceito todas as disposições aqui contidas.'
    },
    {
      title: '2. Da Participação',
      content: 'Para participar das raspadinhas virtuais, o usuário deve ser maior de 18 anos, residente no território brasileiro, possuir conta cadastrada na plataforma e realizar o pagamento do valor correspondente à raspadinha escolhida via PIX.'
    },
    {
      title: '3. Dos Prêmios',
      content: 'Os prêmios variam de acordo com a raspadinha escolhida e são definidos aleatoriamente pelo sistema. Os valores dos prêmios podem variar desde R$ 1,00 até o prêmio máximo anunciado para cada tipo de raspadinha.'
    },
    {
      title: '4. Das Taxas de Retorno',
      content: 'Cada raspadinha tem uma taxa de retorno ao jogador (RTP - Return to Player) de no mínimo 90%, garantindo jogos justos e transparentes. Os resultados são gerados por um sistema de números aleatórios certificado.'
    },
    {
      title: '5. Dos Pagamentos',
      content: 'Os prêmios são creditados imediatamente na conta do usuário após a revelação da raspadinha. Para sacar os prêmios, o usuário deve seguir o processo de saque descrito na plataforma, podendo ser solicitado documentação para validação.'
    },
    {
      title: '6. Das Responsabilidades',
      content: 'A MEGA RASPADINHA não se responsabiliza por falhas de conexão, problemas técnicos ou qualquer outro fator externo que possa interferir na participação do usuário. Em caso de falhas, o usuário deve entrar em contato com o suporte.'
    },
    {
      title: '7. Das Penalidades',
      content: 'A plataforma se reserva o direito de bloquear contas de usuários que violem este regulamento, tentem fraudar o sistema ou pratiquem qualquer forma de abuso. Nesses casos, os prêmios poderão ser cancelados e os valores retidos.'
    },
    {
      title: '8. Da Privacidade',
      content: 'Todos os dados pessoais dos usuários são tratados conforme a Política de Privacidade da plataforma, garantindo segurança e sigilo das informações fornecidas.'
    },
    {
      title: '9. Das Alterações',
      content: 'A MEGA RASPADINHA se reserva o direito de alterar este regulamento a qualquer momento, comprometendo-se a informar os usuários sobre quaisquer mudanças através da plataforma.'
    },
    {
      title: '10. Das Disposições Finais',
      content: 'Este regulamento é regido pelas leis da República Federativa do Brasil. Em caso de controvérsias, o foro eleito será o da comarca de São Paulo/SP, com renúncia a qualquer outro, por mais privilegiado que seja.'
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
            <Link href="/" className="hover:text-yellow-400 transition">Início</Link> / Regulamento
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Regulamento</h1>
            <p className="text-xl text-gray-300">
              Leia atentamente as regras que regem nossa plataforma
            </p>
          </div>

          <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6">
              <h2 className="text-2xl font-bold text-center">Regras e Condições Gerais</h2>
            </div>
            
            <div className="p-8">
              <div>
                <p className="text-gray-300 mb-8">
                  Este Regulamento estabelece as regras e condições gerais aplicáveis ao uso da plataforma MEGA RASPADINHA, 
                  constituindo um acordo legal entre o usuário e a plataforma. Ao acessar e utilizar nossos serviços, 
                  o usuário declara estar ciente e de acordo com todos os termos aqui estabelecidos.
                </p>
                
                <div className="space-y-8">
                  {regulations.map((regulation, index) => (
                    <div key={index} className="border-b border-gray-800 pb-8 last:border-0 last:pb-0">
                      <h3 className="text-xl font-bold mb-4 text-yellow-400">{regulation.title}</h3>
                      <p className="text-gray-300">{regulation.content}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Importante</h3>
                  <p className="text-gray-300 mb-4">
                    Ao utilizar a plataforma MEGA RASPADINHA, você reconhece que:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Está ciente de que o jogo envolve risco e pode resultar em perdas</li>
                    <li>É responsável por suas ações e decisões ao utilizar a plataforma</li>
                    <li>Deve manter seus dados de acesso em sigilo e segurança</li>
                    <li>Concorda em utilizar a plataforma de forma ética e legal</li>
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