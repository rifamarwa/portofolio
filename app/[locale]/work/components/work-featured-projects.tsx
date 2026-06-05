/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BaseChip from "@/components/base/chip/chip";
import { techRegistry } from "@/constants/techstack";
import { IProject } from "@/interfaces/project.interface";
import Image from "next/image";

interface IWorkFeaturedProjects {
  t: any;
  featuredProjects: IProject[];
}

export default function WorkFeaturedProjects({
  t,
  featuredProjects,
}: Readonly<IWorkFeaturedProjects>) {
  return (
    <section className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-base uppercase tracking-[0.3em] text-orange-300/70">
              {t("featured.label")}
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              {t("featured.title")}
            </h2>
          </div>

          <p className="max-w-md text-base leading-6 text-[#fdfaf6]/50">
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
                className="group grid gap-8 rounded-3xl border border-[#fdfaf6]/10 bg-[#fdfaf6]/3 p-5 transition hover:border-orange-300/40 hover:bg-[#fdfaf6]/6 md:grid-cols-[0.65fr_1fr] md:p-8"
              >
                <div className="flex flex-col justify-between gap-10">
                  <div>
                    <div className="mb-8 flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-300 text-base font-medium text-black">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="h-px flex-1 bg-[#fdfaf6]/10" />

                      <span className="text-base uppercase tracking-[0.2em] text-[#fdfaf6]/40">
                        {project.size}
                      </span>
                    </div>

                    <h3 className="max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">
                      {title}
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-7 text-[#fdfaf6]/55 md:text-base">
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

                    <span className="inline-flex items-center gap-2 text-base text-[#fdfaf6]/70 transition group-hover:text-orange-300">
                      {t("viewCaseStudy")}
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>

                <div className="relative min-h-70 overflow-hidden rounded-2xl border border-[#fdfaf6]/10 bg-black/30 md:min-h-105">
                  <Image
                    src={project.images}
                    alt={title}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-lg font-medium">{title}</p>

                    <p className="mt-1 text-base text-[#fdfaf6]/45">
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
