import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mega Raspadinha - Sua Loteria Online',
  description: 'Experimente a emoção das raspadinhas e ganhe prêmios incríveis!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}