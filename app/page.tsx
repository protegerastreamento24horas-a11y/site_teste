'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [games] = useState([
    { id: 1, title: 'Super Sorte', price: 5.00, image: 'https://picsum.photos/seed/game1/400/200.jpg' },
    { id: 2, title: 'Millionaire Scratch', price: 10.00, image: 'https://picsum.photos/seed/game2/400/200.jpg' },
    { id: 3, title: 'Lucky Seven', price: 7.00, image: 'https://picsum.photos/seed/game3/400/200.jpg' },
    { id: 4, title: 'Gold Rush', price: 15.00, image: 'https://picsum.photos/seed/game4/400/200.jpg' },
  ]);

  const [stats] = useState([
    { number: '+R$ 500K', label: 'Prêmios Distribuídos' },
    { number: '50K+', label: 'Ganhadores Felizes' },
    { number: '99%', label: 'Taxa de Satisfação' },
    { number: '24/7', label: 'Suporte ao Cliente' },
  ]);

  const [promotions] = useState([
    { id: 1, title: 'Bem-Vindo Bonus', description: 'Receba um bônus de boas-vindas de até R$ 50 ao se registrar hoje!' },
    { id: 2, title: 'Sorteio Semanal', description: 'Participe do nosso sorteio semanal com chances de ganhar prêmios em dinheiro!' },
    { id: 3, title: 'Dia do Cliente', description: 'Todos os dias terça-feira, desconto especial em todos os jogos!' },
  ]);

  const handlePlayClick = (gameTitle) => {
    alert(`Você está prestes a jogar ${gameTitle}. Boa sorte!`);
  };

  const handleClaimClick = (promotionTitle) => {
    alert(`Você está resgatando a promoção: ${promotionTitle}`);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">MEGA RASPADINHA</div>
          <nav>
            <ul className="nav-links">
              <li><Link href="#home" className="nav-link">Início</Link></li>
              <li><Link href="#jogos" className="nav-link">Jogos</Link></li>
              <li><Link href="#resultados" className="nav-link">Resultados</Link></li>
              <li><Link href="#promocoes" className="nav-link">Promoções</Link></li>
              <li><Link href="#sobre" className="nav-link">Sobre Nós</Link></li>
              <li><Link href="#contato" className="nav-link">Contato</Link></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <Link href="/login" className="auth-button login">Entrar</Link>
            <Link href="/register" className="auth-button signup">Cadastrar-se</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-content">
          <h1 className="hero-title">Sua Loteria Online Favorita</h1>
          <p className="hero-subtitle">Experimente a emoção das raspadinhas e ganhe prêmios incríveis!</p>
          <button className="cta-button">Jogar Agora</button>
        </div>
      </section>

      {/* Popular Games Section */}
      <section id="jogos" className="games-section">
        <div className="container">
          <h2 className="section-title">Jogos Populares</h2>
          <div className="games-grid">
            {games.map((game) => (
              <div key={game.id} className="game-card">
                <img src={game.image} alt={game.title} className="game-image" />
                <div className="game-info">
                  <h3 className="game-title">{game.title}</h3>
                  <p className="game-price">R$ {game.price.toFixed(2)}</p>
                  <button 
                    className="play-button"
                    onClick={() => handlePlayClick(game.title)}
                  >
                    Jogar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="resultados" className="stats-section">
        <div className="container">
          <h2 className="section-title">Nossos Resultados</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promocoes" className="promotions-section">
        <div className="container">
          <h2 className="section-title">Promoções Especiais</h2>
          <div className="promotion-cards">
            {promotions.map((promotion) => (
              <div key={promotion.id} className="promotion-card">
                <div className="promotion-header">
                  <h3 className="promotion-title">{promotion.title}</h3>
                </div>
                <div className="promotion-body">
                  <p className="promotion-text">{promotion.description}</p>
                  <button 
                    className="claim-button"
                    onClick={() => handleClaimClick(promotion.title)}
                  >
                    Resgatar Bônus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Sobre Nós</h3>
              <p>A Mega Raspadinha é a sua plataforma preferida para jogos de loteria online. Oferecemos uma experiência segura e divertida com oportunidades incríveis de ganhar prêmios.</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3>Links Úteis</h3>
              <ul className="footer-links">
                <li><Link href="#" className="footer-link">Termos de Uso</Link></li>
                <li><Link href="#" className="footer-link">Política de Privacidade</Link></li>
                <li><Link href="#" className="footer-link">Regras do Jogo</Link></li>
                <li><Link href="#" className="footer-link">Suporte ao Cliente</Link></li>
                <li><Link href="#" className="footer-link">Afiliados</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contato</h3>
              <ul className="footer-links">
                <li><i className="fas fa-envelope mr-2"></i> contato@megaraspadinha.com</li>
                <li><i className="fas fa-phone mr-2"></i> +55 11 99999-9999</li>
                <li><i className="fas fa-map-marker-alt mr-2"></i> Av. Paulista, 1234 - São Paulo, SP</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Fique por Dentro</h3>
              <p>Inscreva-se na nossa newsletter para receber notícias e ofertas exclusivas.</p>
              <form>
                <input type="email" placeholder="Seu email" className="newsletter-input" />
                <button type="submit" className="newsletter-button">Inscrever-se</button>
              </form>
            </div>
          </div>
          
          <div className="copyright">
            © {new Date().getFullYear()} Mega Raspadinha. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}