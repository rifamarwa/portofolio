"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/constants/projects";
import { techRegistry } from "@/constants/techstack";
import BaseChip from "@/components/base/chip/chip";
import { useTranslations } from "next-intl";

export default function FeaturedProjects() {
  const t = useTranslations("home");

  return (
    <section className="w-full px-4 pb-28 pt-20 sm:px-6 sm:pb-36 sm:pt-24 md:pb-44 md:pt-28 lg:px-8 2xl:pb-56 3xl:pb-64">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 max-w-3xl sm:mb-12 md:mb-16">
          <p className="mb-3 text-base uppercase tracking-[0.3em] text-link sm:text-base md:text-base">
            Selected Works
          </p>

          <h2 className="text-balance text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl">
            {t("projectTitle")}
          </h2>

          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-muted-foreground xs:text-base sm:text-lg md:mt-5 md:text-xl md:leading-relaxed lg:text-2xl">
            {t("projectDescription")}
          </p>
        </div>

        <div className="columns-1 gap-4 space-y-4 sm:gap-5 sm:space-y-5 md:columns-2 xl:columns-3 2xl:gap-6 2xl:space-y-6">
          {projects.map((project, index) => {
            const techs = project.tech ?? [];

            return (
              <Link
                key={project.key}
                href={`/work/${project.key}`}
                className="group block break-inside-avoid"
              >
                <Card
                  className="
                    group relative overflow-hidden
                    rounded-3xl border-border/60
                    bg-card backdrop-blur-xl
                    transition-all duration-500 ease-out
                    hover:-translate-y-2 hover:border-primary/40
                    hover:shadow-[0_0_40px_rgba(193,131,144,0.15),0_20px_80px_rgba(193,131,144,0.12)]
                    dark:hover:shadow-[0_0_50px_rgba(193,131,144,0.18),0_30px_90px_rgba(193,131,144,0.14)]
                    before:absolute before:inset-0
                    before:bg-linear-to-b before:from-white/5 before:to-transparent
                    before:opacity-0 before:transition-opacity
                    hover:before:opacity-100
                  "
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,131,144,0.18),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <CardContent className="relative z-10 p-4 sm:p-5 md:p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-base text-muted-foreground sm:text-lg md:text-xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <ArrowUpRight className="size-5 opacity-50 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    </div>

                    <div className="mt-5">
                      <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl xl:text-3xl 2xl:text-4xl">
                        {t(`projects.${project.key}.title`)}
                      </h3>

                      <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-base md:text-lg md:leading-relaxed">
                        {t(`projects.${project.key}.description`)}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                      {techs.map((tech) => {
                        const item = techRegistry[tech];

                        return (
                          <BaseChip
                            key={tech}
                            label={tech}
                            icon={item?.icon}
                            variant={item?.variant}
                          />
                        );
                      })}
                    </div>

                    <div
                      className={`
                        relative mt-6 overflow-hidden rounded-2xl border border-border
                        h-64 sm:h-72 md:h-80
                        ${
                          index % 3 === 0
                            ? "lg:h-80 2xl:h-96"
                            : index % 2 === 0
                              ? "lg:h-56 2xl:h-64"
                              : "lg:h-64 2xl:h-72"
                        }
                      `}
                    >
                      <Image
                        src={project.images}
                        alt={project.key}
                        width={700}
                        height={700}
                        className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
