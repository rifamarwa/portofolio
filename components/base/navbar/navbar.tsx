"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import ToggleLanguage from "../toggle/toggle-language";

const ToggleTheme = dynamic(() => import("../toggle/toggle-theme"), {
  ssr: false,
});

const navItems = ["Work", "About"];
const locales = ["id", "en"];

export default function BaseNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { currentPath, currentLocale } = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    const hasLocale = locales.includes(segments[0]);

    return {
      currentPath: hasLocale ? segments[1] : segments[0],
      currentLocale: hasLocale ? segments[0] : "",
    };
  }, [pathname]);

  const getHref = (item: string) => {
    const path = `/${item.toLowerCase()}`;

    return currentLocale ? `/${currentLocale}${path}` : path;
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2">
      <nav
        aria-label="Main navigation"
        className="rounded-2xl border border-border bg-navbar-light/90 px-4 py-4 shadow-lg shadow-black/5 backdrop-blur-xl dark:bg-navbar/85 dark:shadow-black/15 md:px-6"
      >
        <div className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-3">
          {/* Logo */}
          <Link
            href={currentLocale ? `/${currentLocale}` : "/"}
            onClick={() => setIsOpen(false)}
            aria-label="Rifa — Home"
            className="group w-fit shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C18390] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <span className="inline-flex items-baseline text-3xl font-bold tracking-tight text-foreground">
              Rifa
              <span className="ml-0.5 text-[#C18390] transition-transform duration-200 group-hover:-translate-y-0.5">
                .
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center justify-center gap-8 lg:flex">
            {navItems.map((item) => {
              const isActive = currentPath === item.toLowerCase();

              return (
                <Link
                  key={item}
                  href={getHref(item)}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative rounded-md px-1 py-2 text-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C18390] xl:text-xl ${
                    isActive
                      ? "text-link"
                      : "text-foreground/75 hover:text-link"
                  }`}
                >
                  {item}

                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-full bg-[#C18390] transition-all duration-200 ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center justify-end gap-3 lg:flex">
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
              aria-controls="mobile-navigation"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C18390] ${
                isOpen
                  ? "border-[#C18390]/40 bg-[#C18390]/10 text-link"
                  : "border-border bg-background/60 text-foreground hover:border-[#C18390]/40 hover:text-link"
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-navigation"
          inert={!isOpen}
          className={`grid overflow-hidden transition-all duration-300 motion-reduce:transition-none lg:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="mt-4 border-t border-border pt-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = currentPath === item.toLowerCase();

                  return (
                    <Link
                      key={item}
                      href={getHref(item)}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C18390] ${
                        isActive
                          ? "bg-[#C18390]/10 text-link"
                          : "text-foreground/75 hover:bg-foreground/5 hover:text-link"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-5 w-[3px] shrink-0 rounded-full bg-[#C18390] transition-opacity duration-200 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />

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
