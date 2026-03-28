import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Testimonials | Shri Rajyog Astrologer — Real Stories, Real Results",
  description: "Read real testimonials from thousands of satisfied clients of Shri Rajyog Ji. Love back, marriage solutions, career growth — see what people are saying.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        {/* Page header */}
        <div style={{ background: "var(--bg-white)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(255,215,0,0.10) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Client Stories</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            Real People, <span className="gold-shimmer">Real Transformations</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 540, margin: "16px auto 0", lineHeight: 1.8 }}>
            Over 10,000 lives transformed. Here are some of the real stories shared by our clients.
          </p>
        </div>
        <StatsSection />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
