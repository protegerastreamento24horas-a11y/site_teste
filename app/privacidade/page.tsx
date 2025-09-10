'use client';

import Link from 'next/link';

export default function PrivacyPage() {
  const privacySections = [
    {
      title: '1. Informações que Coletamos',
      content: 'Coletamos informações pessoais que você nos fornece diretamente, como nome, endereço de email, número de telefone, data de nascimento e informações de pagamento. Também coletamos automaticamente informações sobre o uso do site, como endereço IP, tipo de navegador, páginas visitadas e tempo de permanência.'
    },
    {
      title: '2. Como Usamos suas Informações',
      content: 'Utilizamos suas informações para fornecer e melhorar nossos serviços, processar transações, enviar comunicações relevantes, personalizar sua experiência e cumprir obrigações legais. Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais sem o seu consentimento.'
    },
    {
      title: '3. Proteção de Dados',
      content: 'Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia, firewalls e outras tecnologias para garantir a segurança dos seus dados.'
    },
    {
      title: '4. Cookies e Tecnologias Semelhantes',
      content: 'Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, analisar tendências, administrar o site, acompanhar as preferências dos usuários e coletar informações demográficas. Você pode configurar seu navegador para recusar todos ou alguns cookies.'
    },
    {
      title: '5. Compartilhamento de Informações',
      content: 'Podemos compartilhar suas informações com prestadores de serviços terceirizados que nos auxiliam na operação do site, processamento de pagamentos, análise de dados e atendimento ao cliente. Também podemos divulgar informações quando exigido por lei ou para proteger nossos direitos.'
    },
    {
      title: '6. Seus Direitos',
      content: 'Você tem o direito de acessar, corrigir ou excluir suas informações pessoais, bem como se opor ao processamento dos seus dados. Para exercer esses direitos, entre em contato conosco através dos canais disponibilizados em nossa página de contato.'
    },
    {
      title: '7. Retenção de Dados',
      content: 'Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, exceto quando um período de retenção mais longo for exigido ou permitido por lei.'
    },
    {
      title: '8. Alterações nesta Política',
      content: 'Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política em nosso site. Recomendamos que você revise esta política regularmente para estar ciente de como protegemos suas informações.'
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
            <Link href="/" className="hover:text-yellow-400 transition">Início</Link> / Privacidade
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
            <p className="text-xl text-gray-300">
              Sua privacidade é importante para nós. Leia como protegemos seus dados.
            </p>
          </div>

          <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6">
              <h2 className="text-2xl font-bold text-center">Proteção de Dados Pessoais</h2>
            </div>
            
            <div className="p-8">
              <div>
                <p className="text-gray-300 mb-8">
                  Esta Política de Privacidade descreve como a MEGA RASPADINHA coleta, usa e protege suas informações pessoais 
                  quando você utiliza nosso site e serviços. Ao utilizar nossa plataforma, você concorda com as práticas descritas 
                  nesta política.
                </p>
                
                <div className="space-y-8">
                  {privacySections.map((section, index) => (
                    <div key={index} className="border-b border-gray-800 pb-8 last:border-0 last:pb-0">
                      <h3 className="text-xl font-bold mb-4 text-yellow-400">{section.title}</h3>
                      <p className="text-gray-300">{section.content}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Contato</h3>
                  <p className="text-gray-300 mb-4">
                    Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos de privacidade, 
                    entre em contato conosco:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Email: privacidade@megaraspadinha.com</li>
                    <li>Telefone: (11) 99999-9999</li>
                    <li>Endereço: Av. Paulista, 1000 - São Paulo - SP, 01310-100</li>
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