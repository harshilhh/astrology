import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Kundali Matching | Vikram Astrologer — Horoscope Matching Expert",
  description: "Expert kundali matching & horoscope matching by Vikram Bhai Joshi using Astakoota (8 Gunas) system. Find your compatible partner. Ahmedabad, Gujarat.",
};

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const gunas = [
  { name: "Varna", points: 1, desc: "Caste/spiritual compatibility — measures spiritual evolution and values alignment." },
  { name: "Vashya", points: 2, desc: "Dominance and control dynamics — indicates attraction and influence between partners." },
  { name: "Tara", points: 3, desc: "Birth stars — determines relationship health, longevity and overall well-being together." },
  { name: "Yoni", points: 4, desc: "Intimacy and sexual compatibility — assesses physical and intimate harmony." },
  { name: "Graha Maitri", points: 5, desc: "Mental/intellectual compatibility — evaluates friendship, love and mental understanding." },
  { name: "Gana", points: 6, desc: "Temperament and personality alignment — indicates character compatibility and nature." },
  { name: "Bhakoot", points: 7, desc: "Marital prosperity and finances — assesses family welfare, love and prosperity." },
  { name: "Nadi", points: 8, desc: "Financial stability, health and childbirth prospects — most important guna for health." },
];

const scoreGuide = [
  { range: "Below 18", desc: "Marriage not advisable", color: "#D9582A" },
  { range: "18 – 24", desc: "Average, acceptable match", color: "#e67e22" },
  { range: "24 – 32", desc: "Extremely good — successful marriage", color: "#27ae60" },
  { range: "32 – 36", desc: "Superb match — perfect alignment", color: "#C4461E" },
];

export default function KundaliMatchingPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <div style={{ background: "var(--bg-cream)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(232,86,42,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Main Services</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">Kundali Matching</span> — Horoscope Matching
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.8 }}>
            Kundali matching by name and date of birth to find a compatible partner whose 36 gunas align with yours. Expert Astakoota analysis by Vikram Bhai Joshi.
          </p>
        </div>

        <section style={{ background: "var(--bg-white)", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* Methods */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 72 }} className="service-detail-grid">
              {[
                { icon: "📅", title: "Matching by Date of Birth", desc: "Using exact birth date, time and place for comprehensive planetary position analysis and compatibility assessment." },
                { icon: "📝", title: "Matching by Name", desc: "Name-based numerological compatibility analysis when birth details are unavailable. Uses the vibrational energy of names." },
              ].map((m) => (
                <div key={m.title} style={{ padding: "36px 32px", background: "var(--bg-light-yellow)", borderRadius: 0, border: "1px solid rgba(232,86,42,0.3)", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{m.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 12 }}>{m.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              ))}
            </div>

            {/* Gun Milan (8 Gunas) */}
            <div style={{ marginBottom: 72 }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Astakoota System</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  8 Gunas — <span className="gold-text">Gun Milan System</span>
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 540, margin: "16px auto 0", lineHeight: 1.8 }}>
                  The traditional Vedic system evaluates compatibility across 8 categories with a maximum score of 36 points.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
                {gunas.map((g) => (
                  <div key={g.name} className="mystical-card" style={{ padding: "24px", borderRadius: 0, background: "var(--card-bg)" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>{g.name}</h4>
                      <span style={{ fontFamily: "var(--font-ui)", fontSize: "1rem", fontWeight: 700, color: "var(--gold-deep)", background: "rgba(232,86,42,0.15)", borderRadius: 0, padding: "4px 10px", border: "1px solid rgba(232,86,42,0.3)" }}>{g.points} pts</span>
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Score Guide */}
            <div style={{ marginBottom: 72 }}>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Scoring Guidelines</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  Understanding Your <span className="gold-text">Score</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
                {scoreGuide.map((s) => (
                  <div key={s.range} style={{ padding: "28px 24px", borderRadius: 0, border: `2px solid ${s.color}40`, background: `${s.color}08`, textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", fontWeight: 700, color: s.color, marginBottom: 10 }}>{s.range}</div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "1.02rem", color: "var(--text-secondary)" }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits & CTA */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" }} className="service-detail-grid">
              <div style={{ background: "var(--bg-light-yellow)", borderRadius: 0, padding: "36px 28px", border: "1px solid rgba(232,86,42,0.3)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }}>Benefits of This Service</h3>
                {["Comprehensive compatibility assessment","Remedial measures for a happy marriage","Decision-making support with clear insights","Expert online consultation from Vikram Ji","Manglik dosha identification and remedies","Optimal marriage timing guidance"].map((b) => (
                  <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                    <span style={{ color: "var(--gold-amber)", flexShrink: 0 }}>★</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "1.02rem", color: "var(--text-secondary)" }}>{b}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "var(--card-bg)", borderRadius: 0, padding: "36px 28px", border: "2px solid rgba(232,86,42,0.35)", boxShadow: "0 8px 32px rgba(120,18,18,0.1)", textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>💒</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>Get Your Kundali Matched</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1.02rem", color: "var(--text-muted)", marginBottom: 24, lineHeight: 1.7 }}>
                  Consult Vikram Bhai Joshi for expert kundali matching and comprehensive compatibility analysis.
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
