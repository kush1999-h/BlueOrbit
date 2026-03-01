"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES, TRUST_LINE } from "@/lib/data";

export function HeroSlider() {
  const slides = useMemo(() => HERO_SLIDES, []);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (paused) {
      return;
    }

    const interval = window.setInterval(next, 6000);
    return () => window.clearInterval(interval);
  }, [next, paused]);

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-orbit-dark pt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-[#020617]/35" />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="mb-3 inline-block rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-cyan-200">
            BLUE ORBIT ERP PARTNER
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Odoo Implementation & Customization in Bangladesh
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-300">
            Complete ERP deployment, infrastructure, and intelligent business solutions.
          </p>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request-quote"
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 py-3 text-center font-semibold text-white transition hover:shadow-glow-cyan-lg"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-cyan-400/60 px-6 py-3 text-center font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
            >
              Book a Consultation
            </Link>
          </div>
          <p className="text-sm font-medium text-cyan-200/90">{TRUST_LINE}</p>
        </div>

        <div className="rounded-2xl border border-cyan-400/30 bg-slate-950/55 p-6 backdrop-blur-sm lg:justify-self-end">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
            Slide {current + 1} of {slides.length}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">{slides[current].title}</h2>
          <p className="mt-3 text-gray-300">{slides[current].support}</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="hidden rounded-full border border-cyan-300/40 p-2 text-cyan-200 transition hover:bg-cyan-300/10 sm:inline-flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => setCurrent(index)}
              aria-label={`Go to ${slide.title}`}
              className={`h-2 rounded-full transition-all ${
                current === index ? "w-8 bg-cyan-300" : "w-2 bg-cyan-200/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next slide"
          className="hidden rounded-full border border-cyan-300/40 p-2 text-cyan-200 transition hover:bg-cyan-300/10 sm:inline-flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

