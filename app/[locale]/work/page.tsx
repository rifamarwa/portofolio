/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { allProjects } from "@/constants/projects";
import WorkAllProjects from "./components/work-all-projects";
import WorkSearch from "./components/work-search";
import WorkBanner from "./components/work-banner";
import WorkFeaturedProjects from "./components/work-featured-projects";
import WorkCompanies from "@/app/[locale]/work/components/work-companies";

export default function Work() {
  const t = useTranslations("work");

  const nextSectionRef = useRef<HTMLElement | null>(null);

  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  const techStacks = useMemo(() => {
    const techs = allProjects.flatMap((project) => project.tech);
    return ["All", ...Array.from(new Set(techs))];
  }, []);

  const featuredProjects = useMemo(() => {
    return allProjects.filter((project) => project.size === "large");
  }, []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const title = t(`projects.${project.key}.title`);
      const description = t(`projects.${project.key}.description`);

      const searchValue = search.toLowerCase();

      const matchSearch =
        title.toLowerCase().includes(searchValue) ||
        description.toLowerCase().includes(searchValue) ||
        project.tech.some((tech) => tech.toLowerCase().includes(searchValue));

      const matchTech =
        selectedTech === "All" || project.tech.includes(selectedTech as any);

      return matchSearch && matchTech;
    });
  }, [search, selectedTech, t]);

  const handleScrollNext = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="min-h-screen">
      <WorkBanner
        {...{ t, techStacks, featuredProjects }}
        onScrollNext={handleScrollNext}
      />

      <section ref={nextSectionRef}>
        <WorkCompanies label={t("companies.title")} />
      </section>

      <section className="flex flex-col gap-12 w-full items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div className="text-center">
            <p className="mb-3 text-base uppercase tracking-[0.3em] text-link">
              {t("archive.label")}
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              {t("archive.title")}
            </h2>

            <p className="text-base text-muted-foreground mt-4">
              {filteredProjects.length} {t("archive.results")}
            </p>
          </div>
        </div>
        <WorkSearch
          {...{
            search,
            t,
            techStacks,
            setSearch,
            setSelectedTech,
            selectedTech,
          }}
        />
        <WorkAllProjects {...{ filteredProjects }} />
      </section>
    </section>
  );
}
