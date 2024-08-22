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
      "Pursuing a Master of Science in Computer Science with a specialization in Machine Learning and Artificial " +
      "Intelligence, I am dedicated to mastering advanced algorithms, data structures, and software engineering principles. " +
      "My focus is on developing cutting-edge solutions that address complex challenges across various industries. " +
      "I am refining my expertise in data analysis, visualization, and interpretation, and learning to harness the power " +
      "of machine learning and AI to drive innovation, optimize processes, and deliver transformative results. My academic " +
      "journey is equipping me with the skills necessary to not only contribute to but also lead in roles that require strategic " +
      "thinking, technical acumen, and a deep understanding of AI-driven technologies."
    ],
    skills: ["Machine Learning", "Data Visualization", "Data Analysis", "Python", "R", "SQL"],
  },
  {
    role: "Android Developer, Sr. Software Engineer",
    company: "Eli Lilly",
    duration: "January 2024 - Present",
    description: [
      "As an Android Developer and Senior Software Engineer, I excelled at transforming innovative ideas into seamless, " +
      "user-centric mobile experiences by leveraging cutting-edge technologies. Utilizing Jetpack Compose and Kotlin, I " +
      "crafted intuitive and responsive user interfaces that felt effortless to users. My role demanded a deep dive into " +
      "Android’s architecture, where I optimized app performance using advanced profiling tools to ensure efficiency and " +
      "responsiveness. Collaborating with global teams, I consistently delivered robust and scalable solutions that met " +
      "both technical and business requirements, driving the success of high-impact projects.",
    ],
    skills: ["Kotlin", "Java", "Jetpack Compose", "CI/CD", "Documentation"],
  },
  {
    role: "Technical Lead",
    company: "Eli Lilly",
    duration: "January 2022 - December 2023",
    description: [
      "Combining deep technical expertise with leadership responsibilities, I directed the technical trajectory of " +
      "projects and guided development teams to success. My role involved making critical architectural decisions, " +
      "conducting thorough code reviews, and ensuring the highest standards of software quality. Acting as a pivotal " +
      "link between management, stakeholders, and the development team, I managed task allocation, timelines, and " +
      "documentation, ensuring projects stayed on track and aligned with business goals. I also played a key role " +
      "in developing new team members, leveraging my strong communication skills and technical knowledge to mentor " +
      "and build a cohesive, high-performing team.",
    ],
    skills: ["Project Management", "Swift", "Kotlin", "Communication", "Problem-Solving", "Leadership"],
  },
  {
    role: "Full-Stack Developer, Software Engineer",
    company: "Eli Lilly",
    duration: "July 2021 - January 2022",
    description: [
      "Designed, developed, and implemented robust software solutions, consistently delivering high-quality products. " +
      "I wrote clean, efficient code and conducted comprehensive code reviews, ensuring adherence to best practices " +
      "and industry standards. My role involved close collaboration with cross-functional teams, where I played a " +
      "key part in the entire software development lifecycle. This position honed my expertise in software architecture," +
      " design patterns, and best practices, while also enhancing my ability to troubleshoot and optimize existing systems " +
      "for improved performance and scalability.",
    ],
    skills: ["Python", "React", "Node.JS", "APIs", "Databases", "Unit Testing"],
  },
  {
    role: "Software Engineer Intern",
    company: "Eli Lilly",
    duration: "June 2020 - August 2020",
    description: [
      "Designed and developed an iOS application for connected clinical trials, utilizing human-centered design " +
      "principles to create an intuitive and user-friendly interface. This application enabled real-time data " +
      "collection and visualization, significantly improving the efficiency and accuracy of clinical trial processes, " +
      "and enhancing the experience for both healthcare providers and participants.",
    ],
    skills: ["iOS Development", "Human-Centered Design", "Swift", "Xcode",],
  },
];

export default experiences;