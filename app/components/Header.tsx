'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Rifa</span>
              <span className="text-2xl font-bold text-yellow-500">Fácil</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black hover:text-blue-600 font-medium">
              Início
            </Link>
            <Link href="/rifas" className="text-black hover:text-blue-600 font-medium">
              Rifas
            </Link>
            <Link href="/minhas-rifas" className="text-black hover:text-blue-600 font-medium">
              Minhas Rifas
            </Link>
            <Link href="/minha-conta" className="text-black hover:text-blue-600 font-medium">
              Minha Conta
            </Link>
            <Link href="/como-funciona" className="text-black hover:text-blue-600 font-medium">
              Como Funciona
            </Link>
            <Link href="/contato" className="text-black hover:text-blue-600 font-medium">
              Contato
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              href="/rifas" 
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Rifas
            </Link>
            <Link 
              href="/minhas-rifas" 
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Minhas Rifas
            </Link>
            <Link 
              href="/minha-conta" 
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Minha Conta
            </Link>
            <Link 
              href="/como-funciona" 
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link 
              href="/contato" 
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}