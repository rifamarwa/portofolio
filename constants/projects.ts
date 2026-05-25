import { IProject } from "@/interfaces/project.interface";

export const projects: IProject[] = [
  {
    key: "btsWebsite",
    size: "large",
    images: "/assets/images/img-website-bts-square.png",
    tech: ["Nuxt.js", "Tailwind CSS"],
  },
  {
    key: "enumbering",
    size: "small",
    images: "/assets/images/img-website-bts.png",
    tech: ["Next.js", "Tailwind CSS", "Ant Design"],
  },

  {
    key: "biofarma",
    size: "medium",
    images: "/assets/images/img-biofarma.jpeg",
    tech: ["React.js", "Tailwind CSS"],
  },
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
  {
    key: "roster",
    size: "medium",
    images: "/assets/images/img-website-bts.png",
    tech: ["React.js", "Tailwind CSS", "Ant Design"],
  },
];
