/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BaseChip from "@/components/base/chip/chip";
import { techRegistry } from "@/constants/techstack";
import { SetStateAction } from "react";

interface IWorkSearch {
  search: string;
  t: any;
  techStacks: string[];
  selectedTech?: string;
  setSelectedTech: (value: SetStateAction<string>) => void;
  setSearch: (value: SetStateAction<string>) => void;
}

export default function WorkSearch({
  search, t, techStacks, selectedTech, setSearch, setSelectedTech,
}: Readonly<IWorkSearch>) {
  return (
    <div className="w-full max-w-7xl rounded-3xl border border-border bg-card p-5 shadow-sm md:p-8">
      <label htmlFor="project-search" className="sr-only">
        {t("searchPlaceholder")}
      </label>
      <input
        id="project-search"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={t("searchPlaceholder")}
        className="h-14 w-full rounded-2xl border border-input bg-background px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25"
      />

      <div className="mt-6 grid gap-4 md:grid-cols-[140px_1fr] md:items-start">
        <p className="pt-2 text-base font-medium text-muted-foreground">
          {t("techStack")}
        </p>
        <div className="flex flex-wrap gap-3">
          {techStacks.map((item) => {
            const tech = (techRegistry as any)?.[item];
            const isSelected = selectedTech === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setSelectedTech((prev) => prev === item ? "All" : item)}
                aria-pressed={isSelected}
                className="cursor-pointer rounded-full"
              >
                <BaseChip
                  label={item === "All" ? t("all") : item}
                  icon={tech?.icon}
                  variant={tech?.variant}
                  className={isSelected
                    ? "border-primary bg-primary text-primary-foreground shadow-sm ring-2 ring-primary/25"
                    : ""}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
