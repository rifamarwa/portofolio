import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Rifa Marwa's frontend projects and the challenges, solutions, and impact behind each project.",
};

interface WorkLayoutProps {
  children: ReactNode;
}

export default function WorkLayout({ children }: Readonly<WorkLayoutProps>) {
  return <>{children}</>;
}
