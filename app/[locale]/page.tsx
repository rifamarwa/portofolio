"use client";

import BaseNavbar from "@/components/base/navbar/navbar";
import FeaturedProjects from "./components/featured-projects";
import Techstack from "./components/techstack";
import ExperienceSection from "./components/experiences";
import ContactSection from "./components/contact";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div>
      <BaseNavbar />
      <div className="max-w-3xl h-screen flex flex-col justify-center mb-40">
        <h1 className="text-7xl font-medium text-shadow-lg pt-20">
          {t("heroTitle.before")}{" "}
          <span className="text-primary">{t("heroTitle.highlight")}</span>{" "}
          {t("heroTitle.after")}
        </h1>
        <p className="mt-6 text-2xl leading-relaxed max-w-2xl">
          {t("heroDescription")}
        </p>
      </div>

      <FeaturedProjects />

      <Techstack />

      <ExperienceSection />

      <ContactSection />
    </div>
  );
}
