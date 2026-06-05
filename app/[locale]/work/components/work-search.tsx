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
  search,
  t,
  techStacks,
  selectedTech,
  setSearch,
  setSelectedTech,
}: Readonly<IWorkSearch>) {
  return (
    <div className="rounded-2xl border border-[#fdfaf6]/15 bg-[#fdfaf6]/5 p-4 shadow-2xl backdrop-blur-md md:p-6 max-w-7xl">
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={t("searchPlaceholder")}
        className="h-12 w-full rounded-xl border border-[#fdfaf6]/10 bg-black/30 px-4 text-base text-[#fdfaf6] outline-none transition placeholder:text-[#fdfaf6]/35 focus:border-orange-300/50"
      />

      <div className="mt-5 grid gap-5 md:grid-cols-[120px_1fr] md:items-start">
        <p className="text-base uppercase tracking-[0.2em] text-[#fdfaf6]/45">
          {t("techStack")}
        </p>

        <div className="flex flex-wrap gap-2">
          {techStacks.map((item) => {
            const tech = (techRegistry as any)?.[item];
            const isSelected = selectedTech === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setSelectedTech((prev) => (prev === item ? "All" : item))
                }
                aria-pressed={isSelected}
                className="cursor-pointer rounded-full"
              >
                <BaseChip
                  label={item === "All" ? t("all") : item}
                  icon={tech?.icon}
                  variant={tech?.variant}
                  className={
                    isSelected
                      ? `
                      -translate-y-0.5
                      border-orange-300/70
                      bg-orange-400/20
                      text-orange-100
                      shadow-[0_0_24px_rgba(251,146,60,0.25)]
                      ring-1
                      ring-orange-300/40
                    `
                      : ""
                  }
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
