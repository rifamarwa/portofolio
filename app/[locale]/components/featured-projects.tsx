"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/constants/projects";
import { techRegistry } from "@/constants/techstack";
import BaseChip from "@/components/base/chip/chip";

export default function FeaturedProjects() {
  return (
    <section className="w-full pb-64">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10">
          <h2 className="text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-2 text-muted-foreground text-2xl">
            Selected works and experiments.
          </p>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-4 space-y-4">
          {projects.map((project, index) => (
            <Link
              key={index}
              href="/"
              className="group block break-inside-avoid"
            >
              <Card
                className="
                  group
                  relative
                  overflow-hidden
                  border-border/60
                  bg-card/70
                  backdrop-blur-xl

                  transition-all duration-500 ease-out

                  hover:-translate-y-2
                  hover:border-primary-400/40

                  hover:shadow-[0_0_40px_rgba(214,113,55,0.15),
                                0_20px_80px_rgba(214,113,55,0.12)]

                  dark:hover:shadow-[0_0_50px_rgba(214,113,55,0.18),
                                    0_30px_90px_rgba(214,113,55,0.14)]
                                    before:absolute
                  before:inset-0
                  before:bg-linear-to-b
                  before:from-white/5
                  before:to-transparent
                  before:opacity-0
                  hover:before:opacity-100
                  before:transition-opacity
                "
              >
                <div
                  className="
                    absolute inset-0 opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                    bg-[radial-gradient(circle_at_top,rgba(214,113,55,0.18),transparent_60%)]
                    pointer-events-none
                  "
                />
                <CardContent className="relative z-10 p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xl text-muted-foreground">
                      0{index + 1}
                    </span>

                    <ArrowUpRight className="size-5 opacity-50 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-3xl font-semibold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  {/* IMAGE PREVIEW */}
                  <div
                    className={`
                      relative mt-6 overflow-hidden rounded-2xl border border-white/10
                      ${
                        index % 3 === 0
                          ? "h-80"
                          : index % 2 === 0
                            ? "h-55"
                            : "h-65"
                      }
                    `}
                  >
                    <img
                      src={project.images}
                      alt={project.title}
                      className="
                      h-full w-full object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                    />

                    <div
                      className="
                        absolute inset-0
                        bg-linear-to-t
                        from-black/30
                        to-transparent
                      "
                    />
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.tech.map((item) => {
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
          ))}
        </div>
      </div>
    </section>
  );
}
