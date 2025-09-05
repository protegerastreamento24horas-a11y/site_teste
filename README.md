# Next.js PIX Payment Integration

Este projeto é uma aplicação Next.js que permite gerar códigos QR PIX para pagamentos utilizando a HorsePay.

## Funcionalidades

- Geração de códigos QR PIX em tempo real
- Interface amigável para criação de pagamentos
- Integração completa com a API da HorsePay

## Tecnologias Utilizadas

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## Como rodar o projeto localmente

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.local.example` para `.env.local`
   - Substitua os valores de exemplo pelas suas credenciais reais da HorsePay:
   ```env
   HORSEPAY_CLIENT_KEY=suakey
   HORSEPAY_CLIENT_SECRET=suasecret
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
4. Configure as variáveis de ambiente:
   - `HORSEPAY_CLIENT_KEY`
   - `HORSEPAY_CLIENT_SECRET`
5. Faça o deploy

### Variáveis de Ambiente Necessárias

- `HORSEPAY_CLIENT_KEY`: Chave de cliente da HorsePay
- `HORSEPAY_CLIENT_SECRET`: Segredo de cliente da HorsePay

## Segurança

⚠️ **Importante**: Nunca commite credenciais reais no repositório. O arquivo `.env.local` está no `.gitignore` para evitar que credenciais sensíveis sejam expostas publicamente.

## Estrutura do Projeto

- `app/page.tsx`: Página inicial
- `app/pix/page.tsx`: Interface de geração de PIX
- `app/api/pix/route.ts`: API de integração com a HorsePay

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request