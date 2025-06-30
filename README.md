# Portfólio Profissional - Murilo Silva Moraes

Portfólio pessoal desenvolvido com Next.js 14, TypeScript e sistema completo de internacionalização (PT/EN/ES). Demonstra expertise em desenvolvimento Front-end moderno com foco em performance, acessibilidade e experiência multilíngue.

🌐 **Acesse o portfólio:** [https://murilo-moraes.vercel.app/](https://murilo-moraes.vercel.app/)

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
**Portfólio:** [https://murilo-moraes.vercel.app/](https://murilo-moraes.vercel.app/)  
**LinkedIn:** [linkedin.com/in/murilo-moraes-3a297222b](https://linkedin.com/in/murilo-moraes-3a297222b)  
**GitHub:** [github.com/MurilosMoraes](https://github.com/MurilosMoraes)
