'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [winners] = useState([
    { id: 1, name: 'Carlos Silva', prize: 'R$ 5.500,00', time: 'Agora mesmo' },
    { id: 2, name: 'Ana Oliveira', prize: 'R$ 2.800,00', time: '2 minutos atrás' },
    { id: 3, name: 'Roberto Santos', prize: 'R$ 10.000,00', time: '5 minutos atrás' },
    { id: 4, name: 'Mariana Costa', prize: 'R$ 1.500,00', time: '7 minutos atrás' },
    { id: 5, name: 'Pedro Almeida', prize: 'R$ 15.000,00', time: '10 minutos atrás' },
    { id: 6, name: 'Juliana Pereira', prize: 'R$ 3.200,00', time: '12 minutos atrás' },
  ]);

  const [raffles] = useState([
    { id: 1, title: 'Raspadinha Ouro', prize: 10000, icon: '🥇' },
    { id: 2, title: 'Raspadinha Prata', prize: 5000, icon: '🥈' },
    { id: 3, title: 'Raspadinha Bronze', prize: 2000, icon: '🥉' },
    { id: 4, title: 'Raspadinha Diamante', prize: 50000, icon: '💎' },
  ]);

  return (
    <div className="test-bg">
      {/* Header */}
      <header className="test-header">
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ backgroundColor: '#ccc', border: '2px dashed #666', borderRadius: '12px', width: '64px', height: '64px' }} />
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginLeft: '12px' }}>MEGA RASPADINHA</h1>
          </div>
          
          <nav style={{ display: 'flex', gap: '24px' }}>
            <Link href="/" style={{ fontWeight: 'bold', color: '#ffcc00' }}>INÍCIO</Link>
            <Link href="/raspadinhas" style={{ color: '#fff', textDecoration: 'none' }}>RASPADINHAS</Link>
            <Link href="/resultados" style={{ color: '#fff', textDecoration: 'none' }}>RESULTADOS</Link>
            <Link href="/como-jogar" style={{ color: '#fff', textDecoration: 'none' }}>COMO JOGAR</Link>
          </nav>
          
          <div style={{ marginTop: '1rem' }}>
            <Link 
              href="/login" 
              style={{ backgroundColor: '#ffcc00', color: '#000', fontWeight: 'bold', padding: '8px 24px', borderRadius: '9999px', textDecoration: 'none', display: 'inline-block' }}
            >
              ENTRAR
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '1rem' }}>
          RASPADINHA <span style={{ color: '#ffcc00' }}>MEGA SENA</span>
        </h1>
        <p style={{ fontSize: '20px', color: '#ccc', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
          Raspe e descubra se você ganhou prêmios reais de até <span style={{ color: '#ffcc00', fontWeight: 'bold' }}>R$ 777.777</span>!
        </p>
        <Link 
          href="/raspadinhas" 
          style={{ backgroundColor: '#ffcc00', color: '#000', fontWeight: 'bold', padding: '16px 32px', borderRadius: '9999px', textDecoration: 'none', display: 'inline-block', fontSize: '18px' }}
        >
          COMECE AGORA
        </Link>
      </section>

      {/* Últimos Ganhadores */}
      <section style={{ padding: '2rem 1rem', backgroundColor: '#111' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>
            ÚLTIMOS GANHADORES
          </h2>
          
          <div style={{ display: 'flex', overflow: 'hidden', position: 'relative' }}>
            <div style={{ display: 'flex', animation: 'marquee 25s linear infinite' }}>
              {[...winners, ...winners].map((winner, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  minWidth: '300px', 
                  padding: '0.5rem 1rem',
                  borderRight: '1px solid #333'
                }}>
                  <div style={{ 
                    backgroundColor: '#ffcc00', 
                    color: '#000', 
                    fontWeight: 'bold', 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '4px',
                    marginRight: '1rem'
                  }}>
                    {winner.prize}
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{winner.name}</div>
                    <div style={{ fontSize: '0.875rem', color: '#999' }}>{winner.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cards de Raspadinhas */}
      <section style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>
            ESCOLHA SUA RASPADINHA
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {raffles.map((raffle) => (
              <div key={raffle.id} style={{ 
                background: 'linear-gradient(to bottom, rgba(128, 0, 128, 0.4), #000)', 
                borderRadius: '12px', 
                border: '1px solid #800080',
                overflow: 'hidden',
                textAlign: 'center'
              }}>
                <div style={{ padding: '2rem 1rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{raffle.icon}</div>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>{raffle.title}</h3>
                  <p style={{ color: '#ffcc00', fontWeight: 'bold', fontSize: '20px', marginBottom: '1.5rem' }}>
                    PRÊMIO MÁXIMO
                  </p>
                  <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                    R$ {raffle.prize.toLocaleString('pt-BR')}
                  </p>
                  <Link 
                    href={`/raspadinhas/${raffle.id}`}
                    style={{ 
                      backgroundColor: '#800080', 
                      color: '#fff', 
                      fontWeight: 'bold', 
                      padding: '12px 24px', 
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                  >
                    RASPAR AGORA
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Jogar */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#111' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '2rem' }}>
            COMO JOGAR
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'linear-gradient(to right, #800080, #ff0080)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: 'bold',
                fontSize: '24px'
              }}>
                1
              </div>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>ESCOLHA</h3>
              <p style={{ color: '#999' }}>Selecione uma raspadinha</p>
            </div>
            
            <div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'linear-gradient(to right, #800080, #ff0080)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: 'bold',
                fontSize: '24px'
              }}>
                2
              </div>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>PAGUE</h3>
              <p style={{ color: '#999' }}>Realize o pagamento via PIX</p>
            </div>
            
            <div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'linear-gradient(to right, #800080, #ff0080)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: 'bold',
                fontSize: '24px'
              }}>
                3
              </div>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>RASPE</h3>
              <p style={{ color: '#999' }}>Raspe e veja se ganhou</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 1rem', textAlign: 'center', color: '#999' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p>© {new Date().getFullYear()} MEGA RASPADINHA. Todos os direitos reservados.</p>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/termos" style={{ color: '#999', textDecoration: 'none' }}>Termos de Uso</Link>
            <Link href="/privacidade" style={{ color: '#999', textDecoration: 'none' }}>Política de Privacidade</Link>
            <Link href="/contato" style={{ color: '#999', textDecoration: 'none' }}>Contato</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}