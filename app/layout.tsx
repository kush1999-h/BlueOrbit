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
    default: "Blubit | Odoo Implementation & Customization in Bangladesh",
    template: "%s | Blubit",
  },
  description:
    "Complete ERP deployment, infrastructure, and intelligent business solutions with Blubit.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://blubit.com"),
  openGraph: {
    title: "Blubit | Odoo Implementation in Bangladesh",
    description:
      "Complete ERP deployment, infrastructure, and intelligent business solutions.",
    type: "website",
    images: [{ url: "/blue-orbit.svg", width: 1200, height: 630, alt: "Blubit Blue Orbit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blubit | Odoo Implementation in Bangladesh",
    description:
      "Complete ERP deployment, infrastructure, and intelligent business solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-orbit-dark font-sans text-gray-100 antialiased`}>
        <ThemeProvider>
          <LoadingOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

