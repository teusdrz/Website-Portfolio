# Portfolio Website 🚀

Um portfólio interativo e moderno construído com **Clean Architecture**, **React**, **TypeScript** e **Node.js**. Apresenta uma experiência de navegação única no estilo apresentação de slides com chat global integrado.

## ✨ Features Principais

- 🎯 **Navegação em slides** - Experiência imersiva página por página
- 💬 **Chat Global** - Sistema de mensagens global estilo WhatsApp para feedback
- 📱 **Design Responsivo** - Perfeito em qualquer dispositivo
- 🔍 **Repositórios In-Memory** - Dados persistentes e confiáveis
- 🎨 **UI Moderna** - Interface elegante com tema escuro
- ⚡ **Performance Otimizada** - Carregamento rápido e smooth

## 🏗️ Arquitetura

Este projeto implementa **Clean Architecture** tanto no frontend quanto no backend:

### Backend (Node.js + Express)
```
server/src/
├── domain/           # Entidades de negócio e interfaces
├── application/      # Casos de uso
├── infrastructure/   # Implementações de repositórios
└── presentation/     # Controllers e rotas
```

### Frontend (React + TypeScript)
```
client/src/
├── domain/           # Entidades e interfaces
├── application/      # Casos de uso
├── infrastructure/   # Implementações de APIs
└── presentation/     # Componentes React
```

## 🚀 Tecnologias

- **Frontend**: React 18, TypeScript, Styled-Components, Clean Architecture
- **Backend**: Node.js, Express, TypeScript, MongoDB Atlas
- **Features**: Chat Global, Navegação em Slides, Repositórios In-Memory
- **Princípios**: Clean Architecture, SOLID, KISS
- **Ferramentas**: Concurrently para desenvolvimento, ESLint, Prettier

## 🎯 Páginas do Portfolio

1. **Home** - Página inicial com apresentação
2. **About** - Informações pessoais e profissionais  
3. **Career** - Trajetória e experiência profissional
4. **Processes** - Metodologias e processos de trabalho
5. **Project Creation** - Timeline de criação de projetos
6. **Projects** - Showcase detalhado dos projetos principais
   - 🏢 **Nexus Enterprise** - Sistema corporativo de autenticação
   - 🏥 **AI-Healthcare** - Solução de saúde com IA
   - 🛒 **E-commerce Platform** - Plataforma de comércio eletrônico
7. **Chat Global** - Sistema de mensagens para feedback
8. **Final** - Página de contato e despedida

## 📦 Instalação e Execução

1. **Clone o repositório e instale todas as dependências:**
   ```bash
   git clone <repository-url>
   cd Website-Portifolio
   npm run install:all
   ```

2. **Execute o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

   Isso irá iniciar:
   - Backend na porta 3001 (http://localhost:3001)
   - Frontend na porta 3003 (http://localhost:3003)

3. **Ou execute separadamente:**
   ```bash
   # Backend apenas
   cd server && npm start
   
   # Frontend apenas  
   cd client && npm start
   ```

## 🎨 Design

O design segue o conceito moderno apresentado nas imagens:
- **Fundo escuro** (#1A1A1A) para elegância
- **Tipografia SF Pro Display** para modernidade
- **Botão verde vibrante** (#50FF6C) como destaque
- **Layout minimalista** focado no conteúdo
- **Responsivo** para todos os dispositivos

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa frontend e backend simultaneamente
- `npm run build` - Gera build de produção do frontend
- `npm start` - Executa apenas o backend em produção
- `npm run install:all` - Instala dependências de todos os projetos

## 🏛️ Princípios Aplicados

### Clean Code
- **Nomes descritivos** para variáveis e funções
- **Funções pequenas** com responsabilidade única
- **Separação de responsabilidades** clara
- **Código auto-documentado**

### SOLID
- **S**ingle Responsibility: Cada classe tem uma responsabilidade
- **O**pen/Closed: Aberto para extensão, fechado para modificação
- **L**iskov Substitution: Implementações podem ser substituídas
- **I**nterface Segregation: Interfaces específicas
- **D**ependency Inversion: Dependências invertidas via injeção

### KISS (Keep It Simple, Stupid)
- **Implementação direta** sem over-engineering
- **Estrutura simples** mas extensível
- **Componentes reutilizáveis**

## 🎯 Features

- ✅ **Navegação fluída** entre páginas com transições suaves
- ✅ **Chat Global integrado** para feedback dos visitantes  
- ✅ **3 Projetos principais** com detalhes completos
- ✅ **Repositórios In-Memory** para dados consistentes
- ✅ **Sistema de tracking** de visitantes por página
- ✅ **Interface responsiva** adaptável a qualquer tela
- ✅ **Tema escuro moderno** (#1A1A1A + #50FF6C)
- ✅ **Loading states** e tratamento de erros elegante
- ✅ **Ícones customizados** para redes sociais
- ✅ **Hover effects** e animações suaves

## 🔮 Tecnologias Futuras

- [ ] Adicionar modo claro/escuro
- [ ] Implementar notificações push para o chat
- [ ] Adicionar filtros nos projetos
- [ ] Sistema de administração para o chat
- [ ] Deploy automatizado com CI/CD
- [ ] Integrar com CMS para conteúdo dinâmico
- [ ] Adicionar testes unitários e de integração

## 📱 Compatibilidade

- ✅ Chrome/Edge/Safari (últimas versões)
- ✅ Mobile responsivo
- ✅ Acessibilidade básica implementada

---

**Desenvolvido com ❤️ seguindo as melhores práticas de desenvolvimento**
