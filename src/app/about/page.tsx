import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroBanner from "@/components/HeroBanner";
import PrivacySection from "@/components/PrivacySection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "About | Shri Rajyog Astrologer — 20+ Years Vedic Expert",
  description: "Learn about Shri Rajyog Ji — a certified Jyotish Acharya with 20+ years of Vedic astrology practice, 5000+ love problems resolved, and clients across India & abroad.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        {/* Page header */}
        <div style={{ background: "var(--bg-light-yellow)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(255,215,0,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>About Shri Rajyog</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">Trusted by Thousands,</span> Proven by Results
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 540, margin: "16px auto 0", lineHeight: 1.8 }}>
            Certified Jyotish Acharya with over two decades of practice in authentic Vedic astrology.
          </p>
        </div>
        <WhyChooseUs />
        <HeroBanner />
        <PrivacySection />
        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
