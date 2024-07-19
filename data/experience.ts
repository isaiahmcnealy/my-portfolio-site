interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills?: string[];
}

const experiences: Experience[] = [
  {
    role: "Master of Science in Computer Science Student - Machine Learning & AI",
    company: "Rice University",
    duration: "January 2024 - May 2026 (Expected)",
    description: [
      "Pursuing a Master of Science in Computer Science with a focus on Machine Learning and Artificial Intelligence. " +
      "Expanding knowledge of advanced algorithms, data structures, and software engineering principles to develop " +
      "cutting-edge solutions to complex problems. Honing skills in data analysis, visualization, and interpretation, " +
      "and learning to leverage machine learning and AI to drive innovation and transform industries."
    ],
    skills: ["Machine Learning", "Data Visualization", "Data Analysis", "Python", "R", "SQL"],
  },
  {
    role: "Android Developer, Sr. Software Engineer",
    company: "Eli Lilly",
    duration: "January 2024 - Present",
    description: [
      "As an Android Developer and Senior Software Engineer, I transformed innovative ideas into seamless mobile " +
      "experiences using cutting-edge technologies. I leveraged Jetpack Compose and Kotlin to craft intuitive, " +
      "responsive user interfaces that felt like second nature to users. My day-to-day involved diving deep into " +
      "Android’s architecture, optimizing performance with advanced profiling tools, and collaborating with global " +
      "teams to bring robust, scalable solutions to life. ",
    ],
    skills: ["Kotlin", "Java", "Jetpack Compose", "CI/CD", "Documentation"],
  },
  {
    role: "Technical Lead",
    company: "Eli Lilly",
    duration: "January 2022 - December 2023",
    description: [
      "Combined technical expertise with leadership responsibilities, overseeing the technical direction of projects " +
      "and guiding the development team. I made architectural decisions, conducted code reviews, and ensured the " +
      "overall quality of software products. Additionally, I acted as a bridge between management and stakeholders and the development " +
      "team, handling task allocation, timeline management, documentation, and the development of new team members, " +
      "leveraging strong communication skills and deep technical knowledge.",
    ],
    skills: ["Project Management", "Swift", "Kotlin", "Communication", "Problem-Solving", "Leadership"],
  },
  {
    role: "Full-Stack Developer, Software Engineer",
    company: "Eli Lilly",
    duration: "July 2021 - January 2022",
    description: [
      "Designed, developed, and implemented software solutions. I wrote clean, efficient code, conducted code reviews, " +
      "and collaborated with cross-functional teams to deliver high-quality software products. This position honed my " +
      "skills in software architecture, design patterns, and best practices, and enhanced my ability to troubleshoot " +
      "and improve existing systems.",
    ],
    skills: ["Python", "React", "Node.JS", "APIs", "Databases", "Unit Testing"],
  },
  {
    role: "Software Engineer Intern",
    company: "Eli Lilly",
    duration: "June 2020 - August 2020",
    description: [
      "Designed and developed an iOS application for connected clinical trials using human-centered design principles.",
    ],
    skills: ["iOS Development", "Human-Centered Design", "Swift", "Xcode",],
  },
];

export default experiences;