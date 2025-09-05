# Next.js PIX Payment Integration

Este projeto é uma aplicação Next.js que permite gerar códigos QR PIX para pagamentos utilizando o Mercado Pago.

## Funcionalidades

- Geração de códigos QR PIX em tempo real
- Interface amigável para criação de pagamentos
- Integração completa com a API do Mercado Pago

## Tecnologias Utilizadas

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Mercado Pago SDK

## Como rodar o projeto localmente

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env.local`:
   ```env
   MERCADO_PAGO_ACCESS_TOKEN=seu_token_aqui
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse [http://localhost:3000](http://localhost:3000)

## Deploy

### Vercel (Recomendado)

O projeto está configurado para deploy no Vercel. Siga estas etapas:

1. Acesse [https://vercel.com](https://vercel.com)
2. Faça login com sua conta do GitHub
3. Importe o repositório
4. Configure a variável de ambiente `MERCADO_PAGO_ACCESS_TOKEN`
5. Faça o deploy

### Variáveis de Ambiente Necessárias

- `MERCADO_PAGO_ACCESS_TOKEN`: Token de acesso do Mercado Pago

## Estrutura do Projeto

- `app/page.tsx`: Página inicial
- `app/pix/page.tsx`: Interface de geração de PIX
- `app/api/pix/route.ts`: API de integração com o Mercado Pago

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request