"use client";

import Image from "next/image";
import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";
import { AUTHORITY_ITEMS } from "@/lib/data";
import { useTheme } from "@/components/ThemeProvider";

export function AuthorityStrip() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [active, setActive] = useState<string | null>(null);
  const [isDesktopHover, setIsDesktopHover] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setIsDesktopHover(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (isDesktopHover) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!sectionRef.current) return;
      if (!sectionRef.current.contains(event.target as Node)) {
        setActive(null);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isDesktopHover]);

  const activeItem = useMemo(() => AUTHORITY_ITEMS.find((item) => item.name === active) ?? null, [active]);

  return (
    <section className="relative z-30 -mt-4 pb-12 md:-mt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          onMouseLeave={() => {
            if (isDesktopHover) setActive(null);
          }}
          className={clsx(
            "relative rounded-[2rem] border px-4 py-5 backdrop-blur-md md:px-6 md:py-6",
            isDark ? "border-cyan-300/16 bg-[#071826]/72" : "border-slate-300/70 bg-[rgba(255,255,255,0.9)] shadow-[0_24px_64px_rgba(15,23,42,0.08)]",
          )}
        >
          <div
            className={clsx(
              "pointer-events-none absolute inset-0",
              isDark
                ? "bg-[linear-gradient(90deg,rgba(48,213,255,0.06),transparent_26%,transparent_74%,rgba(79,231,200,0.05))]"
                : "bg-[linear-gradient(90deg,rgba(14,165,233,0.08),transparent_26%,transparent_74%,rgba(20,184,166,0.05))]",
            )}
          />

          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] lg:items-start">
            <div className="lg:pr-6">
              <p className={clsx("text-[11px] font-semibold uppercase tracking-[0.22em]", isDark ? "text-cyan-200" : "text-sky-900")}>
                Top Partners
              </p>
              <h2 className={clsx("mt-3 max-w-sm text-2xl font-semibold leading-tight", isDark ? "text-white" : "text-slate-950")}>
                Strategic network supporting Blue Orbit delivery.
              </h2>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {AUTHORITY_ITEMS.map((item, index) => {
                  const isOpen = active === item.name;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onMouseEnter={() => {
                        if (isDesktopHover) setActive(item.name);
                      }}
                      onClick={() => {
                        if (!isDesktopHover) {
                          setActive((prev) => (prev === item.name ? null : item.name));
                        }
                      }}
                      className={clsx(
                        "partner-logo-tile group relative min-h-[102px] px-2 py-3 text-left transition duration-300 hover:-translate-y-1",
                        isOpen && "is-active",
                      )}
                      style={{ transitionDelay: `${index * 45}ms` }}
                    >
                      <div
                        className={clsx(
                          "pointer-events-none absolute inset-x-4 top-1/2 h-px -translate-y-1/2",
                        isDark ? "bg-gradient-to-r from-transparent via-cyan-300/18 to-transparent" : "bg-gradient-to-r from-transparent via-sky-800/14 to-transparent",
                        )}
                      />
                      <div className="flex h-full flex-col items-center justify-center gap-3">
                        <div className="flex min-h-[60px] items-center justify-center">
                          {item.logo ? (
                            <div className={clsx("relative h-14 w-40", item.name === "Beyond62" && "w-44", item.name === "GalaxySpace" && "w-44")}>
                              <Image src={item.logo} alt={item.name} fill className="object-contain" />
                            </div>
                          ) : (
                            <div
                              className={clsx(
                                "flex h-14 w-40 items-center justify-center text-base font-semibold uppercase tracking-[0.18em]",
                                isDark ? "text-cyan-100" : "text-sky-950",
                              )}
                            >
                              Huawei
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-center gap-3">
                          <p className={clsx("text-sm font-semibold", isDark ? "text-white" : "text-slate-900")}>{item.name}</p>
                          <div
                            className={clsx(
                              "h-2.5 w-2.5 rounded-full transition duration-300",
                              isOpen ? (isDark ? "bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" : "bg-sky-800") : isDark ? "bg-cyan-100/35" : "bg-sky-800/30",
                            )}
                          />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {!isDesktopHover && activeItem ? (
                <div
                  className={clsx(
                    "partner-hover-card mt-4 overflow-hidden rounded-[1.5rem] border p-5 shadow-[0_20px_54px_rgba(0,0,0,0.24)] md:hidden",
                    activeItem ? "is-open" : "",
                    isDark ? "border-cyan-300/18 bg-[#06131f]/96 text-slate-100" : "border-slate-300/70 bg-[rgba(255,255,255,0.98)] text-slate-900 shadow-[0_24px_64px_rgba(15,23,42,0.12)]",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    aria-label="Close partner details"
                    className={clsx(
                      "mb-4 ml-auto flex rounded-full border p-2 transition",
                      isDark ? "border-cyan-300/20 text-cyan-100 hover:bg-cyan-300/10" : "border-slate-300/70 text-slate-800 hover:bg-slate-100",
                    )}
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="grid gap-5">
                    <div
                      className={clsx(
                        "relative flex min-h-[120px] items-center justify-center overflow-hidden rounded-[1.25rem] border p-5",
                        isDark ? "border-cyan-300/14 bg-[#08192a]/86" : "border-slate-300/60 bg-slate-50/90",
                      )}
                    >
                      {activeItem.logo ? (
                        <div className="relative h-16 w-32">
                          <Image src={activeItem.logo} alt={activeItem.name} fill className="object-contain" />
                        </div>
                      ) : (
                        <div
                          className={clsx(
                            "flex h-16 w-32 items-center justify-center rounded-xl text-sm font-semibold uppercase tracking-[0.18em]",
                            isDark ? "bg-black/20 text-cyan-100" : "bg-white text-sky-950",
                          )}
                        >
                          Huawei
                        </div>
                      )}
                    </div>
                    <div>
                      <p className={clsx("partner-hover-text text-[11px] font-semibold uppercase tracking-[0.2em]", isDark ? "text-cyan-200" : "text-sky-900")}>
                        Strategic Partner
                      </p>
                      <h3 className={clsx("partner-hover-text mt-2 text-2xl font-semibold leading-tight", isDark ? "text-white" : "text-slate-950")}>
                        {activeItem.name}
                      </h3>
                      <p className={clsx("partner-hover-text mt-3 text-sm font-semibold uppercase tracking-[0.14em]", isDark ? "text-cyan-100/80" : "text-sky-950/80")}>
                        {activeItem.label}
                      </p>
                      <p className={clsx("partner-hover-text mt-3 text-sm leading-6", isDark ? "text-slate-300" : "text-slate-700")}>
                        {activeItem.description}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "pointer-events-none fixed inset-0 z-[75] hidden items-center justify-center px-4 md:flex",
          activeItem && isDesktopHover ? "opacity-100" : "opacity-0",
        )}
      >
        <div
          className={clsx(
            "partner-hover-card w-full max-w-3xl overflow-hidden rounded-[1.75rem] border p-5 shadow-[0_26px_70px_rgba(0,0,0,0.32)]",
            activeItem && isDesktopHover ? "is-open" : "",
            isDark ? "border-cyan-300/18 bg-[#06131f]/96 text-slate-100" : "border-slate-300/70 bg-[rgba(255,255,255,0.98)] text-slate-900 shadow-[0_28px_80px_rgba(15,23,42,0.16)]",
          )}
        >
          {activeItem ? (
            <div className="grid gap-5 md:grid-cols-[180px_minmax(0,1fr)] md:items-center">
              <div
                className={clsx(
                  "relative flex min-h-[132px] items-center justify-center overflow-hidden rounded-[1.3rem] border p-5",
                  isDark ? "border-cyan-300/14 bg-[#08192a]/86" : "border-slate-300/60 bg-slate-50/90",
                )}
              >
                {activeItem.logo ? (
                  <div className="relative h-16 w-32">
                    <Image src={activeItem.logo} alt={activeItem.name} fill className="object-contain" />
                  </div>
                ) : (
                  <div
                    className={clsx(
                      "flex h-16 w-32 items-center justify-center rounded-xl text-sm font-semibold uppercase tracking-[0.18em]",
                      isDark ? "bg-black/20 text-cyan-100" : "bg-white text-sky-950",
                    )}
                  >
                    Huawei
                  </div>
                )}
              </div>
              <div>
                <p className={clsx("partner-hover-text text-[11px] font-semibold uppercase tracking-[0.2em]", isDark ? "text-cyan-200" : "text-sky-900")}>
                  Strategic Partner
                </p>
                <h3 className={clsx("partner-hover-text mt-2 text-2xl font-semibold leading-tight", isDark ? "text-white" : "text-slate-950")}>
                  {activeItem.name}
                </h3>
                <p className={clsx("partner-hover-text mt-3 text-sm font-semibold uppercase tracking-[0.14em]", isDark ? "text-cyan-100/80" : "text-sky-950/80")}>
                  {activeItem.label}
                </p>
                <p className={clsx("partner-hover-text mt-3 max-w-xl text-sm leading-6", isDark ? "text-slate-300" : "text-slate-700")}>
                  {activeItem.description}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
