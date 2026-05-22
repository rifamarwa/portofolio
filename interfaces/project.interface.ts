import { TTechName } from "./techstack.interface";

export interface IProject {
  title: string;
  description: string;
  size: string;
  images: string;
  tech: TTechName[];
}
