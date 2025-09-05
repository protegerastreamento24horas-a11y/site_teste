# Next.js Rifa Automatizada com PIX

Este projeto é uma aplicação Next.js para venda de rifas automatizadas com pagamento via PIX através da HorsePay.

## Funcionalidades

- Sistema de rifas automatizadas com escolha automática de números
- Integração completa com a API da HorsePay para pagamentos via PIX
- Página inicial profissional com banner atrativo
- Carrossel de últimos ganhadores (fake)
- Sistema de sorteio automático
- Recebimento de webhooks para atualização de status de pagamento
- Área para visualização das rifas compradas

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
   - `VERCEL_URL` (definida automaticamente pelo Vercel)
5. Faça o deploy

### Variáveis de Ambiente Necessárias

- `HORSEPAY_CLIENT_KEY`: Chave de cliente da HorsePay
- `HORSEPAY_CLIENT_SECRET`: Segredo de cliente da HorsePay
- `VERCEL_URL`: URL do seu projeto no Vercel (definida automaticamente pelo Vercel)

## Segurança

⚠️ **Importante**: Nunca commite credenciais reais no repositório. O arquivo `.env.local` está no `.gitignore` para evitar que credenciais sensíveis sejam expostas publicamente.

## Estrutura do Projeto

- `app/page.tsx`: Página inicial com banner e carrossel de ganhadores
- `app/rifas/page.tsx`: Página de seleção e compra de rifas
- `app/pagamento/page.tsx`: Página de pagamento via PIX
- `app/minhas-rifas/page.tsx`: Página para visualizar rifas compradas
- `app/api/pix/route.ts`: API de integração com a HorsePay
- `app/api/webhook/route.ts`: Endpoint para receber webhooks da HorsePay

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request