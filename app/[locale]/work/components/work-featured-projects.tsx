/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BaseChip from "@/components/base/chip/chip";
import { techRegistry } from "@/constants/techstack";
import { IProject } from "@/interfaces/project.interface";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface IWorkFeaturedProjects {
  t: any;
  featuredProjects: IProject[];
}

export default function WorkFeaturedProjects({
  t,
  featuredProjects,
}: Readonly<IWorkFeaturedProjects>) {
  return (
    <section className="relative bg-background px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-base uppercase tracking-[0.3em] text-link">
              {t("featured.label")}
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {t("featured.title")}
            </h2>
          </div>

          <p className="max-w-md text-base leading-6 text-muted-foreground">
            {t("featured.description")}
          </p>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project, index) => {
            const title = t(`projects.${project.key}.title`);
            const description = t(`projects.${project.key}.description`);

            return (
              <article
                key={project.key}
                className="
                  group grid gap-8
                  rounded-3xl
                  border border-border
                  bg-card
                  p-5
                  shadow-[0_16px_50px_rgba(48,45,50,0.05)]
                  transition
                  hover:border-primary/35
                  hover:bg-card
                  hover:shadow-[0_22px_60px_rgba(48,45,50,0.08)]
                  md:grid-cols-[0.65fr_1fr]
                  md:p-8

                  dark:bg-card
                  dark:shadow-none
                  dark:hover:bg-card/75
                "
              >
                <div className="flex flex-col justify-between gap-10">
                  <div>
                    <div className="mb-8 flex items-center gap-4">
                      <span
                        className="
                          flex h-10 w-10 items-center justify-center
                          rounded-full
                          bg-primary
                          text-base font-medium
                          text-primary-foreground
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="h-px flex-1 bg-border" />
                    </div>

                    <h3 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                      {title}
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                      {description}
                    </p>
                  </div>

                  <div>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((item) => {
                        const tech = techRegistry?.[item];

                        return (
                          <BaseChip
                            key={item}
                            label={item}
                            icon={tech.icon}
                            variant={tech.variant}
                          />
                        );
                      })}
                    </div>

                    {project?.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-2 text-base text-foreground/70 transition hover:text-link"
                      >
                        {t("viewCaseStudy")}

                        <span className="transition group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    )}
                  </div>
                </div>

                <div
                  className="
                    relative min-h-70 overflow-hidden rounded-2xl
                    border border-border
                    bg-secondary/40
                    md:min-h-105
                    dark:bg-black/30
                  "
                >
                  <Image
                    src={project.images}
                    alt={title}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100 dark:opacity-75"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-lg font-medium text-white">{title}</p>

                    <p className="mt-1 text-base text-white/55">
                      {project.tech.slice(0, 3).join(" / ")}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
