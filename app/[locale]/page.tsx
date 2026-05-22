"use client";

import BaseNavbar from "@/components/base/navbar/navbar";
import FeaturedProjects from "./components/featured-projects";

export default function Home() {
  return (
    <div>
      <BaseNavbar />
      <div className="max-w-3xl py-56">
        <h1 className="text-7xl text-shadow-lg font-medium">
          Frontend Engineer focused on Next.js &{" "}
          <span className="text-primary">Warm</span> Scalable Architecture
        </h1>
        <p className="mt-6 text-2xl leading-relaxed max-w-2xl">
          Specializing in turning complex industry requirements—from heavy
          industries to healthcare—into seamless, scalable user interfaces. Over
          3 years of engineering reliable company profiles and enterprise CMS
          with a strong, collaborative, and technology-agnostic approach.
        </p>
      </div>

      <FeaturedProjects />
    </div>
  );
}
