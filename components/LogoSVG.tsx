import clsx from "clsx";
import Image from "next/image";

type LogoProps = {
  className?: string;
  withText?: boolean;
};

export function LogoSVG({ className }: LogoProps) {
  return (
    <Image
      src="/blue-orbit.svg"
      alt="Blubit Blue Orbit logo"
      width={480}
      height={152}
      priority
      className={clsx("h-10 w-auto object-contain", className)}
    />
  );
}
