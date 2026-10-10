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
  showArrow?: boolean;
}

// Existing project data keeps its tone keys; the visuals share the site palette.
const TONE_STYLES: Record<ToneType, { circle: string; icon: string; ink: string }> = {
  pink: {
    circle: "border-primary/30 bg-panel-rose hover:border-primary/60",
    icon: "bg-primary text-primary-foreground",
    ink: "text-link",
  },
  sky: {
    circle: "border-border bg-muted hover:border-primary/50",
    icon: "bg-charcoal text-inverse-foreground",
    ink: "text-foreground",
  },
  lime: {
    circle: "border-accent-400/40 bg-panel-sage hover:border-accent-400/70",
    icon: "bg-sage text-charcoal",
    ink: "text-sage-ink",
  },
};

export function WorkProcessBubble({
  number, title, description, icon: Icon,
  tone = "pink", showArrow = true,
}: Readonly<WorkProcessBubbleProps>) {
  const styles = TONE_STYLES[tone];

  return (
    <div className="group relative flex flex-col items-center text-center">
      {showArrow && (
        <div
          aria-hidden="true"
          className="absolute left-[calc(50%+8rem)] top-32 hidden w-[calc(100%-16rem)] text-muted-foreground/50 lg:block"
        >
          <div className="relative h-px w-full bg-current">
            <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-current" />
          </div>
        </div>
      )}

      <div className={cn(
        "relative flex aspect-square w-full max-w-65 flex-col items-center justify-center rounded-full border p-8 shadow-sm transition-transform duration-300 group-hover:-translate-y-1",
        styles.circle,
      )}>
        <span className={cn("mb-5 text-base font-semibold tracking-[0.2em]", styles.ink)}>
          {number}
        </span>
        <div className={cn(
          "mb-5 flex h-16 w-16 items-center justify-center rounded-full",
          styles.icon,
        )}>
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-3xl font-bold text-foreground">{title}</h3>
      </div>

      <div className="mt-6 w-full max-w-sm rounded-3xl border border-border bg-card px-6 py-5 shadow-sm">
        <p className="text-lg leading-8 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
