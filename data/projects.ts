interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects and experience.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default projects;