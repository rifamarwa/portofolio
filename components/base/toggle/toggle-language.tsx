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
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <ToggleGroup
      type="single"
      value={locale}
      onValueChange={handleChange}
      aria-label="Language"
      className="flex items-center rounded-full border border-border bg-background p-1"
    >
      {["en", "id"].map((language) => (
        <ToggleGroupItem
          key={language}
          value={language}
          aria-label={language === "en" ? "English" : "Bahasa Indonesia"}
          className="h-9 cursor-pointer rounded-full px-3 text-base text-muted-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
        >
          {language.toUpperCase()}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
