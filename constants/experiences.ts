import { IExperience } from "@/interfaces/experiences.interface";

export const experiences: IExperience[] = [
  {
    company: "PT Intersolusi Teknologi Asia (BTS.id)",
    role: "Front End Developer — Full Time",
    period: "Feb 2023 — Present",
    location: "Bandung",
    description:
      "Worked on multiple enterprise and client-based frontend applications ranging from healthcare systems, CMS platforms, maritime logistics, and internal management systems.",

    impact: [
      "Developed tetanus vaccine management systems for a local vaccine manufacturing company using React.js and Tailwind CSS.",
      "Built multilingual company profile websites and CMS platforms using Angular and i18n integration.",
      "Created internal project and employee management systems with dynamic dashboards and workflow tracking.",
      "Performed unit testing using Jest and Karma to ensure application reliability and maintainability.",
    ],

    tech: [
      "Angular",
      "React.js",
      "Tailwind CSS",
      "PrimeNG",
      "Chart.js",
      "RxJS",
      "Jest",
      "Karma",
    ],
  },

  {
    company: "PT Indo Tambangraya Megah Tbk",
    role: "Front End Developer — Contract",
    period: "Mar 2024 — May 2026",
    location: "South Jakarta",
    description:
      "Developing enterprise-grade web applications used internally across ITM Group, focused on operational workflows, employee systems, and inspection management.",

    impact: [
      "Built and maintained vehicle inspection systems and employee portal applications used across multiple operational teams.",
      "Integrated REST APIs, Azure AD Login, and Multi-Factor Authentication (MFA) for secure enterprise access.",
      "Improved responsiveness, UI consistency, and user experience across complex internal platforms.",
      "Maintained frontend quality and scalability using SonarQube and modular component architecture.",
    ],

    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Ant Design",
      "Redux",
      "Chart.js",
      "Azure AD",
      "PWA",
    ],
  },

  {
    company: "PT Ebdesk Teknologi",
    role: "Full Stack Developer Intern",
    period: "Aug 2021 — Oct 2021",
    location: "South Tangerang",
    description:
      "Worked on a news data management application while learning frontend architecture, REST API integration, and full stack web development workflows.",

    impact: [
      "Implemented CRUD functionality for more than 300 news data entries.",
      "Integrated Angular frontend with Node.js REST APIs and MySQL database.",
      "Learned collaborative development workflows and component-based frontend architecture.",
    ],

    tech: ["Angular", "Node.js", "MySQL", "REST API", "JavaScript"],
  },
];
