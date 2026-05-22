import { TTechName } from "./techstack.interface";

export interface IExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;

  impact: string[];

  tech: TTechName[];
}
