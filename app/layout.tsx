import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mega Raspadinha - Raspe e Ganhe de Verdade!',
  description: 'Sua chance diária de mudar de vida com prêmios incríveis! Inspirada no estilo das grandes loterias, trazemos jogos divertidos, dinâmicos e com prêmios reais de até R$777.777!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ backgroundColor: '#000', color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}