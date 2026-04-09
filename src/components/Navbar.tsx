"use client";
import React, { useState, useEffect } from "react";

const WA_LINK = `https://wa.me/919737168423`;

const navLinks = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  { label: "Services",     href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact",      href: "/contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled] = useState(false);
  const [menuOpen,  setMenuOpen] = useState(false);
  const [activeHref, setActive]  = useState("/");

  useEffect(() => {
    setActive(window.location.pathname);
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`nav-root${scrolled ? " nav-scrolled" : ""}`}>

        {/* Top accent bar */}
        <div className="nav-topline" />

        <div className="nav-inner">

          {/* ── Logo — LEFT ── */}
          <a href="/" className="nav-logo" aria-label="Vikram Astrology home">
            <img src="/logo1.webp" alt="" className="nav-logo-img" />
            <div className="nav-logo-text">
              <span className="nav-logo-name">Vikram Astrology</span>
              <span className="nav-logo-sub">Best Ambaji Upasak</span>
            </div>
          </a>

          {/* ── Nav links — CENTER ── */}
          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((l) => (
              <NavLink key={l.href} href={l.href} active={activeHref === l.href}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* ── CTA — RIGHT ── */}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="nav-cta">
            <span>Consult Now</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* ── Hamburger ── */}
          <button
            className={`nav-burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        <div className="nav-bottomline" />
      </header>

      {/* ── Mobile overlay ── */}
      <div className={`nav-overlay${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <svg className="overlay-mandala" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="190" stroke="#E8562A" strokeWidth="0.6" strokeDasharray="5 8" />
          <circle cx="200" cy="200" r="140" stroke="#E8562A" strokeWidth="0.4" />
          <circle cx="200" cy="200" r="90"  stroke="#F06830" strokeWidth="0.6" strokeDasharray="2 6" />
          <circle cx="200" cy="200" r="44"  stroke="#E8562A" strokeWidth="0.4" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 - 90) * Math.PI / 180;
            return <line key={i} x1={200+Math.cos(a)*47} y1={200+Math.sin(a)*47} x2={200+Math.cos(a)*188} y2={200+Math.sin(a)*188} stroke="#E8562A" strokeWidth="0.3" opacity="0.6"/>;
          })}
        </svg>

        <button className="overlay-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1L17 17M17 1L1 17" stroke="#2E1A1A" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <nav className="overlay-nav">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={`overlay-link${activeHref === l.href ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
              style={{ animationDelay: `${i * 55}ms` }}
            >
              <span className="overlay-num">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
          className="overlay-cta" onClick={() => setMenuOpen(false)}>
          Book Free Consultation
        </a>
      </div>

      <style>{`
        .nav-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          transition: box-shadow 0.4s ease;
        }
        .nav-scrolled {
          box-shadow: 0 1px 0 rgba(232,86,42,0.12), 0 8px 32px rgba(0,0,0,0.07);
        }
        .nav-topline {
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #A53A15 15%, #E8562A 35%, #F06830 50%, #E8562A 65%, #A53A15 85%, transparent 100%);
        }
        .nav-bottomline {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.15), transparent);
        }

        /* ── Inner ── */
        .nav-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 36px;
          display: flex;
          align-items: center;
          height: 72px;
          gap: 0;
          transition: height 0.4s ease;
        }
        .nav-scrolled .nav-inner { height: 60px; }

        /* ── Logo ── */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 11px;
          text-decoration: none;
          flex-shrink: 0;
          margin-right: 40px;
        }
        .nav-logo-img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          display: block;
          transition: transform 0.35s ease;
        }
        .nav-scrolled .nav-logo-img { width: 40px; height: 40px; }
        .nav-logo:hover .nav-logo-img { transform: scale(1.06); }
        .nav-logo-text { display: flex; flex-direction: column; gap: 3px; }
        .nav-logo-name {
          font-family: var(--font-display);
          font-size: 0.98rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          line-height: 1;
          background: linear-gradient(90deg, #B8401A 0%, #F06830 40%, #F5D8C8 55%, #F06830 75%, #B8401A 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .nav-logo-sub {
          font-family: var(--font-ui);
          font-size: 0.5rem;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: rgba(232,86,42,0.5);
          line-height: 1;
        }

        /* ── Nav links ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0;
          flex: 1;
          justify-content: center;
        }
        .nav-link-item {
          position: relative;
          font-family: var(--font-ui);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(46,26,26,0.55);
          text-decoration: none;
          padding: 8px 15px;
          transition: color 0.25s ease;
          white-space: nowrap;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          right: 50%;
          height: 1px;
          background: #E8562A;
          transition: left 0.28s ease, right 0.28s ease;
        }
        .nav-link-item:hover,
        .nav-link-item.active { color: #E8562A; }
        .nav-link-item:hover::after,
        .nav-link-item.active::after { left: 15px; right: 15px; }

        /* ── CTA ── */
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          font-family: var(--font-ui);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #fff;
          text-decoration: none;
          background: #E8562A;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }
        .nav-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: #A53A15;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.35s ease;
        }
        .nav-cta:hover { box-shadow: 0 6px 24px rgba(232,86,42,0.4); }
        .nav-cta:hover::before { transform: scaleX(1); transform-origin: left; }
        .nav-cta span, .nav-cta svg { position: relative; z-index: 1; }

        /* ── Hamburger ── */
        .nav-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          margin-left: auto;
        }
        .nav-burger span {
          display: block; width: 24px; height: 1.5px;
          background: #2E1A1A;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          transform-origin: center;
        }
        .nav-burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .nav-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ── Mobile overlay ── */
        .nav-overlay {
          position: fixed; inset: 0; z-index: 190;
          background: rgba(253,247,247,0.98);
          backdrop-filter: blur(24px);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          opacity: 0; pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .nav-overlay.open { opacity: 1; pointer-events: all; }
        .overlay-mandala {
          position: absolute;
          width: min(480px, 88vw); height: min(480px, 88vw);
          opacity: 0.06; pointer-events: none;
        }
        .overlay-close {
          position: absolute; top: 28px; right: 28px;
          background: none; border: 1px solid rgba(232,86,42,0.22);
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s;
        }
        .overlay-close:hover { background: rgba(232,86,42,0.06); }
        .overlay-nav {
          display: flex; flex-direction: column;
          align-items: center; gap: 2px;
          width: 100%; padding: 0 32px;
          position: relative; z-index: 1;
        }
        .overlay-link {
          display: flex; align-items: baseline; gap: 14px;
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 5.5vw, 2.4rem);
          font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(46,26,26,0.22);
          text-decoration: none;
          padding: 9px 24px; width: 100%; justify-content: center;
          transition: color 0.25s ease;
          animation: overlayIn 0.5s ease both;
          animation-play-state: paused;
        }
        .nav-overlay.open .overlay-link { animation-play-state: running; }
        @keyframes overlayIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .overlay-link:hover, .overlay-link.active { color: #E8562A; }
        .overlay-num {
          font-family: var(--font-ui); font-size: 0.56rem;
          letter-spacing: 0.2em; color: rgba(232,86,42,0.35);
          font-weight: 400; min-width: 18px;
        }
        .overlay-cta {
          margin-top: 40px; padding: 15px 48px;
          font-family: var(--font-ui); font-size: 0.74rem;
          font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: #fff;
          text-decoration: none;
          background: linear-gradient(135deg, #A53A15, #E8562A, #F06830);
          box-shadow: 0 8px 32px rgba(232,86,42,0.3);
          position: relative; z-index: 1;
        }

        /* ── Responsive ── */
        @media (max-width: 1080px) {
          .nav-links, .nav-cta { display: none !important; }
          .nav-burger { display: flex !important; }
          .nav-logo { margin-right: 0; }
        }
        @media (max-width: 480px) {
          .nav-inner { padding: 0 20px; }
        }
      `}</style>
    </>
  );
}

function NavLink({ href, active, children }: {
  href: string; active: boolean; children: React.ReactNode;
}) {
  return (
    <a href={href} className={`nav-link-item${active ? " active" : ""}`}>
      {children}
    </a>
  );
}
