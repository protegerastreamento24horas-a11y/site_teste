# Site de Sorteios Automáticos com Integração HorsePay

Este é um projeto [Next.js](https://nextjs.org/) criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) que permite criar um site de sorteios automáticos com pagamento via PIX através do HorsePay.

## Funcionalidades

- Sistema de sorteios automáticos com probabilidades configuráveis
- Integração completa com a API do HorsePay para pagamentos via PIX
- Painel do usuário com saldo, histórico de participações e recarga
- Painel administrativo completo para gerenciar sorteios, usuários e configurações
- Design responsivo com tema dark e elementos de cassino
- Sistema de raspadinhas com diferentes temas e prêmios
- Páginas informativas (Como Jogar, FAQ, Contato, Termos, Privacidade, Regulamento)
- Sistema de login e cadastro de usuários

## Tecnologias utilizadas

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [HorsePay SDK](https://horsepay.com.br/docs)

## Estrutura do projeto

- `app/page.tsx` - Página inicial com carrossel de ganhadores
- `app/login/page.tsx` - Página de autenticação
- `app/dashboard/page.tsx` - Painel do usuário
- `app/sorteios/page.tsx` - Lista de sorteios disponíveis
- `app/sorteios/[id]/page.tsx` - Detalhes e participação em sorteio específico
- `app/raspadinhas/page.tsx` - Lista de raspadinhas disponíveis
- `app/raspadinhas/[id]/page.tsx` - Raspadinha específica para jogar
- `app/recarga/page.tsx` - Recarga de saldo via PIX
- `app/minha-conta/page.tsx` - Perfil e configurações do usuário
- `app/admin/page.tsx` - Painel administrativo
- `app/api/pix/route.ts` - API route para integração com o HorsePay
- `app/api/webhook/route.ts` - Webhook para receber notificações de pagamento
- `app/como-jogar/page.tsx` - Instruções de como jogar
- `app/faq/page.tsx` - Perguntas frequentes
- `app/contato/page.tsx` - Formulário de contato
- `app/termos/page.tsx` - Termos de uso
- `app/privacidade/page.tsx` - Política de privacidade
- `app/regulamento/page.tsx` - Regulamento dos sorteios
- `app/pagamento/page.tsx` - Página de pagamento
- `app/sucesso/page.tsx` - Página de sucesso após pagamento
- `app/resultados/page.tsx` - Resultados dos sorteios anteriores

## Modificações Realizadas

### Correção de Problemas Técnicos

1. **Resolução de problemas com Tailwind CSS**:
   - Criação de arquivos de configuração adequados (`tailwind.config.js`, `postcss.config.js`)
   - Correção de erros no build relacionados ao processamento do CSS
   - Remoção de configurações inválidas que causavam falhas no Turbopack

2. **Atualização de dependências**:
   - Atualização do Next.js para versão estável (14.2.5)
   - Atualização do React e React DOM para versões compatíveis
   - Instalação e configuração correta do Tailwind CSS

3. **Correção do processo de build**:
   - Resolução de erros que impediam a compilação do projeto
   - Remoção de configurações inválidas do Next.js
   - Correção de problemas com o TypeScript

### Melhorias no Design

1. **Novo layout principal**:
   - Criação de um design moderno com tema de loteria online
   - Implementação de um cabeçalho fixo com navegação
   - Seção hero com call-to-action
   - Design responsivo para dispositivos móveis

2. **Paleta de cores atualizada**:
   - Cores vibrantes inspiradas em loterias e jogos de azar
   - Gradientes e efeitos visuais atraentes
   - Contraste adequado para melhor legibilidade

3. **Componentes estilizados**:
   - Cards de sorteios e raspadinhas com efeitos hover
   - Botões com animações e feedback visual
   - Seção de estatísticas com design moderno
   - Sistema de promoções com cards atrativos

### Novas Funcionalidades

1. **Sistema completo de raspadinhas**:
   - Página de listagem de raspadinhas disponíveis
   - Páginas individuais para cada tipo de raspadinha
   - Integração com o sistema de saldo do usuário

2. **Páginas informativas**:
   - Página "Como Jogar" com instruções detalhadas
   - FAQ com perguntas e respostas frequentes
   - Páginas de Termos, Privacidade e Regulamento
   - Página de contato com formulário

3. **Melhorias no sistema de pagamento**:
   - Refatoração da página de pagamento
   - Implementação de loading states e feedback visual
   - Criação de página de sucesso após pagamento

4. **Sistema de administração**:
   - Painel administrativo para gerenciar sorteios
   - Interface para configurar probabilidades e prêmios
   - Visualização de estatísticas e dados dos usuários

### Otimizações

1. **Performance**:
   - Correção de problemas de build que afetavam a performance
   - Otimização do carregamento de componentes
   - Melhorias na estrutura do código

2. **Experiência do usuário**:
   - Feedback visual em ações do usuário
   - Loading states para operações assíncronas
   - Mensagens de erro e sucesso claras
   - Navegação intuitiva entre as páginas

## Como executar o projeto

Primeiro, instale as dependências:

```bash
npm install
```

Depois, execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura de dados

O sistema utiliza uma combinação de dados estáticos para demonstração e integração com a API do HorsePay para pagamentos reais. Os sorteios e raspadinhas são configurados com probabilidades específicas para cada prêmio.

## Aprendizados

Durante o desenvolvimento, foram superados diversos desafios técnicos relacionados à configuração do ambiente, integração do Tailwind CSS com Next.js, e implementação de um sistema de pagamentos via PIX confiável. O projeto demonstra boas práticas de desenvolvimento web moderno com React e Next.js.