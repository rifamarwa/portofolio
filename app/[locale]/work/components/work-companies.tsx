"use client";

import Image from "next/image";
import { Building2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { allCompanies } from "@/constants/company";
import { ICompany } from "@/interfaces/company.interface";

interface IWorkCompanies {
  label?: string;
}

const cardTones = [
  {
    surface: "bg-[#C18390]/10 dark:bg-[#C18390]/10",
    ornament: "border-[#C18390]/25",
    accent: "bg-[#C18390]",
  },
  {
    surface: "bg-[#DFE8D6]/45 dark:bg-[#DFE8D6]/10",
    ornament: "border-[#87977D]/25 dark:border-[#DFE8D6]/20",
    accent: "bg-[#87977D] dark:bg-[#DFE8D6]",
  },
];

export default function WorkCompanies({
  label = "Companies I've Worked With",
}: Readonly<IWorkCompanies>) {
  const reduceMotion = useReducedMotion();

  const getCompanyRelationship = (company: ICompany) => {
    if (company.relationship === "employer") {
      return company.status === "current"
        ? "Current Employer"
        : "Former Employer";
    }

    if (company.relationship === "client") {
      return company.status === "current"
        ? "Current Client Assignment"
        : "Former Client Assignment";
    }

    return "Project Collaboration";
  };

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight text-foreground md:mb-10 md:text-3xl">
          {label}
        </h2>

        {/* Company Cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-5 lg:gap-x-8">
          {allCompanies.map((company, index) => {
            const tone = cardTones[index % cardTones.length];

            return (
              <motion.div
                key={company.code}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : Math.min(index * 0.08, 0.32),
                  ease: "easeOut",
                }}
                className="
                  w-full
                  min-[420px]:w-[calc((100%-1.25rem)/2)]
                  lg:w-[calc((100%-4rem)/3)]
                "
              >
                <div
                  className="
                    group relative flex h-full flex-col
                    rounded-3xl border border-border
                    bg-card p-3 shadow-sm
                    transition-[transform,border-color,box-shadow]
                    duration-300 ease-out
                    hover:-translate-y-1.5
                    hover:border-[#C18390]/40
                    hover:shadow-lg hover:shadow-[#C18390]/10
                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                >
                  {/* Logo Surface */}
                  <div
                    className={`
                      relative flex h-40 shrink-0
                      items-center justify-center
                      overflow-hidden rounded-2xl
                      px-6
                      ${tone.surface}
                    `}
                  >
                    {/* Decorative Rings */}
                    <div
                      aria-hidden="true"
                      className={`
                        pointer-events-none absolute
                        -right-9 -top-9
                        h-36 w-36 rounded-full border
                        transition-transform duration-700 ease-out
                        group-hover:scale-110
                        motion-reduce:transform-none
                        motion-reduce:transition-none
                        ${tone.ornament}
                      `}
                    />

                    <div
                      aria-hidden="true"
                      className={`
                        pointer-events-none absolute
                        -right-3 -top-3
                        h-24 w-24 rounded-full border
                        transition-transform duration-700 ease-out
                        group-hover:scale-110
                        motion-reduce:transform-none
                        motion-reduce:transition-none
                        ${tone.ornament}
                      `}
                    />

                    {/* Company Logo */}
                    <div
                      className="
                        relative z-10 flex w-full
                        items-center justify-center
                        transition-transform duration-500 ease-out
                        group-hover:-translate-y-1
                        group-hover:scale-[1.04]
                        motion-reduce:transform-none
                        motion-reduce:transition-none
                      "
                    >
                      {company.logo ? (
                        <Image
                          src={company.logo}
                          alt={`${company.name} logo`}
                          width={180}
                          height={96}
                          className="h-20 w-auto max-w-full object-contain"
                        />
                      ) : (
                        <Building2
                          size={44}
                          strokeWidth={1.5}
                          className="text-muted-foreground"
                        />
                      )}
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="flex flex-1 flex-col items-center px-3 pb-5 pt-6 text-center sm:px-4">
                    <h3
                      className="
                        text-lg font-semibold
                        leading-snug tracking-tight text-foreground
                        transition-colors duration-300
                        group-hover:text-link
                        md:text-xl
                      "
                    >
                      {company.name}
                    </h3>

                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {getCompanyRelationship(company)}
                    </p>

                    {/* Accent */}
                    <div className="mt-auto pt-5">
                      <div
                        aria-hidden="true"
                        className={`
                          h-0.5 w-8 rounded-full opacity-60
                          transition-[width,opacity] duration-300
                          group-hover:w-14 group-hover:opacity-100
                          motion-reduce:transition-none
                          ${tone.accent}
                        `}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
