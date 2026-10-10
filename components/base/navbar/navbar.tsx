"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Menu, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { Input } from "@/components/ui/input";
import ToggleLanguage from "../toggle/toggle-language";

const ToggleTheme = dynamic(() => import("../toggle/toggle-theme"), {
  ssr: false,
});

const navItems = ["Work", "About"];

export default function BaseNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);

    // handle locale route: /id/work atau /en/work
    const locales = ["id", "en"];
    const firstSegment = segments[0];

    return locales.includes(firstSegment) ? segments[1] : segments[0];
  }, [pathname]);

  const currentLocale = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    const locales = ["id", "en"];

    return locales.includes(segments[0]) ? segments[0] : "";
  }, [pathname]);

  const getHref = (item: string) => {
    const path = `/${item.toLowerCase()}`;

    return currentLocale ? `/${currentLocale}${path}` : path;
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2">
      <nav className="rounded-2xl border border-border bg-navbar-light/90 px-4 py-4 shadow-lg shadow-black/5 backdrop-blur-xl dark:bg-navbar/85 md:px-6 md:py-5">
        <div className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-3">
          {/* Logo */}
          <Link
            href={currentLocale ? `/${currentLocale}` : "/"}
            onClick={() => setIsOpen(false)}
            className="shrink-0"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Rifa
            </h2>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden justify-center gap-8 lg:flex">
            {navItems.map((item) => {
              const path = item.toLowerCase();
              const isActive = currentPath === path;

              return (
                <Link
                  key={item}
                  href={getHref(item)}
                  className={`text-lg transition-colors hover:text-primary xl:text-xl ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center justify-end gap-3 lg:flex">
            <div className="relative w-52 xl:w-55">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="pl-9" />
            </div>

            <ToggleLanguage />
            <ToggleTheme />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ToggleLanguage />
            <ToggleTheme />

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/60 text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="mt-5 border-t border-border pt-5">
              <div className="relative mb-5">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="h-11 pl-9"
                />
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const path = item.toLowerCase();
                  const isActive = currentPath === path;

                  return (
                    <Link
                      key={item}
                      href={getHref(item)}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/80 hover:bg-foreground/5 hover:text-primary"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
