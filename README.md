# Meu Bairro

Plataforma de conexão comunitária do seu bairro.

## Sobre o Projeto

Meu Bairro é uma aplicação web moderna construída com React, TypeScript e Tailwind CSS que visa conectar moradores e comerciantes locais, fortalecendo a comunidade.

## Tecnologias Utilizadas

- **React 18** - Biblioteca de interface do usuário
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Ferramenta de build rápida
- **Tailwind CSS** - Framework de estilização
- **Radix UI** - Componentes acessíveis
- **React Router** - Navegação client-side
- **React Query** - Gerenciamento de estado do servidor

## Como Executar

### Pré-requisitos

Ter Node.js e npm instalados - [instale com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Passos

```sh
# Passo 1: Clone o repositório usando a URL do Git do projeto.
git clone <SUA_GIT_URL>

# Passo 2: Navegue até o diretório do projeto.
cd <NOME_DO_SEU_PROJETO>

# Passo 3: Instale as dependências necessárias.
npm i

# Passo 4: Inicie o servidor de desenvolvimento com auto-reload e preview instantâneo.
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run build:dev` - Build para desenvolvimento
- `npm run lint` - Executa o ESLint
- `npm run preview` - Preview do build de produção
- `npm run deploy` - Build e deploy para GitHub Pages

## Deploy no GitHub Pages

### Pré-requisitos

1. Ter o repositório no GitHub
2. Ter o `gh-pages` instalado (já incluído nas devDependencies)

### Passos para Deploy

1. **Configure o repositório**:
   ```sh
   git remote add origin https://github.com/SEU_USERNAME/LandingPage_Meu_Bairro.git
   ```

2. **Faça o deploy**:
   ```sh
   npm run deploy
   ```

3. **Configure o GitHub Pages**:
   - Vá para Settings > Pages do seu repositório
   - Em "Build and deployment", selecione "Deploy from a branch"
   - Escolha a branch `main` (ou master) e a pasta `/docs`
   - Clique em Save

4. **Acesse seu site**:
   Seu site estará disponível em `https://SEU_USERNAME.github.io/LandingPage_Meu_Bairro/`

### Importante

- O projeto está configurado para funcionar com o nome do repositório `LandingPage_Meu_Bairro`
- Se mudar o nome do repositório, atualize a linha `base` no `vite.config.ts`
- O routing client-side é tratado automaticamente pelo arquivo `404.html`

## Estrutura do Projeto

```
src/
├── components/     # Componentes React reutilizáveis
├── pages/         # Páginas da aplicação
├── hooks/         # Hooks personalizados
├── utils/         # Funções utilitárias
├── types/         # Definições de tipos TypeScript
└── styles/        # Arquivos de estilo
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob licença MIT.
