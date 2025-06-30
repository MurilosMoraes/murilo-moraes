export interface Technology {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  technologies: Technology[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Angular", level: 85 },
      { name: "Vue.js", level: 88 },
    ],
  },
  {
    category: "Mobile & Frameworks",
    technologies: [
      { name: "React Native", level: 95 },
      { name: "Expo", level: 90 },
      { name: "Ionic", level: 85 },
      { name: "EAS Build", level: 88 },
      { name: "Push Notifications", level: 85 },
    ],
  },
  {
    category: "Backend & Tools",
    technologies: [
      { name: "Node.js", level: 85 },
      { name: "Firebase", level: 95 },
      { name: "MongoDB", level: 82 },
      { name: "OAuth/JWT", level: 88 },
      { name: "Git/GitHub", level: 95 },
    ],
  },
];
