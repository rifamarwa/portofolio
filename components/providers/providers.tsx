"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
