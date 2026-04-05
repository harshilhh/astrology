import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Child Birth Prediction | Vikram Astrologer — Fertility Astrology Expert",
  description: "Child birth prediction and fertility astrology by Vikram Bhai Joshi. 5th house analysis, childbirth remedies, optimal parenthood timing. Ahmedabad, Gujarat.",
};

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const astrologyAnalysis = [
  { icon: "⭐", title: "5th House Analysis", desc: "Primary indicator of childbirth. Afflictions to the 5th house are the leading cause of childlessness." },
  { icon: "🌿", title: "9th House Assessment", desc: "Evaluates the man's procreation ability and fertility potential through planetary positions." },
  { icon: "🌟", title: "Jupiter/Putrakaraka Planet", desc: "Jupiter as the significator of children — its strength, placement and aspects assessed comprehensively." },
  { icon: "💫", title: "7th House Fertility", desc: "Evaluates procreation potential and physical relationship compatibility between partners." },
  { icon: "🪐", title: "Saturn Influence", desc: "Saturn's position and aspects on relevant houses for identifying delays or karmic obstacles to parenthood." },
  { icon: "🔮", title: "Saptamamsha Chart", desc: "The divisional chart specifically dedicated to children — provides deep insights into parenthood prospects." },
];

const childlessnessReasons = [
  "Infertility issues (male or female)",
  "Repeated miscarriages",
  "Child loss in early stages",
  "Medical factors (identified astrologically)",
  "5th house planetary afflictions",
  "Jupiter's weakened position",
  "Karmic obstacles from past life",
  "Unfavorable dasha periods for conception",
];

const services = [
  "Childbirth astrology remedies and rituals",
  "Progeny effects — positive and negative assessment",
  "Optimal parenthood timing identification",
  "Child nature and parent relationship prediction",
  "Fertility potential assessment for both partners",
  "Miscarriage prevention Vedic remedies",
  "Post-conception protection rituals",
  "Birth chart analysis of both partners",
];

export default function ChildBirthIssuePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <div style={{ background: "var(--bg-cream)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(165,32,32,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Main Services</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">Child Birth</span> Prediction & Solutions
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.8 }}>
            Not all couples are fortunate enough to experience the joys of parenthood. Vikram Bhai Joshi provides comprehensive fertility astrology analysis and powerful Vedic remedies.
          </p>
        </div>

        <section style={{ background: "var(--bg-white)", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* Astrological Analysis */}
            <div style={{ marginBottom: 72 }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Astrological Analysis</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  What We <span className="gold-text">Analyze</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                {astrologyAnalysis.map((a) => (
                  <div key={a.title} className="mystical-card" style={{ padding: "24px", borderRadius: 0, background: "var(--card-bg)" }}>
                    <div style={{ fontSize: "2rem", marginBottom: 12 }}>{a.icon}</div>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.02rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{a.title}</h4>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Causes + Services */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 72 }} className="service-detail-grid">
              <div style={{ background: "var(--bg-light-yellow)", borderRadius: 0, padding: "36px 28px", border: "1px solid rgba(165,32,32,0.3)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }}>Childlessness Causes Addressed</h3>
                {childlessnessReasons.map((r) => (
                  <div key={r} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                    <span style={{ color: "var(--gold-deep)", flexShrink: 0 }}>◆</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)" }}>{r}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "var(--card-bg)", borderRadius: 0, padding: "36px 28px", border: "1px solid rgba(165,32,32,0.2)", boxShadow: "0 4px 20px rgba(120,18,18,0.08)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }}>Our Services</h3>
                {services.map((s) => (
                  <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, padding: "8px 12px", background: "rgba(165,32,32,0.06)", borderRadius: 8 }}>
                    <span style={{ color: "var(--gold-amber)", flexShrink: 0 }}>✦</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center", background: "var(--bg-light-yellow)", borderRadius: 0, border: "1px solid rgba(165,32,32,0.3)", padding: "56px 32px" }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>👶</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "0.04em", color: "var(--text-primary)", marginBottom: 12 }}>
                Experience the Joy of Parenthood
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.8 }}>
                Vikram Bhai Joshi analyzes both partners&apos; birth charts and provides specific remedy recommendations for fertility, conception and healthy pregnancy.
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
      <style>{`@media (max-width: 768px) { .service-detail-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }`}</style>
    </>
  );
}
