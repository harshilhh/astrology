import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shri Rajyog Astrologer | Love Problem Solution | +91-7021932472",
  description:
    "Shri Rajyog Astrologer — Trusted love guru with 20+ years experience. Instant solutions for love problems, ex back, breakup, vashikaran, black magic removal, marriage issues & more. 100% confidential. Call +91-7021932472",
  keywords: [
    "Shri Rajyog Astrologer",
    "love problem solution",
    "astrologer near me",
    "vashikaran specialist",
    "love vashikaran",
    "ex love back",
    "breakup solution",
    "love marriage specialist",
    "black magic removal",
    "intercaste marriage problem",
    "husband wife dispute solution",
    "best astrologer India",
    "online astrology consultation",
    "horoscope prediction",
    "delay in marriage solution",
    "divorce problem solution",
    "childbirth problem",
    "career astrology",
    "business problem solution",
  ].join(", "),
  openGraph: {
    title: "Shri Rajyog Astrologer | One Call Away From Solution",
    description:
      "Fast, accurate & 100% confidential astrology guidance. Love, marriage, career & spiritual solutions. Call +91-7021932472",
    type: "website",
    images: ["/hero-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
