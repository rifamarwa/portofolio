"use client";

import {
  ArrowUpRight,
  BookOpen,
  FileText,
  MapPin,
  Microwave,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import BaseChip from "@/components/base/chip/chip";
import Image from "next/image";
import { techGroups, techRegistry } from "@/constants/techstack";

export default function About() {
  const t = useTranslations("about");

  const techs = techGroups.flatMap((group) =>
    group.items.map((item) => {
      const tech = techRegistry[item.name as keyof typeof techRegistry];

      return {
        name: item.name,
        icon: item.icon,
        variant: tech?.variant,
      };
    }),
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-36 sm:px-6 lg:px-8 lg:pt-40">
      <section className="flex justify-between">
        <section
          aria-labelledby="about-title"
          className="border-b border-border pb-12 md:pb-16"
        >
          <p className="mb-5 text-base font-medium uppercase tracking-[0.2em] text-link">
            {t("eyebrow")}
          </p>

          <h1
            id="about-title"
            className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            {t("greeting")}{" "}
            <span className="font-serif font-normal italic text-link">
              Rifa.
            </span>
          </h1>

          <p className="mt-5 text-2xl text-foreground sm:text-3xl">
            {t("role")}
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            {t("intro")}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-base text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-5" aria-hidden="true" />
              Bandung, Indonesia
            </span>
            <span>{t("years")}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/file/d/1-YW5pqtvPklT40Fthc-iy7Js4v86wj0j/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-primary/40 bg-card px-6 py-3 text-base font-medium text-foreground transition hover:border-primary hover:bg-primary/10"
            >
              <FileText className="size-5" aria-hidden="true" />
              {t("viewCV")}
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/rifa-marwa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition hover:bg-primary-400"
            >
              {t("connect")}
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>

            <Link
              href="/work"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-medium text-foreground transition hover:border-primary/50"
            >
              {t("viewWork")}
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="flex items-center border-b border-border pb-12 md:pb-16">
          <Image
            src="/assets/images/img-profile.jpeg"
            alt="Rifa"
            width={350}
            height={350}
            className="rounded-full"
          />
        </section>
      </section>

      <div className="grid gap-10 pt-12 md:pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <section aria-labelledby="experience-title">
          <h2
            id="experience-title"
            className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {t("experience")}
          </h2>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-base font-medium text-link">
              {t("mainEmployer")}
            </p>

            <h3 className="mt-2 text-2xl font-semibold">BTS.id</h3>

            <p className="mt-2 text-base leading-7 text-muted-foreground">
              {t("btsPeriod")} · {t("fullTime")}
            </p>

            <div className="mt-6 border-t border-border pt-6">
              <p className="mb-4 text-base font-medium text-foreground">
                {t("assignments")}
              </p>

              <ul className="space-y-5">
                <li className="border-l-2 border-primary pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-lg font-semibold">
                      PT Bank Central Asia Tbk
                    </h4>
                    <span className="text-base text-muted-foreground">
                      {t("bcaPeriod")}
                    </span>
                  </div>

                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    {t("bcaDescription")}
                  </p>
                </li>

                <li className="border-l-2 border-accent-400 pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-lg font-semibold">
                      PT Indo Tambangraya Megah Tbk
                    </h4>
                    <span className="text-base text-muted-foreground">
                      {t("itmPeriod")}
                    </span>
                  </div>

                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    {t("itmDescription")}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:px-8">
            <h3 className="text-xl font-semibold">PT Ebdesk Teknologi</h3>

            <p className="mt-2 text-base leading-7 text-muted-foreground">
              {t("internRole")}
            </p>

            <p className="mt-1 text-base text-muted-foreground">
              {t("internPeriod")}
            </p>
          </div>
        </section>

        <section aria-labelledby="tools-title">
          <h2
            id="tools-title"
            className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {t("tools")}
          </h2>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap gap-3">
              {techs.map((item) => (
                <BaseChip
                  key={item.name}
                  label={item.name}
                  icon={item.icon}
                  variant={item.variant}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-3xl border border-accent-400/30 bg-panel-sage p-6 sm:p-8">
            <div className="mb-3 flex items-center gap-3 text-sage-ink">
              <BookOpen className="size-5" aria-hidden="true" />
              <Microwave className="size-5" aria-hidden="true" />
              <h3 className="text-lg font-semibold">{t("outsideWork")}</h3>
            </div>

            <p className="text-base leading-7 text-foreground">
              {t("personal")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
