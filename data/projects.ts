// data/projects.ts
interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects and experience.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://www.isaiahmcnealy.com/",
    codeLink: "https://github.com/isaiahmcnealy/my-portfolio-site",
    image: "/images/portfolio-site-image.png",
  },
  {
    title: "GuessWho",
    description: "Facial recognition model built using the Faces in the Wild dataset, designed to identify and " +
      "recognize celebrities and individuals for various applications in authentication, security, and personalized " +
      "services.",
    technologies: ["Python", "Scikit_Learn", "TensorFlow/Keras", "StandardScaler", "PCA (Principal Component Analysis)"],
    // demoLink: "https://github.com/isaiahmcnealy/GuessWho/tree/develop",
    codeLink: "https://github.com/isaiahmcnealy/GuessWho/tree/develop",
    image: "/images/guesswho.png",
  },
];

export default projects;