import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

function Input({
  className,
  type,
  startContent,
  endContent,
  ...props
}: Readonly<InputProps>) {
  return (
    <div className="relative w-full">
      {startContent && (
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {startContent}
        </div>
      )}

      <input
        type={type}
        data-slot="input"
        className={cn(
          "h-10 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-xl dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          startContent && "pl-10",
          endContent && "pr-10",
          className,
        )}
        {...props}
      />

      {endContent && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {endContent}
        </div>
      )}
    </div>
  );
}

export { Input };
