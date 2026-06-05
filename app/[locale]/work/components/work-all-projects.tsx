"use client";

import BaseChip from "@/components/base/chip/chip";
import { Card, CardContent } from "@/components/ui/card";
import { techRegistry } from "@/constants/techstack";
import { IProject } from "@/interfaces/project.interface";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface IWorkAllProjects {
  filteredProjects: IProject[];
}
export default function WorkAllProjects({
  filteredProjects,
}: Readonly<IWorkAllProjects>) {
  const t = useTranslations("work");
  return (
    <section className="px-4 pb-32">
      <div className="mx-auto max-w-7xl">
        {filteredProjects.length > 0 ? (
          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6">
            {filteredProjects.map((project, index) => {
              const title = t(`projects.${project.key}.title`);
              const description = t(`projects.${project.key}.description`);

              const isLarge = project.size === "large";
              const isMedium = project.size === "medium";

              const sizeClass = isLarge
                ? "md:col-span-2 xl:col-span-3 xl:row-span-2"
                : isMedium
                  ? "md:col-span-1 xl:col-span-3 xl:row-span-1"
                  : "md:col-span-1 xl:col-span-2 xl:row-span-1";

              return (
                <Link
                  key={project.key}
                  href="/"
                  className={`group block ${sizeClass}`}
                >
                  <Card
                    className="
                  relative
                  h-full
                  overflow-hidden
                  border-border/60
                  bg-card/70
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-2
                  hover:border-primary-400/40
                  hover:shadow-[0_0_40px_rgba(214,113,55,0.15),0_20px_80px_rgba(214,113,55,0.12)]
                  dark:hover:shadow-[0_0_50px_rgba(214,113,55,0.18),0_30px_90px_rgba(214,113,55,0.14)]
                  before:absolute
                  before:inset-0
                  before:bg-linear-to-b
                  before:from-white/5
                  before:to-transparent
                  before:opacity-0
                  before:transition-opacity
                  hover:before:opacity-100
                "
                  >
                    <div
                      className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_top,rgba(214,113,55,0.18),transparent_60%)]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                    />

                    <CardContent
                      className={`
                    relative z-10 flex h-full gap-5 p-5
                    ${isLarge ? "flex-col" : "flex-col justify-between"}
                  `}
                    >
                      {/* TOP CONTENT */}
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xl text-muted-foreground">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <ArrowUpRight className="size-5 opacity-50 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                        </div>

                        <div className="mt-5">
                          <div className="mb-3 flex items-center gap-2">
                            <span className="rounded-full border border-primary-400/20 bg-primary-400/10 px-3 py-1 text-xs capitalize text-primary-300">
                              {project.size}
                            </span>

                            <span className="text-xs text-muted-foreground">
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
                              : isMedium
                                ? "line-clamp-2 text-base"
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
                      relative overflow-hidden rounded-2xl border border-white/10 bg-black/20
                      ${
                        isLarge
                          ? "min-h-[260px] flex-1"
                          : isMedium
                            ? "mt-4 h-32"
                            : "mt-4 h-24"
                      }
                    `}
                      >
                        <Image
                          src={project.images}
                          alt={title}
                          width={900}
                          height={700}
                          className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
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
          <div className="rounded-3xl border border-border/60 bg-card/50 p-10 text-center text-muted-foreground">
            {t("empty")}
          </div>
        )}
      </div>
    </section>
  );
}
