"use client";

import BaseChip from "@/components/base/chip/chip";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/constants/experiences";
import { techRegistry } from "@/constants/techstack";
import { ArrowUpRight } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* AMBIENT GLOW */}
      <div
        className="
          absolute right-0 top-1/2
          h-[500px] w-[500px]

          -translate-y-1/2

          rounded-full
          bg-primary-500/10

          blur-[140px]
          pointer-events-none
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Selected Experience
          </h2>

          <p className="mt-4 max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Over 3 years of experience building scalable frontend systems across
            enterprise platforms, healthcare applications, internal dashboards,
            and CMS ecosystems.
          </p>
        </div>

        {/* EXPERIENCE LIST */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="
             group
             relative
         
             rounded-[36px]
         
             p-0
         
             transition-all duration-500 ease-out
         
             hover:-translate-y-1
             hover:border-primary-400/40
         
             hover:shadow-[0_10px_50px_rgba(44,37,31,0.10)]
         
             dark:hover:shadow-[0_0_50px_rgba(214,113,55,0.14),
                               0_20px_100px_rgba(214,113,55,0.08)]
           "
            >
              {/* GLOW */}
              <div
                className="
                  absolute inset-0

                  opacity-0
                  transition-opacity duration-500

                  group-hover:opacity-100

                  bg-[radial-gradient(circle_at_top_right,rgba(214,113,55,0.14),transparent_60%)]

                  pointer-events-none
                "
              />

              <CardContent className="relative z-10 p-8 md:p-10">
                <div className="grid gap-12 lg:grid-cols-[340px_1fr]">
                  {/* LEFT SIDE */}
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-primary-400">
                          {experience.period}
                        </p>

                        <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                          {experience.company}
                        </h3>

                        <p className="mt-3 text-xl text-muted-foreground">
                          {experience.role}
                        </p>

                        <p className="mt-2 text-base text-muted-foreground/70">
                          {experience.location}
                        </p>
                      </div>

                      <ArrowUpRight
                        className="
                        size-6 shrink-0

                        opacity-40
                        transition-all duration-300

                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:opacity-100
                      "
                      />
                    </div>

                    {/* TECH STACK */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {experience.tech.map((item) => {
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
                  </div>

                  {/* RIGHT SIDE */}
                  <div>
                    <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground">
                      {experience.description}
                    </p>

                    <div className="mt-8 space-y-5">
                      {experience.impact.map((item, idx) => (
                        <div
                          key={idx}
                          className="
                          flex items-start gap-4

                          border-l border-primary-400/20
                          pl-5
                        "
                        >
                          <div
                            className="
                            mt-2 size-2 shrink-0 rounded-full
                            bg-primary-400
                          "
                          />

                          <p className="text-lg leading-relaxed text-foreground/90">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
