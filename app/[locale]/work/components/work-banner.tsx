/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ButtonScroll from "@/components/base/button/button-scroll";
import { allProjects } from "@/constants/projects";
import { IProject } from "@/interfaces/project.interface";
import { useEffect, useRef, useState } from "react";

interface IWorkBanner {
  t: any;
  techStacks: string[];
  featuredProjects: IProject[];
  onScrollNext: () => void;
}

function CountUp({
  value,
  duration = 1200,
  start = false,
}: Readonly<{
  value: number;
  duration?: number;
  start?: boolean;
}>) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, start]);

  return <>{count}</>;
}

export default function WorkBanner({
  t,
  techStacks,
  featuredProjects,
  onScrollNext,
}: Readonly<IWorkBanner>) {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const stats = [
    {
      value: allProjects.length,
      label: t("stats.projects"),
    },
    {
      value: techStacks.length - 1,
      label: t("stats.technologies"),
    },
    {
      value: featuredProjects.length,
      label: t("stats.featured"),
    },
  ];

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background px-4 py-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div
            className="
              mb-6 inline-flex items-center gap-3 rounded-full
              border border-primary/20
              bg-primary/5
              px-4 py-2
              text-xs uppercase tracking-[0.32em]
              text-primary
              shadow-[0_8px_30px_rgba(80,55,40,0.05)]
              backdrop-blur-md
              dark:shadow-[0_0_40px_rgba(253,186,116,0.08)]
            "
          >
            Selected Works
          </div>

          <h1 className="max-w-5xl text-balance text-6xl font-semibold tracking-[-0.08em] text-foreground md:text-8xl lg:text-[9.5rem]">
            {t("title")}
          </h1>

          <p className="mt-7 max-w-3xl text-pretty text-base leading-8 text-muted-foreground md:text-xl">
            {t("description")}
          </p>
        </div>

        <div
          ref={statsRef}
          className="
            mx-auto mt-16 grid max-w-3xl grid-cols-3 overflow-hidden
            rounded-3xl
            border border-border
            bg-card/70
            shadow-[0_20px_60px_rgba(71,60,53,0.08)]
            backdrop-blur-xl
            dark:bg-card/40
            dark:shadow-2xl dark:shadow-black/30
          "
        >
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`relative flex flex-col items-center justify-center px-4 py-6 text-center ${
                index === stats.length - 1 ? "" : "border-r border-border"
              }`}
            >
              <span className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                <CountUp
                  value={item.value}
                  start={isStatsVisible}
                  duration={1200 + index * 180}
                />
              </span>

              <span className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground md:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <ButtonScroll onClick={onScrollNext} />
    </section>
  );
}
