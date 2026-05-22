"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "BTS.id – Company Profile Website Enhancement (Landing Page)",
    description:
      "The enhancement project focused on improving the landing page’s UI/UX, responsiveness, and content structure to strengthen brand identity and deliver a smoother browsing experience.",
    size: "large",
  },
  {
    title: "e-Numbering",
    description:
      "a web-based application used to manage ITM documentation enumbering.",
    size: "small",
  },

  {
    title: "Biofarma - Vaksin Tetanus (Web)",
    description:
      "a web-based application for managing tetanus vaccine experiments that can be accessed by supervisors.",
    size: "medium",
  },
  {
    title: "IMAP",
    description:
      "a web-based application used as an employee portal within the ITM Group. This application includes content management (highlights, message boards, articles, etc.) accessible to all ITM employees.",
    size: "large",
  },
  {
    title: "Revamp Winning",
    description:
      " a web-based application for recruiting and managing ship crews for an offshore shipping company. It consists of two integrated applications: a company profile website to showcase the organization's services and values, and a CMS (Content Management System) used to manage the recruitment process and crew data efficiently",
    size: "large",
  },
  {
    title: "Roster",
    description:
      "a web-based application used to manage ITM employee rosters and leave.",
    size: "medium",
  },
];

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
                  before:bg-gradient-to-b
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
                          ? "h-[320px]"
                          : index % 2 === 0
                            ? "h-[220px]"
                            : "h-[260px]"
                      }
                    `}
                  >
                    <img
                      src="https://picsum.photos/200"
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
                        bg-gradient-to-t
                        from-black/30
                        to-transparent
                      "
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border px-3 py-1 text-xs">
                      Next.js
                    </span>

                    <span className="rounded-full border px-3 py-1 text-xs">
                      Tailwind
                    </span>
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
