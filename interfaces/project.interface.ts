import { TTechName } from "./techstack.interface";

export interface IProject {
  key: string;
  size: string;
  images: string;
  tech: TTechName[];
}
