'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  // Verificar se o usuário está logado
  useEffect(() => {
    const userPhone = localStorage.getItem('userPhone');
    if (userPhone) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userPhone');
    setIsLoggedIn(false);
    if (pathname === '/minhas-rifas' || pathname === '/rifas') {
      window.location.href = '/';
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Rifa<span className="text-yellow-500">Fácil</span></span>
            </Link>
          </div>
          
          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-black hover:text-blue-600 ${pathname === '/' ? 'font-bold' : ''}`}>
              Home
            </Link>
            <Link href="/rifas" className={`text-black hover:text-blue-600 ${pathname === '/rifas' ? 'font-bold' : ''}`}>
              Rifas
            </Link>
            <Link href="/como-funciona" className={`text-black hover:text-blue-600 ${pathname === '/como-funciona' ? 'font-bold' : ''}`}>
              Como Funciona
            </Link>
            <Link href="/faq" className={`text-black hover:text-blue-600 ${pathname === '/faq' ? 'font-bold' : ''}`}>
              FAQ
            </Link>
            <Link href="/contato" className={`text-black hover:text-blue-600 ${pathname === '/contato' ? 'font-bold' : ''}`}>
              Contato
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link 
                  href="/minhas-rifas" 
                  className={`text-black hover:text-blue-600 ${pathname === '/minhas-rifas' ? 'font-bold' : ''}`}
                >
                  Minhas Rifas
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-black hover:text-blue-600"
                >
                  Sair
                </button>
              </>
            ) : (
              <Link 
                href="/login" 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Entrar
              </Link>
            )}
          </div>
          
          {/* Menu mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu mobile expandido */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-black hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/rifas" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === '/rifas' ? 'bg-blue-50 text-blue-600' : 'text-black hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Rifas
            </Link>
            <Link 
              href="/como-funciona" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === '/como-funciona' ? 'bg-blue-50 text-blue-600' : 'text-black hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link 
              href="/faq" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === '/faq' ? 'bg-blue-50 text-blue-600' : 'text-black hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/contato" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === '/contato' ? 'bg-blue-50 text-blue-600' : 'text-black hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link 
                  href="/minhas-rifas" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === '/minhas-rifas' ? 'bg-blue-50 text-blue-600' : 'text-black hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Minhas Rifas
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-50"
                >
                  Sair
                </button>
              </>
            ) : (
              <Link 
                href="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}