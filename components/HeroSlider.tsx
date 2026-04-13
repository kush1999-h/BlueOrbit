"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  primaryButton,
  secondaryButton,
} from "@/lib/homepageStyles";
import { HERO_SLIDES, TRUST_LINE } from "@/lib/data";
import { useTheme } from "@/components/ThemeProvider";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isReady, setIsReady] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const slides = HERO_SLIDES;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const activeSlide = slides[current];

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden pt-16"
      onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
      onTouchEnd={(event) => {
        if (touchStart === null) return;
        const delta = event.changedTouches[0].clientX - touchStart;
        if (Math.abs(delta) > 40) {
          setCurrent((prev) =>
            delta < 0
              ? (prev + 1) % slides.length
              : (prev - 1 + slides.length) % slides.length,
          );
        }
        setTouchStart(null);
      }}
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={clsx(
              "absolute inset-0 transition-opacity duration-700",
              index === current ? "opacity-100" : "opacity-0",
            )}
          >
            <video
              className="h-full w-full object-cover"
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
              preload={index === 0 ? "auto" : "metadata"}
            />
            <div
              className={clsx(
                "absolute inset-0 transition-opacity duration-300 ease-out",
                isDark ? "opacity-100" : "opacity-0",
                "bg-[linear-gradient(112deg,rgba(3,10,20,0.96)_8%,rgba(3,10,20,0.84)_42%,rgba(3,10,20,0.54)_72%,rgba(3,10,20,0.72)_100%),radial-gradient(circle_at_74%_24%,rgba(48,213,255,0.18),transparent_26%),radial-gradient(circle_at_24%_78%,rgba(79,231,200,0.12),transparent_32%)]",
              )}
            />
            <div
              className={clsx(
                "absolute inset-0 transition-opacity duration-300 ease-out",
                isDark ? "opacity-0" : "opacity-100",
                "bg-[linear-gradient(112deg,rgba(232,241,251,0.96)_8%,rgba(220,234,246,0.9)_40%,rgba(220,234,246,0.55)_70%,rgba(227,238,249,0.84)_100%),radial-gradient(circle_at_74%_24%,rgba(10,95,135,0.16),transparent_26%),radial-gradient(circle_at_24%_78%,rgba(14,116,144,0.11),transparent_32%)]",
              )}
            />
          </div>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-0"
      >
        <div
          className={clsx(
            "absolute inset-0 [background-size:64px_64px] transition-opacity duration-300 ease-out",
            isDark ? "opacity-100" : "opacity-0",
            "bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]",
          )}
        />
        <div
          className={clsx(
            "absolute inset-0 [background-size:64px_64px] transition-opacity duration-300 ease-out",
            isDark ? "opacity-0" : "opacity-100",
            "bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)]",
          )}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={clsx(
            "absolute left-[56%] top-[14%] hidden h-[30rem] w-[30rem] rounded-full blur-3xl lg:block",
            "transition-colors duration-300 ease-out",
            isDark ? "bg-cyan-400/8" : "bg-sky-500/12",
          )}
        />
        <div
          className={clsx(
            "hero-orbit-drift absolute right-[10%] top-[14%] hidden h-64 w-64 rounded-full border lg:block",
            "transition-colors duration-300 ease-out",
            isDark ? "border-cyan-300/16" : "border-sky-800/14",
          )}
        />
        <div
          className={clsx(
            "hero-orbit-drift absolute right-[14%] top-[25%] hidden h-40 w-72 rounded-[50%] border lg:block",
            "transition-colors duration-300 ease-out",
            isDark ? "border-cyan-300/12" : "border-sky-800/12",
          )}
          style={{ animationDelay: "-4s" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:px-8">
        <div className="max-w-3xl lg:pr-10">
          <div
            className={clsx("hero-copy-enter mb-5", isReady && "is-ready")}
            style={{ transitionDelay: "60ms" }}
          >
            <span
              className={clsx(
                "inline-flex rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]",
                isDark
                  ? "border-cyan-300/25 bg-cyan-300/10 text-cyan-100"
                  : "border-ui-strong bg-ui-elevated text-ui-heading shadow-[0_8px_20px_rgba(11,28,49,0.09)]",
              )}
            >
              Official Odoo Learning Partner
            </span>
          </div>

          <h1
            className={clsx(
              "hero-copy-enter max-w-3xl text-4xl font-bold leading-[0.98] md:text-[3.8rem]",
              isReady && "is-ready",
              isDark ? "text-white" : "text-slate-950",
            )}
            style={{ transitionDelay: "140ms" }}
          >
            Technology Systems That Move Business Forward
          </h1>

          <p
            className={clsx(
              "hero-copy-enter mt-6 max-w-2xl text-base leading-7 md:text-lg",
              isReady && "is-ready",
              isDark ? "text-slate-300" : "text-ui-body",
            )}
            style={{ transitionDelay: "220ms" }}
          >
            Blue Orbit Solutions helps organizations in Bangladesh deploy Odoo,
            build software and websites, modernize infrastructure, strengthen
            cloud operations, and execute strategic technology partnerships with
            confidence.
          </p>

          <div
            className={clsx(
              "hero-copy-enter mt-8 flex flex-col gap-4 sm:flex-row",
              isReady && "is-ready",
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <Link
              href="/request-quote"
              className={primaryButton(isDark)}
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className={secondaryButton(isDark)}
            >
              Book a Consultation
            </Link>
          </div>

          <p
            className={clsx(
              "hero-copy-enter mt-8 max-w-3xl text-sm font-medium leading-6",
              isReady && "is-ready",
              isDark ? "text-cyan-100/90" : "text-ui-body",
            )}
            style={{ transitionDelay: "380ms" }}
          >
            {TRUST_LINE}
          </p>
        </div>

        <div className="relative lg:justify-self-end">
          <div className="relative mx-auto max-w-[34rem]">
            <div
              className={clsx(
                "hero-panel-enter relative z-10",
                isReady && "is-ready",
              )}
              style={{ transitionDelay: "180ms" }}
            >
              <div className="relative">
                <div
                  className={clsx(
                    "relative overflow-hidden shadow-[0_28px_70px_rgba(0,0,0,0.28)]",
                    isDark
                      ? "bg-[#06111e]/72"
                      : "border border-ui-strong bg-ui-elevated shadow-[0_10px_24px_rgba(11,28,49,0.11),0_24px_52px_rgba(11,28,49,0.10)]",
                  )}
                  style={{
                    clipPath:
                      "polygon(0 8%, 87% 0, 100% 12%, 100% 100%, 13% 100%, 0 84%)",
                    borderRadius: "2.25rem",
                  }}
                >
                  <div
                    className={clsx(
                      "pointer-events-none absolute inset-0 z-10",
                      isDark
                        ? "bg-[linear-gradient(135deg,rgba(3,10,20,0.14),rgba(3,10,20,0.52)),radial-gradient(circle_at_top_right,rgba(48,213,255,0.16),transparent_28%)]"
                        : "bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(237,244,251,0.52)),radial-gradient(circle_at_top_right,rgba(14,165,233,0.14),transparent_28%)]",
                    )}
                  />
                  <div className="relative aspect-[1.16/0.8]">
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-20">
                    <div
                      className={clsx(
                        "absolute left-[12%] top-[18%] h-28 w-28 rounded-full border",
                        isDark ? "border-cyan-300/18" : "border-sky-800/12",
                      )}
                    />
                    <div
                      className={clsx(
                        "absolute left-[20%] top-[24%] h-16 w-40 rounded-[50%] border",
                        isDark ? "border-cyan-300/18" : "border-sky-800/12",
                      )}
                    />
                    <div
                      className={clsx(
                        "absolute right-[16%] top-[18%] h-3 w-3 rounded-full",
                        isDark ? "bg-cyan-300/70" : "bg-sky-800/60",
                      )}
                    />
                    <div
                      className={clsx(
                        "absolute left-[8%] bottom-[16%] h-20 w-20 rounded-full blur-3xl",
                        isDark ? "bg-cyan-400/12" : "bg-sky-500/12",
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={clsx(
                "hero-copy-enter mt-4 px-1 md:px-2",
                isReady && "is-ready",
              )}
              style={{ transitionDelay: "340ms" }}
            >
              <p
                className={clsx(
                  "text-[11px] font-semibold uppercase tracking-[0.18em]",
                  isDark ? "text-cyan-200/90" : "text-ui-link",
                )}
              >
                Current Service Focus
              </p>
              <h2
                className={clsx(
                  "mt-2 max-w-md text-[1.15rem] font-semibold leading-[1.18]",
                  isDark ? "text-white" : "text-slate-900",
                )}
              >
                {activeSlide.title}
              </h2>
              <p
                className={clsx(
                  "mt-1.5 max-w-md text-sm leading-5",
                  isDark ? "text-slate-300" : "text-ui-body",
                )}
              >
                {activeSlide.support}
              </p>
            </div>

            <div
              className={clsx("hero-copy-enter mt-2.5", isReady && "is-ready")}
              style={{ transitionDelay: "420ms" }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.title}
                      onClick={() => setCurrent(index)}
                      aria-label={`Go to ${slide.title}`}
                      className={clsx(
                        "h-1.5 rounded-full transition-all",
                        index === current
                          ? isDark
                            ? "w-10 bg-cyan-300"
                            : "w-10 bg-ui-link"
                          : isDark
                            ? "w-2 bg-cyan-100/50"
                            : "w-2 bg-slate-400",
                      )}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setCurrent(
                        (prev) => (prev - 1 + slides.length) % slides.length,
                      )
                    }
                    aria-label="Previous slide"
                    className={clsx(
                      "rounded-full border p-1.5 transition",
                      isDark
                        ? "border-cyan-300/35 text-cyan-100 hover:bg-cyan-300/10"
                        : "border-ui bg-ui-elevated text-ui-heading hover:border-ui-strong hover:bg-ui-card",
                    )}
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrent((prev) => (prev + 1) % slides.length)
                    }
                    aria-label="Next slide"
                    className={clsx(
                      "rounded-full border p-1.5 transition",
                      isDark
                        ? "border-cyan-300/35 text-cyan-100 hover:bg-cyan-300/10"
                        : "border-ui bg-ui-elevated text-ui-heading hover:border-ui-strong hover:bg-ui-card",
                    )}
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div
                className={clsx(
                  "mt-2 h-0.5 overflow-hidden rounded-full",
                  isDark ? "bg-cyan-300/15" : "bg-ui-divider",
                )}
              >
                <div
                  key={current}
                  className={clsx(
                    "h-full animate-[heroProgress_6s_linear] rounded-full",
                    isDark ? "bg-cyan-300/90" : "bg-ui-link",
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
