/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BaseChip from "@/components/base/chip/chip";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/constants/experiences";
import { techRegistry } from "@/constants/techstack";
import { ArrowUpRight } from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

function ExperienceCard({
  experience,
  index,
  activeIndex,
  cardRef,
  t,
}: Readonly<{
  experience: (typeof experiences)[0];
  index: number;
  activeIndex: number;
  cardRef: (el: HTMLDivElement | null) => void;
  t: any;
}>) {
  const isActive = activeIndex === index;
  const isPast = index < activeIndex;

  return (
    <motion.div
      ref={cardRef}
      className="sticky"
      style={{
        top: `${200 + index * 56}px`,
        zIndex: index + 1,
      }}
      animate={{
        scale: isActive ? 1 : isPast ? 0.94 : 0.98,

        opacity: isActive ? 1 : isPast ? 0.45 : 0.7,

        filter: isActive ? "blur(0px)" : isPast ? "blur(5px)" : "blur(1.5px)",

        y: isActive ? 0 : isPast ? -20 : 40,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Card
        className="
            group
            relative

            mb-10
            overflow-hidden
            rounded-[36px]

            border border-border/50

            bg-background/95
            backdrop-blur-xl

            transition-all duration-500 ease-out

            hover:border-primary-400/40

            hover:shadow-[0_10px_50px_rgba(44,37,31,0.10)]

            dark:hover:shadow-[0_0_50px_rgba(214,113,55,0.14),
                              0_20px_100px_rgba(214,113,55,0.08)]
          "
      >
        {/* GLOW */}
        <div
          className="
              pointer-events-none absolute inset-0

              opacity-0
              transition-opacity duration-500

              group-hover:opacity-100

              bg-[radial-gradient(circle_at_top_right,rgba(214,113,55,0.14),transparent_60%)]
            "
        />

        <CardContent className="relative z-10 p-8 md:p-10">
          <div className="grid gap-12 lg:grid-cols-[340px_1fr]">
            {/* LEFT */}
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
                    {t(`experiences.${experience.key}.location`)}
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

              {/* TECH */}
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

            {/* RIGHT */}
            <div>
              <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground">
                {t(`experiences.${experience.key}.description`)}
              </p>

              <div className="mt-8 space-y-5">
                {t
                  .raw(`experiences.${experience.key}.impact`)
                  .map((item: string, idx: number) => (
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
    </motion.div>
  );
}

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const t = useTranslations("home");

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.35;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();

        const distance = Math.abs(rect.top - triggerPoint);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative overflow-visible py-32">
      {/* GLOW */}
      <div
        className="
          pointer-events-none absolute right-0 top-1/2
          h-125 w-125
          -translate-y-1/2
          rounded-full
          bg-primary-500/10
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            {t("experiences.title")}
          </h2>

          <p className="mt-4 max-w-3xl text-xl leading-relaxed text-muted-foreground">
            {t("experiences.description")}
          </p>
        </div>

        {/* STACK */}
        <div className="relative pb-24">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              activeIndex={activeIndex}
              cardRef={(el) => {
                cardRefs.current[index] = el;
              }}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
