"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

function getInternalPath(anchor: HTMLAnchorElement): string | null {
  const href = anchor.getAttribute("href");
  if (!href) return null;
  if (href.startsWith("#")) return null;
  if (anchor.target && anchor.target !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;

  try {
    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin) return null;
    const targetPath = `${url.pathname}${url.search}${url.hash}`;
    const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (targetPath === currentPath) return null;
    return targetPath;
  } catch {
    return null;
  }
}

const INITIAL_MS = 1100;
const PRE_NAV_MS = 900;
const POST_NAV_MS = 420;
const BLUE_CHARS = ["B", "L", "U", "E"];
const ORBIT_CHARS = ["O", "R", "B", "I", "T"];

function AnimatedLoadingLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1513.7977 -362.2741 2720.8241 863.9062"
      className="w-[min(96vw,980px)]"
      role="img"
      aria-label="Blue Orbit loading"
    >
      <defs>
        <radialGradient id="bg" cx="50%" cy="40%" r="80%">
          <stop offset="0" stopColor="#0b0b0b" />
          <stop offset="0.7" stopColor="#050505" />
          <stop offset="1" stopColor="#000000" />
        </radialGradient>
        <filter id="textGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.2" result="tb" />
          <feMerge>
            <feMergeNode in="tb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="neon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6ff6ff" />
          <stop offset="1" stopColor="#00c7ff" />
        </linearGradient>
        <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.25" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g transform="matrix(1.7005150318145752, 0, 0, 1.6613579988479614, -1513.7977294921875, -362.27410888671875)">
        <rect width="1600" height="520" fill="url(#bg)" />
        <g fill="#ffffff" opacity="0.35">
          <circle cx="130" cy="80" r="2.2" />
          <circle cx="240" cy="60" r="1.6" opacity="0.25" />
          <circle cx="410" cy="95" r="1.3" opacity="0.22" />
          <circle cx="560" cy="55" r="1.1" opacity="0.18" />
          <circle cx="740" cy="70" r="1.5" opacity="0.22" />
          <circle cx="1020" cy="85" r="2.0" />
          <circle cx="1180" cy="55" r="1.2" opacity="0.18" />
          <circle cx="1420" cy="90" r="1.6" opacity="0.22" />
          <circle cx="320" cy="260" r="1.4" opacity="0.22" />
          <circle cx="520" cy="230" r="1.0" opacity="0.16" />
          <circle cx="1100" cy="250" r="1.8" opacity="0.25" />
          <circle cx="1240" cy="220" r="1.1" opacity="0.18" />
          <circle cx="1460" cy="240" r="1.4" opacity="0.2" />
          <circle cx="180" cy="430" r="1.8" opacity="0.22" />
          <circle cx="420" cy="455" r="1.2" opacity="0.18" />
          <circle cx="760" cy="460" r="1.5" opacity="0.22" />
          <circle cx="980" cy="430" r="1.2" opacity="0.18" />
          <circle cx="1320" cy="445" r="2.1" opacity="0.28" />
          <circle cx="1500" cy="420" r="1.3" opacity="0.18" />
        </g>
      </g>

      <g
        filter="url(#textGlow)"
        transform="matrix(1.6898460388183594, 0, 0, 1.6613579988479614, -1499.164306640625, -364.5820007324219)"
      >
        <text
          x="197.553"
          y="305"
          fontFamily="Montserrat, Poppins, Inter, Arial, sans-serif"
          fontSize="118"
          fontWeight="700"
          letterSpacing="22"
          fill="#66d9ff"
          opacity="0.95"
        >
          {BLUE_CHARS.map((char, idx) => (
            <tspan key={`blue-${char}-${idx}`}>
              {char}
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0;0 -9;0 0"
                dur="0.95s"
                begin={`${idx * 0.08}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.62;1;0.62"
                dur="0.95s"
                begin={`${idx * 0.08}s`}
                repeatCount="indefinite"
              />
            </tspan>
          ))}
        </text>
        <text
          x="1033.9"
          y="305"
          fontFamily="Montserrat, Poppins, Inter, Arial, sans-serif"
          fontSize="118"
          fontWeight="700"
          letterSpacing="22"
          fill="#66d9ff"
          opacity="0.95"
        >
          {ORBIT_CHARS.map((char, idx) => (
            <tspan key={`orbit-${char}-${idx}`}>
              {char}
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0;0 -9;0 0"
                dur="0.95s"
                begin={`${0.32 + idx * 0.08}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.62;1;0.62"
                dur="0.95s"
                begin={`${0.32 + idx * 0.08}s`}
                repeatCount="indefinite"
              />
            </tspan>
          ))}
        </text>
      </g>

      <g
        filter="url(#glow)"
        stroke="url(#neon)"
        fill="none"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="matrix(1.6898460388183594, 0, 0, 1.6613579988479614, -1499.164306640625, -364.5820007324219)"
      >
        <g>
          <circle cx="805" cy="260" r="118" opacity="0.98" />
          <path d="M 852.764 172.01 C 873.361 183.239 889.829 200.758 899.764 222.01" opacity="0.95" />
          <path d="M 901.208 255.237 C 903.958 268.429 903.958 282.045 901.208 295.237" opacity="0.65" />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1 1 805 260;1.03 1.03 805 260;1 1 805 260"
            dur="0.98s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.9;1;0.9"
            dur="0.98s"
            repeatCount="indefinite"
          />
        </g>
        <ellipse cx="805" cy="260" rx="218.91" ry="57.77" transform="rotate(22 805 260)" opacity="0.92" />
      </g>
    </svg>
  );
}

export function LoadingOverlay() {
  const router = useRouter();
  const pathname = usePathname();

  const [active, setActive] = useState(true);
  const navTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setActive(false), INITIAL_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const clearTimers = () => {
      if (navTimerRef.current) {
        window.clearTimeout(navTimerRef.current);
        navTimerRef.current = null;
      }
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };

    const handleClickCapture = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const targetPath = getInternalPath(anchor);
      if (!targetPath) return;

      event.preventDefault();
      clearTimers();
      setActive(true);

      navTimerRef.current = window.setTimeout(() => {
        router.push(targetPath);
      }, PRE_NAV_MS);
    };

    const handlePopState = () => {
      clearTimers();
      setActive(true);
    };

    document.addEventListener("click", handleClickCapture, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClickCapture, true);
      window.removeEventListener("popstate", handlePopState);
      clearTimers();
    };
  }, [router]);

  useEffect(() => {
    if (!active) return;

    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    hideTimerRef.current = window.setTimeout(() => {
      setActive(false);
      hideTimerRef.current = null;
    }, POST_NAV_MS);
  }, [pathname, active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-black">
      <AnimatedLoadingLogo />
    </div>
  );
}
