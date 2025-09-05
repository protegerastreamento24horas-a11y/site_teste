'use client';

export default function TermosDeUsoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-extrabold text-black mb-8 text-center">
            Termos de Uso
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-black mb-6">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>
            
            <p className="text-black mb-6">
              Estes Termos de Uso regem o uso do site RifaFácil e todos os serviços oferecidos por nós. 
              Ao acessar ou usar nossos serviços, você concorda em cumprir estes termos.
            </p>
            
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-black mb-4">
              Ao utilizar nosso site e serviços, você concorda em ficar vinculado a estes Termos de Uso, 
              nossa Política de Privacidade e todas as leis e regulamentos aplicáveis.
            </p>
            
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. Descrição do Serviço</h2>
            <p className="text-black mb-4">
              O RifaFácil é uma plataforma online que permite aos usuários participar de rifas de forma 
              digital, adquirindo números da sorte através de pagamento via PIX e concorrendo a prêmios.
            </p>
            
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Elegibilidade</h2>
            <p className="text-black mb-4">
              Para utilizar nossos serviços, você deve ter pelo menos 18 anos de idade e ser legalmente 
              capaz de celebrar contratos. Ao utilizar nossos serviços, você declara e garante que atende 
              a todos esses requisitos.
            </p>
            
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Pagamentos e Preços</h2>
            <ul className="list-disc list-inside text-black mb-4 space-y-2">
              <li>Todos os pagamentos são processados exclusivamente via PIX</li>
              <li>Os preços são exibidos em Reais Brasileiros (BRL)</li>
              <li>Os preços podem ser alterados a qualquer momento sem aviso prévio</li>
              <li>Não reembolsamos pagamentos após a confirmação da compra</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Direitos de Propriedade Intelectual</h2>
            <p className="text-black mb-4">
              Todo o conteúdo do site, incluindo textos, gráficos, logotipos, ícones, imagens, clips de áudio, 
              downloads digitais e compilações de dados é de propriedade exclusiva do RifaFácil ou de seus 
              licenciadores e é protegido pelas leis brasileiras de direitos autorais.
            </p>
            
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Limitação de Responsabilidade</h2>
            <p className="text-black mb-4">
              O RifaFácil não será responsável por quaisquer danos diretos, indiretos, incidentais, 
              consequenciais ou punitivos decorrentes do uso ou incapacidade de usar nossos serviços.
            </p>
            
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">7. Alterações nos Termos</h2>
            <p className="text-black mb-4">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
              As alterações entrarão em vigor imediatamente após serem publicadas no site.
            </p>
            
            <h2 className="text-2xl font-bold text-black mt-8 mb-4">8. Contato</h2>
            <p className="text-black mb-4">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do email 
              contato@rifafacil.com ou pelo telefone (11) 99999-9999.
            </p>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-3">Aceitação dos Termos</h3>
              <p className="text-black mb-4">
                Ao utilizar nosso site e serviços, você confirma que leu, entendeu e aceitou estes Termos de Uso.
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