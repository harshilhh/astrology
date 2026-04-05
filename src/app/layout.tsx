import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikram Astrologer | Best Jyotish in Ahmedabad | +91-97371-68423",
  description:
    "Vikram Bhai Joshi — Best Ambaji Upasak & 5th Generation Vedic Astrologer in Ahmedabad. 25+ years experience, 90K+ consultations. Expert in love problems, kundali matching, black magic removal, marriage & career solutions. 100% confidential. Call +91-97371-68423",
  keywords: [
    "Vikram Astrologer",
    "best astrologer Ahmedabad",
    "Vikram Bhai Joshi",
    "Ambaji Upasak astrologer",
    "Vedic astrologer Gujarat",
    "love problem solution",
    "kundali matching",
    "black magic removal",
    "love marriage specialist",
    "intercaste marriage problem",
    "husband wife dispute solution",
    "career astrology",
    "child birth prediction",
    "business problem solution",
    "online astrology consultation",
    "marriage prediction",
    "divorce problem solution",
    "vashikaran specialist",
    "horoscope prediction",
    "Jyotish Ahmedabad",
  ].join(", "),
  openGraph: {
    title: "Vikram Astrologer | Best Jyotish in Ahmedabad",
    description:
      "25+ years Vedic astrology expertise. 90K+ consultations. Love, marriage, career & spiritual solutions. Call +91-97371-68423",
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
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Josefin+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#E8562A" />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
