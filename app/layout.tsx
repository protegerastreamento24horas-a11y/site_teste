import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sorteios Automáticos",
  description: "Participe de sorteios automáticos e ganhe prêmios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark">
      <body className="antialiased bg-gray-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}