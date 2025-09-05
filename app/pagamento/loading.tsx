export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Carregando informações de pagamento...
        </h1>
        <p className="text-gray-600">
          Estamos preparando seu pagamento via PIX. Aguarde um momento.
        </p>
      </div>
    </div>
  );
}