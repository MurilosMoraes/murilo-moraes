# Portfólio Profissional - Murilo Silva Moraes

Portfólio pessoal desenvolvido com Next.js 14, TypeScript e sistema completo de internacionalização (PT/EN/ES). Demonstra expertise em desenvolvimento Front-end moderno com foco em performance, acessibilidade e experiência multilíngue.

## 🌐 Funcionalidades

- **Sistema de Internacionalização (i18n)** - Suporte completo para português, inglês e espanhol
- **Performance Otimizada** - 100% no Google Lighthouse em todas as métricas
- **Design Responsivo** - Mobile-first com experiência otimizada para todos os dispositivos
- **Dark Mode** - Sistema de temas com persistência de preferências
- **SEO Otimizado** - Meta tags dinâmicas e structured data para múltiplos idiomas

## 🚀 Stack Tecnológica

### Core Technologies

- **Next.js 14** com App Router
- **TypeScript** para type safety
- **Tailwind CSS** para design system
- **next-intl** para internacionalização

### Bibliotecas Especializadas

- **React Hook Form** para gerenciamento de formulários
- **Framer Motion** para animações (removido para otimização de performance)
- **Heroicons** para iconografia SVG

## 📱 Experiência Profissional

### Grupo Loyalty (Março 2022 - Atual)

**Posição:** Desenvolvedor Front-end

**Responsabilidades:**

- Desenvolvimento de sistemas web e mobile com React/React Native
- Implementação de autenticação OAuth e JWT
- Integração com APIs REST e sistemas de métricas
- Trabalho em squads ágeis com metodologia Scrum

**Stack:** React, Next.js, React Native, Tailwind CSS, TypeScript, EAS Build

### Pand (Janeiro 2021 - Março 2022)

**Posição:** Desenvolvedor Full Stack

**Responsabilidades:**

- Desenvolvimento completo de soluções para setor público
- Arquitetura de aplicações React Native com Firebase
- Implementação de sistemas de gestão municipal

**Stack:** React, React Native, Firebase, Node.js, MongoDB

### Sunshine (Novembro 2019 - Dezembro 2020)

**Posição:** Desenvolvedor Front-end (Freelancer)

**Responsabilidades:**

- Desenvolvimento de soluções para clientes internacionais
- Implementação de sistemas internos para grandes empresas
- Criação de interfaces para fintech e e-commerce

**Stack:** Angular, Vue.js, React, Ionic, TypeScript

## 🎯 Projetos em Destaque

### 1. Sistema de Afiliação - Grupo Loyalty

- Plataforma de entretenimento digital
- React, Next.js, autenticação OAuth
- Milhares de usuários ativos

### 2. App Mobile React Native - Grupo Loyalty

- Push notifications e deep linking
- EAS Build, deploy iOS/Android
- Integração com APIs nativas

### 3. App de Trilhas Ecológicas - Itapema/SC

- Solução para prefeitura municipal
- Geolocalização e mapas interativos
- React Native com Firebase

### 4. Sistema de Gestão de Obras Públicas

- Dashboard administrativo
- CRUD completo, relatórios
- React com Node.js backend

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── [locale]/           # Rotas internacionalizadas
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   └── layout.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/             # Componentes reutilizáveis
│   ├── icons/             # Componentes de ícones SVG
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── LanguageSelector.tsx
├── contexts/
│   └── ThemeContext.tsx    # Gerenciamento de tema
├── data/                   # Dados estruturados
│   ├── experiences.ts
│   ├── skills.ts
│   ├── contact.ts
│   ├── interests.ts
│   └── projects.ts
├── i18n/
│   └── request.ts          # Configuração do i18n
├── middleware.ts           # Middleware para detecção de idioma
└── messages/               # Arquivos de tradução
    ├── pt.json
    ├── en.json
    └── es.json
```

## ⚡ Performance

### Google Lighthouse Score: 100%

- **Performance:** 100%
- **Accessibility:** 100%
- **Best Practices:** 100%
- **SEO:** 100%

### Otimizações Implementadas

- Code splitting automático com Next.js 14
- Image optimization com Next.js Image
- Lazy loading de componentes
- CSS otimizado com Tailwind purging
- Font optimization
- Static generation para páginas públicas

## 🛠️ Comandos de Desenvolvimento

```bash
# Instalação de dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Servidor de produção
npm run start

# Linting
npm run lint
```

## 🌍 Internacionalização

O projeto suporta três idiomas:

- **Português (pt)** - Idioma padrão
- **Inglês (en)**
- **Espanhol (es)**

### Funcionalidades i18n:

- Detecção automática de idioma do navegador
- URLs localizadas (ex: `/en/about`, `/es/contact`)
- Middleware personalizado para redirecionamento
- Fallback inteligente para português
- Meta tags e SEO multilíngue

## 📧 Contato Profissional

**Murilo Silva Moraes** | Desenvolvedor Front-end  
**Localização:** Itapema, SC - Brasil  
**Email:** murilosilvamoraes@gmail.com  
**Telefone:** (47) 9 9902-3880  
**LinkedIn:** [linkedin.com/in/murilo-moraes-3a297222b](https://linkedin.com/in/murilo-moraes-3a297222b)  
**GitHub:** [github.com/MurilosMoraes](https://github.com/MurilosMoraes)

**Status:** Disponível para projetos freelance e oportunidades full-time.

---

## 📄 Licença

Este projeto é de uso pessoal e profissional. Todos os direitos reservados.

## 🚧 Roadmap

- [ ] Adicionar mais projetos ao portfólio
- [ ] Implementar blog técnico
- [ ] Adicionar sistema de comentários
- [ ] Integração com CMS headless
- [ ] PWA com service workers

---

> "Desenvolvedor apaixonado por tecnologia, sempre em busca de novos desafios e oportunidades para criar soluções inovadoras."
