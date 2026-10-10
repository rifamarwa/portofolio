"use client";

import { useEffect, useRef } from "react";
import BaseChip from "@/components/base/chip/chip";
import { Card, CardContent } from "@/components/ui/card";
import { techRegistry } from "@/constants/techstack";
import { IProject } from "@/interfaces/project.interface";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface IWorkAllProjects {
  filteredProjects: IProject[];
}

const GRID_ROW_HEIGHT = 8;
const CARD_GAP = 24;

export default function WorkAllProjects({
  filteredProjects,
}: Readonly<IWorkAllProjects>) {
  const t = useTranslations("work");
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) return;

    const cards = Array.from(
      grid.querySelectorAll<HTMLElement>("[data-project-card]"),
    );

    const updateRowSpan = (card: HTMLElement) => {
      const gridItem = card.parentElement;

      if (!gridItem) return;

      const height = card.getBoundingClientRect().height;
      const rowSpan = Math.ceil((height + CARD_GAP) / GRID_ROW_HEIGHT);

      gridItem.style.gridRowEnd = `span ${rowSpan}`;
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        updateRowSpan(entry.target as HTMLElement);
      });
    });

    cards.forEach((card) => {
      updateRowSpan(card);
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section className="px-4 pb-32">
      <div className="mx-auto max-w-7xl">
        {filteredProjects.length > 0 ? (
          <div
            ref={gridRef}
            className="
              grid grid-flow-row-dense
              auto-rows-[8px] grid-cols-1
              items-start gap-x-6
              md:grid-cols-2
              xl:grid-cols-6
            "
          >
            {filteredProjects.map((project, index) => {
              const title = t(`projects.${project.key}.title`);
              const description = t(`projects.${project.key}.description`);

              const isLarge = project.size === "large";
              const isMedium = project.size === "medium";

              const sizeClass = isLarge
                ? "md:col-span-2 xl:col-span-3"
                : isMedium
                  ? "md:col-span-1 xl:col-span-3"
                  : "md:col-span-1 xl:col-span-2";

              const heightClass = isLarge
                ? "md:min-h-[640px]"
                : isMedium
                  ? "md:min-h-[480px]"
                  : "";

              const initialHeight = isLarge ? 640 : isMedium ? 480 : 400;

              const initialRowSpan = Math.ceil(
                (initialHeight + CARD_GAP) / GRID_ROW_HEIGHT,
              );

              return (
                <Link
                  key={project.key}
                  href={`/work/${project.key}`}
                  style={{
                    gridRowEnd: `span ${initialRowSpan}`,
                  }}
                  className={`group block self-start ${sizeClass}`}
                >
                  <Card
                    data-project-card
                    className={`
                      relative flex flex-col overflow-hidden
                      border-border/60 bg-card backdrop-blur-xl
                      transition-[transform,border-color,box-shadow]
                      duration-500 ease-out
                      hover:-translate-y-2
                      hover:border-primary-400/40
                      hover:shadow-[0_0_40px_rgba(193,131,144,0.15),0_20px_80px_rgba(193,131,144,0.12)]
                      dark:hover:shadow-[0_0_50px_rgba(193,131,144,0.18),0_30px_90px_rgba(193,131,144,0.14)]
                      before:pointer-events-none
                      before:absolute before:inset-0
                      before:bg-linear-to-b
                      before:from-white/5 before:to-transparent
                      before:opacity-0 before:transition-opacity
                      hover:before:opacity-100
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                      ${heightClass}
                    `}
                  >
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none absolute inset-0
                        bg-[radial-gradient(circle_at_top,rgba(193,131,144,0.18),transparent_60%)]
                        opacity-0 transition-opacity duration-500
                        group-hover:opacity-100
                      "
                    />

                    <CardContent
                      className={`
                        relative z-10 flex flex-1 flex-col gap-5 p-5
                        ${isLarge ? "" : "justify-between"}
                      `}
                    >
                      {/* TOP CONTENT */}
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xl text-muted-foreground">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <ArrowUpRight
                            aria-hidden="true"
                            className="
                              size-5 opacity-50 transition
                              group-hover:translate-x-1
                              group-hover:-translate-y-1
                              group-hover:opacity-100
                              motion-reduce:transform-none
                            "
                          />
                        </div>

                        <div className="mt-5">
                          <div className="mb-3 flex items-center gap-2">
                            <span className="text-base text-muted-foreground">
                              {project.tech[0]}
                            </span>
                          </div>

                          <h3
                            className={`
                              font-semibold tracking-tight
                              ${
                                isLarge
                                  ? "text-3xl md:text-4xl"
                                  : isMedium
                                    ? "text-2xl"
                                    : "text-xl"
                              }
                            `}
                          >
                            {title}
                          </h3>

                          <p
                            className={`
                              mt-3 leading-relaxed text-muted-foreground
                              ${
                                isLarge
                                  ? "line-clamp-3 text-lg md:text-xl"
                                  : "line-clamp-2 text-base"
                              }
                            `}
                          >
                            {description}
                          </p>
                        </div>
                      </div>

                      {/* IMAGE */}
                      <div
                        className={`
                          relative overflow-hidden rounded-2xl
                          border border-border bg-muted
                          ${
                            isLarge
                              ? "min-h-[260px] flex-1"
                              : isMedium
                                ? "mt-4 h-32 shrink-0"
                                : "mt-4 h-24 shrink-0"
                          }
                        `}
                      >
                        <Image
                          src={project.images}
                          alt={title}
                          width={900}
                          height={700}
                          className="
                            h-full w-full object-cover
                            transition-transform duration-700
                            group-hover:scale-105
                            motion-reduce:transform-none
                          "
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />

                        {isLarge && (
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-base text-white/70">
                              {project.tech.slice(0, 3).join(" / ")}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* TECH CHIPS */}
                      <div
                        className={`
                          flex flex-wrap gap-2
                          ${isLarge ? "mt-1" : "mt-4"}
                        `}
                      >
                        {project.tech.slice(0, isLarge ? 5 : 3).map((item) => {
                          const tech = techRegistry?.[item];

                          if (!tech) return null;

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
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-border/60 bg-card p-10 text-center text-muted-foreground">
            {t("empty")}
          </div>
        )}
      </div>
    </section>
  );
}
