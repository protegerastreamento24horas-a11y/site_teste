import Link from 'next/link';

export default function RulesPage() {
  const rules = [
    {
      title: "Como participar",
      content: [
        "Escolha uma rifa disponível em nossa plataforma",
        "Selecione a quantidade de números que deseja adquirir",
        "Realize o pagamento via PIX através da HorsePay",
        "Após a confirmação do pagamento, seus números serão reservados automaticamente",
        "Aguarde a data do sorteio automático"
      ]
    },
    {
      title: "Sobre os sorteios",
      content: [
        "Todos os sorteios são realizados de forma automática e transparente",
        "O sorteio ocorre na data prevista para cada rifa",
        "O sistema sorteia aleatoriamente um número vencedor entre todos os números vendidos",
        "O resultado é divulgado imediatamente após o sorteio em nossa plataforma",
        "O ganhador é contactado diretamente por WhatsApp"
      ]
    },
    {
      title: "Pagamentos e preços",
      content: [
        "Todos os pagamentos são processados via PIX através da HorsePay",
        "Os valores dos números variam de acordo com o prêmio da rifa",
        "Não há taxa adicional sobre o valor pago",
        "O pagamento deve ser confirmado em até 5 minutos após a geração do código PIX",
        "Pagamentos não confirmados resultam no cancelamento da reserva dos números"
      ]
    },
    {
      title: "Entrega dos prêmios",
      content: [
        "O prêmio será entregue em até 30 dias após a confirmação do sorteio",
        "O ganhador será contactado por WhatsApp para combinar a entrega",
        "Prêmios físicos serão enviados via Correios com frete incluso",
        "Prêmios digitais serão entregues por e-mail ou WhatsApp",
        "O ganhador deve apresentar documento de identidade para retirada de prêmios físicos"
      ]
    },
    {
      title: "Cancelamentos e reembolsos",
      content: [
        "Pagamentos confirmados não são reembolsados",
        "Em caso de cancelamento de uma rifa, todos os pagamentos serão reembolsados",
        "Reembolsos são processados automaticamente via HorsePay",
        "O reembolso pode levar até 5 dias úteis para ser concluído"
      ]
    },
    {
      title: "Privacidade e segurança",
      content: [
        "Todos os seus dados pessoais são protegidos conforme a Lei Geral de Proteção de Dados (LGPD)",
        "Seus dados serão utilizados apenas para contato sobre rifas e sorteios",
        "Não compartilhamos seus dados com terceiros sem o seu consentimento",
        "Todas as transações são criptografadas e seguras"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Regulamento das Rifas</h1>
          <p className="text-gray-600">Conheça as regras e condições para participar das nossas rifas</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                Este regulamento estabelece as regras gerais para participação nas rifas oferecidas em nossa plataforma. 
                Ao participar de qualquer rifa, você concorda automaticamente com todos os termos aqui descritos.
              </p>

              <div className="space-y-8">
                {rules.map((rule, index) => (
                  <div key={index}>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{index + 1}. {rule.title}</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {rule.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contato</h2>
                <p className="text-gray-700 mb-4">
                  Em caso de dúvidas sobre este regulamento ou sobre qualquer rifa, entre em contato conosco:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Email: contato@rifasonline.com.br</li>
                  <li>WhatsApp: (11) 99999-9999</li>
                  <li>Horário de atendimento: Segunda a Sexta, das 9h às 18h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link 
            href="/rifas"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar para as rifas
          </Link>
        </div>
      </div>
    </div>
  );
}