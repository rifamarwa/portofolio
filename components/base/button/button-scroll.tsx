"use client";

import { Button } from "@/components/ui/button";

interface IButtonScroll {
  onClick: () => void;
}

export default function ButtonScroll({ onClick }: Readonly<IButtonScroll>) {
  return (
    <Button
      type="button"
      onClick={onClick}
      aria-label="Scroll to featured projects"
      className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 cursor-pointer items-center gap-3 rounded-full border border-orange-300/25 bg-[#fdfaf6]/10 py-4 px-5 text-orange-100 shadow-[0_0_40px_rgba(251,146,60,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/55 hover:bg-orange-300/15 hover:shadow-[0_0_55px_rgba(251,146,60,0.32)] md:flex"
    >
      <svg
        className="relative h-4 w-4 animate-bounce text-orange-200"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 5v14M19 12l-7 7-7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
}
