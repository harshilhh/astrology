import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Astrology Services | Vikram Astrologer — All 26 Services",
  description: "Complete list of astrology services by Vikram Bhai Joshi — Love problems, intercaste marriage, career, black magic removal, health, family, business, visa & more.",
};

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

const astrologyServices = [
  { title: "Talk To Astrologer Online", desc: "Phone consultation providing live insights and instant guidance for professional and personal challenges. Comprehensive kundali analysis, planetary transit evaluation and remedial measures.", href: "/services/talk-to-astrologer", icon: "📞" },
  { title: "Intercaste Love Marriage", desc: "Expert solutions for intercaste marriage challenges — shifting parental attitudes, overcoming social obstacles and maintaining post-marriage harmony.", href: "/services/love-marriage-solution", icon: "💍" },
  { title: "Career Astrology", desc: "Vedic and Western astrology integration for work profile, career prospects, future opportunities, job growth timing, income progression and sector suitability.", href: "/services/job-career-study", icon: "💼" },
  { title: "Extra Marital Affairs", desc: "Discreet and effective Vedic remedies to address extramarital situations, restore trust, and secure your partner's loyalty and commitment.", href: WA_LINK, icon: "💔" },
  { title: "Lucky Gems Stones", desc: "Birth chart-based precious gemstone recommendations to attract prosperity, health, love and positive planetary energies into your life.", href: "/services/talk-to-astrologer", icon: "💎" },
  { title: "Husband Wife Dispute", desc: "Horoscope-based solutions for marital conflicts. Restore peace, trust, love and harmony in your marriage with powerful Vedic remedies.", href: "/services/love-marriage-solution", icon: "🏠" },
  { title: "Personalized Problem Prediction", desc: "Detailed birth chart analysis providing personalized insights and predictions for your specific life situation, challenges and future opportunities.", href: WA_LINK, icon: "🔮" },
  { title: "Divorce Problem", desc: "Court case assistance and spiritual reconciliation techniques to prevent divorce and rebuild broken marriages through authentic Vedic methods.", href: "/services/love-marriage-solution", icon: "⚖️" },
  { title: "Marriage Problem Prediction", desc: "Thorough birth chart analysis for marital insights — optimal marriage timing, love vs arranged marriage likelihood, and delay remedies.", href: "/services/marriage-prediction", icon: "💒" },
  { title: "Family Problem", desc: "Solutions for family disputes, in-law conflicts, sibling disagreements and household harmony restoration using traditional Vedic guidance.", href: WA_LINK, icon: "👨‍👩‍👧‍👦" },
  { title: "One Time Payment — Life Time Safe", desc: "Single comprehensive consultation and remedy plan that provides lifetime guidance and protection. Permanent solutions through powerful Vedic rituals.", href: WA_LINK, icon: "🛡️" },
  { title: "In-Laws Problem", desc: "Astrological remedies and guidance to resolve conflicts with in-laws, improve family relationships and bring peace to your home environment.", href: WA_LINK, icon: "🤝" },
  { title: "Child Birth Issues", desc: "5th house affliction analysis, Jupiter and Saturn placement evaluation. Childbirth remedies, optimal parenthood timing and fertility potential assessment.", href: "/services/child-birth-issue", icon: "👶" },
  { title: "Love Life Problem", desc: "Comprehensive solutions for all love life challenges — breakups, one-sided love, partner ignoring you, trust issues and long-distance relationship problems.", href: "/services/love-marriage-solution", icon: "❤️" },
  { title: "Wealth & Health Prediction", desc: "Planetary position analysis for financial outlook, business prospects, health predictions and wealth generation strategies for the next 5-10 years.", href: "/services/wealth-business-prediction", icon: "💰" },
  { title: "Sexual Life Dissatisfaction", desc: "Confidential Vedic astrological guidance and remedies for intimacy issues, compatibility improvement and relationship fulfillment.", href: WA_LINK, icon: "🌹" },
  { title: "Business Problem", desc: "Expert business astrology — ideal venture identification, optimal launch timing, favorable vs unfavorable period identification and strategic planning guidance.", href: "/services/wealth-business-prediction", icon: "📈" },
  { title: "Ex Love Back", desc: "Powerful Vedic remedies to reunite with your lost love. Spiritual solutions addressing root astrological causes of separation and rekindling lost romance.", href: "/services/love-marriage-solution", icon: "💑" },
  { title: "Black Magic Removal", desc: "Expert detection and removal of black magic, evil eye and negative energies. Identifies symptoms, provides personalized Vedic remedies and complete spiritual protection.", href: "/services/black-magic-removal", icon: "🔮" },
  { title: "Lost Love Back", desc: "Authentic Vedic techniques combining planetary remedies, mantras and astrological guidance to bring back your lost love and restore your relationship.", href: "/services/love-marriage-solution", icon: "🌟" },
  { title: "Love Marriage Problem Solution", desc: "Specialized assistance for couples facing obstacles — intercaste unions, parental resistance, manglik dosha, Venus issues and third-party interference. 25+ years expertise.", href: "/services/love-marriage-solution", icon: "💝" },
  { title: "Break up Relationship", desc: "Heal broken bonds and restore broken relationships. Expert remedies addressing the planetary causes of separations and bringing couples back together.", href: "/services/love-marriage-solution", icon: "🩹" },
  { title: "Visa / Immigration Problem", desc: "Astrological guidance for visa delays, immigration hurdles and foreign travel obstacles. Planetary remedies to smoothen your path abroad.", href: WA_LINK, icon: "✈️" },
  { title: "Infertility of Family", desc: "Comprehensive fertility astrology including Saptamamsha chart analysis, planetary affliction identification and proven Vedic remedies for conception and healthy pregnancy.", href: "/services/child-birth-issue", icon: "🌱" },
  { title: "Property / Legal Disputes", desc: "Astrological insights for property matters, legal battles and court cases. Planetary timing analysis and remedies to support favorable outcomes.", href: WA_LINK, icon: "🏛️" },
  { title: "One Sided Love Problem", desc: "Transform unrequited love into mutual devotion. Ancient Vedic techniques to attract the feelings of your desired person naturally and ethically.", href: "/services/love-marriage-solution", icon: "💗" },
];

