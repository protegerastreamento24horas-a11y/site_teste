import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: "Rifas Online BR - Sorteios Diários e Mini Games Grátis",
  description: "Participe de rifas diárias e ganhe prêmios em dinheiro. Jogue mini games grátis e concorra a prêmios exclusivos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-background text-primary min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl p-2 rounded">
                RifasOnline<span className="text-yellow-400">BR</span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/rifas" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Rifas
            </Link>
            <Link href="/sorteios" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Sorteios
            </Link>
            <Link href="/resultados" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Resultados
            </Link>
            <Link href="/como-funciona" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Como Funciona
            </Link>
          </nav>
          
          <div className="flex items-center">
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Rifas Online BR</h3>
            <p className="text-gray-300">
              Participe de rifas diárias e ganhe prêmios em dinheiro. Jogue mini games grátis e concorra a prêmios exclusivos.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/rifas" className="text-gray-300 hover:text-white transition">Rifas</Link></li>
              <li><Link href="/sorteios" className="text-gray-300 hover:text-white transition">Sorteios</Link></li>
              <li><Link href="/resultados" className="text-gray-300 hover:text-white transition">Resultados</Link></li>
              <li><Link href="/como-funciona" className="text-gray-300 hover:text-white transition">Como Funciona</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li><Link href="/regulamento" className="text-gray-300 hover:text-white transition">Regulamento</Link></li>
              <li><Link href="/privacidade" className="text-gray-300 hover:text-white transition">Privacidade</Link></li>
              <li><Link href="/termos" className="text-gray-300 hover:text-white transition">Termos de Uso</Link></li>
              <li><Link href="/contato" className="text-gray-300 hover:text-white transition">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: suporte@rifasonlinebr.com</li>
              <li>WhatsApp: (11) 99999-9999</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rifas Online BR. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}