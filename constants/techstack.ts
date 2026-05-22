export const techRegistry = {
  JavaScript: { icon: "/assets/icons/icon-js.svg", variant: "yellow" },
  TypeScript: { icon: "/assets/icons/icon-ts.svg", variant: "blue" },
  HTML: { icon: "/assets/icons/icon-html.png", variant: "orange" },
  CSS: { icon: "/assets/icons/icon-css.png", variant: "cyan" },

  "React.js": { icon: "/assets/icons/icon-reactjs.svg", variant: "cyan" },
  "Next.js": { icon: "/assets/icons/icon-nextjs.svg", variant: "neutral" },
  Angular: { icon: "/assets/icons/icon-angular.svg", variant: "red" },
  "Nuxt.js": { icon: "/assets/icons/icon-nuxtjs.svg", variant: "green" },
  Vite: { icon: "/assets/icons/icon-vite.png", variant: "purple" },

  "Tailwind CSS": {
    icon: "/assets/icons/icon-tailwindcss.png",
    variant: "cyan",
  },
  "Material UI": { icon: "/assets/icons/icon-materialui.png", variant: "blue" },
  "Ant Design": { icon: "/assets/icons/icon-antd.svg", variant: "purple" },
  PrimeNG: { icon: "/assets/icons/icon-primeng.png", variant: "red" },
  "Chart.js": { icon: "/assets/icons/icon-chartjs.svg", variant: "orange" },

  Git: { icon: "/assets/icons/icon-git.svg", variant: "orange" },
  GitLab: { icon: "/assets/icons/icon-gitlab.svg", variant: "orange" },
  Firebase: { icon: "/assets/icons/icon-firebase.svg", variant: "yellow" },
  Figma: { icon: "/assets/icons/icon-figma.svg", variant: "purple" },

  "Node.js": { icon: null, variant: "green" },
  MySQL: { icon: null, variant: "blue" },
  "REST API": { icon: null, variant: "neutral" },
  Redux: { icon: null, variant: "purple" },
  RxJS: { icon: null, variant: "cyan" },
  Jest: { icon: null, variant: "red" },
  Karma: { icon: null, variant: "orange" },
  "Azure AD": { icon: null, variant: "blue" },
  PWA: { icon: null, variant: "green" },
} as const;

export const techGroups = [
  {
    title: "Core Stack",
    items: [
      { name: "JavaScript", icon: "/assets/icons/icon-js.svg" },
      { name: "TypeScript", icon: "/assets/icons/icon-ts.svg" },
      { name: "HTML", icon: "/assets/icons/icon-html.png" },
      { name: "CSS", icon: "/assets/icons/icon-css.png" },
      { name: "React.js", icon: "/assets/icons/icon-reactjs.svg" },
      { name: "Next.js", icon: "/assets/icons/icon-nextjs.svg" },
      { name: "Angular", icon: "/assets/icons/icon-angular.svg" },
      { name: "Nuxt.js", icon: "/assets/icons/icon-nuxtjs.svg" },
      { name: "Vite", icon: "/assets/icons/icon-vite.png" },
    ],
  },

  {
    title: "Styling & Animation",
    items: [
      { name: "Tailwind CSS", icon: "/assets/icons/icon-tailwindcss.png" },
      { name: "Material UI", icon: "/assets/icons/icon-materialui.png" },
      { name: "Ant Design", icon: "/assets/icons/icon-antd.svg" },
      { name: "PrimeNG", icon: "/assets/icons/icon-primeng.png" },
      { name: "Chart.js", icon: "/assets/icons/icon-chartjs.svg" },
    ],
  },

  {
    title: "Tooling & Headless",
    items: [
      { name: "Git", icon: "/assets/icons/icon-git.svg" },
      { name: "GitLab", icon: "/assets/icons/icon-gitlab.svg" },
      { name: "Firebase", icon: "/assets/icons/icon-firebase.svg" },
      { name: "Figma", icon: "/assets/icons/icon-figma.svg" },
    ],
  },
];