export default function AstrologyServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        {/* Page header */}
        <div style={{ background: "var(--bg-cream)", padding: "60px 24px 48px", textAlign: "center", borderBottom: "3px solid var(--gold-warm)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 80%, rgba(165,32,32,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
          <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Astrology Services</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontWeight: 900, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 12 }}>
            <span className="gold-shimmer">26 Specialized</span> Astrology Services
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "var(--text-secondary)", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.8 }}>
            Vikram Bhai Joshi offers comprehensive Vedic astrology services for every life problem. 25+ years of expertise, serving all religions globally from Ahmedabad, Gujarat.
          </p>
        </div>

        {/* Services grid */}
        <section style={{ background: "var(--bg-white)", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24, marginBottom: 60 }}>
              {astrologyServices.map((svc, i) => (
                <a
                  key={svc.title}
                  href={svc.href.startsWith("http") ? svc.href : svc.href}
                  target={svc.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="mystical-card"
                  style={{ display: "flex", gap: 18, padding: "24px", borderRadius: 0, textDecoration: "none", background: "var(--card-bg)", alignItems: "flex-start" }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(165,32,32,0.08)", border: "1px solid rgba(165,32,32,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                    {svc.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.74rem", fontWeight: 700, color: "var(--gold-deep)", opacity: 0.6 }}>{String(i + 1).padStart(2, "0")}</span>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.02rem", fontWeight: 700, letterSpacing: "0.04em", color: "var(--text-primary)" }}>{svc.title}</h3>
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{svc.desc}</p>
                    <div style={{ marginTop: 12, fontFamily: "var(--font-ui)", fontSize: "0.84rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-deep)" }}>Learn More →</div>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA box */}
            <div style={{ textAlign: "center", background: "var(--bg-light-yellow)", borderRadius: 0, border: "1px solid rgba(165,32,32,0.2)", padding: "56px 32px" }}>
              <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>Get A Quote</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 900, letterSpacing: "0.04em", color: "var(--text-primary)", marginBottom: 16 }}>
                Book Your Consultation Today
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.8 }}>
                The best Ambaji worshipper, your faithful companion in astrology. Available globally — call, WhatsApp or email anytime.
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
