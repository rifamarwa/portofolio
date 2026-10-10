export interface ICompany {
  code: string;
  name: string;
  relationship?: "employer" | "client";
  period?: string;
  description?: string;
  logo?: string;
  status?: "former" | "current";
}
