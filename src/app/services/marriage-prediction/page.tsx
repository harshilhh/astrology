import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Marriage Prediction | Vikram Astrologer — Horoscope Marriage Analysis",
  description: "Marriage horoscope prediction by Vikram Bhai Joshi. Optimal timing, spouse compatibility, love vs arranged marriage analysis, divorce yoga identification.",
};

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const keyQuestions = [
  "When is the optimal time to get married?",
  "Will it be a love marriage or arranged marriage?",
  "What is the nature of my marriage and expectations?",
  "What is causing my marriage delay?",
  "How compatible am I with my potential partner?",
  "What are the child birth prospects after marriage?",
  "Is there any possibility of a second marriage?",
  "Will I have a foreign spouse or settle abroad?",
];

const predictionAreas = [
  { icon: "🔭", title: "Lagna Analysis", desc: "Ascendant evaluation for personality insights, marriage potential and life path direction." },
  { icon: "💒", title: "7th House Assessment", desc: "The primary house of marriage — planetary positions, aspects and strength evaluation for marital prospects." },
  { icon: "⏳", title: "Planetary Dasha", desc: "Evaluation of current and upcoming planetary periods for identifying the most favorable marriage timing." },
  { icon: "💑", title: "Compatibility Check", desc: "Comprehensive partner compatibility evaluation using both Kundali matching and birth chart analysis." },
  { icon: "⚖️", title: "Divorce Yoga", desc: "Identification of planetary combinations indicating marital discord and specific remedies to prevent divorce." },
  { icon: "❤️", title: "Love/Arranged Marriage", desc: "Astrological indicators revealing whether your marriage will be a love match or arranged by family." },
];

const serviceOptions = [
  { title: "Love Marriage Astrology", desc: "Insights into love relationships, compatibility and obstacles with your chosen partner." },
  { title: "Arranged Marriage Guidance", desc: "Astrological guidance for arranged marriage process, compatible match selection and timing." },
  { title: "Second Marriage Astrology", desc: "Analysis of second marriage prospects, timing and compatibility for those previously married." },
  { title: "Foreign Spouse Possibilities", desc: "Identification of planetary combinations indicating a foreign-born spouse or settling abroad after marriage." },
];

export default function MarriagePredictionPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <div style={{ background: "var(--bg-cream)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(255,215,0,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Main Services</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">Marriage Horoscope</span> Prediction
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.8 }}>
            Thorough birth chart analysis providing comprehensive marital insights — spouse/in-law relationships, optimal timing, compatibility assessment and stability evaluation.
          </p>
        </div>

        <section style={{ background: "var(--bg-white)", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* Key questions */}
            <div style={{ marginBottom: 72 }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Key Questions Answered</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  What We <span className="gold-text">Answer For You</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
                {keyQuestions.map((q, i) => (
                  <div key={q} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "16px", background: i % 2 === 0 ? "var(--bg-light-yellow)" : "white", borderRadius: 0, border: "1px solid rgba(212,175,55,0.2)" }}>
                    <span style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,215,0,0.2)", border: "1px solid rgba(212,175,55,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-heading)", fontSize: "0.65rem", fontWeight: 700, color: "var(--gold-deep)", flexShrink: 0 }}>Q</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prediction areas */}
            <div style={{ marginBottom: 72 }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Vedic Analysis</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  Areas of <span className="gold-text">Analysis</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                {predictionAreas.map((a) => (
                  <div key={a.title} className="mystical-card" style={{ padding: "24px", borderRadius: 0, background: "var(--card-bg)" }}>
                    <div style={{ fontSize: "2rem", marginBottom: 12 }}>{a.icon}</div>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{a.title}</h4>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service options */}
            <div style={{ marginBottom: 60 }}>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  Types of <span className="gold-text">Marriage Services</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
                {serviceOptions.map((s) => (
                  <div key={s.title} style={{ padding: "24px", background: "var(--bg-light-yellow)", borderRadius: 0, border: "1px solid rgba(212,175,55,0.3)" }}>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 10 }}>{s.title}</h4>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center", background: "var(--bg-light-yellow)", borderRadius: 0, border: "1px solid rgba(212,175,55,0.3)", padding: "56px 32px" }}>
              <div className="stars-rating" style={{ fontSize: "1.4rem", marginBottom: 16 }}>★★★★★</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 900, color: "var(--text-primary)", marginBottom: 12 }}>
                Know Your Marriage Future Today
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.8 }}>
                Get the best engagement and marriage timing, understand compatibility and receive remedies for a blissful married life from Vikram Bhai Joshi.
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
