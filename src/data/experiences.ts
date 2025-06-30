export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Desenvolvedor Front-end",
    company: "Grupo Loyalty",
    period: "Mar/2022 - Atual",
    description:
      "Desenvolvimento de sistemas web e mobile com React, Next.js, Tailwind CSS e React Native. Atuação em plataformas de grande escala no setor de entretenimento digital, com foco em sistemas de afiliação e engajamento. Integração com autenticação OAuth, JWT e sistemas de métricas.",
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "OAuth",
      "EAS Build",
    ],
  },
  {
    title: "Desenvolvedor Full Stack",
    company: "Pand (empresa própria)",
    period: "Jan/2021 - Mar/2022",
    description:
      "Desenvolvimento completo de soluções para a Prefeitura de Itapema/SC: App de trilhas ecológicas para turismo e Sistema de gestão de obras públicas. Responsável pela arquitetura, autenticação, integrações e infraestrutura front/back.",
    technologies: [
      "React",
      "React Native",
      "Firebase",
      "Node.js",
      "MongoDB",
      "TypeScript",
    ],
  },
  {
    title: "Desenvolvedor Front-end (freelancer)",
    company: "Sunshine",
    period: "Nov/2019 - Dez/2020",
    description:
      "Desenvolvimento de soluções customizadas para diversos clientes. Projetos de destaque: Sistema interno de controle para Electrolux durante a pandemia, 'Kiosk Go' para supermercados autônomos no mercado alemão, Front-end de fintech brasileira.",
    technologies: ["Angular", "Vue.js", "React", "Ionic", "TypeScript"],
  },
];
