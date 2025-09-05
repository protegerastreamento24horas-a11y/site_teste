'use client';

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>
            
            <p className="text-gray-600 mb-6">
              A sua privacidade é importante para nós. Esta Política de Privacidade explica como 
              coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você 
              utiliza nosso site e serviços.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Informações que Coletamos</h2>
            <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Informações fornecidas por você:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Nome completo</li>
              <li>Endereço de email</li>
              <li>Número de telefone</li>
              <li>CPF</li>
              <li>Endereço completo</li>
              <li>Informações de pagamento (processadas pela HorsePay)</li>
            </ul>
            
            <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Informações coletadas automaticamente:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Endereço IP</li>
              <li>Tipo de navegador e dispositivo</li>
              <li>Páginas visitadas em nosso site</li>
              <li>Horário e duração das visitas</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Como Usamos suas Informações</h2>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Processar suas compras de rifas</li>
              <li>Entrar em contato sobre sorteios e resultados</li>
              <li>Personalizar sua experiência no site</li>
              <li>Melhorar nossos serviços e funcionalidades</li>
              <li>Enviar comunicações sobre novas rifas e promoções</li>
              <li>Cumprir obrigações legais</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Compartilhamento de Informações</h2>
            <p className="text-gray-600 mb-4">
              Não vendemos, alugamos ou trocamos suas informações pessoais com terceiros. Podemos 
              compartilhar suas informações apenas nas seguintes circunstâncias:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Com a HorsePay para processamento de pagamentos</li>
              <li>Com autoridades legais quando exigido por lei</li>
              <li>Com prestadores de serviço que auxiliam em nossas operações</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Segurança das Informações</h2>
            <p className="text-gray-600 mb-4">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas 
              informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Seus Direitos</h2>
            <p className="text-gray-600 mb-4">
              Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. 
              Também pode optar por não receber comunicações promocionais a qualquer momento.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies e Tecnologias Semelhantes</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência no site, 
              analisar o tráfego e personalizar conteúdos. Você pode gerenciar suas preferências 
              de cookies através das configurações do seu navegador.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Alterações nesta Política</h2>
            <p className="text-gray-600 mb-4">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você 
              sobre alterações significativas publicando a nova política em nosso site.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contato</h2>
            <p className="text-gray-600 mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Email: contato@rifafacil.com</li>
              <li>Telefone: (11) 99999-9999</li>
              <li>Endereço: Av. Paulista, 1000 - São Paulo, SP</li>
            </ul>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proteção de Dados</h3>
              <p className="text-gray-600 mb-4">
                Estamos comprometidos em proteger sua privacidade e garantir a segurança de suas informações pessoais.
              </p>
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}