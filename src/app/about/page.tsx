import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroBanner from "@/components/HeroBanner";
import PrivacySection from "@/components/PrivacySection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "About Us | Vikram Bhai Joshi — Best Ambaji Upasak Astrologer",
  description: "Learn about Vikram Bhai Joshi — 5th generation Vedic astrologer & Best Ambaji Upasak with 25+ years experience, 90K+ consultations, serving all religions globally from Ahmedabad, Gujarat.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        {/* Page header */}
        <div style={{ background: "var(--bg-light-yellow)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(165,32,32,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>About Vikram Astrologer</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">Vikram Bhai Joshi</span> — Best Ambaji Upasak
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.8 }}>
            5th generation Vedic astrologer with 25+ years of practice and 90,000+ consultations. A beacon of wisdom combining traditional astrological knowledge with modern methodologies — serving all religions and castes globally from Ahmedabad, Gujarat.
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
