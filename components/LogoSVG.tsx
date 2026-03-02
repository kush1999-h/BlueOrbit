"use client";

import clsx from "clsx";
import { useId } from "react";
import { useTheme } from "@/components/ThemeProvider";

type LogoProps = {
  className?: string;
  withText?: boolean;
};

export function LogoSVG({ className }: LogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const uid = useId().replace(/:/g, "");

  const neonId = `neon-${uid}`;
  const textGlowId = `text-glow-${uid}`;
  const glowId = `planet-glow-${uid}`;

  const textColor = isDark ? "#66d9ff" : "#3f7fc8";
  const strokeStart = isDark ? "#6ff6ff" : "#5b9be0";
  const strokeEnd = isDark ? "#00c7ff" : "#2c6fb7";

  return (
    <svg
      viewBox="-1513.7977 -362.2741 2720.8241 863.9062"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Blue Orbit logo"
      className={clsx("h-12 w-auto object-contain", className)}
    >
      <defs>
        <filter id={textGlowId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.2" result="tb" />
          <feMerge>
            <feMergeNode in="tb" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id={neonId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={strokeStart} />
          <stop offset="1" stopColor={strokeEnd} />
        </linearGradient>

        <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.25" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g id="wordmark" filter={`url(#${textGlowId})`} transform="matrix(1.6898460388183594, 0, 0, 1.6613579988479614, -1499.164306640625, -364.5820007324219)">
        <text
          x="197.553"
          y="305"
          fontFamily="Montserrat, Poppins, Inter, Arial, sans-serif"
          fontSize="118"
          fontWeight="700"
          letterSpacing="22"
          fill={textColor}
          opacity="0.95"
          style={{ whiteSpace: "pre" }}
        >
          BLUE
        </text>
        <text
          x="1033.9"
          y="305"
          fontFamily="Montserrat, Poppins, Inter, Arial, sans-serif"
          fontSize="118"
          fontWeight="700"
          letterSpacing="22"
          fill={textColor}
          opacity="0.95"
          style={{ whiteSpace: "pre" }}
        >
          ORBIT
        </text>
      </g>

      <g
        id="planet-icon"
        filter={`url(#${glowId})`}
        stroke={`url(#${neonId})`}
        fill="none"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="matrix(1.6898460388183594, 0, 0, 1.6613579988479614, -1499.164306640625, -364.5820007324219)"
      >
        <circle id="planet" cx="805" cy="260" r="118" opacity="0.98" />
        <g id="ring" transform="rotate(22 805 260)">
          <ellipse cx="805" cy="260" rx="218.91" ry="57.77" opacity="0.92" />
        </g>
        <path id="highlight-top" d="M 852.764 172.01 C 873.361 183.239 889.829 200.758 899.764 222.01" opacity="0.95" />
        <path id="highlight-mid" d="M 901.208 255.237 C 903.958 268.429 903.958 282.045 901.208 295.237" opacity="0.65" />
      </g>
    </svg>
  );
}
