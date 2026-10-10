"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  allProjects,
  projectBubbles,
  projectDetails,
} from "@/constants/projects";
import { cn } from "@/lib/utils";
import { techRegistry } from "@/constants/techstack";
import BaseChip from "@/components/base/chip/chip";
import { WorkProcessBubble } from "../components/work-process-bubble";
import { allCompanies } from "@/constants/company";

export default function DetailWork() {
  const params = useParams<{ key: string }>();
  const t = useTranslations("work");

  const project = allProjects.find((item) => item.key === params.key);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <p className="mb-4 text-base uppercase tracking-[0.3em] text-link">
            Project not found
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Work detail is unavailable
          </h1>

          <p className="mt-4 text-muted-foreground">
            The project you are looking for does not exist or may have been
            removed.
          </p>

          <Link
            href="/work"
            className="mt-8 inline-flex rounded-full border border-primary-400/30 px-6 py-3 text-base font-medium text-link transition hover:bg-primary-400/10"
          >
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const detail = projectDetails[project.key];
  const company = allCompanies.find((item) => item.code === detail.companyCode);

  const title = t(`projects.${project.key}.title`);
  const description = t(`projects.${project.key}.description`);

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative overflow-hidden px-6 py-28 md:px-10 lg:px-16">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-primary-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Link
              href="/work"
              className="mb-8 inline-flex text-base text-muted-foreground transition hover:text-link"
            >
              ← Back to Work
            </Link>

            <p className="mb-4 text-base uppercase tracking-[0.3em] text-link">
              {detail?.category ?? "Project Detail"}
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              {description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
              {project.tech.map((tech) => {
                const item = techRegistry[tech];

                return (
                  <BaseChip
                    key={tech}
                    label={tech}
                    icon={item?.icon}
                    variant={item?.variant}
                  />
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-primary-400/20 blur-3xl" />

            <div className="relative">
              {project.url && (
                <div className="mb-3 flex justify-end">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    mt-8 inline-flex items-center gap-2
                    rounded-full
                    border border-primary-400/30
                    bg-primary-500/25
                    px-5 py-2.5
                    text-lg font-medium text-link
                    transition
                    hover:border-primary-400/50
                    hover:bg-primary-400/15
          "
                  >
                    Live Project
                    <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </Link>
                </div>
              )}

              <div className="overflow-hidden rounded-4xl border border-border bg-card shadow-2xl">
                <Image
                  src={project.images}
                  alt={title}
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-28 md:px-10 lg:px-16 lg:pb-0">
        <div className="absolute left-1/2 top-20 -z-10 h-130 w-130 -translate-x-1/2 rounded-full bg-primary-400/5 blur-3xl" />
        <div className="absolute bottom-20 left-0 -z-10 h-80 w-80 rounded-full bg-accent-400/5 blur-3xl" />
        <div className="absolute bottom-80 right-0 -z-10 h-80 w-80 rounded-full bg-accent-400/5 blur-3xl" />

        <div className="mx-auto max-w-7xl space-y-20">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden rounded-4xl border border-accent-400/15 bg-linear-to-br from-accent-400/10 via-card to-card p-8 shadow-2xl shadow-black/5 backdrop-blur-md md:p-10">
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent-400/10 blur-3xl" />

              <p className="relative mb-4 text-base uppercase tracking-[0.3em] text-sage-ink">
                Overview
              </p>

              <h2 className="relative text-3xl font-bold tracking-tight md:text-5xl">
                Building a focused digital experience with clear structure.
              </h2>

              <p className="relative mt-6 text-base leading-8 text-muted-foreground md:text-lg">
                {detail?.overview ?? description}
              </p>
            </div>

            <aside className="relative overflow-hidden rounded-4xl border border-primary-400/20 bg-linear-to-br from-primary-400/18 via-primary-400/8 to-card p-8 backdrop-blur-md">
              <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-primary-400/20 blur-3xl" />

              <p className="relative mb-6 text-base uppercase tracking-[0.3em] text-link">
                Project Info
              </p>

              <div className="relative space-y-6">
                <InfoItem
                  label="Role"
                  value={detail?.role ?? "Frontend Developer"}
                />

                {company && <InfoItem label="Company" value={company.name} />}

                <InfoItem label="Year" value={detail?.year ?? "-"} />

                <InfoItem
                  label="Category"
                  value={detail?.category ?? "Project"}
                />

                <InfoItem label="Tech Stack" value={project.tech.join(", ")} />
              </div>
            </aside>
          </div>

          <div className="relative pt-20">
            <div className="grid gap-8 md:grid-cols-3 md:items-start">
              {projectBubbles.map((step, index) => {
                const description =
                  detail.caseStudy?.[step.key] ?? step.defaultDesc;

                return (
                  <WorkProcessBubble
                    key={step.number}
                    number={step.number}
                    title={step.title}
                    tone={step.tone}
                    icon={step.icon}
                    description={description}
                    showArrow={index < projectBubbles.length - 1}
                  />
                );
              })}
            </div>
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative space-y-5 before:absolute before:left-6 before:top-6 before:h-[calc(100%-3rem)] before:w-px before:bg-linear-to-b before:from-primary-400/50 before:via-primary-400/20 before:to-transparent">
              {detail?.responsibilities?.map((item, index) => (
                <div
                  key={item}
                  className="group relative flex gap-5 rounded-3xl border border-border bg-linear-to-br from-card to-card p-6 pl-16 transition hover:-translate-y-1 hover:border-primary-400/30 hover:from-primary-400/10 hover:to-card"
                >
                  <span className="absolute left-3.25 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-primary-400/30 bg-background">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary-400 transition group-hover:scale-125" />
                  </span>

                  <span className="shrink-0 text-3xl font-bold text-link/30 transition group-hover:text-link">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="leading-7 text-muted-foreground text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <p className="mb-4 text-base uppercase tracking-[0.3em] text-link">
                Responsibilities
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                My role in this project
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground text-xl">
                I focused on translating requirements into functional,
                responsive, and maintainable frontend interfaces.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-4xl border border-primary-400/25 bg-linear-to-r from-primary-400/18 via-accent-400/10 to-accent-400/12 p-8 mt-40 text-center md:flex md:items-center md:justify-between md:gap-6 md:text-left lg:p-10">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-primary-400/20 blur-3xl" />
            <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-accent-400/10 blur-3xl" />

            <div className="relative">
              <p className="mb-3 text-base uppercase tracking-[0.3em] text-link">
                Explore More
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Want to see other projects?
              </h2>
            </div>

            <Link
              href="/work"
              className="relative mt-6 inline-flex rounded-full border border-white/15 bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition hover:bg-primary-400 md:mt-0"
            >
              Back to Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoItem({
  label,
  value,
}: Readonly<{ label: string; value: string }>) {
  return (
    <div className="border-b border-border pb-5 last:border-b-0 last:pb-0">
      <p className="text-base uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold leading-7">{value}</p>
    </div>
  );
}

function HighlightCard({
  item,
  index,
}: Readonly<{
  item: string;
  index: number;
}>) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border",
        "bg-card px-5 py-4 transition duration-300",
        "hover:-translate-y-0.5 hover:border-primary-400/30 hover:bg-card",
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-400/40 to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary-400/20 bg-primary-400/10 text-base font-semibold text-link">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-base uppercase tracking-[0.22em] text-muted-foreground">
            Highlight
          </p>

          <h3 className="mt-1 truncate text-lg tracking-tight transition group-hover:text-link">
            {item}
          </h3>
        </div>

        <span className="h-2 w-2 shrink-0 rounded-full bg-primary-400/40 transition group-hover:bg-primary-400" />
      </div>
    </div>
  );
}
