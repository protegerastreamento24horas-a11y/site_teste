'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
            <Link href="/" className="hover:text-yellow-400 transition">Início</Link> / Contato
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tem dúvidas, sugestões ou precisa de ajuda? Nossa equipe está pronta para ajudar você.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4 text-yellow-400">📧</div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Email</h3>
                      <p className="text-gray-300">contato@megaraspadinha.com</p>
                      <p className="text-gray-400 text-sm">Resposta em até 24 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl mr-4 text-yellow-400">💬</div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">WhatsApp</h3>
                      <p className="text-gray-300">(11) 99999-9999</p>
                      <p className="text-gray-400 text-sm">Segunda a sexta, das 9h às 18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl mr-4 text-yellow-400">🕒</div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Horário de Atendimento</h3>
                      <p className="text-gray-300">Segunda a sexta: 9h às 18h</p>
                      <p className="text-gray-300">Sábado: 10h às 16h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl mr-4 text-yellow-400">📍</div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Endereço</h3>
                      <p className="text-gray-300">Av. Paulista, 1000</p>
                      <p className="text-gray-300">São Paulo - SP, 01310-100</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                  <div className="flex flex-wrap gap-4 space-x-0">
                    <a href="#" className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition">
                      <span className="text-xl">📘</span>
                    </a>
                    <a href="#" className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition">
                      <span className="text-xl">📷</span>
                    </a>
                    <a href="#" className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition">
                      <span className="text-xl">🐦</span>
                    </a>
                    <a href="#" className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition">
                      <span className="text-xl">▶️</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <div>
              <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-xl border border-purple-800 p-8">
                <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label htmlFor="name" className="block text-gray-300 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Assunto</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-6 rounded-full transition"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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