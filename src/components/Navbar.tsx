"use client";
import { useState, useEffect } from "react";

const PHONE = "+917021932472";
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
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.4)" : "1px solid rgba(212,175,55,0.15)",
        padding: scrolled ? "10px 0" : "18px 0",
        boxShadow: scrolled ? "0 4px 24px rgba(180,140,0,0.12)" : "none",
      }}
    >
      {/* Top gold strip */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg, var(--gold-deep), var(--gold-glow), var(--gold-amber), var(--gold-glow), var(--gold-deep))",
      }} />

      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="9" fill="url(#navSunGrad)" />
            {[0,45,90,135,180,225,270,315].map((deg, i) => (
              <line key={i}
                x1={18 + Math.cos(deg * Math.PI / 180) * 12}
                y1={18 + Math.sin(deg * Math.PI / 180) * 12}
                x2={18 + Math.cos(deg * Math.PI / 180) * 16}
                y2={18 + Math.sin(deg * Math.PI / 180) * 16}
                stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"
              />
            ))}
            <defs>
              <radialGradient id="navSunGrad" cx="40%" cy="35%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#B8860B" />
              </radialGradient>
            </defs>
          </svg>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.9rem, 2.2vw, 1.15rem)", fontWeight: 900, letterSpacing: "0.12em" }} className="gold-shimmer">
              SHRI RAJYOG
            </span>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.6rem", letterSpacing: "0.3em", color: "var(--text-muted)", textTransform: "uppercase", marginTop: 3 }}>
              Expert Astrologer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gold-deep)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
            >
              {link.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold"
            style={{ padding: "10px 22px", fontSize: "0.68rem", borderRadius: 6 }}>
            Free Consultation
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "1px solid rgba(212,175,55,0.5)", borderRadius: 6, padding: "8px 12px", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: 22, height: 2, background: "var(--gold-deep)", borderRadius: 2, transition: "all 0.3s",
              transform: menuOpen ? i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scaleX(0)" : "none",
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "rgba(255,255,255,0.99)", borderTop: "1px solid rgba(212,175,55,0.3)", padding: "24px", display: "flex", flexDirection: "column", gap: 20 }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-secondary)", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold"
            style={{ padding: "12px 24px", fontSize: "0.8rem", borderRadius: 6, textAlign: "center" }}>
            Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}
