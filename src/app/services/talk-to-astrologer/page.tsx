import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Talk To Astrologer Online | Vikram Astrologer — Phone Consultation",
  description: "Online astrology consultation on call with Vikram Bhai Joshi. Comprehensive kundali analysis, planetary transit evaluation, instant guidance. Available 24/7.",
};

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const specializations = [
  { icon: "📊", title: "Business Problems", desc: "Success and industry recognition support through planetary analysis and targeted remedies." },
  { icon: "💍", title: "Marital Disputes", desc: "Horoscope-based solutions for spouse conflicts, trust issues and marriage problems." },
  { icon: "💒", title: "Marriage Delays", desc: "Astrological remedies to remove obstacles causing delay in marriage." },
  { icon: "💼", title: "Career & Job Issues", desc: "Address unfavorable planetary changes affecting your career growth and promotion." },
  { icon: "🔮", title: "Black Magic Removal", desc: "Expert remedies for black magic sabotage, evil eye and negative energy situations." },
  { icon: "💎", title: "Gemstone Recommendations", desc: "Birth chart-based precious stone suggestions for attracting positive energy." },
  { icon: "💑", title: "Matchmaking", desc: "Soul mate compatibility assistance through kundali analysis and gun milan." },
  { icon: "⏳", title: "Sade Sati Analysis", desc: "Seven-and-a-half-year Saturn cycle evaluation and remedies for challenges." },
  { icon: "🔢", title: "Numerology Consultations", desc: "Life event number influence analysis for better decision-making." },
  { icon: "✋", title: "Palmistry Readings", desc: "Hand pattern interpretation for insights into life, love and career." },
];

const benefits = [
  "Instant solutions without lengthy appointments",
  "Flexible scheduling options — available 24/7",
  "Unlimited questions during consultation",
  "Renowned expert with 25+ years experience",
  "Global accessibility — consult from anywhere",
  "Accurate guidance and remedial measures",
  "Complete confidentiality guaranteed",
  "Comprehensive life situation support",
];

export default function TalkToAstrologerPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        {/* Page header */}
        <div style={{ background: "var(--bg-cream)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(255,215,0,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Main Services</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">Talk To Astrologer</span> Online
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.8 }}>
            Online astrology consultation on call when in-person meetings aren&apos;t possible. Live insights and instant guidance maintaining the highest service standards.
          </p>
        </div>

        {/* Main content */}
        <section style={{ background: "var(--bg-white)", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* Intro */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 80, alignItems: "center" }} className="service-detail-grid">
              <div>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>What&apos;s Included</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, letterSpacing: "0.04em", color: "var(--text-primary)", marginBottom: 24 }}>
                  Comprehensive Phone <span className="gold-text">Consultation</span>
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {["Kundali astrological analysis via phone","Current planetary transit evaluation and impacts","Direct Q&A session with Vikram Bhai Joshi","Remedial measures for life challenges","Expert online guidance for improvement"].map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px", background: "var(--bg-light-yellow)", borderRadius: 0, border: "1px solid rgba(212,175,55,0.2)" }}>
                      <span style={{ color: "var(--gold-deep)", flexShrink: 0 }}>✦</span>
                      <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "var(--text-secondary)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "var(--bg-light-yellow)", borderRadius: 0, padding: "40px 32px", border: "1px solid rgba(212,175,55,0.3)", textAlign: "center" }}>
                <div style={{ fontSize: "3.5rem", marginBottom: 20 }}>📞</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }}>How To Book</h3>
                {["1. Make online payment or call directly","2. Submit your birth details & questions","3. Receive consultation within 48 hours"].map((step) => (
                  <p key={step} style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: 12, lineHeight: 1.6 }}>{step}</p>
                ))}
                <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12 }}>
                  <a href={`tel:${PHONE}`} className="btn-gold" style={{ padding: "14px 28px", borderRadius: 8, fontSize: "0.82rem", justifyContent: "center" }}>📞 Call Now — FREE</a>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ padding: "14px 28px", borderRadius: 8, fontSize: "0.82rem", justifyContent: "center" }}>💬 WhatsApp Now</a>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div style={{ marginBottom: 80 }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Specialized Services</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  Problems We <span className="gold-text">Solve</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                {specializations.map((s) => (
                  <div key={s.title} className="mystical-card" style={{ padding: "24px", borderRadius: 0, background: "var(--card-bg)" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,215,0,0.12)", border: "1px solid rgba(212,175,55,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: 14 }}>{s.icon}</div>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{s.title}</h4>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div style={{ background: "var(--bg-light-yellow)", borderRadius: 0, padding: "56px 40px", border: "1px solid rgba(212,175,55,0.3)" }}>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Key Benefits</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  Why Choose Online <span className="gold-text">Consultation?</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {benefits.map((b) => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", background: "var(--card-bg)", borderRadius: 0, border: "1px solid rgba(212,175,55,0.2)" }}>
                    <span style={{ color: "var(--gold-amber)", fontSize: "0.85rem" }}>★</span>
                    <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 600 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
      <style>{`@media (max-width: 768px) { .service-detail-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </>
  );
}
