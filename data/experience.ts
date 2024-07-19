interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills?: string[];
}

const experiences: Experience[] = [
  {
    role: "Android Developer, Sr. Software Engineer",
    company: "Eli Lilly",
    duration: "January 2024 - Present",
    description: [
      "Led the technical aspects of projects and mentored junior engineers, ensuring the implementation of best " +
      "practices and coding standards. I worked closely with stakeholders to translate business requirements into " +
      "technical solutions, and became proficient in multiple programming languages and technologies. My expertise in " +
      "system architecture, design, and performance optimization grew significantly during this time.",
    ],
    skills: ["Python", "Jetpack Compose", "Kotlin", "Documentation", "Stakeholder Management"],
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
    skills: ["Python", "Jetpack Compose", "Kotlin", "Documentation", "Stakeholder Management"],
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
    skills: ["Leadership", "Training", "Negotiation", "Onboarding"],
  },
  {
    role: "Software Engineer Intern",
    company: "Eli Lilly",
    duration: "June 2020 - August 2020",
    description: [
      "Designed and developed an iOS application for connected clinical trials using human-centered design principles.",
    ],
    skills: ["iOS Development", "Human-Centered Design"],
  },
  {
    role: "Program Manager Intern",
    company: "Johnson & Johnson",
    duration: "June 2019 - August 2019",
    description: [
      "Led project management intern class using Scrum and agile methodologies, achieving a 98% stakeholder satisfaction rate.",
    ],
    skills: ["Project Management", "Scrum", "Agile"],
  },
];

export default experiences;