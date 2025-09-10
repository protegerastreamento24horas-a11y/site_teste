'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '');
    let formatted = phoneNumber;

    if (phoneNumber.length > 2) {
      formatted = `(${phoneNumber.slice(0, 2)}`;
    }
    if (phoneNumber.length > 7) {
      formatted += `) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
    } else if (phoneNumber.length > 6) {
      formatted += `) ${phoneNumber.slice(2, 7)}`;
    } else if (phoneNumber.length > 2) {
      formatted += `) ${phoneNumber.slice(2)}`;
    }

    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);
    setPhoneNumber(formatted);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    try {
      // Simular login com número de celular
      const phoneDigits = phoneNumber.replace(/\D/g, '');
      
      if (phoneDigits.length !== 11) {
        throw new Error('Número de celular inválido. Deve conter 11 dígitos.');
      }

      // Aqui você faria a chamada para sua API de autenticação
      // Por enquanto, vamos simular um login bem-sucedido
      localStorage.setItem('userPhone', phoneDigits);
      router.push('/rifas');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao fazer login');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-black">
              Entrar no <span className="text-blue-600">RifaFácil</span>
            </h1>
            <p className="mt-2 text-black">
              Faça login com seu número de celular
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                Número de celular
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-black">+55</span>
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="(00) 00000-0000"
                  className="pl-12 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  required
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Enviaremos um código de confirmação via WhatsApp
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full py-3 px-4 rounded-lg font-bold transition-colors ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white'
              }`}
            >
              {isProcessing ? 'Processando...' : 'Entrar com WhatsApp'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-black">
              Ao continuar, você concorda com nossos{' '}
              <a href="/termos" className="text-blue-600 hover:underline">
                Termos de Serviço
              </a>{' '}
              e{' '}
              <a href="/privacidade" className="text-blue-600 hover:underline">
                Política de Privacidade
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}