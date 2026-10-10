import type { Metadata } from "next";
import { Geist, Geist_Mono, Philosopher } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Rifa Marwa — Frontend Developer",
    template: "%s — Rifa Marwa",
  },
  description:
    "Frontend developer building responsive and intuitive web experiences with React, Next.js, Vue, and TypeScript.",
  icons: {
    icon: [
      {
        url: "/favicon_light.ico",
        type: "image/x-icon",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon_dark.ico",
        type: "image/x-icon",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${philosopher.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
