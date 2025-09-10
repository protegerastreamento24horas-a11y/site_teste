import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: "Raspe & Ganhe - Prêmios Reais",
  description: "Participe de raspadinhas e ganhe prêmios em dinheiro real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark">
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
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
    <header className="bg-card-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-primary text-transparent bg-clip-text">
              Raspe & Ganhe
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/rifas" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Raspadinhas
              </Link>
              <Link href="/sorteios" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Sorteios
              </Link>
              <Link href="/resultados" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Resultados
              </Link>
              <Link href="/como-funciona" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Como Funciona
              </Link>
            </div>
          </nav>
          
          <div className="flex items-center">
            <Link href="/login" className="btn btn-outline text-sm">
              Entrar
            </Link>
            <Link href="/regulamento" className="ml-4 text-sm text-gray-400 hover:text-foreground">
              Regulamento
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-card-bg border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Raspe & Ganhe</h3>
            <p className="text-gray-400">
              O melhor site de raspadinhas com prêmios reais e segurança garantida.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/rifas" className="text-gray-400 hover:text-foreground">Raspadinhas</Link></li>
              <li><Link href="/sorteios" className="text-gray-400 hover:text-foreground">Sorteios</Link></li>
              <li><Link href="/resultados" className="text-gray-400 hover:text-foreground">Resultados</Link></li>
              <li><Link href="/como-funciona" className="text-gray-400 hover:text-foreground">Como Funciona</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li><Link href="/regulamento" className="text-gray-400 hover:text-foreground">Regulamento</Link></li>
              <li><Link href="/privacidade" className="text-gray-400 hover:text-foreground">Privacidade</Link></li>
              <li><Link href="/termos" className="text-gray-400 hover:text-foreground">Termos de Uso</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-foreground">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: suporte@raspeganhe.com</li>
              <li>WhatsApp: (11) 99999-9999</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Raspe & Ganhe. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

