"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("home");
  return (
    <section className="relative overflow-hidden py-40">
      {/* AMBIENT GLOW */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-150 w-150

          -translate-x-1/2 -translate-y-1/2

          rounded-full
          bg-primary-500/10

          blur-[140px]
          pointer-events-none
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* LABEL */}
        <p
          className="
            text-sm
            uppercase
            tracking-[0.35em]

            text-primary-400
          "
        >
          {t("contact.label")}
        </p>

        {/* TITLE */}
        <h2
          className="
            mx-auto mt-6
            max-w-4xl

            text-5xl
            font-bold
            leading-tight
            tracking-tight

            md:text-7xl
          "
        >
          {t("contact.title.before")}{" "}
          <span className="text-primary">{t("contact.title.highlight")}</span>
          {", "}
          {t("contact.title.after")}
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto mt-8
            max-w-2xl

            text-xl
            leading-relaxed

            text-muted-foreground
          "
        >
          {t("contact.description")}
        </p>

        {/* BUTTONS */}
        <div
          className="
            mt-12
            flex flex-col items-center justify-center gap-4

            sm:flex-row
          "
        >
          {/* EMAIL */}
          <Link
            href="mailto:rifamarwa4869@email.com"
            className="
              group
              inline-flex items-center gap-3

              rounded-full

              border border-primary-400/30
              bg-primary-500

              px-7 py-4

              text-lg
              font-medium
              text-white

              transition-all duration-300

              hover:-translate-y-1
              hover:shadow-[0_10px_40px_rgba(214,113,55,0.35)]
            "
          >
            <Mail className="size-5" />
            {t("contact.letsTalk")}
            <ArrowUpRight
              className="
                size-5
                transition-transform duration-300

                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </Link>

          {/* GITHUB */}
          <Link
            href="https://github.com/rifamarwa"
            target="_blank"
            className="
              inline-flex items-center gap-3

              rounded-full

              border border-border/60
              bg-card/50

              px-7 py-4

              text-lg
              font-medium

              backdrop-blur-xl

              transition-all duration-300

              hover:-translate-y-1
              hover:border-primary-400/40

              hover:shadow-[0_10px_40px_rgba(44,37,31,0.08)]

              dark:hover:shadow-[0_0_40px_rgba(214,113,55,0.10)]
            "
          >
            <Image
              src="/assets/icons/icon-github.svg"
              alt="icon-github"
              width={20}
              height={20}
            />
            GitHub
          </Link>

          {/* LINKEDIN */}
          <Link
            href="https://www.linkedin.com/in/rifa-marwa/"
            target="_blank"
            className="
              inline-flex items-center gap-3

              rounded-full

              border border-border/60
              bg-card/50

              px-7 py-4

              text-lg
              font-medium

              backdrop-blur-xl

              transition-all duration-300

              hover:-translate-y-1
              hover:border-primary-400/40

              hover:shadow-[0_10px_40px_rgba(44,37,31,0.08)]

              dark:hover:shadow-[0_0_40px_rgba(214,113,55,0.10)]
            "
          >
            <Image
              src="/assets/icons/icon-linkedin.png"
              alt="icon-linkedin"
              width={20}
              height={20}
            />
            LinkedIn
          </Link>
        </div>

        {/* STATUS */}
        <div
          className="
            mt-12
            inline-flex items-center gap-3

            rounded-full

            border border-border/60
            bg-card/40

            px-5 py-3

            text-lg
            text-muted-foreground

            backdrop-blur-xl
          "
        >
          <div
            className="
              size-2 rounded-full
              bg-green-500

              animate-pulse
            "
          />
          {t("contact.freelance")}
        </div>
      </div>
    </section>
  );
}
