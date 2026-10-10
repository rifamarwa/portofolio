"use client";

import FeaturedProjects from "./components/featured-projects";
import Techstack from "./components/techstack";
import ExperienceSection from "./components/experiences";
import ContactSection from "./components/contact";
import { useTranslations } from "next-intl";
import ButtonScroll from "@/components/base/button/button-scroll";
import { useRef } from "react";

export default function Home() {
  const t = useTranslations("home");
  const nextSectionRef = useRef<HTMLElement | null>(null);

  const handleScrollNext = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="overflow-hidden">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pb-20 pt-32 sm:px-6 md:pb-28 lg:px-8 relative">
        <div className="max-w-3xl">
          <h1 className="text-balance font-medium leading-[1.02] tracking-tighter text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl 3xl:text-[90px]">
            {t("heroTitle.before")}{" "}
            <span className="text-link">{t("heroTitle.highlight")}</span>{" "}
            {t("heroTitle.after")}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty leading-8 text-foreground/75 md:mt-8 text-base xs:text-base sm:text-lg md:text-xl lg:text-2xl md:leading-relaxed">
            {t("heroDescription")}
          </p>
        </div>

        <ButtonScroll onClick={handleScrollNext} />
      </section>

      <section ref={nextSectionRef}>
        <FeaturedProjects />
      </section>

      <Techstack />

      <ExperienceSection />

      <ContactSection />
    </div>
  );
}
