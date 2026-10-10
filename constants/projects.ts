import { IProject, IProjectDetail } from "@/interfaces/project.interface";
import { AlertCircle, Rocket, Sparkles } from "lucide-react";

export const projects: IProject[] = [
  {
    key: "btsWebsite",
    size: "large",
    images: "/assets/images/img-website-bts-square.png",
    tech: ["Nuxt.js", "Tailwind CSS"],
  },
  // {
  //   key: "enumbering",
  //   size: "small",
  //   images: "/assets/images/img-website-bts.png",
  //   tech: ["Next.js", "Tailwind CSS", "Ant Design"],
  // },

  // {
  //   key: "biofarma",
  //   size: "medium",
  //   images: "/assets/images/img-biofarma.jpeg",
  //   tech: ["React.js", "Tailwind CSS"],
  // },
  {
    key: "imap",
    size: "large",
    images: "/assets/images/img-website-bts.png",
    tech: ["React.js", "Tailwind CSS", "Ant Design"],
  },
  {
    key: "winning",
    size: "large",
    images: "/assets/images/img-winning-landing.png",
    tech: ["Angular", "PrimeNG"],
  },
  // {
  //   key: "roster",
  //   size: "medium",
  //   images: "/assets/images/img-website-bts.png",
  //   tech: ["React.js", "Tailwind CSS", "Ant Design"],
  // },
];

export const allProjects: IProject[] = [
  {
    key: "btsWebsite",
    size: "large",
    images: "/assets/images/img-website-bts-square.png",
    tech: ["Nuxt.js", "Tailwind CSS"],
    url: "https://bts.id/",
  },
  {
    key: "biofarma",
    size: "medium",
    images: "/assets/images/img-biofarma.jpeg",
    tech: ["React.js", "Tailwind CSS"],
  },
  {
    key: "winning",
    size: "large",
    images: "/assets/images/img-winning-landing.png",
    tech: ["Angular", "PrimeNG"],
    url: "https://winningindonesia.com/",
  },
  {
    key: "roster",
    size: "medium",
    images: "/assets/images/img-roster.png",
    tech: ["React.js", "Tailwind CSS", "Ant Design"],
  },
  {
    key: "enumbering",
    size: "large",
    images: "/assets/images/img-enumbering-create.png",
    tech: ["Next.js", "Tailwind CSS", "Ant Design"],
  },
  {
    key: "imap",
    size: "medium",
    images: "/assets/images/img-imap.png",
    tech: ["React.js", "Tailwind CSS", "Ant Design"],
  },
  {
    key: "ecommisioning",
    size: "medium",
    images: "/assets/images/img-ecom.png",
    tech: ["React.js", "Tailwind CSS", "Ant Design"],
  },
  {
    key: "tesa",
    size: "medium",
    images: "/assets/images/img-tesa.png",
    tech: ["Angular", "Material UI", "Chart.js", "Figma", "RxJS"],
  },
];

