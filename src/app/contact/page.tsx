import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import PrivacySection from "@/components/PrivacySection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Contact | Shri Rajyog Astrologer — Get Free Consultation",
  description: "Contact Shri Rajyog Ji for a free consultation. Available 24/7 via phone or WhatsApp. Fast, confidential astrology solutions for all life problems.",
};

const PHONE = "+917021932472";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        {/* Page header */}
        <div style={{ background: "var(--bg-cream)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(255,215,0,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Get In Touch</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">Your Solution</span> Is One Call Away
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 540, margin: "16px auto 0", lineHeight: 1.8 }}>
            Reach out 24/7 — phone or WhatsApp. First consultation is completely free and confidential.
          </p>
        </div>

        {/* Contact cards */}
        <section style={{ background: "var(--bg-white)", padding: "80px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28, marginBottom: 60 }}>
              {[
                {
                  icon: "📞",
                  title: "Call Directly",
                  value: PHONE,
                  sub: "Available 24/7, All Days",
                  href: `tel:${PHONE}`,
                  btnText: "Call Now — FREE",
                  btnClass: "btn-gold",
                },
                {
                  icon: "💬",
                  title: "WhatsApp Chat",
                  value: "Chat Now",
                  sub: "Instant reply guaranteed",
                  href: WA_LINK,
                  btnText: "Open WhatsApp",
                  btnClass: "btn-wa",
                },
                {
                  icon: "🌙",
                  title: "Available 24/7",
                  value: "Round the Clock",
                  sub: "No appointment needed",
                  href: WA_LINK,
                  btnText: "Get Consultation",
                  btnClass: "btn-outline-gold",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="mystical-card"
                  style={{ borderRadius: 20, padding: "40px 32px", textAlign: "center", background: "white" }}
                >
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(212,175,55,0.08) 100%)", border: "2px solid rgba(212,175,55,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 20px" }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 10 }}>{item.title}</h3>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "var(--gold-deep)", marginBottom: 8 }}>{item.value}</div>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: 24 }}>{item.sub}</p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={item.btnClass}
                    style={{ padding: "12px 28px", borderRadius: 8, fontSize: "0.78rem", width: "100%", justifyContent: "center" }}
                  >
                    {item.btnText}
                  </a>
                </div>
              ))}
            </div>

            {/* Info box */}
            <div style={{ background: "var(--bg-light-yellow)", border: "1px solid rgba(212,175,55,0.35)", borderRadius: 20, padding: "40px 36px", textAlign: "center" }}>
              <div className="stars-rating" style={{ fontSize: "1.4rem", marginBottom: 12 }}>★★★★★</div>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1rem, 2.5vw, 1.3rem)", fontWeight: 700, color: "var(--gold-deep)", letterSpacing: "0.05em", marginBottom: 10, fontStyle: "italic" }}>
                &ldquo;You are just one call away from your solution.&rdquo;
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", marginBottom: 24, maxWidth: 500, margin: "0 auto 24px", lineHeight: 1.8 }}>
                Whatever problem you are facing — no matter how difficult — Shri Rajyog Ji has helped thousands like you find peace and happiness.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={`tel:${PHONE}`} className="btn-gold" style={{ padding: "14px 36px", borderRadius: 8, fontSize: "0.82rem" }}>📞 Call Now</a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ padding: "14px 36px", borderRadius: 8, fontSize: "0.82rem" }}>💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        <PrivacySection />
        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
