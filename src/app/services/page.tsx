import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Main Services | Vikram Astrologer — Love, Marriage, Career & More",
  description: "Explore all main astrology services by Vikram Bhai Joshi — Love marriage solution, Kundali matching, Black magic removal, Child birth prediction, Career & business guidance & more.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        {/* Page header */}
        <div style={{ background: "var(--bg-cream)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(232,86,42,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Main Services</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">Vedic Solutions</span> for Every Problem
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 540, margin: "16px auto 0", lineHeight: 1.8 }}>
            25+ years of Vedic astrology expertise. Expert solutions for love, marriage, career, spiritual healing and more. Click any service for detailed information.
          </p>
        </div>
        <ProblemsSection />
        <ServicesSection />
        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
