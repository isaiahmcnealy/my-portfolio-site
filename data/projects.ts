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
    technologies: ["React", "Next.js", "TypeScript", "Styled-Components"],
    demoLink: "https://your-portfolio-demo.com",
    codeLink: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Machine Learning Model",
    description: "A machine learning model to predict housing prices using regression algorithms.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    codeLink: "https://github.com/yourusername/ml-model",
  },
  {
    title: "Mobile App",
    description: "A mobile app for managing personal finance and tracking expenses.",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase"],
    demoLink: "https://your-mobile-app-demo.com",
    codeLink: "https://github.com/yourusername/mobile-app",
  },
];

export default projects;