import { ICompany } from "@/interfaces/company.interface";

export const allCompanies: ICompany[] = [
  {
    code: "BCA",
    name: "PT Bank Central Asia Tbk",
    relationship: "client",
    period: "2026 – Present",
    logo: "/assets/logo/logo_bca.webp",
    status: "current",
  },
  {
    name: "PT Indo Tambangraya Megah Tbk (ITMG)",
    code: "ITM",
    relationship: "client",
    period: "Mar 2024 – May 2026",
    logo: "/assets/logo/logo_itm.png",
    status: "former",
  },
  {
    name: "PT Bio Farma (Persero)",
    code: "Biofarma",
    relationship: "client",
    period: "Oct 2023 – July 2024",
    logo: "/assets/logo/logo_biofarma.webp",
    status: "former",
  },
  {
    name: "PT. Winning Logistics Ship Management Service",
    code: "Winning",
    relationship: "client",
    period: "Apr 2023 – Oct 2023",
    logo: "/assets/logo/logo_winning.svg",
    status: "former",
  },
  {
    name: "PT Intersolusi Teknologi Asia",
    code: "BTS.id",
    relationship: "employer",
    period: "Feb 2023 – Present",
    logo: "/assets/logo/logo_bts.png",
    status: "current",
  },
];
