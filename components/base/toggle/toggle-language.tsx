"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";

export default function ToggleLanguage() {
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (nextLocale: string) => {
    if (!nextLocale) return;

    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  return (
    <ToggleGroup
      type="single"
      value={locale}
      onValueChange={handleChange}
      className="
        flex items-center
        rounded-full
        border border-white/15
        bg-white/5
        p-1
      "
    >
      <ToggleGroupItem
        value="en"
        className="
          cursor-pointer
          rounded-full
          px-3
          text-lg
          text-white/70

          data-[state=on]:bg-white
          data-[state=on]:text-black
        "
      >
        EN
      </ToggleGroupItem>

      <div className="mx-0.5 h-4 w-px bg-white/10" />

      <ToggleGroupItem
        value="id"
        className="
          cursor-pointer
          rounded-full
          px-3
          text-lg
          text-white/70

          data-[state=on]:bg-white
          data-[state=on]:text-black
        "
      >
        ID
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
