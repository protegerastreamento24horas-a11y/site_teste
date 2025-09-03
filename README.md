# Site para geração de pagamentos PIX com Mercado Pago

Este é um projeto [Next.js](https://nextjs.org/) criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) que permite gerar pagamentos PIX através do Mercado Pago.

## Funcionalidades

- Geração de códigos PIX para pagamentos
- Interface amigável com QR Code
- Integração completa com a API do Mercado Pago

## Tecnologias utilizadas

- [Next.js 15](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Mercado Pago SDK](https://www.npmjs.com/package/mercadopago)

## Como configurar o projeto

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.example` para `.env.local`
   - Obtenha suas credenciais do Mercado Pago em [https://www.mercadopago.com.br/developers/pt/guides/resources/credentials](https://www.mercadopago.com.br/developers/pt/guides/resources/credentials)
   - Preencha as variáveis `MERCADO_PAGO_PUBLIC_KEY` e `MERCADO_PAGO_ACCESS_TOKEN` com suas credenciais

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra [http://localhost:3001](http://localhost:3001) no seu navegador para ver o resultado (a porta pode ser diferente se a 3000 estiver em uso).

## Testando a funcionalidade de PIX

1. Na página inicial, clique no botão "Gerar PIX"
2. Preencha o valor e uma descrição para o pagamento
3. Clique no botão "Gerar PIX"
4. Se tudo estiver configurado corretamente, será exibido um QR Code e o código copia e cola

## Estrutura do projeto

- `app/page.tsx` - Página inicial
- `app/pix/page.tsx` - Página para geração de PIX
- `app/api/pix/route.ts` - API route para integração com o Mercado Pago

## Como fazer o deploy na Vercel

O jeito mais fácil de fazer o deploy do seu aplicativo Next.js é usando a [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos mesmos criadores do Next.js.

Confira nossa [documentação de deploy Next.js](https://nextjs.org/docs/deployment) para mais detalhes.

## Aprendizado

Para aprender mais sobre Next.js, dê uma olhada nos seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre os recursos e API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Você também pode conferir [o repositório do Next.js no GitHub](https://github.com/vercel/next.js/).