import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Black Magic Removal | Vikram Astrologer — Expert Spiritual Protection",
  description: "Expert black magic removal by Vikram Bhai Joshi. Detect & neutralize black magic, evil eye & negative energies. Vedic remedies for complete spiritual protection.",
};

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const symptoms = [
  "Unexplained pain or chronic illness",
  "Irregular heartbeats or breathing difficulties",
  "Chest pain without medical cause",
  "Persistent unhappiness despite outward success",
  "Chronic hunger, anxiety or indigestion",
  "Thoughts of giving up or extreme hopelessness",
  "Family members' health issues or sudden deaths",
  "Unexplained infertility in the family",
  "Irrational fear of death",
  "Sudden unexplained anger or behavioral changes",
  "Career disturbances and business downfall",
  "Severe recurring headaches and body pain",
  "Broken relationships without clear reason",
  "Complete loss of self-control",
];

const lifeEffects = [
  { area: "Career & Business", icon: "💼", desc: "Unexplained business failures, financial losses, sudden career setbacks and obstacles in professional growth." },
  { area: "Family Life", icon: "👨‍👩‍👧", desc: "Unnecessary stress, conflicts between family members, negative impact on children and household disharmony." },
  { area: "Health", icon: "🏥", desc: "Chronic health issues, recurring unexplained medical problems and persistent physical ailments." },
  { area: "Mental Peace", icon: "🧠", desc: "Mental disturbance, inner turmoil, abnormal behavior and complete disruption of mental peace and happiness." },
  { area: "Relationships", icon: "💔", desc: "Broken relationships, trust issues, sudden separation from loved ones without apparent cause." },
  { area: "Financial Stability", icon: "💰", desc: "Severe financial losses, inability to accumulate wealth despite hard work and persistent debt problems." },
];

export default function BlackMagicRemovalPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <div style={{ background: "var(--bg-cream)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(165,32,32,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Main Services</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">Black Magic</span> Removal
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.8 }}>
            Expert removal of black magic, evil eye and negative energies using potent Vedic energies combined with appropriate mantras for miraculous results.
          </p>
        </div>

        <section style={{ background: "var(--bg-white)", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* Warning signs */}
            <div style={{ marginBottom: 72 }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Warning Signs</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  Symptoms of <span className="gold-text">Black Magic</span>
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 540, margin: "16px auto 0", lineHeight: 1.8 }}>
                  If you are experiencing several of these symptoms persistently, black magic or negative energies may be affecting your life.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
                {symptoms.map((s, i) => (
                  <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 16px", background: i % 2 === 0 ? "var(--bg-light-yellow)" : "white", borderRadius: 0, border: "1px solid rgba(165,32,32,0.2)" }}>
                    <span style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(165,32,32,0.15)", border: "1px solid rgba(165,32,32,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-heading)", fontSize: "1.02rem", fontWeight: 700, color: "var(--gold-deep)", flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Life effects */}
            <div style={{ marginBottom: 72 }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Effects on Life</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  How Black Magic <span className="gold-text">Impacts Your Life</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                {lifeEffects.map((e) => (
                  <div key={e.area} className="mystical-card" style={{ padding: "24px", borderRadius: 0, background: "var(--card-bg)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 0, background: "rgba(165,32,32,0.12)", border: "1px solid rgba(165,32,32,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>{e.icon}</div>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.93rem", fontWeight: 700, color: "var(--text-primary)" }}>{e.area}</h4>
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution approach + CTA */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" }} className="service-detail-grid">
              <div style={{ background: "var(--bg-light-yellow)", borderRadius: 0, padding: "36px 28px", border: "1px solid rgba(165,32,32,0.3)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }}>Our Solution Approach</h3>
                {["Expert consultation to identify presence of black magic","Personalized Vedic remedies based on your situation","Powerful mantra chanting and ritual performance","Yantra-based protection and energy cleansing","Post-removal spiritual protection measures","Complete confidentiality throughout the process"].map((s) => (
                  <div key={s} style={{ display: "flex", gap: 10, marginBottom: 12, padding: "10px 14px", background: "var(--card-bg)", borderRadius: 8, border: "1px solid rgba(165,32,32,0.2)" }}>
                    <span style={{ color: "var(--gold-deep)", flexShrink: 0 }}>🛡️</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)" }}>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "var(--card-bg)", borderRadius: 0, padding: "36px 28px", border: "2px solid rgba(165,32,32,0.35)", boxShadow: "0 8px 32px rgba(120,18,18,0.1)", textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>🔮</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>Get Protection Today</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1.02rem", color: "var(--text-muted)", marginBottom: 24, lineHeight: 1.7 }}>
                  Don&apos;t suffer in silence. Vikram Bhai Joshi can detect and remove black magic with powerful Vedic remedies.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <a href={`tel:${PHONE}`} className="btn-gold" style={{ padding: "14px 28px", borderRadius: 8, fontSize: "0.94rem", justifyContent: "center" }}>📞 Call Now — FREE</a>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ padding: "14px 28px", borderRadius: 8, fontSize: "0.94rem", justifyContent: "center" }}>💬 WhatsApp Now</a>
                </div>
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
