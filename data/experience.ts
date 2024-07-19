interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills?: string[];
}

const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Eli Lilly",
    duration: "July 2021 - Present",
    description: [
      "Developed an internal tool with Python to mitigate brand damage after a Twitter impersonation incident.",
      "Implemented new features for Android applications using Jetpack Compose and Kotlin.",
      "Revamped internal documentation standards, freeing up 8% of the engineering team’s time.",
      "Partnered with stakeholders in the US, Germany, India, and England for technical requirements.",
    ],
    skills: ["Python", "Jetpack Compose", "Kotlin", "Documentation", "Stakeholder Management"],
  },
  {
    role: "Technical Lead",
    company: "Eli Lilly",
    duration: "January 2022 - December 2023",
    description: [
      "Led development of Lilly’s Cloud, Analytics, and UI libraries for the Lilly Together mobile application.",
      "Trained team members and third-party vendors, increasing team efficiency by 15%.",
      "Negotiated technical resource allocation across projects, ensuring deadlines and budgets were met.",
      "Developed an onboarding program, reducing new member productivity ramp-up time by 30%.",
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