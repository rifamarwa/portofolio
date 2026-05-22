"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleLanguage() {
  return (
    <ToggleGroup
      type="single"
      defaultValue="id"
      className="flex items-center rounded-full border border-white/15 bg-white/5 p-1"
    >
      <ToggleGroupItem
        value="en"
        className="
          rounded-full
          px-3
          text-lg
          text-white/70
          data-[state=on]:bg-white
          data-[state=on]:text-black
          cursor-pointer
        "
      >
        EN
      </ToggleGroupItem>

      {/* Divider */}
      <div className="mx-0.5 h-4 w-px bg-white/10" />

      <ToggleGroupItem
        value="id"
        className="
          rounded-full
          px-3
          text-lg
          text-white/70
          data-[state=on]:bg-white
          data-[state=on]:text-black
          cursor-pointer
        "
      >
        ID
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
