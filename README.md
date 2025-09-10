# Site de Sorteios Automáticos com Integração HorsePay

Este é um projeto [Next.js](https://nextjs.org/) criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) que permite criar um site de sorteios automáticos com pagamento via PIX através do HorsePay.

## Funcionalidades

- Sistema de sorteios automáticos com probabilidades configuráveis
- Integração completa com a API do HorsePay para pagamentos via PIX
- Painel do usuário com saldo, histórico de participações e recarga
- Painel administrativo completo para gerenciar sorteios, usuários e configurações
- Design responsivo com tema dark e elementos de cassino

## Tecnologias utilizadas

- [Next.js 15](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [HorsePay SDK](https://horsepay.com.br/docs)

## Estrutura do projeto

- `app/page.tsx` - Página inicial com carrossel de ganhadores
- `app/login/page.tsx` - Página de autenticação
- `app/dashboard/page.tsx` - Painel do usuário
- `app/sorteios/page.tsx` - Lista de sorteios disponíveis
- `app/sorteios/[id]/page.tsx` - Detalhes e participação em sorteio específico
- `app/recarga/page.tsx` - Recarga de saldo via PIX
- `app/admin/page.tsx` - Painel administrativo
- `app/api/pix/route.ts` - API route para integração com o HorsePay

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
   - Obtenha suas credenciais do HorsePay em [https://horsepay.com.br/dashboard/settings/api-keys](https://horsepay.com.br/dashboard/settings/api-keys)
   - Preencha as variáveis `HORSEPAY_CLIENT_KEY` e `HORSEPAY_CLIENT_SECRET` com suas credenciais
   - Configure a variável `NEXT_PUBLIC_BASE_URL` com a URL do seu site

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Como fazer o deploy na Vercel

O jeito mais fácil de fazer o deploy do seu aplicativo Next.js é usando a [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos mesmos criadores do Next.js.

Confira nossa [documentação de deploy Next.js](https://nextjs.org/docs/deployment) para mais detalhes.

## Aprendizado

Para aprender mais sobre Next.js, dê uma olhada nos seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre os recursos e API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Você também pode conferir [o repositório do Next.js no GitHub](https://github.com/vercel/next.js/).