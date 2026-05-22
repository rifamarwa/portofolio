"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import ToggleLanguage from "../toggle/toggle-language";

const ToggleTheme = dynamic(() => import("../toggle/toggle-theme"), {
  ssr: false,
});

export default function BaseNavbar() {
  return (
    <section
      className="
        fixed top-4 left-1/2 z-50
        -translate-x-1/2
        w-full max-w-7xl

        rounded-2xl
        border border-border
        bg-navbar-light
        dark:bg-navbar
        backdrop-blur-xl

        px-6 py-5
      "
    >
      <div className="grid grid-cols-3 items-center gap-4">
        <div>
          <h2 className="text-4xl font-bold">Rifa</h2>
        </div>

        <div className="flex justify-center gap-8">
          {["Work", "About", "Contact", "Blog"].map((item) => (
            <Link
              key={item}
              href="#"
              className="
                text-foreground
                transition-colors
                hover:text-primary
                text-xl!
              "
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3">
          <div className="relative w-55">
            <Search
              className="
                absolute left-3 top-1/2
                h-4 w-4
                -translate-y-1/2
                text-muted-foreground
              "
            />

            <Input type="search" placeholder="Search..." className="pl-9" />
          </div>

          <ToggleLanguage />

          <ToggleTheme />
        </div>
      </div>
    </section>
  );
}
