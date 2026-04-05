import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Job, Career & Study Report | Vikram Astrologer — Career Astrology",
  description: "Career prediction by date of birth by Vikram Bhai Joshi. Vedic astrology for job opportunities, career growth, education, income progression and promotion likelihood.",
};

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const careerTopics = [
  { icon: "🎓", title: "Education Prospects", desc: "Astrological analysis of educational success, suitable fields of study and academic performance timing." },
  { icon: "💼", title: "Job Opportunities", desc: "Planetary timing for job applications, career changes and favorable employment periods." },
  { icon: "📈", title: "Career Growth Timing", desc: "Identify the most favorable dasha periods for promotions, recognition and professional advancement." },
  { icon: "💰", title: "Income Progression", desc: "Financial astrology for salary growth, wealth accumulation and income improvement strategies." },
  { icon: "⭐", title: "Promotion Likelihood", desc: "Analysis of leadership potential, recognition prospects and promotion timing in your career." },
  { icon: "⚠️", title: "Risk Identification", desc: "Identify planetary challenges, potential career obstacles and how to navigate them successfully." },
  { icon: "🏢", title: "Sector Suitability", desc: "Identify which industries, professions and work environments are most compatible with your chart." },
  { icon: "🤝", title: "Workplace Relationships", desc: "Astrological guidance for supervisor and colleague relationships, conflict resolution and teamwork." },
];

const remedies = [
  { icon: "🕉️", title: "Mantra Chanting", desc: "Specific planetary mantras based on your birth chart to strengthen favorable planets and neutralize malefic ones." },
  { icon: "💎", title: "Gemstone Recommendations", desc: "Precious and semi-precious gemstones prescribed based on your planetary positions for career enhancement." },
  { icon: "🙏", title: "Pooja Performance", desc: "Specific poojas and rituals dedicated to career-ruling planets for professional growth and success." },
  { icon: "📊", title: "Kundali-Based Strategy", desc: "Comprehensive career strategies based on your unique birth chart analysis and planetary strengths." },
];

export default function JobCareerStudyPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <div style={{ background: "var(--bg-cream)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(165,32,32,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Main Services</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">Job, Career</span> & Study Report
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.8 }}>
            Integration of Vedic and Western astrology for work profile, career prospects and future opportunities analysis. High accuracy predictions with 7-day delivery.
          </p>
        </div>

        <section style={{ background: "var(--bg-white)", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* Benefits highlight */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20, marginBottom: 72 }}>
              {[
                { icon: "🎯", title: "High Accuracy", desc: "Precise predictions" },
                { icon: "⏰", title: "7-Day Delivery", desc: "Fast report turnaround" },
                { icon: "📧", title: "Email & Phone", desc: "Prompt responses" },
                { icon: "🌍", title: "Global Access", desc: "Consult from anywhere" },
              ].map((b) => (
                <div key={b.title} style={{ padding: "24px 20px", background: "var(--bg-light-yellow)", borderRadius: 0, border: "1px solid rgba(165,32,32,0.3)", textAlign: "center" }}>
                  <div style={{ fontSize: "2.2rem", marginBottom: 10 }}>{b.icon}</div>
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.96rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{b.title}</h4>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "1.02rem", color: "var(--text-muted)" }}>{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Career topics */}
            <div style={{ marginBottom: 72 }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Topics Covered</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  Career Astrology <span className="gold-text">Coverage</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
                {careerTopics.map((t) => (
                  <div key={t.title} className="mystical-card" style={{ padding: "24px", borderRadius: 0, background: "var(--card-bg)" }}>
                    <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{t.icon}</div>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.02rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{t.title}</h4>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Remedies */}
            <div style={{ marginBottom: 60 }}>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Remedies Suggested</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  Career <span className="gold-text">Enhancement Remedies</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
                {remedies.map((r) => (
                  <div key={r.title} style={{ padding: "24px", background: "var(--bg-light-yellow)", borderRadius: 0, border: "1px solid rgba(165,32,32,0.3)" }}>
                    <div style={{ fontSize: "2rem", marginBottom: 12 }}>{r.icon}</div>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.02rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{r.title}</h4>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center", background: "var(--bg-light-yellow)", borderRadius: 0, border: "1px solid rgba(165,32,32,0.3)", padding: "56px 32px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 900, color: "var(--text-primary)", marginBottom: 12 }}>
                Accelerate Your Career Growth
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.8 }}>
                Get your personalized career astrology report with email or phone consultation. Smart, calculated decision-making support from Vikram Bhai Joshi.
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
    </>
  );
}
