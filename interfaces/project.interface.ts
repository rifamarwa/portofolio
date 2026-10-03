import { TTechName } from "./techstack.interface";

export interface IProject {
  key: string;
  size: string;
  images: string;
  tech: TTechName[];
  url?: string;
}

export interface IProjectDetailCaseStudy {
  challenge: string;
  solution: string;
  impact: string;
}

export interface IProjectDetail {
  category: string;
  role: string;
  year: string;
  overview: string;
  responsibilities: string[];
  highlights: string[];
  caseStudy: IProjectDetailCaseStudy;
  companyCode: string;
}
