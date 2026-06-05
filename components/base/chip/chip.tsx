"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type BaseChipVariant =
  | "yellow"
  | "blue"
  | "orange"
  | "cyan"
  | "red"
  | "green"
  | "purple"
  | "neutral";

interface BaseChipProps {
  label: string;
  icon?: string | null;
  variant?: BaseChipVariant;
  className?: string;
}

const variantStyles: Record<BaseChipVariant, string> = {
  yellow: `
    border-yellow-500/20
    bg-yellow-500/10
    text-yellow-700

    hover:bg-yellow-500/15
    hover:border-yellow-500/40

    dark:text-yellow-300
  `,

  blue: `
    border-blue-500/20
    bg-blue-500/10
    text-blue-700

    hover:bg-blue-500/15
    hover:border-blue-500/40

    dark:text-blue-300
  `,

  orange: `
    border-orange-500/20
    bg-orange-500/10
    text-orange-700

    hover:bg-orange-500/15
    hover:border-orange-500/40

    dark:text-orange-300
  `,

  cyan: `
    border-cyan-500/20
    bg-cyan-500/10
    text-cyan-700

    hover:bg-cyan-500/15
    hover:border-cyan-500/40

    dark:text-cyan-300
  `,

  red: `
    border-red-500/20
    bg-red-500/10
    text-red-700

    hover:bg-red-500/15
    hover:border-red-500/40

    dark:text-red-300
  `,

  green: `
    border-emerald-500/20
    bg-emerald-500/10
    text-emerald-700

    hover:bg-emerald-500/15
    hover:border-emerald-500/40

    dark:text-emerald-300
  `,

  purple: `
    border-purple-500/20
    bg-purple-500/10
    text-purple-700

    hover:bg-purple-500/15
    hover:border-purple-500/40

    dark:text-purple-300
  `,

  neutral: `
    border-border/60
    bg-background/40
    text-muted-foreground

    hover:border-primary-400/30
    hover:bg-primary-500/[0.04]
  `,
};

export default function BaseChip({
  label,
  icon,
  variant = "neutral",
  className,
}: Readonly<BaseChipProps>) {
  return (
    <div
      className={cn(
        `
          group
          relative

          inline-flex min-w-0 items-center
          gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3

          overflow-hidden
          rounded-full

          border

          px-2.5 py-1.5
          xs:px-3 xs:py-2
          sm:px-3.5 sm:py-2
          md:px-4 md:py-2.5

          backdrop-blur-md

          transition-all duration-300 ease-out

          hover:-translate-y-0.5

          hover:shadow-[0_8px_30px_rgba(44,37,31,0.08)]

          dark:hover:shadow-[0_0_30px_rgba(214,113,55,0.12)]
        `,
        variantStyles[variant],
        className,
      )}
    >
      {/* GLOW */}
      <div
        className="
          pointer-events-none
          absolute inset-0

          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_70%)]

          opacity-0
          transition-opacity duration-300

          group-hover:opacity-100
        "
      />

      {/* ICON */}
      {icon && (
        <Image
          src={icon}
          alt={label}
          width={20}
          height={20}
          className="
            relative z-10
            size-4
            xs:size-[18px]
            md:size-5

            shrink-0

            transition-transform duration-300

            group-hover:scale-110
          "
        />
      )}

      {/* LABEL */}
      <span
        className="
          relative z-10

          max-w-30
          truncate
          whitespace-nowrap

          text-xs
          font-medium
          tracking-tight

          xs:max-w-[140px]
          xs:text-sm

          sm:max-w-none
          md:text-base
        "
        title={label}
      >
        {label}
      </span>
    </div>
  );
}
