'use client';

import Link from 'next/link';

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Como Funciona a <span className="text-blue-600">RifaFácil</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Entenda passo a passo como participar das nossas rifas online
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Processo Completo</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Escolha uma Rifa</h3>
                    <p className="mt-2 text-gray-600">
                      Navegue pelas rifas disponíveis e selecione aquela que mais te interessa. 
                      Temos prêmios variados como eletrônicos, viagens, carros e muito mais!
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Compre suas Rifas</h3>
                    <p className="mt-2 text-gray-600">
                      Defina quantas rifas deseja comprar e finalize com um pagamento seguro via PIX. 
                      Cada rifa aumenta suas chances de ganhar!
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Aguarde o Sorteio</h3>
                    <p className="mt-2 text-gray-600">
                      Os sorteios acontecem nas datas previstas. Todos os números são sorteados 
                      de forma automática e transparente.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Receba seu Prêmio</h3>
                    <p className="mt-2 text-gray-600">
                      Se seu número for sorteado, você será contatado para receber seu prêmio. 
                      Tudo de forma rápida e segura!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
                Imagem ilustrativa do processo
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Segurança</h3>
            <p className="text-gray-600">
              Todos os pagamentos são processados via PIX com criptografia de ponta a ponta. 
              Seus dados estão sempre protegidos.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparência</h3>
            <p className="text-gray-600">
              Nosso sistema de sorteio é totalmente automático e auditável. 
              Você pode acompanhar todo o processo em tempo real.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Prêmios Reais</h3>
            <p className="text-gray-600">
              Todos os prêmios são adquiridos e armazenados em nosso cofre até o sorteio. 
              Garantimos a entrega de todos os prêmios sorteados.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para tentar a sorte?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se aos milhares de pessoas que já experimentaram nossa plataforma!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/rifas" 
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition duration-300 transform hover:scale-105"
            >
              Comprar Rifa Agora
            </Link>
            <Link 
              href="/minhas-rifas" 
              className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-full transition duration-300"
            >
              Ver Minhas Rifas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}