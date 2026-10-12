/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BaseChip from "@/components/base/chip/chip";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/constants/experiences";
import { techRegistry } from "@/constants/techstack";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const STICKY_TOP = 112;
const STACK_OFFSET = 28;
const BOTTOM_SPACE = 32;
const FOCUS_RATIO = 0.5;

function getStickyTop(index: number) {
  return STICKY_TOP + index * STACK_OFFSET;
}

function getExperienceAnimation(
  isStackEnabled: boolean,
  isActive: boolean,
  isPast: boolean,
) {
  if (!isStackEnabled || isActive) {
    return {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    };
  }

  if (isPast) {
    return {
      scale: 0.94,
      opacity: 0.6,
      filter: "blur(4px)",
      y: -20,
    };
  }

  return {
    scale: 0.98,
    opacity: 0.8,
    filter: "blur(1px)",
    y: 24,
  };
}

function ExperienceCard({
  experience,
  index,
  activeIndex,
  isStackEnabled,
  cardRef,
  t,
}: Readonly<{
  experience: (typeof experiences)[0];
  index: number;
  activeIndex: number;
  isStackEnabled: boolean;
  cardRef: (el: HTMLDivElement | null) => void;
  t: any;
}>) {
  const isActive = activeIndex === index;
  const isPast = index < activeIndex;

  const animation = getExperienceAnimation(isStackEnabled, isActive, isPast);

  return (
    <div
      ref={cardRef}
      className="relative mb-8 last:mb-0 lg:mb-10"
      style={{
        position: isStackEnabled ? "sticky" : "relative",
        top: isStackEnabled ? getStickyTop(index) : undefined,
        zIndex: index + 1,
      }}
    >
      <motion.div
        initial={false}
        animate={animation}
        transition={{
          duration: isStackEnabled ? 0.4 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="origin-top"
      >
        <Card
          className="
            group relative overflow-hidden
            rounded-3xl sm:rounded-4xl lg:rounded-[36px]
            border border-border/50
            bg-background/95
            transition-[border-color,box-shadow] duration-500 ease-out
            hover:border-primary-400/40
            hover:shadow-[0_10px_50px_rgba(48,45,50,0.10)]
            dark:hover:shadow-[0_0_50px_rgba(193,131,144,0.14),0_20px_100px_rgba(193,131,144,0.08)]
          "
        >
          {/* GLOW */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-[radial-gradient(circle_at_top_right,rgba(193,131,144,0.14),transparent_60%)]
              opacity-0 transition-opacity duration-500
              group-hover:opacity-100
            "
          />

          <CardContent className="relative z-10 p-5 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[340px_minmax(0,1fr)]">
              {/* LEFT */}
              <div className="min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-base uppercase tracking-[0.15em] text-link sm:tracking-[0.25em]">
                      {experience.period}
                    </p>

                    <h3 className="mt-4 wrap-break-word text-2xl font-semibold tracking-tight sm:text-3xl">
                      {experience.company}
                    </h3>

                    <p className="mt-3 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                      {experience.role}
                    </p>

                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {t(`experiences.${experience.key}.location`)}
                    </p>
                  </div>
                </div>

                {/* TECH */}
                <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
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
              <div className="min-w-0">
                <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  {t(`experiences.${experience.key}.description`)}
                </p>

                <div className="mt-6 space-y-5 sm:mt-8">
                  {(
                    t.raw(`experiences.${experience.key}.impact`) as string[]
                  ).map((item, idx) => (
                    <div
                      key={`${experience.key}-impact-${idx}`}
                      className="
                        flex items-start gap-3
                        border-l border-primary-400/20
                        pl-3 sm:gap-4 sm:pl-5
                      "
                    >
                      <div
                        aria-hidden="true"
                        className="mt-2.5 size-2 shrink-0 rounded-full bg-primary-400"
                      />

                      <p className="min-w-0 text-base leading-relaxed text-foreground/90 sm:text-lg">
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
    </div>
  );
}

export default function ExperienceSection() {
  const t = useTranslations("home");

  const [activeIndex, setActiveIndex] = useState(0);
  const [isStackEnabled, setIsStackEnabled] = useState(false);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    let frameId: number | null = null;
    let needsMeasurement = true;
    let stackEnabled = false;

    const update = () => {
      frameId = null;

      if (needsMeasurement) {
        needsMeasurement = false;

        const cardsFitViewport = cardRefs.current.every((card, index) => {
          if (!card) return false;

          return (
            card.offsetHeight + getStickyTop(index) + BOTTOM_SPACE <=
            window.innerHeight
          );
        });

        stackEnabled = desktopQuery.matches && cardsFitViewport;
        setIsStackEnabled(stackEnabled);
      }

      if (!stackEnabled) {
        setActiveIndex((current) => (current === 0 ? current : 0));
        return;
      }

      const focusLine = window.innerHeight * FOCUS_RATIO;

      let nextActiveIndex = 0;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const { top } = card.getBoundingClientRect();

        if (top <= focusLine) {
          nextActiveIndex = index;
        }
      });

      setActiveIndex((current) =>
        current === nextActiveIndex ? current : nextActiveIndex,
      );
    };

    const scheduleUpdate = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(update);
    };

    const scheduleMeasurement = () => {
      needsMeasurement = true;
      scheduleUpdate();
    };

    const resizeObserver = new ResizeObserver(scheduleMeasurement);

    cardRefs.current.forEach((card) => {
      if (card) resizeObserver.observe(card);
    });

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleMeasurement);
    desktopQuery.addEventListener("change", scheduleMeasurement);

    scheduleMeasurement();

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleMeasurement);
      desktopQuery.removeEventListener("change", scheduleMeasurement);
    };
  }, []);

  return (
    <section className="relative overflow-visible py-16 sm:py-24 lg:py-32">
      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute right-0 top-1/2
            h-72 w-72 -translate-y-1/2
            rounded-full bg-primary-500/10
            blur-[100px]
            lg:h-125 lg:w-125 lg:blur-[140px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
        {/* HEADER */}
        <div className="mb-10 sm:mb-14 lg:mb-20">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t("experiences.title")}
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t("experiences.description")}
          </p>
        </div>

        {/* EXPERIENCES */}
        <div className={`relative ${isStackEnabled ? "pb-24" : "pb-0"}`}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.key}
              experience={experience}
              index={index}
              activeIndex={activeIndex}
              isStackEnabled={isStackEnabled}
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
