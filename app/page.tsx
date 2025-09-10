import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredRaffles = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      description: "Sorteio do iPhone 15 Pro Max 256GB",
      price: 5.00,
      image: "/iphone.jpg",
      endDate: "2024-12-31",
      totalNumbers: 1000,
      availableNumbers: 750
    },
    {
      id: 2,
      title: "MacBook Pro M3",
      description: "MacBook Pro 14\" M3 Pro",
      price: 10.00,
      image: "/macbook.jpg",
      endDate: "2024-11-30",
      totalNumbers: 500,
      availableNumbers: 200
    },
    {
      id: 3,
      title: "Viagem para Disney",
      description: "Viagem para Disney Orlando para 4 pessoas",
      price: 20.00,
      image: "/disney.jpg",
      endDate: "2024-10-31",
      totalNumbers: 1000,
      availableNumbers: 850
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rifas Online - Sorteios Automáticos</h1>
          <p className="text-xl mb-8">Participe de rifas emocionantes e concorra a prêmios incríveis!</p>
          <Link 
            href="/rifas"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300"
          >
            Ver Rifas Disponíveis
          </Link>
        </div>
      </div>

      {/* Como Funciona */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Escolha uma Rifa</h3>
              <p className="text-gray-600">Navegue pelas rifas disponíveis e escolha a que deseja participar.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pague com PIX</h3>
              <p className="text-gray-600">Realize o pagamento via PIX através da HorsePay de forma segura.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Aguarde o Sorteio</h3>
              <p className="text-gray-600">Participe do sorteio automático e torça para ser o ganhador!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rifas em Destaque */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Rifas em Destaque</h2>
            <Link href="/rifas" className="text-blue-600 hover:text-blue-800 font-medium">
              Ver todas →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRaffles.map((raffle) => (
              <div key={raffle.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{raffle.title}</h3>
                  <p className="text-gray-600 mb-4">{raffle.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-green-600">R$ {raffle.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500">Até {raffle.endDate}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Números disponíveis</span>
                      <span>{raffle.availableNumbers}/{raffle.totalNumbers}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${((raffle.totalNumbers - raffle.availableNumbers) / raffle.totalNumbers) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/rifas/${raffle.id}`}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center block font-medium"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Configuração do HorsePay */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-6">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">Configuração do HorsePay</h2>
            <p className="text-yellow-700 mb-4">
              Para usar o sistema de pagamentos PIX, você precisa configurar suas credenciais do HorsePay.
            </p>
            <ul className="list-disc pl-5 text-yellow-700 mb-4">
              <li>Copie o arquivo <code className="bg-yellow-100 px-1 rounded">.env.example</code> para <code className="bg-yellow-100 px-1 rounded">.env.local</code></li>
              <li>Obtenha suas credenciais em <a href="https://horsepay.com.br/dashboard/settings/api-keys" target="_blank" rel="noopener noreferrer" className="underline">HorsePay Dashboard</a></li>
              <li>Preencha as variáveis <code className="bg-yellow-100 px-1 rounded">HORSEPAY_CLIENT_KEY</code> e <code className="bg-yellow-100 px-1 rounded">HORSEPAY_CLIENT_SECRET</code></li>
              <li>Configure a variável <code className="bg-yellow-100 px-1 rounded">NEXT_PUBLIC_BASE_URL</code> com a URL do seu site</li>
            </ul>
            <p className="text-yellow-700 text-sm">
              <strong>Importante:</strong> As credenciais são necessárias para autenticação na API do HorsePay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}