export const projectDetails: Record<string, IProjectDetail> = {
  btsWebsite: {
    category: "Company Profile & Interactive Landing Page",
    role: "Frontend Developer",
    year: "2024",
    overview:
      "Enhanced the BTS.id homepage into a more dynamic and polished company profile experience. The project focused on improving the landing page presentation through motion, scroll-based interaction, fixed-background sections, animated statistics, and seamless marquee elements while maintaining a responsive layout across devices.",

    responsibilities: [
      "Transformed the homepage based on the latest visual direction and landing page structure.",
      "Implemented a video-based Banner section with animated title transitions.",
      "Developed scroll-driven Portfolio and About sections with fixed-background visual behavior.",
      "Built animated counting elements for company statistics in the We Are section.",
      "Created a seamless marquee interaction for the We Work section.",
      "Adjusted responsive layouts to maintain visual consistency across different screen sizes.",
    ],

    highlights: [
      "Interactive landing page",
      "Video hero banner",
      "Scroll-driven portfolio",
      "Fixed-background sections",
      "Animated statistics",
      "Seamless marquee",
    ],

    caseStudy: {
      challenge:
        "The previous landing page needed a stronger visual flow to better represent BTS.id as a modern technology company. The challenge was creating a more engaging experience without making the interface feel visually heavy or difficult to navigate.",

      solution:
        "I enhanced the homepage with motion-focused sections, including a video banner, animated titles, scroll-based portfolio interactions, fixed-background storytelling sections, animated statistics, and a seamless marquee while keeping the experience responsive.",

      impact:
        "The redesigned homepage created a stronger first impression, clearer content flow, and a more modern company profile experience that better reflects BTS.id’s identity as a technology company.",
    },

    companyCode: "BTS.id",
  },

  biofarma: {
    category: "Healthcare Website",
    role: "Frontend Developer",
    year: "2024",
    overview:
      "A web application supporting the reporting and approval process for tetanus vaccine research conducted through a connected desktop application. The platform is primarily used by supervisors to monitor flocculation processes, manage research-related data, review assessments, and track system activity.",

    responsibilities: [
      "Developed frontend pages using React.js and Tailwind CSS.",
      "Built dashboard interfaces for monitoring ongoing flocculation processes.",
      "Developed user management and model management interfaces.",
      "Implemented assessment workflow pages for research result review and approval.",
      "Created audit trail interfaces to help users track system activities.",
      "Built reusable UI components to maintain consistency across the application.",
    ],

    highlights: [
      "Research monitoring dashboard",
      "Assessment workflow",
      "User management",
      "Model management",
      "Audit trail",
      "React-based implementation",
    ],

    caseStudy: {
      challenge:
        "Supervisors needed a clear way to monitor research processes and review results generated by the desktop application. The interface had to present technical research information without making the approval workflow difficult to follow.",

      solution:
        "I developed structured dashboard, assessment, user management, model management, and audit trail interfaces using React.js and Tailwind CSS. Reusable components and consistent layouts were used to keep research information and actions easy to understand.",

      impact:
        "The application provided supervisors with a centralized interface for monitoring research progress, reviewing assessment results, and managing supporting data, making the overall research workflow easier to follow and supervise.",
    },

    companyCode: "Biofarma",
  },

  winning: {
    category: "Enterprise System",
    role: "Frontend Developer",
    year: "2024",
    overview:
      "An enterprise web application built to support operational workflow with structured data presentation and interactive UI components.",

    responsibilities: [
      "Developed Angular-based pages and components.",
      "Integrated PrimeNG components into the application interface.",
      "Handled data-heavy layouts, forms, and tables.",
    ],

    highlights: [
      "Angular implementation",
      "PrimeNG UI components",
      "Enterprise dashboard layout",
    ],

    caseStudy: {
      challenge:
        "The application needed to present large amounts of operational data while keeping forms, tables, and user actions understandable. Maintaining consistency across multiple enterprise screens was also important as the application grew.",

      solution:
        "I developed reusable Angular components and utilized PrimeNG to create structured forms, tables, and interaction patterns. Layout and component behavior were kept consistent across different workflow pages.",

      impact:
        "The resulting interface made operational data easier to navigate and provided a more consistent experience across data-heavy workflows, while reusable components also simplified frontend maintenance.",
    },

    companyCode: "Winning",
  },

  roster: {
    category: "Internal Management System",
    role: "Frontend Developer",
    year: "2025",
    overview:
      "A roster management interface designed to help users manage schedules, assignments, and operational data through a structured dashboard.",

    responsibilities: [
      "Built reusable React components.",
      "Implemented table-based layouts and filtering UI.",
      "Created responsive pages using Tailwind CSS and Ant Design.",
    ],

    highlights: [
      "Roster management",
      "Filterable data table",
      "Dashboard interface",
    ],

    caseStudy: {
      challenge:
        "Roster data can become difficult to manage when schedules, assignments, filters, and operational information are displayed within the same workflow. Users needed a clearer way to locate and manage the information relevant to them.",

      solution:
        "I built reusable React components and structured the interface around searchable and filterable data tables using Tailwind CSS and Ant Design. Responsive layouts were implemented so the workflow remained usable across different screen sizes.",

      impact:
        "The structured roster interface improved visibility of scheduling and assignment data, helping users navigate operational information more efficiently while keeping the frontend easier to extend.",
    },

    companyCode: "ITM",
  },

  enumbering: {
    category: "Document Numbering System",
    role: "Frontend Developer",
    year: "2025",
    overview:
      "A document numbering system designed to manage numbering formats, approval flows, reserved numbers, signatures, and document-related workflows.",

    responsibilities: [
      "Built dynamic forms and approval-related interfaces.",
      "Implemented numbering format, reserved number, and document preview flows.",
      "Handled UI states for filtering, pagination, and user interactions.",
    ],

    highlights: [
      "Dynamic numbering format",
      "Approval workflow",
      "Signature and PDF preview",
      "Export and filtering features",
    ],

    caseStudy: {
      challenge:
        "Document numbering involved multiple interconnected states, including numbering formats, reserved numbers, approval stages, collaborators, signatures, and generated documents. The challenge was keeping these workflows understandable while handling many conditional frontend states.",

      solution:
        "I built dynamic forms and workflow-driven interfaces for numbering, approval, reservation, collaborators, document signatures, PDF preview, filtering, and export. I also handled authentication and interaction states to keep transitions between processes consistent.",

      impact:
        "The system centralized document numbering activities into a clearer digital workflow, giving users better visibility over document status while reducing the complexity of managing numbering and approval processes across separate steps.",
    },

    companyCode: "ITM",
  },

  imap: {
    category: "Employee Portal",
    role: "Frontend Developer",
    year: "2025",
    overview:
      "An employee portal interface that integrates multiple internal features and supports embedded applications through a seamless user experience.",

    responsibilities: [
      "Developed frontend pages using React.js and Tailwind CSS.",
      "Worked on integration flow between internal applications.",
      "Handled responsive UI and user interaction states.",
    ],

    highlights: [
      "Internal portal",
      "Application integration",
      "Responsive dashboard",
    ],

    caseStudy: {
      challenge:
        "Users needed to access functionality from multiple internal applications without feeling like they were constantly switching between separate systems. Embedded applications also had to maintain authentication and navigation continuity inside the portal.",

      solution:
        "I developed the portal interface and worked on the integration flow for embedded applications, including communication between the parent portal and embedded modules as well as silent authentication handling for a smoother user experience.",

      impact:
        "The integration created a more unified portal experience, allowing employees to access connected internal applications with fewer interruptions and more consistent navigation between systems.",
    },

    companyCode: "ITM",
  },

  ecommisioning: {
    category: "Operational System",
    role: "Frontend Developer",
    year: "2025",
    overview:
      "An operational web application designed to support commissioning-related processes through structured forms, tables, and workflow pages.",

    responsibilities: [
      "Built frontend views using React.js.",
      "Implemented form and table-based user interfaces.",
      "Created consistent UI components using Tailwind CSS and Ant Design.",
    ],

    highlights: [
      "Operational workflow",
      "Form-based interface",
      "React and Ant Design implementation",
    ],

    caseStudy: {
      challenge:
        "Commissioning workflows involve multiple forms, records, and operational stages that can quickly become difficult to follow when information is not presented consistently.",

      solution:
        "I developed structured React interfaces using Tailwind CSS and Ant Design, organizing forms, tables, actions, and workflow states into reusable patterns that remained consistent across the application.",

      impact:
        "The application provided a clearer interface for handling commissioning-related information, making operational workflows easier to navigate while improving consistency across frontend pages.",
    },

    companyCode: "ITM",
  },

  tesa: {
    category: "Dashboard & Analytics",
    role: "Frontend Developer",
    year: "2023",
    overview:
      "A dashboard-style application focused on data visualization, reporting, and structured information display.",

    responsibilities: [
      "Built Angular components with Material UI.",
      "Created chart-based visualizations using Chart.js.",
      "Translated UI design concepts from Figma into working interfaces.",
    ],

    highlights: [
      "Dashboard interface",
      "Chart visualization",
      "Angular and RxJS implementation",
    ],

    caseStudy: {
      challenge:
        "The dashboard needed to present multiple datasets and reports in a way that users could interpret quickly without being overwhelmed by dense information.",

      solution:
        "I translated the provided Figma designs into reusable Angular components and used Chart.js to present data through visual charts alongside structured dashboard sections and supporting information.",

      impact:
        "The dashboard transformed raw reporting data into a more readable visual interface, making key information easier to scan and providing a clearer foundation for data-driven monitoring.",
    },

    companyCode: "BTS.id",
  },
};

export const projectBubbles = [
  {
    number: "01",
    title: "Challenge",
    tone: "pink" as const,
    icon: AlertCircle,
    key: "challenge" as const,
    defaultDesc:
      "Transforming business needs into a clear and usable interface while keeping the experience easy to follow.",
  },
  {
    number: "02",
    title: "Solution",
    tone: "sky" as const,
    icon: Sparkles,
    key: "solution" as const,
    defaultDesc:
      "Creating structured layouts, reusable components, and interaction patterns that help users complete their workflow faster.",
  },
  {
    number: "03",
    title: "Impact",
    tone: "lime" as const,
    icon: Rocket,
    key: "impact" as const,
    defaultDesc:
      "Improved interface clarity, better workflow visibility, and a frontend structure that is easier to maintain.",
  },
];
