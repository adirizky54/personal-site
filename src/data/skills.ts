export const BEGIN_YEAR = 2018;
export const NOW_YEAR = new Date().getFullYear();
export const STACK_SIZE = 100 / (NOW_YEAR - BEGIN_YEAR);

export type Skill = {
  name: string;
  icon: string;
  begin: number;
  end?: number;
  color: string;
};

export const SKILLS: Skill[] = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    begin: 2018,
    color: "hover:border-orange-700",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    begin: 2018,
    color: "hover:border-sky-600",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    begin: 2018,
    color: "hover:border-yellow-400",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    begin: 2021,
    color: "hover:border-blue-500",
  },
  {
    name: "ReactJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    begin: 2019,
    color: "hover:border-cyan-400",
  },
  {
    name: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    begin: 2021,
    color: "hover:border-white",
  },
];
