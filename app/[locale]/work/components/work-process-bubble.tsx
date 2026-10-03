"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ToneType = "pink" | "sky" | "lime";

interface WorkProcessBubbleProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: ToneType;
  showArrow?: boolean; // Menggantikan hardcode '03'
}

const TONE_STYLES: Record<ToneType, Record<string, string>> = {
  pink: {
    circle: "border-rose-200/25 bg-[#2a2025] hover:border-rose-200/45",
    icon: "bg-[#f6cdd6] text-[#4a1823]",
    glow: "bg-[#f6cdd6]/18",
    smallBubble: "bg-[#f4c7a1]/16",
    title: "text-rose-50",
    number: "text-[#f6cdd6]/80",
    arrow: "text-[#f6cdd6]/45",
    desc: "border-rose-100/15 bg-[#2a2025]/80 text-rose-50/80",
  },

  sky: {
    circle: "border-sky-100/25 bg-[#1c2a33] hover:border-sky-100/45",
    icon: "bg-[#cbe8f6] text-[#143041]",
    glow: "bg-[#cbe8f6]/18",
    smallBubble: "bg-[#c9f0ec]/16",
    title: "text-sky-50",
    number: "text-[#cbe8f6]/80",
    arrow: "text-[#cbe8f6]/45",
    desc: "border-sky-100/15 bg-[#1c2a33]/80 text-sky-50/80",
  },

  lime: {
    circle: "border-lime-100/25 bg-[#222b1d] hover:border-lime-100/45",
    icon: "bg-[#dcecc7] text-[#263518]",
    glow: "bg-[#dcecc7]/18",
    smallBubble: "bg-[#f1e4aa]/16",
    title: "text-lime-50",
    number: "text-[#dcecc7]/80",
    arrow: "text-[#dcecc7]/45",
    desc: "border-lime-100/15 bg-[#222b1d]/80 text-lime-50/80",
  },
};

export function WorkProcessBubble({
  number,
  title,
  description,
  icon: Icon,
  tone = "pink",
  showArrow = true,
}: Readonly<WorkProcessBubbleProps>) {
  const styles = TONE_STYLES[tone];

  return (
    <div className="group relative flex flex-col items-center text-center">
      {showArrow && (
        <div className="absolute left-[calc(50%+8rem)] top-[7.8rem] z-10 hidden w-[calc(100%-16rem)] md:block">
          <div
            className={cn(
              "relative h-px w-full bg-current",
              "opacity-60",
              styles.arrow,
            )}
          >
            <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current opacity-80" />

            <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-current" />
          </div>
        </div>
      )}

      <div
        className={cn(
          "relative flex aspect-square w-full max-w-65 flex-col items-center justify-center overflow-hidden rounded-full border p-8",
          "shadow-2xl transition duration-500 hover:-translate-y-2",
          styles.circle,
        )}
      >
        <div
          className={cn(
            "absolute bottom-8 left-8 h-14 w-14 rounded-full blur-xl transition duration-500 group-hover:translate-x-3 group-hover:-translate-y-3",
            styles.smallBubble,
          )}
        />

        <span
          className={cn(
            "relative mb-5 text-sm font-semibold tracking-[0.25em]",
            styles.number,
          )}
        >
          {number}
        </span>

        <div
          className={cn(
            "relative mb-6 flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition duration-500 group-hover:scale-110",
            styles.icon,
          )}
        >
          <Icon className="h-7 w-7" />
        </div>

        <h3 className={cn("relative text-3xl font-bold", styles.title)}>
          {title}
        </h3>
      </div>

      <div
        className={cn(
          "mt-5 max-w-sm rounded-3xl border px-5 py-4 opacity-100 transition duration-300",
          "md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100",
          styles.desc,
        )}
      >
        <p className="text-lg leading-7">{description}</p>
      </div>
    </div>
  );
}
