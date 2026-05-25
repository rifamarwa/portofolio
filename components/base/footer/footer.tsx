"use client";

export default function Footer() {
  return (
    <footer
      className="
        relative
        isolate
        overflow-hidden

        mt-24

        border-t border-border/50

        bg-linear-to-b
        from-transparent
        via-[#faf5ef]
        to-[#f3e9dd]

        dark:via-[#241c19]
        dark:to-[#1f1815]

        px-6
        py-8

        md:px-10
      "
    >
      {/* AMBIENT GLOW */}
      <div
        className="
          pointer-events-none
          absolute

          left-1/2 top-0

          h-62.5
          w-125

          -translate-x-1/2

          rounded-full

          bg-primary-500/10

          blur-[100px]
        "
      />

      {/* LIGHT MODE SOFT PAPER EFFECT */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_70%)]

          dark:hidden
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          mx-auto

          flex 
          flex-col gap-4

          text-sm text-muted-foreground

          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <p>© 2026 Marwa. All rights reserved.</p>

        <p>Built with Next.js, Tailwind CSS, and warm earl grey tea 🍵</p>
      </div>
    </footer>
  );
}
