"use client";

import { techGroups } from "@/constants/techstack";
import Image from "next/image";

export default function Techstack() {
  return (
    <section className="relative overflow-hidden pb-32">
      {/* AMBIENT GLOW */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-125 w-125
          -translate-x-1/2 -translate-y-1/2

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
            Tech Stack
          </h2>

          <p className="mt-2 text-muted-foreground text-2xl max-w-2xl">
            Technologies, tools, and ecosystems I work with to craft modern,
            scalable, and interactive frontend experiences.
          </p>
        </div>

        {/* GROUPS */}
        <div className="space-y-14">
          {techGroups.map((group, idx) => (
            <div key={group.title}>
              {/* CATEGORY */}
              <div className="mb-6 flex items-center gap-5">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-border" />

                <h3 className="shrink-0 text-3xl font-medium text-primary-400">
                  {group.title}
                </h3>

                <div className="h-px flex-1 bg-linear-to-l from-transparent via-border to-border" />
              </div>

              {/* MARQUEE WRAPPER */}
              <div
                className="
                  relative overflow-hidden

                  [mask-image:linear-gradient(
                    to_right,
                    transparent,
                    white_10%,
                    white_90%,
                    transparent
                  )]
                "
              >
                {/* TRACK */}
                <div
                  className={`
                    flex w-max items-center gap-6 py-3

                    ${
                      idx % 2 === 0
                        ? "animate-[marquee_40s_linear_infinite] hover:paused"
                        : "animate-[marquee-reverse_40s_linear_infinite] hover:paused"
                    }
                `}
                >
                  {[
                    ...group.items,
                    ...group.items,
                    ...group.items,
                    ...group.items,
                  ].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="
                          group
                          relative

                          flex shrink-0 items-center gap-5

                          overflow-hidden
                          rounded-[30px]

                          border border-border/40
                          bg-card/70

                          px-9 py-7

                          backdrop-blur-2xl

                          transition-all duration-500 ease-out

                          hover:-translate-y-1
                          hover:scale-[1.02]

                          hover:border-primary-400/40
                          hover:bg-background/60

                          /* LIGHT MODE DEPTH */
                          shadow-[0_8px_30px_rgba(44,37,31,0.06)]

                          /* DARK MODE DEPTH */
                          dark:shadow-none

                          hover:shadow-[0_20px_60px_rgba(214,113,55,0.12)]
                        "
                      >
                        <div
                          className="
                            absolute inset-0

                            opacity-0
                            transition-opacity duration-500

                            group-hover:opacity-100

                            bg-[radial-gradient(circle_at_top,rgba(214,113,55,0.10),transparent_70%)]

                            pointer-events-none
                          "
                        />
                        {/* GLOSS OVERLAY */}
                        <div
                          className="
                            absolute inset-0

                            opacity-0
                            transition-opacity duration-500

                            group-hover:opacity-100

                            bg-[radial-gradient(circle_at_top,rgba(214,113,55,0.16),transparent_70%)]

                            pointer-events-none
                          "
                        />

                        {/* ICON */}
                        <Image
                          src={tech.icon}
                          alt="icon"
                          width={40}
                          height={40}
                          className="relative z-10 size-10 transition-all duration-300 group-hover:scale-110"
                        />

                        {/* TEXT */}
                        <span
                          className="
                            relative z-10

                            whitespace-nowrap

                            text-2xl
                            font-medium
                            tracking-tight
                          "
                        >
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
