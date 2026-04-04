import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Live-in Partner Problem Solutions | Vikram Astrologer",
  description: "Expert solutions for live-in relationship problems by Vikram Bhai Joshi. Communication breakdowns, trust issues, financial disagreements, intimacy problems & more.",
};

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const problems = [
  { icon: "💬", title: "Communication Breakdowns", desc: "Restore open, healthy communication channels using Vedic remedies for mercury and Jupiter planetary strengthening." },
  { icon: "🔐", title: "Trust & Loyalty Concerns", desc: "Address infidelity fears, past betrayals and rebuild unshakeable trust through targeted astrological remedies." },
  { icon: "💰", title: "Financial Disagreements", desc: "Resolve money conflicts, spending differences and financial planning disputes that strain your relationship." },
  { icon: "❤️", title: "Intimacy & Emotional Connection", desc: "Reignite passion, deepen emotional bonds and address physical intimacy issues through Vedic techniques." },
  { icon: "⚔️", title: "Conflicts & Arguments", desc: "Identify the planetary root causes of recurring arguments and apply targeted remedies to restore harmony." },
  { icon: "🧩", title: "Compatibility Understanding", desc: "Comprehensive astrological compatibility analysis to understand core differences and bridge them effectively." },
];

const solutions = [
  { icon: "💞", title: "Bond Strengthening", desc: "Powerful Vedic rituals and mantras to strengthen the emotional and spiritual bond between partners." },
  { icon: "🤝", title: "Trust & Intimacy Rebuilding", desc: "Step-by-step astrological remedies to rebuild broken trust and restore intimate connection." },
  { icon: "📢", title: "Communication Enhancement", desc: "Mercury-strengthening remedies and practical guidance for improving communication patterns." },
  { icon: "💸", title: "Financial Challenge Resolution", desc: "Wealth and prosperity remedies addressing financial conflicts and creating abundance in the relationship." },
  { icon: "🔥", title: "Passion Rekindling", desc: "Ancient Vedic techniques to rekindle romance, restore attraction and bring back excitement in your relationship." },
  { icon: "🌈", title: "Long-term Harmony", desc: "Comprehensive remedies for sustained relationship harmony, happiness and mutual growth." },
];

export default function LiveInPartnerSolutionPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        <div style={{ background: "var(--bg-cream)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(255,215,0,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Main Services</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">Live-in Partner</span> Problem Solutions
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.8 }}>
            Expert astrological solutions for all live-in relationship challenges. Vikram Bhai Joshi helps couples address communication, trust, financial and intimacy issues.
          </p>
        </div>

        <section style={{ background: "var(--bg-white)", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            {/* Problems */}
            <div style={{ marginBottom: 72 }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Issues Addressed</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  Problems We <span className="gold-text">Solve</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                {problems.map((p) => (
                  <div key={p.title} className="mystical-card" style={{ padding: "24px", borderRadius: 0, background: "var(--card-bg)" }}>
                    <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{p.icon}</div>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{p.title}</h4>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div style={{ marginBottom: 60 }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Support Provided</span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)" }}>
                  Our Solutions For <span className="gold-text">You</span>
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                {solutions.map((s) => (
                  <a key={s.title} href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mystical-card" style={{ display: "block", padding: "24px", borderRadius: 0, textDecoration: "none", background: "var(--bg-light-yellow)", border: "1px solid rgba(212,175,55,0.3)" }}>
                    <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{s.icon}</div>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{s.title}</h4>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>{s.desc}</p>
                    <div style={{ marginTop: 12, fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-deep)" }}>Get Help →</div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center", background: "var(--bg-light-yellow)", borderRadius: 0, border: "1px solid rgba(212,175,55,0.3)", padding: "56px 32px" }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>💑</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 900, color: "var(--text-primary)", marginBottom: 12 }}>
                Restore Harmony in Your Relationship
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.8 }}>
                Every relationship challenge has an astrological root cause. Vikram Bhai Joshi helps identify and eliminate these root causes for lasting harmony.
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
    </>
  );
}
