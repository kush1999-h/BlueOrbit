"use client";

import Link from "next/link";
import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES, TRUST_LINE } from "@/lib/data";
import { useTheme } from "@/components/ThemeProvider";

export function HeroSlider() {
  const slides = useMemo(() => HERO_SLIDES, []);
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = window.setInterval(next, 6000);
    return () => window.clearInterval(interval);
  }, [next]);

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-orbit-dark pt-20"
      onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
      onTouchEnd={(event) => {
        if (touchStart === null) return;
        const delta = event.changedTouches[0].clientX - touchStart;
        if (Math.abs(delta) > 40) {
          if (delta < 0) next();
          if (delta > 0) prev();
        }
        setTouchStart(null);
      }}
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
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
                "absolute inset-0",
                isDark
                  ? "bg-gradient-to-r from-[#020617] via-[#020617]/90 to-[#020617]/35"
                  : "bg-gradient-to-r from-[#f4f8ff]/95 via-[#f4f8ff]/85 to-[#f4f8ff]/25",
              )}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p
            className={clsx(
              "mb-3 inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.2em]",
              isDark
                ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-200"
                : "border-cyan-700/20 bg-cyan-100/70 text-cyan-900",
            )}
          >
            BLUE ORBIT ERP PARTNER
          </p>

          <h1
            className={clsx(
              "mb-6 text-4xl font-bold leading-tight md:text-6xl",
              isDark ? "text-white" : "text-slate-900",
            )}
          >
            Scale Your Business with Odoo ERP, Built for Bangladesh
          </h1>

          <p className={clsx("mb-8 max-w-2xl text-lg", isDark ? "text-gray-300" : "text-slate-700")}>
            Implementation, customization, cloud reliability, and analytics delivered as one structured ERP journey.
          </p>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request-quote"
              className={clsx(
                "rounded-lg px-6 py-3 text-center font-semibold text-white transition",
                isDark
                  ? "bg-gradient-to-r from-cyan-500 to-cyan-400 hover:shadow-glow-cyan-lg"
                  : "bg-slate-900 hover:bg-slate-800",
              )}
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className={clsx(
                "rounded-lg border px-6 py-3 text-center font-semibold transition",
                isDark
                  ? "border-cyan-400/60 text-cyan-200 hover:bg-cyan-400/10"
                  : "border-cyan-700/40 text-cyan-900 hover:bg-cyan-100/70",
              )}
            >
              Book a Consultation
            </Link>
          </div>

          <p className={clsx("text-sm font-medium", isDark ? "text-cyan-200/90" : "text-cyan-900/90")}>{TRUST_LINE}</p>
        </div>

        <div
          className={clsx(
            "min-h-[220px] rounded-2xl border p-6 backdrop-blur-sm lg:min-h-[250px] lg:justify-self-end",
            isDark ? "border-cyan-400/30 bg-slate-950/55" : "border-cyan-700/20 bg-white/75",
          )}
        >
          <h2 className={clsx("mt-3 text-3xl font-semibold", isDark ? "text-white" : "text-slate-900")}>{slides[current].title}</h2>
          <p className={clsx("mt-3", isDark ? "text-gray-300" : "text-slate-700")}>{slides[current].support}</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className={clsx(
            "hidden rounded-full border p-2 transition sm:inline-flex",
            isDark
              ? "border-cyan-300/40 text-cyan-200 hover:bg-cyan-300/10"
              : "border-cyan-700/30 text-cyan-900 hover:bg-cyan-100/80",
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => setCurrent(index)}
              aria-label={`Go to ${slide.title}`}
              className={clsx(
                "h-2 rounded-full transition-all",
                current === index
                  ? isDark
                    ? "w-8 bg-cyan-300"
                    : "w-8 bg-cyan-800"
                  : isDark
                    ? "w-2 bg-cyan-200/60"
                    : "w-2 bg-cyan-700/50",
              )}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next slide"
          className={clsx(
            "hidden rounded-full border p-2 transition sm:inline-flex",
            isDark
              ? "border-cyan-300/40 text-cyan-200 hover:bg-cyan-300/10"
              : "border-cyan-700/30 text-cyan-900 hover:bg-cyan-100/80",
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-20 mx-auto hidden w-full max-w-md px-4 sm:block">
        <div className={clsx("h-1 overflow-hidden rounded-full", isDark ? "bg-cyan-300/20" : "bg-cyan-700/20")}>
          <div
            key={current}
            className={clsx(
              "h-full animate-[heroProgress_6s_linear] rounded-full",
              isDark ? "bg-cyan-300/85" : "bg-cyan-700/85",
            )}
          />
        </div>
      </div>
    </section>
  );
}
