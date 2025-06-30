export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  lighthouse: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  features: string[] | string;
  challenges: string[] | string;
  learnings: string[] | string;
}

export interface TranslatedProject
  extends Omit<Project, "features" | "challenges" | "learnings"> {
  features: string[];
  challenges: string[];
  learnings: string[];
}

export function getTranslatedProject(
  project: Project,
  t: any
): TranslatedProject {
  const getTranslatedArray = (
    value: string[] | string,
    fallback: string[] = []
  ): string[] => {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string" && value.startsWith("projects.")) {
      try {
        const key = value.replace("projects.", "");

        const array: string[] = [];
        for (let i = 0; i < 6; i++) {
          try {
            const item = t(`${key}.${i}`);
            if (
              item &&
              typeof item === "string" &&
              !item.includes("MISSING_MESSAGE")
            ) {
              array.push(item);
            } else {
              break;
            }
          } catch {
            break;
          }
        }

        if (array.length > 0) {
          return array;
        }

        const translated = t(key);
        if (Array.isArray(translated)) {
          return translated;
        } else {
          return fallback;
        }
      } catch (error) {
        console.warn(`Translation not found for ${value}:`, error);
        return fallback;
      }
    }

    return fallback;
  };

  return {
    ...project,
    title:
      typeof project.title === "string" && project.title.startsWith("projects.")
        ? t(project.title.replace("projects.", "")) || project.title
        : project.title,
    description:
      typeof project.description === "string" &&
      project.description.startsWith("projects.")
        ? t(project.description.replace("projects.", "")) || project.description
        : project.description,
    longDescription:
      typeof project.longDescription === "string" &&
      project.longDescription.startsWith("projects.")
        ? t(project.longDescription.replace("projects.", "")) ||
          project.longDescription
        : project.longDescription,
    features: getTranslatedArray(project.features, [
      "Sistema de internacionalização (PT/EN/ES)",
      "Design responsivo e mobile-first",
      "Performance otimizada (100% Lighthouse)",
      "Dark mode com sistema de temas",
      "Animações suaves com Framer Motion",
      "SEO otimizado para múltiplos idiomas",
    ]),
    challenges: getTranslatedArray(project.challenges, [
      "Implementação de i18n complexa",
      "Otimização de performance avançada",
      "Configuração avançada do middleware",
      "Gerenciamento de estado entre idiomas",
      "SEO internacional e meta tags dinâmicas",
      "Estrutura de roteamento localizada",
    ]),
    learnings: getTranslatedArray(project.learnings, [
      "Domínio do Next.js 14 App Router",
      "Implementação profissional de i18n",
      "Melhores práticas de performance",
      "Técnicas avançadas de TypeScript",
      "Configuração de middleware complexo",
      "Gerenciamento de estado globalizado",
    ]),
  };
}

export const projects: Project[] = [
  {
    id: "portfolio-2024",
    title: "projects.portfolio.title",
    description: "projects.portfolio.description",
    longDescription: "projects.portfolio.longDescription",
    image: "portfolio-preview",
    tags: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "next-intl",
      "Framer Motion",
      "React Hook Form",
      "ESLint",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/MurilosMoraes/murilo-moraes",
    liveUrl: "https://murilomoraes.dev",
    featured: true,
    lighthouse: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
    },
    features: "projects.portfolio.features",
    challenges: "projects.portfolio.challenges",
    learnings: "projects.portfolio.learnings",
  },
];

export const portfolioStats = {
  totalProjects: "50+",
  technologies: "20+",
  yearsExperience: "5+",
  companiesWorked: "30+",
};

export const ndaNotice = {
  pt: "💼 Projetos Empresariais: Por trabalhar em grandes empresas, muitos dos meus projetos estão sob NDA (Acordo de Confidencialidade). Posso discutir detalhes técnicos e resultados em conversas privadas com potenciais clientes.",
  en: "💼 Enterprise Projects: Working with large companies, many of my projects are under NDA (Non-Disclosure Agreement). I can discuss technical details and results in private conversations with potential clients.",
  es: "💼 Proyectos Empresariales: Al trabajar con grandes empresas, muchos de mis proyectos están bajo NDA (Acuerdo de Confidencialidad). Puedo discutir detalles técnicos y resultados en conversaciones privadas con clientes potenciales.",
};

export const projectsStatus = {
  pt: "🚧 Estou adicionando mais projetos ao portfólio! Cada projeto terá sua página detalhada com tecnologias, desafios e aprendizados. Acompanhe as atualizações.",
  en: "🚧 I'm adding more projects to the portfolio! Each project will have its detailed page with technologies, challenges and learnings. Stay tuned for updates.",
  es: "🚧 ¡Estoy agregando más proyectos al portafolio! Cada proyecto tendrá su página detallada con tecnologías, desafíos y aprendizajes. Mantente atento a las actualizaciones.",
};
