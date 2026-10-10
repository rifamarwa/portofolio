"use client";

import Image from "next/image";
import { allCompanies } from "@/constants/company";

interface IWorkCompanies {
  label?: string;
}

export default function WorkCompanies({
  label = "Companies I've Worked With",
}: Readonly<IWorkCompanies>) {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-28">
      {/* Soft Background Accent */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-0
          h-40 w-3/4 -translate-x-1/2
          rounded-full
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Label */}
        <div className="mb-16 flex items-center justify-center gap-5">
          <div className="h-px max-w-24 flex-1 bg-border" />

          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground md:text-sm">
            {label}
          </p>

          <div className="h-px max-w-24 flex-1 bg-border" />
        </div>

        {/* Company Logos */}
        <div
          className="
            grid grid-cols-2 items-center gap-x-8 gap-y-12
            sm:grid-cols-3
            lg:grid-cols-5
          "
        >
          {allCompanies.map((company) => (
            <div
              key={company.code}
              className="
                group flex flex-col items-center
                justify-center gap-5 px-3 py-6
                transition-transform duration-300
                hover:-translate-y-1
              "
            >
              {/* Logo */}
              <div className="flex h-20 w-full items-center justify-center">
                <Image
                  src={company.logo ?? ""}
                  alt={`${company.name} logo`}
                  width={180}
                  height={90}
                  className="
                    h-auto max-h-16 w-auto max-w-40
                    object-contain
                    transition-all duration-500 ease-out
                    group-hover:scale-110
                    group-hover:grayscale-0
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* Company Name */}
              <p
                className="
                  text-center text-base font-medium
                  tracking-wide text-muted-foreground
                  transition-colors duration-300
                  group-hover:text-foreground
                "
              >
                {company.name}
              </p>

              {/* Hover Accent */}
              <div
                className="
                  h-0.5 w-0 rounded-full bg-primary
                  transition-all duration-300
                  group-hover:w-12
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
