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
        {/* Hero Banner */}
        <div className="lms-hero">
          <img src="/relationship-dispute.png" alt="Love Marriage Solution" className="lms-hero-img" />
          <div className="lms-hero-overlay" />
          <div className="lms-hero-content">
            <div className="lms-hero-label">
              <span className="lms-hero-dot" />
              Vedic Love & Marriage Solutions
            </div>
            <h1 className="lms-hero-title">
              <span className="lms-hero-line">Love Marriage</span>
              <span className="lms-hero-line lms-hero-line--accent"><em>Problem Solution</em></span>
            </h1>
            <p className="lms-hero-sub">
              Specialized assistance for couples facing relationship obstacles. 25+ years of experience by Vikram Bhai Joshi — Best Ambaji Upasak.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="lms-hero-btn">
              Book Free Consultation
            </a>
          </div>
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
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.02rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{s.title}</h4>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{s.desc}</p>
                    <div style={{ marginTop: 12, fontFamily: "var(--font-ui)", fontSize: "0.84rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-deep)" }}>Get Solution →</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Astrological factors + Solutions */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 72 }} className="service-detail-grid">
              <div style={{ background: "var(--bg-light-yellow)", borderRadius: 0, padding: "36px 28px", border: "1px solid rgba(232,86,42,0.3)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }}>Astrological Root Causes</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1.02rem", color: "var(--text-muted)", marginBottom: 20, lineHeight: 1.7 }}>
                  Planetary positions in your birth chart that are analyzed to identify the root cause of your love problems:
                </p>
                {astroFactors.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                    <span style={{ color: "var(--gold-deep)", flexShrink: 0, marginTop: 2 }}>◆</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "var(--card-bg)", borderRadius: 0, padding: "36px 28px", border: "1px solid rgba(232,86,42,0.2)", boxShadow: "0 4px 20px rgba(120,18,18,0.08)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }}>Solutions Offered</h3>
                {solutions.map((s) => (
                  <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, padding: "8px 12px", background: "rgba(232,86,42,0.06)", borderRadius: 8 }}>
                    <span style={{ color: "var(--gold-amber)", flexShrink: 0 }}>✦</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience badge + CTA */}
            <div style={{ textAlign: "center", background: "var(--bg-light-yellow)", borderRadius: 0, border: "1px solid rgba(232,86,42,0.3)", padding: "56px 32px" }}>
              <div className="stars-rating" style={{ fontSize: "1.4rem", marginBottom: 16 }}>★★★★★</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "0.04em", color: "var(--text-primary)", marginBottom: 12 }}>
                25+ Years in Love Marriage Solutions
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.8 }}>
                Gemstones, yantras, positive vashikaran practices, rituals, yagnas and Kundli analysis — all with complete confidentiality.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={`tel:${PHONE}`} className="btn-gold" style={{ padding: "15px 44px", borderRadius: 8, fontSize: "0.96rem" }}>📞 Call Now — FREE</a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ padding: "15px 44px", borderRadius: 8, fontSize: "0.96rem" }}>💬 WhatsApp Now</a>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
      <style>{`
        .lms-hero {
          position: relative;
          width: 100%;
          height: 420px;
          overflow: hidden;
        }
        .lms-hero-img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .lms-hero-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(90deg, rgba(15,5,2,0.88) 0%, rgba(15,5,2,0.6) 38%, rgba(15,5,2,0.18) 62%, transparent 100%),
            linear-gradient(to top, rgba(15,5,2,0.5) 0%, transparent 35%);
        }
        .lms-hero-content {
          position: absolute; inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 60px;
          max-width: 680px;
        }
        .lms-hero-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-ui);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #F5D6A8;
          margin-bottom: 18px;
        }
        .lms-hero-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #E8562A;
          box-shadow: 0 0 8px rgba(232,86,42,0.6);
        }
        .lms-hero-title {
          margin: 0;
          line-height: 1.1;
        }
        .lms-hero-line {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4.5vw, 3rem);
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #FFF5EB;
        }
        .lms-hero-line--accent em {
          font-style: italic;
          color: #F0A56C;
        }
        .lms-hero-sub {
          font-family: var(--font-body);
          font-size: clamp(0.88rem, 1.8vw, 1rem);
          color: rgba(255,245,235,0.75);
          line-height: 1.75;
          margin: 18px 0 28px;
          max-width: 480px;
        }
        .lms-hero-btn {
          display: inline-block;
          width: fit-content;
          font-family: var(--font-ui);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #fff;
          background: #E8562A;
          padding: 14px 36px;
          text-decoration: none;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .lms-hero-btn:hover {
          background: #D14A22;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .lms-hero { height: 320px; }
          .lms-hero-content { padding: 0 28px; }
          .service-detail-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 480px) {
          .lms-hero { height: 280px; }
          .lms-hero-content { padding: 0 20px; }
        }
      `}</style>
    </>
  );
}
