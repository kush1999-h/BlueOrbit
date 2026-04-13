import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Blue Orbit Solutions | ERP, Cloud, Software, and Infrastructure in Bangladesh",
    template: "%s | Blue Orbit Solutions",
  },
  description:
    "Blue Orbit Solutions delivers Odoo, software development, websites, DevOps, infrastructure, IT audit, training, and strategic technology solutions in Bangladesh.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://blueorbit.com"),
  openGraph: {
    title: "Blue Orbit Solutions | Technology Solutions in Bangladesh",
    description:
      "ERP, software, websites, cloud, infrastructure, audit, training, and strategic technology delivery for Bangladesh.",
    type: "website",
    images: [{ url: "/blue-orbit.svg", width: 1200, height: 630, alt: "Blue Orbit Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Orbit Solutions | Technology Solutions in Bangladesh",
    description:
      "ERP, software, websites, cloud, infrastructure, audit, training, and strategic technology delivery for Bangladesh.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LoadingOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

