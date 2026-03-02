"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

type RevealVariant =
  | "fade-up"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "tilt-up"
  | "blur-in"
  | "pop-in"
  | "lift";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delayMs?: number;
  threshold?: number;
};

export function ScrollReveal({
  children,
  className,
  variant = "fade-up",
  delayMs = 0,
  threshold = 0.18,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={clsx("reveal", `reveal-${variant}`, isVisible && "is-visible", className)}
      style={{ ["--reveal-delay" as string]: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
