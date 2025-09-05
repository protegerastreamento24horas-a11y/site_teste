'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Como funciona o sistema de rifas?",
      answer: "Nosso sistema é totalmente automatizado. Ao comprar uma rifa, você recebe números aleatórios disponíveis. Os sorteios acontecem nas datas previstas e são totalmente transparentes. Todos os participantes são notificados por email sobre os resultados."
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Atualmente, aceitamos apenas pagamentos via PIX. É a forma mais rápida, segura e com menor taxa de processamento. Estamos avaliando a possibilidade de adicionar outras formas de pagamento no futuro."
    },
    {
      question: "Como recebo meu prêmio se for sorteado?",
      answer: "Se seu número for sorteado, nossa equipe entrará em contato com você através do email cadastrado em até 24 horas. Você precisará confirmar seus dados e escolher a forma de entrega do prêmio (presencialmente em nosso escritório ou via frete, dependendo do prêmio)."
    },
    {
      question: "Os sorteios são realmente aleatórios?",
      answer: "Sim, todos os sorteios são realizados de forma automática e aleatória através de um algoritmo certificado. O processo é totalmente transparente e pode ser auditado a qualquer momento."
    },
    {
      question: "Posso transferir minha rifa para outra pessoa?",
      answer: "As rifas são nominativas e não podem ser transferidas para terceiros. Os dados do ganhador devem coincidir com os dados informados no momento da compra."
    },
    {
      question: "O que acontece se o prêmio não for entregue?",
      answer: "Temos um compromisso firme com a entrega de todos os prêmios. Em caso de problemas na entrega, oferecemos reembolso integral ou a substituição do prêmio por outro de valor equivalente. Nossa equipe de suporte está sempre disponível para resolver qualquer problema."
    },
    {
      question: "Como posso acompanhar meus números da sorte?",
      answer: "Após a compra da rifa, você pode acessar a área 'Minhas Rifas' no nosso site para visualizar todos os números adquiridos, os sorteios em que está participando e os resultados."
    },
    {
      question: "Quanto tempo leva para confirmar meu pagamento?",
      answer: "Os pagamentos via PIX são confirmados em tempo real, geralmente em até 1 minuto após a realização do pagamento. Assim que confirmado, seus números da sorte já estarão disponíveis em 'Minhas Rifas'."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Perguntas <span className="text-blue-600">Frequentes</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Encontre respostas para as dúvidas mais comuns sobre nosso sistema de rifas
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <svg 
                    className={`h-5 w-5 text-blue-600 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="mt-4 pr-12">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ainda tem dúvidas?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Nossa equipe está pronta para ajudar você
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contato" 
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition duration-300"
            >
              Entre em Contato
            </Link>
            <Link 
              href="/rifas" 
              className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-full transition duration-300"
            >
              Comprar Rifa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}