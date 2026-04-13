"use client";

import Image from "next/image";
import clsx from "clsx";
import { PARTNERSHIPS } from "@/lib/data";
import { useTheme } from "@/components/ThemeProvider";

export function OurPartners() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={clsx("relative overflow-hidden py-20 md:py-24", isDark ? "bg-orbit-darker" : "bg-ui-page")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className={clsx("mb-3 text-xs font-semibold uppercase tracking-[0.24em]", isDark ? "text-cyan-200" : "text-ui-link")}>Strategic Partnerships</p>
          <h2 className={clsx("text-4xl font-bold md:text-5xl", isDark ? "text-white" : "text-ui-heading")}>Recognized partnerships that extend specialized delivery</h2>
          <p className={clsx("mx-auto mt-4 max-w-3xl text-base leading-7 md:text-lg", isDark ? "text-slate-300" : "text-ui-muted")}>
            Blue Orbit works with recognized technology partners to bring specialized solutions into the Bangladesh market.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {PARTNERSHIPS.map((partner, index) => (
            <article
              key={partner.name}
              className={clsx(
                "relative overflow-hidden rounded-[1.8rem] border p-6 transition duration-300 hover:-translate-y-0.5",
                isDark ? "border-cyan-300/20 bg-orbit-card hover:border-cyan-300/45" : "border-ui bg-ui-surface hover:border-ui-strong",
              )}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div className="flex items-start gap-4">
                {partner.logo ? (
                  <div className={clsx("relative flex h-16 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border px-3", isDark ? "border-cyan-300/15 bg-black/20" : "border-ui bg-ui-elevated")}>
                    <Image src={partner.logo} alt={`${partner.name} logo`} fill className="object-contain p-3" />
                  </div>
                ) : (
                  <div className={clsx("flex h-16 w-28 shrink-0 items-center justify-center rounded-2xl border text-center text-xs font-semibold uppercase tracking-[0.18em]", isDark ? "border-cyan-300/15 bg-black/20 text-cyan-100" : "border-ui bg-ui-elevated text-ui-link")}>
                    Huawei
                  </div>
                )}
                <div>
                  <h3 className={clsx("text-lg font-semibold", isDark ? "text-white" : "text-ui-heading")}>{partner.name}</h3>
                  <p className={clsx("mt-2 text-sm leading-7", isDark ? "text-slate-300" : "text-ui-muted")}>{partner.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
