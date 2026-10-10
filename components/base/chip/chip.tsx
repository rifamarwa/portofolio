"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type BaseChipVariant =
  | "yellow" | "blue" | "orange" | "cyan"
  | "red" | "green" | "purple" | "neutral";

interface BaseChipProps {
  label: string;
  icon?: string | null;
  variant?: BaseChipVariant;
  className?: string;
}

// Keep the existing technology registry API while using the shared palette.
const roseStyle = "border-primary/25 bg-panel-rose text-link hover:border-primary/50";
const sageStyle = "border-accent-400/35 bg-panel-sage text-sage-ink hover:border-accent-400/60";
const neutralStyle = "border-border bg-muted text-foreground hover:border-primary/40";

const variantStyles: Record<BaseChipVariant, string> = {
  yellow: sageStyle,
  blue: neutralStyle,
  orange: roseStyle,
  cyan: sageStyle,
  red: roseStyle,
  green: sageStyle,
  purple: roseStyle,
  neutral: neutralStyle,
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
        "inline-flex min-w-0 items-center gap-2 rounded-full border px-3 py-2 text-base font-medium transition-colors sm:px-4",
        variantStyles[variant],
        className,
      )}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          className="size-5 shrink-0"
        />
      )}
      <span className="truncate" title={label}>{label}</span>
    </div>
  );
}
