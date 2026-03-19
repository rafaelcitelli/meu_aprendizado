# WEB IO Store

Um e-commerce demo completo, moderno e navegável para a marca **WEB IO**, com experiência inspirada em grandes marketplaces, identidade visual própria e foco em conversão.

## Visão geral

Este projeto entrega uma demonstração funcional de loja virtual com:

- **Loja pública** com home, catálogo, categorias, produto, busca, carrinho, checkout e wishlist.
- **Checkout inteligente** com etapas visuais, dados pré-preenchidos, múltiplos endereços e métodos de pagamento mockados.
- **Autenticação mock** preparada para evoluir com **Supabase Auth**.
- **Backoffice/Admin** com dashboard, gestão de produtos, categorias, pedidos, usuários, vendas, cupons e configurações.
- **Persistência local** via `localStorage` para permitir demonstração rápida sem dependências externas.
- **Schema SQL para Supabase/Postgres** pronto para evolução para backend real.

> **Observação importante**: nesta entrega, a experiência está pronta para demonstração no navegador usando dados mock persistidos localmente. A camada de backend real com Supabase foi estruturada no schema SQL e na arquitetura dos fluxos, mas a UI atual roda em arquivos estáticos para facilitar execução imediata.

## Stack utilizada

### Frontend
- HTML5
- CSS3 com design system próprio inspirado nas cores WEB IO
- JavaScript modular em um SPA com roteamento por hash
- `localStorage` para persistência de sessão, carrinho, favoritos e pedidos

### Backend / dados (pronto para evolução)
- Modelagem SQL para **Supabase/Postgres** em `database/schema.sql`
- Regras de negócio de e-commerce implementadas no front demo
- Provider mock de pagamento com suporte a:
  - PIX
  - boleto
  - cartão de crédito

## Estrutura do projeto

```text
.
├── app.js                  # Aplicação SPA, estado global, rotas, checkout, admin e serviços mock
├── index.html              # Entrada da aplicação
├── styles.css              # Design system, responsividade e identidade visual WEB IO
├── assets/
│   ├── favicon.svg         # Favicon baseado na marca WEB IO
│   └── logo-web-io.svg     # Logo SVG usada no header, login e admin
├── database/
│   └── schema.sql          # Schema e políticas para Supabase/Postgres
└── README.md               # Documentação do projeto
```

## Funcionalidades entregues

### Loja pública
- Home com hero, destaques, ofertas do dia, recomendados e mais vendidos.
- Catálogo com:
  - busca por termo
  - filtro por categoria
  - faixa de preço
  - disponibilidade
  - ordenação por relevância, menor preço, maior preço e mais vendidos
- Página de produto com:
  - descrição detalhada
  - tags
  - avaliações mock
  - relacionados
- Carrinho persistente por usuário.
- Wishlist/favoritos.
- Minha conta.
- Meus pedidos.
- Detalhe do pedido.
- Página de sucesso e falha do pagamento.

### Checkout inteligente
- Identificação do usuário logado.
- Endereço pré-preenchido com sugestão do endereço principal.
- Suporte a salvar múltiplos endereços.
- Resumo lateral do pedido.
- Validação de campos obrigatórios.
- Cálculo mock de frete.
- Compra rápida para usuário autenticado.

### Pagamentos mockados
- **PIX**: pedido aprovado instantaneamente e exibição de código mock.
- **Boleto**: pedido criado como pendente com linha digitável mock.
- **Cartão**: cartão cujo final seja `0` retorna recusado; outros finais aprovam.

### Backoffice/Admin
Acesso com usuário admin demo:
- Dashboard com KPIs e gráfico mock.
- Gestão de produtos.
- Gestão de categorias.
- Gestão de pedidos.
- Gestão de usuários.
- Gestão de vendas.
- Gestão de cupons.
- Configurações da loja.
- Logs administrativos básicos.

## Credenciais mock

### Admin
- **E-mail:** `admin@webio.store`
- **Senha:** `admin123`

### Cliente
- **E-mail:** `cliente@webio.store`
- **Senha:** `cliente123`

## Como executar

Como este projeto é estático, você pode abrir diretamente o `index.html` no navegador, mas o ideal é usar um servidor local simples.

### Opção 1: Python

```bash
python3 -m http.server 4173
```

Depois acesse:

```text
http://localhost:4173
```

### Opção 2: Node.js

```bash
npx serve .
```

## Configuração do Supabase

Para transformar esta demo em um projeto full stack real com Supabase:

1. Crie um projeto no Supabase.
2. Rode o SQL de `database/schema.sql` no SQL Editor.
3. Configure buckets de storage para imagens de produtos.
4. Conecte a camada de autenticação aos fluxos de login/cadastro.
5. Substitua os serviços mock de `app.js` por chamadas reais ao Supabase JS SDK.

### Variáveis de ambiente sugeridas para futura evolução

```env
SUPABASE_URL=https://SEU-PROJETO.supabase.co
SUPABASE_ANON_KEY=SEU_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=SEU_SERVICE_ROLE_KEY
PAYMENT_PROVIDER=mock
PIX_KEY=contato@webio.store
```

## Regras de negócio implementadas

- Estoque decrementa automaticamente em compras aprovadas.
- Pedido mantém histórico de status.
- Pagamentos têm rastreabilidade e status.
- Carrinho persiste por usuário.
- Rotas administrativas exigem usuário admin.
- Cupons respeitam valor mínimo.
- Checkout bloqueia envio sem campos obrigatórios.

## Seed e dados iniciais

Os dados mock iniciais já são carregados pela aplicação em `app.js`, incluindo:
- categorias
- produtos
- usuários
- pedidos
- cupons
- reviews
- logs administrativos

No Supabase, o arquivo `database/schema.sql` já inclui inserts iniciais para categorias e cupons.

## UX/UI e identidade visual

A interface usa a identidade da **WEB IO** com foco em:
- azul ciano
- azul escuro
- roxo
- laranja
- branco/cinza claro como apoio

Também inclui:
- layout robusto com header forte
- busca em destaque
- cards de produto orientados à conversão
- dark mode opcional
- estados vazios
- toast notifications
- navegação fluida
- responsividade desktop/mobile

## Roadmap de melhorias

- Migrar para **Next.js + TypeScript + Tailwind CSS**.
- Integrar **Supabase Auth** real.
- Criar API dedicada para checkout e pedidos.
- Integrar gateway real de pagamentos.
- Implementar upload real de imagens para storage.
- Adicionar paginação real e SEO server-side.
- Separar front/back em monorepo.
- Adicionar testes automatizados E2E.

## Observações finais

Esta entrega foi otimizada para ser:
- rápida de executar
- visualmente forte
- útil para demonstração comercial
- pronta para evolução arquitetural futura

Se quiser, o próximo passo ideal é eu converter esta demo para uma arquitetura real com **Next.js + Supabase + API backend** mantendo a mesma identidade visual e os mesmos fluxos.
