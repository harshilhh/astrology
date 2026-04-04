import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Love Marriage Problem Solution | Vikram Astrologer — 25+ Years Expert",
  description: "Love marriage problem solution by Vikram Bhai Joshi. Expert solutions for intercaste marriage, breakups, ex love back, divorce, extramarital affairs. 25+ years experience.",
};

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const loveServices = [
  { icon: "💝", title: "Love Marriage Obstacles", desc: "Remove planetary obstacles blocking your love marriage. Get family blessings through powerful Vedic remedies." },
  { icon: "💔", title: "Break-up Resolution", desc: "Heal broken bonds, address root astrological causes of separation and restore your relationship." },
  { icon: "💗", title: "One-Sided Love", desc: "Transform unrequited love into mutual affection using authentic ancient Vedic techniques." },
  { icon: "🌈", title: "Intercaste Relationship", desc: "Navigate intercaste marriage challenges — parental approval, social acceptance and relationship stability." },
  { icon: "💑", title: "Ex-Partner Issues", desc: "Reunion with your ex-lover through powerful spiritual remedies addressing the astrological separation causes." },
  { icon: "⚖️", title: "Extramarital Affairs", desc: "Discreet Vedic guidance to address extramarital situations and restore marital fidelity and trust." },
  { icon: "📋", title: "Divorce Concerns", desc: "Spiritual reconciliation and court case support to prevent divorce and rebuild your marriage." },
  { icon: "🌹", title: "Love Life Complications", desc: "Comprehensive solutions for all love life challenges — trust issues, long distance, communication breakdowns." },
];

const astroFactors = [
  "Weakened 7th house (marriage relationships)",
  "5th house affliction (love and romance)",
  "8th house issues (physical relations)",
  "11th house weakening",
  "Malefic Mars, Jupiter, Rahu, Moon or Mercury",
  "Venus positioning and retrograde effects",
  "Missing Arudha/Upadha Lagna",
  "Zodiac sign incompatibility",
  "Manglik dosha presence",
];

const solutions = [
  "Mismatched Kundli resolution",
  "Manglik dosha remedies",
  "Relationship disaffection healing",
  "Third-party interference solutions",
  "Social factor resolution",
  "Post-marriage compatibility fixes",
  "Romance enhancement techniques",
  "Parental approval facilitation",
  "Gemstones and yantra remedies",
  "Positive vashikaran methods",
];

export default function LoveMarriageSolutionPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <div style={{ background: "var(--bg-cream)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(255,215,0,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Main Services</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">Love Marriage</span> Problem Solution
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.8 }}>
            Specialized assistance for couples facing relationship obstacles. 25+ years of experience in love marriage solutions by Vikram Bhai Joshi — Best Ambaji Upasak.
          </p>
        </div>

        <section style={{ background: "var(--bg-white)", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* Services grid */}
            <div style={{ marginBottom: 72 }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Love Problems We Solve</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  Our Services for Your <span className="gold-text">Love Problems</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
                {loveServices.map((s) => (
                  <a key={s.title} href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mystical-card" style={{ display: "block", padding: "24px", borderRadius: 0, textDecoration: "none", background: "var(--card-bg)" }}>
                    <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{s.icon}</div>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{s.title}</h4>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{s.desc}</p>
                    <div style={{ marginTop: 12, fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-deep)" }}>Get Solution →</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Astrological factors + Solutions */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 72 }} className="service-detail-grid">
              <div style={{ background: "var(--bg-light-yellow)", borderRadius: 0, padding: "36px 28px", border: "1px solid rgba(212,175,55,0.3)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }}>Astrological Root Causes</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: 20, lineHeight: 1.7 }}>
                  Planetary positions in your birth chart that are analyzed to identify the root cause of your love problems:
                </p>
                {astroFactors.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                    <span style={{ color: "var(--gold-deep)", flexShrink: 0, marginTop: 2 }}>◆</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text-secondary)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "var(--card-bg)", borderRadius: 0, padding: "36px 28px", border: "1px solid rgba(212,175,55,0.2)", boxShadow: "0 4px 20px rgba(180,140,0,0.08)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }}>Solutions Offered</h3>
                {solutions.map((s) => (
                  <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, padding: "8px 12px", background: "rgba(255,215,0,0.06)", borderRadius: 8 }}>
                    <span style={{ color: "var(--gold-amber)", flexShrink: 0 }}>✦</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text-secondary)" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience badge + CTA */}
            <div style={{ textAlign: "center", background: "var(--bg-light-yellow)", borderRadius: 0, border: "1px solid rgba(212,175,55,0.3)", padding: "56px 32px" }}>
              <div className="stars-rating" style={{ fontSize: "1.4rem", marginBottom: 16 }}>★★★★★</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "0.04em", color: "var(--text-primary)", marginBottom: 12 }}>
                25+ Years in Love Marriage Solutions
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.8 }}>
                Gemstones, yantras, positive vashikaran practices, rituals, yagnas and Kundli analysis — all with complete confidentiality.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={`tel:${PHONE}`} className="btn-gold" style={{ padding: "15px 44px", borderRadius: 8, fontSize: "0.85rem" }}>📞 Call Now — FREE</a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ padding: "15px 44px", borderRadius: 8, fontSize: "0.85rem" }}>💬 WhatsApp Now</a>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
      <style>{`@media (max-width: 768px) { .service-detail-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }`}</style>
    </>
  );
}
