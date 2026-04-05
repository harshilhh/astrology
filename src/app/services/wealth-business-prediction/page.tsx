import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Wealth & Business Prediction | Vikram Astrologer — Business Astrology",
  description: "Expert business and wealth astrology by Vikram Bhai Joshi. Planetary analysis for business success, optimal launch timing, 5-year & 10-year predictions.",
};

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const reportElements = [
  { icon: "🔭", title: "Lagna Examination", desc: "Ascendant analysis revealing personality strengths, leadership qualities and business aptitude." },
  { icon: "🏆", title: "10th House Lord", desc: "Analysis of the career house — identifies your most suitable profession and business sector." },
  { icon: "⏳", title: "Dasha Assessment", desc: "Current and upcoming planetary periods — identifying favorable and unfavorable business timing." },
  { icon: "⭐", title: "Nakshatra Evaluation", desc: "Birth constellation analysis for entrepreneurial strengths, business style and partnership compatibility." },
  { icon: "🪐", title: "Saturn Positioning", desc: "Saturn's crucial role in career stability, discipline, long-term business growth and success timing." },
  { icon: "🌟", title: "Self-Employment Indicators", desc: "5+ planets in specific house positions — identifying your entrepreneurial potential in your birth chart." },
];

const reportOptions = [
  { period: "5-Year Report", desc: "Comprehensive 5-year business outlook covering favorable periods, challenges and strategic opportunities." },
  { period: "10-Year Report", desc: "Long-term 10-year business prediction for major milestones, expansion timing and wealth accumulation." },
  { period: "Quarterly Report", desc: "Detailed quarterly predictions for tactical business planning and short-term decision-making." },
  { period: "Yearly Horoscope", desc: "Annual horoscope insights covering business trends, financial outlook and key dates for action." },
];

const successParameters = [
  "Strategic planning requirements",
  "Creativity and innovation needs",
  "Discipline and maturity approach",
  "Sales and marketing effectiveness",
  "Brand popularity and market presence",
  "Leadership and managerial skills",
  "Partnership compatibility assessment",
  "Risk identification and mitigation",
];

export default function WealthBusinessPredictionPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <div style={{ background: "var(--bg-cream)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(232,86,42,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Main Services</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">Wealth & Business</span> Prediction
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.8 }}>
            Expert planetary position analysis for financial and business outlook. Top-tier business astrology services by Vikram Bhai Joshi — identify ideal ventures and optimal launch timing.
          </p>
        </div>

        <section style={{ background: "var(--bg-white)", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* Report elements */}
            <div style={{ marginBottom: 72 }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Report Elements</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  What Our Business Report <span className="gold-text">Covers</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                {reportElements.map((e) => (
                  <div key={e.title} className="mystical-card" style={{ padding: "24px", borderRadius: 0, background: "var(--card-bg)" }}>
                    <div style={{ fontSize: "2rem", marginBottom: 12 }}>{e.icon}</div>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.02rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{e.title}</h4>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Report options + Success parameters */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 72 }} className="service-detail-grid">
              <div>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Report Options</span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 24 }}>Choose Your <span className="gold-text">Prediction Period</span></h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {reportOptions.map((r) => (
                    <div key={r.period} style={{ padding: "20px 24px", background: "var(--bg-light-yellow)", borderRadius: 12, border: "1px solid rgba(232,86,42,0.3)" }}>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.02rem", fontWeight: 700, color: "var(--gold-deep)", marginBottom: 6 }}>{r.period}</h4>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Success Factors</span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 24 }}>Key <span className="gold-text">Success Parameters</span></h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {successParameters.map((p) => (
                    <div key={p} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "var(--card-bg)", borderRadius: 0, border: "1px solid rgba(232,86,42,0.2)", boxShadow: "0 2px 8px rgba(120,18,18,0.05)" }}>
                      <span style={{ color: "var(--gold-amber)" }}>★</span>
                      <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.96rem", color: "var(--text-secondary)", fontWeight: 600 }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center", background: "var(--bg-light-yellow)", borderRadius: 0, border: "1px solid rgba(232,86,42,0.3)", padding: "56px 32px" }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>💰</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 900, color: "var(--text-primary)", marginBottom: 12 }}>
                Grow Your Business with Astrology
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.8 }}>
                Get your personalized business astrology report from Vikram Bhai Joshi. Identify ideal ventures, optimal timing and strategic guidance for sustained success.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={`tel:${PHONE}`} className="btn-gold" style={{ padding: "15px 44px", borderRadius: 8, fontSize: "0.96rem" }}>📞 Get A Quote</a>
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
