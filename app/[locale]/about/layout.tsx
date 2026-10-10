import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know Rifa Marwa, her frontend development experience, and her approach to building web interfaces.",
};

interface AboutLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: Readonly<AboutLayoutProps>) {
  return <>{children}</>;
}
