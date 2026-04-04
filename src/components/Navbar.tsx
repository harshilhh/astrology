"use client";
import { useState, useEffect } from "react";

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Main Services", href: "/services" },
    { label: "Astrology Services", href: "/astrology-services" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
        background: scrolled
          ? "rgba(6,3,12,0.92)"
          : "linear-gradient(180deg, rgba(6,3,12,0.85) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(24px)" : "blur(8px)",
        borderBottom: scrolled ? "1px solid rgba(201,165,90,0.2)" : "1px solid transparent",
        padding: scrolled ? "12px 0" : "20px 0",
        boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.6)" : "none",
      }}>
        {/* Top gold hairline */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(201,165,90,0.6), rgba(242,201,76,0.8), rgba(201,165,90,0.6), transparent)",
        }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 14 }}>
            {/* Star of David / Yantra mark */}
            <div style={{ position: "relative", width: 38, height: 38, flexShrink: 0 }}>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                <polygon points="19,2 36,33 2,33" fill="none" stroke="#C9A55A" strokeWidth="1.2" opacity="0.9"/>
                <polygon points="19,36 2,5 36,5" fill="none" stroke="#F2C94C" strokeWidth="1.2" opacity="0.6"/>
                <circle cx="19" cy="19" r="5" fill="url(#navGold)" />
                <defs>
                  <radialGradient id="navGold" cx="35%" cy="30%">
                    <stop offset="0%" stopColor="#F2C94C"/>
                    <stop offset="100%" stopColor="#8B6830"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(0.8rem, 2vw, 1rem)",
                fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
                color: "#F2E8D5", lineHeight: 1,
              }} className="gold-shimmer">
                Vikram Astrology
              </div>
              <div style={{
                fontFamily: "var(--font-ui)", fontSize: "0.5rem", letterSpacing: "0.4em",
                textTransform: "uppercase", color: "rgba(201,165,90,0.7)", marginTop: 4,
              }}>
                Best Ambaji Upasak
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar-desktop" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={{
                fontFamily: "var(--font-ui)", fontSize: "0.62rem", letterSpacing: "0.18em",
                textTransform: "uppercase", color: "rgba(242,232,213,0.75)", textDecoration: "none",
                padding: "8px 14px", position: "relative", transition: "color 0.3s",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "#F2C94C";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(242,232,213,0.75)";
                }}
              >
                {link.label}
              </a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: "10px 24px", borderRadius: 0, fontSize: "0.58rem", marginLeft: 12, letterSpacing: "0.2em" }}>
              Free Consultation
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="navbar-mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "1px solid rgba(201,165,90,0.4)", padding: "10px 12px", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5 }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: 22, height: 1.5, background: "#C9A55A", transition: "all 0.3s",
                transform: menuOpen ? i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scaleX(0)" : "none",
              }} />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-mobile-menu" style={{
          display: menuOpen ? "flex" : "none",
          background: "rgba(6,3,12,0.97)", backdropFilter: "blur(24px)",
          borderTop: "1px solid rgba(201,165,90,0.2)",
          padding: "28px 32px", flexDirection: "column", gap: 6,
        }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "var(--font-ui)", fontSize: "0.7rem", letterSpacing: "0.22em",
              textTransform: "uppercase", color: "rgba(242,232,213,0.8)", textDecoration: "none",
              padding: "14px 0", borderBottom: "1px solid rgba(201,165,90,0.1)",
            }}>
              {link.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <a href={`tel:${PHONE}`} className="btn-gold" style={{ flex: 1, padding: "12px", textAlign: "center", justifyContent: "center", fontSize: "0.6rem" }}>
              📞 Call Now
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ flex: 1, padding: "12px", textAlign: "center", justifyContent: "center", fontSize: "0.6rem" }}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </header>

      <style>{`
        @media (min-width: 1001px) {
          .navbar-mobile-btn { display: none !important; }
          .navbar-mobile-menu { display: none !important; }
        }
        @media (max-width: 1000px) {
          .navbar-desktop { display: none !important; }
        }
      `}</style>
    </>
  );
}
