"use client";

import Image from "next/image";
import clsx from "clsx";
import { useTheme } from "@/components/ThemeProvider";

const partners = [
  {
    name: "Odoo",
    logo: "/odoo-logo.png",
    width: 220,
    height: 88,
  },
  {
    name: "Galaxy Space",
    logo: "/GalaxySpace-logo.png",
    width: 220,
    height: 88,
  },
  {
    name: "Beyond62",
    logo: "/beyond22_logo.jpg",
    width: 220,
    height: 88,
  },
];

export function OurPartners() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={clsx("py-12 md:py-14", isDark ? "bg-orbit-dark" : "bg-slate-50")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-10">
          <h2 className={clsx("text-3xl font-bold md:text-4xl", isDark ? "text-white" : "text-slate-900")}>
            Our Partners
          </h2>
          <p className={clsx("mt-2 text-sm md:text-base", isDark ? "text-slate-300" : "text-slate-600")}>
            Trusted collaborators powering delivery and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className={clsx(
                "rounded-2xl border p-4 transition hover:-translate-y-0.5",
                isDark
                  ? "border-cyan-500/30 bg-orbit-card hover:border-cyan-300/70"
                  : "border-slate-200 bg-white hover:border-cyan-700/30",
              )}
            >
              <div
                className={clsx(
                  "flex h-20 items-center justify-center rounded-xl px-4 md:h-24",
                  isDark ? "bg-black/20" : "bg-slate-50",
                )}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={partner.width}
                  height={partner.height}
                  className={clsx(
                    "h-full w-full max-w-[180px] object-contain transition duration-300",
                    isDark ? "opacity-90 grayscale hover:opacity-100 hover:grayscale-0" : "opacity-95 grayscale hover:opacity-100 hover:grayscale-0",
                  )}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
