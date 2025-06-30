# Portfólio Profissional - Murilo Silva Moraes

Portfolio desenvolvido com Next.js 14 e TypeScript, demonstrando expertise em desenvolvimento Front-end moderno com foco em performance, acessibilidade e experiência do usuário.

## Informações do Desenvolvedor

**Murilo Silva Moraes** | Desenvolvedor Front-end  
**Localização:** Itapema, SC - Brasil  
**Email:** murilosilvamoraes@gmail.com  
**Telefone:** (47) 9 9902-3880  
**LinkedIn:** [linkedin.com/in/murilo-moraes-3a297222b](https://linkedin.com/in/murilo-moraes-3a297222b)  
**GitHub:** [github.com/MurilosMoraes](https://github.com/MurilosMoraes)

---

## Stack Tecnológica

### Core Technologies

- **Next.js 14** com App Router para renderização otimizada
- **TypeScript** para type safety e melhor DX
- **Tailwind CSS** para design system consistente
- **React 18** com Server Components e Suspense

### Bibliotecas Especializadas

- **Framer Motion** para animações performáticas
- **React Hook Form** para gerenciamento de estado de formulários
- **Heroicons** para iconografia SVG otimizada

### Otimizações de Performance

- **Next.js Image Component** com lazy loading automático
- **Font optimization** com estratégia de loading otimizada
- **Bundle splitting** automático
- **Static generation** para páginas públicas

---

## Decisões Arquiteturais

### 1. Next.js 14 App Router

- **Justificativa:** Aproveitamento do Server Components para melhor performance inicial
- **Benefícios:** SEO otimizado, streaming, layout aninhados
- **Implementação:** Estrutura de pastas baseada em file-system routing

### 2. TypeScript Strict Mode

- **Justificativa:** Type safety reduz bugs em produção
- **Configuração:** tsconfig.json com strict mode habilitado
- **Benefícios:** Melhor IntelliSense e refatoração segura

### 3. Design System com Tailwind CSS

- **Justificativa:** Consistência visual e desenvolvimento ágil
- **Customização:** Palette de cores, tipografia e componentes reutilizáveis
- **Performance:** CSS otimizado com purging automático

### 4. Gerenciamento de Estado Local

- **Context API** para tema (dark/light mode)
- **React Hook Form** para estado de formulários
- **useState/useEffect** para estado componente-específico

---

## Funcionalidades Técnicas

### Tema Dinâmico

- Sistema de detecção automática de preferência do usuário
- Persistência com localStorage
- Transições suaves entre temas

### Efeito de Scroll Interativo

- Gradient radial que acompanha movimento do cursor
- Implementado com CSS custom properties e JavaScript
- Performance otimizada com requestAnimationFrame

### Formulário de Contato

- Validação client-side com React Hook Form
- Feedback visual para estados de erro e sucesso
- Acessibilidade com labels apropriados e ARIA attributes

### Responsividade

- Mobile-first approach
- Breakpoints customizados
- Grid system flexível com CSS Grid e Flexbox

---

## Performance e Otimizações

### Core Web Vitals

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Estratégias de Otimização

- **Code splitting** automático pelo Next.js
- **Image optimization** com formatação WebP/AVIF
- **Preloading** de recursos críticos
- **Lazy loading** para componentes não-críticos

### SEO Técnico

- **Meta tags** dinâmicas por página
- **Structured data** com JSON-LD
- **Sitemap** automático
- **robots.txt** configurado

---

## Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css         # Estilos globais e utilitários
│   ├── layout.tsx          # Layout raiz com providers
│   ├── page.tsx            # Homepage
│   ├── about/
│   │   └── page.tsx        # Página sobre
│   ├── projects/
│   │   └── page.tsx        # Portfólio de projetos
│   └── contact/
│       └── page.tsx        # Formulário de contato
├── components/             # Componentes reutilizáveis
│   ├── Header.tsx          # Navegação responsiva
│   ├── Footer.tsx          # Footer com links sociais
│   └── ScrollEffect.tsx    # Efeito de scroll customizado
├── contexts/
│   └── ThemeContext.tsx    # Context para gerenciamento de tema
└── data/
    └── projects.json       # Dados dos projetos
```

---

## Padrões de Código

### TypeScript

- Interfaces explícitas para props de componentes
- Types customizados para dados da aplicação
- Strict mode habilitado com zero any types

### React

- Functional components com hooks
- Custom hooks para lógica reutilizável
- Memoização com useMemo/useCallback quando apropriado

### CSS

- Utility-first com Tailwind CSS
- Custom properties para temas
- Animações com prefer-reduced-motion

---

## Comandos de Desenvolvimento

### Setup Local

```bash
# Instalação de dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da build
npm run start

# Linting
npm run lint
```

### Scripts Disponíveis

- `dev`: Servidor de desenvolvimento com hot reload
- `build`: Build otimizada para produção
- `start`: Servidor de produção
- `lint`: ESLint com regras do Next.js

---

## Dados Reais de Experiência

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

---

## Projetos em Destaque

1. **Sistema de Afiliação - Grupo Loyalty**

   - Plataforma de entretenimento digital
   - React, Next.js, autenticação OAuth
   - Milhares de usuários ativos

2. **App Mobile React Native - Grupo Loyalty**

   - Push notifications e deep linking
   - EAS Build, deploy iOS/Android
   - Integração com APIs nativas

3. **App de Trilhas Ecológicas - Itapema/SC**

   - Solução para prefeitura municipal
   - Geolocalização e mapas interativos
   - React Native com Firebase

4. **Sistema de Gestão de Obras Públicas**
   - Dashboard administrativo
   - CRUD completo, relatórios
   - React com Node.js backend

---

## Contato Profissional

Para oportunidades de trabalho ou discussões técnicas:

- **Email:** murilosilvamoraes@gmail.com
- **LinkedIn:** [linkedin.com/in/murilo-moraes-3a297222b](https://linkedin.com/in/murilo-moraes-3a297222b)
- **Portfólio Online:** [Em produção]

**Status:** Disponível para projetos freelance e oportunidades full-time.
