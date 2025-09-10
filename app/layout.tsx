import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: "RaffleMaster - Premium Online Raffles",
  description: "Participate in premium online raffles and win real money prizes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
    <header className="bg-background-secondary border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-primary text-transparent bg-clip-text">
              RAFFLE<span className="text-white">MASTER</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/rifas" className="text-text-secondary hover:text-primary px-4 py-2 rounded-lg transition">
              Raffles
            </Link>
            <Link href="/sorteios" className="text-text-secondary hover:text-primary px-4 py-2 rounded-lg transition">
              Draws
            </Link>
            <Link href="/resultados" className="text-text-secondary hover:text-primary px-4 py-2 rounded-lg transition">
              Results
            </Link>
            <Link href="/como-funciona" className="text-text-secondary hover:text-primary px-4 py-2 rounded-lg transition">
              How it Works
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link href="/login" className="btn btn-outline">
              Sign In
            </Link>
            <Link href="/dashboard" className="btn btn-primary">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">RAFFLEMASTER</h3>
            <p className="text-text-tertiary">
              The premier online raffle platform with real money prizes and provably fair draws.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/rifas" className="text-text-tertiary hover:text-primary transition">Raffles</Link></li>
              <li><Link href="/sorteios" className="text-text-tertiary hover:text-primary transition">Draws</Link></li>
              <li><Link href="/resultados" className="text-text-tertiary hover:text-primary transition">Results</Link></li>
              <li><Link href="/como-funciona" className="text-text-tertiary hover:text-primary transition">How it Works</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Information</h3>
            <ul className="space-y-2">
              <li><Link href="/regulamento" className="text-text-tertiary hover:text-primary transition">Rules</Link></li>
              <li><Link href="/privacidade" className="text-text-tertiary hover:text-primary transition">Privacy</Link></li>
              <li><Link href="/termos" className="text-text-tertiary hover:text-primary transition">Terms of Use</Link></li>
              <li><Link href="/contato" className="text-text-tertiary hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-text-tertiary">
              <li>Email: support@rafflemaster.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-text-tertiary">
          <p>&copy; {new Date().getFullYear()} RAFFLEMASTER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}