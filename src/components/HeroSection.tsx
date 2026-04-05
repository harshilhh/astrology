"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { TimelineContent } from "@/components/ui/timeline-animation";

const PHONE = "+919737168423";
const WA_LINK = `https://wa.me/${PHONE.replace(/\D/g, "")}`;

/* ── Carousel slides ── */
const slides = [
  {
    img: "/couple-dispute.png",
    label: "Husband-Wife Dispute",
    headline: "Resolve Relationship Conflicts",
    sub: "Expert guidance for marital harmony",
    heroLine1: "Resolve Your",
    heroLine2: "Relationship Issues",
    heroTag: "Expert Vedic solutions to heal marital disputes and restore love, trust and harmony in your life.",
  },
  {
    img: "/child-pregnancy.png",
    label: "Child & Pregnancy",
    headline: "Blessings of Parenthood",
    sub: "Vedic solutions for childbirth issues",
    heroLine1: "Child &",
    heroLine2: "Pregnancy Solutions",
    heroTag: "Divine Vedic remedies and astrological guidance to bless your life with the joy of parenthood.",
  },
  {
    img: "/business-problem.png",
    label: "Business Problems",
    headline: "Overcome Business Challenges",
    sub: "Astrological solutions for business success",
    heroLine1: "Solve Your",
    heroLine2: "Business Problems",
    heroTag: "Expert Vedic guidance to overcome business obstacles and achieve lasting success and growth.",
  },
];

/* ── Service cards ── */
const serviceCards = [
  { name: "Vedic Kundali Reading", desc: "Unlock the secrets of your birth chart", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 3a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1z", href: "/services", tag: "Most Popular" },
  { name: "Love & Marriage",       desc: "Kundali matching & love problem solutions", icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z", href: "/services", tag: "Expert Guidance" },
  { name: "Kundali Matching",      desc: "Sacred compatibility analysis for couples", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", href: "/services", tag: "Vedic Tradition" },
  { name: "Black Magic Removal",   desc: "Powerful protection & spiritual cleansing", icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.23 9.36-7 10.58-3.77-1.22-7-5.75-7-10.58V6.3l7-3.12z", href: "/services", tag: "Proven Remedies" },
  { name: "Career & Business",     desc: "Astrological guidance for success & growth", icon: "M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z", href: "/services", tag: "Life Changing" },
  { name: "Horoscope Forecast",    desc: "Daily, monthly & yearly predictions", icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z", href: "/services", tag: "Daily Guidance" },
  { name: "Vastu Consultation",    desc: "Harmonise your home & workplace energy", icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z", href: "/services", tag: "Sacred Space" },
  { name: "Child Birth Prediction", desc: "Divine guidance for parenthood & family planning", icon: "M12 2C9.24 2 7 4.24 7 7c0 2.85 2.92 7.21 5 9.88 2.11-2.69 5-7 5-9.88 0-2.76-2.24-5-5-5zm0 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM5 20h14v2H5v-2z", href: "/services", tag: "Family Blessing" },
  { name: "Visa & Immigration",    desc: "Astrological remedies for travel & settlement abroad", icon: "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z", href: "/services", tag: "Global Guidance" },
];

const statsData = [
  { num: 25, suffix: "+", label: "Years Experience" },
  { num: 90000, suffix: "+", label: "Consultations" },
  { num: 5, suffix: "th Gen", label: "Astrologer" },
  { num: 4.9, suffix: "★", label: "Client Rating", decimals: 1 },
];

function AnimatedStat({ num, suffix, label, decimals = 0, active }: {
  num: number; suffix: string; label: string; decimals?: number; active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) { setCount(0); return; }
    let current = 0;
    const duration = 2200;
    const step = (num / duration) * 16;
    const timer = setInterval(() => {
      current += step;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [active, num, decimals]);

  const display = decimals > 0 ? count.toFixed(decimals) : count.toLocaleString();

  return (
    <div style={{ flex: 1, textAlign: "center", padding: "0 24px" }}>
      <div style={{
        fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
        fontWeight: 700, fontStyle: "italic", lineHeight: 1, color: "var(--text-primary)",
        marginBottom: 8,
      }}>
        {display}{suffix}
      </div>
      <div style={{
        fontFamily: "var(--font-ui)", fontSize: "0.62rem", fontWeight: 600,
        letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-muted)",
      }}>
        {label}
      </div>
    </div>
  );
}

/* ── Hero Carousel component ── */
function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    setCurrent(idx);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <div className="hero-carousel">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`carousel-slide${i === current ? " active" : ""}`}
          aria-hidden={i !== current}
        >
          <img
            src={slide.img}
            alt={slide.headline}
            className="carousel-bg"
          />
          {/* Gradient overlay */}
          <div className="carousel-overlay" />

          {/* Slide text */}
          <div className="carousel-text">
            <span className="carousel-label">{slide.label}</span>
            <h2 className="carousel-headline">{slide.headline}</h2>
            <p className="carousel-sub">{slide.sub}</p>
          </div>
        </div>
      ))}

      {/* ── Left hero text overlay (changes per slide) ── */}
      <div className="hero-left-overlay" key={current}>
        <div className="hero-left-label">
          <span className="hero-left-label-dot" />
          Vedic Astrologer &bull; Ahmedabad
        </div>
        <h1 className="hero-left-name">
          <span className="hero-left-name-line hero-left-anim hero-left-anim--1">{slides[current].heroLine1}</span>
          <span className="hero-left-name-line hero-left-anim hero-left-anim--2"><em>{slides[current].heroLine2}</em></span>
        </h1>
        <p className="hero-left-tagline hero-left-anim hero-left-anim--3">
          {slides[current].heroTag}
        </p>
      </div>

      {/* Prev / Next arrows */}
      <button className="carousel-arrow carousel-prev" onClick={prev} aria-label="Previous slide">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button className="carousel-arrow carousel-next" onClick={next} aria-label="Next slide">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      {/* Dot navigation */}
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="carousel-progress">
        <div key={current} className="carousel-progress-bar" />
      </div>
    </div>
  );
}

/* ── Main Hero Section ── */
export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={sectionRef} style={{ background: "var(--bg-void)", paddingTop: 77 }}>

      {/* ════ CAROUSEL ════ */}
      <div style={{ width: "100%" }}>
        <HeroCarousel />
      </div>

      {/* ════ MARQUEE BAR ════ */}
      <div className="hero-marquee-wrapper">
        <div className="hero-marquee-track">
          {[...Array(2)].map((_, setIdx) => (
            <React.Fragment key={setIdx}>
              {[
                ["Love Problem Solution","प्रेम समस्या समाधान"],
                ["Kundali Matching","कुंडली मिलान"],
                ["Black Magic Removal","काला जादू निवारण"],
                ["Love Marriage Specialist","प्रेम विवाह विशेषज्ञ"],
                ["Husband-Wife Dispute","पति-पत्नी विवाद"],
                ["Career & Business Growth","करियर और व्यापार वृद्धि"],
                ["Child Birth Prediction","संतान प्राप्ति"],
                ["Marriage Prediction","विवाह भविष्यवाणी"],
                ["Intercaste Marriage","अंतरजातीय विवाह"],
                ["Ex Love Back","खोया प्यार वापस"],
                ["Visa Immigration Problem","वीज़ा इमिग्रेशन समस्या"],
                ["Vastu Consultation","वास्तु परामर्श"],
              ].map(([en, hi]) => (
                <span key={`${setIdx}-${en}`} className="hero-marquee-item">✦ {en} • {hi}</span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ════ STATS BAR ════ */}
      <div ref={statsRef} style={{
        background: "#fff", padding: "52px 32px",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "center",
        }} className="stats-bar-row">
          {statsData.map((s, i) => (
            <React.Fragment key={s.label}>
              <AnimatedStat {...s} active={statsActive} />
              {i < statsData.length - 1 && (
                <div style={{ width: 1, height: 48, background: "rgba(0,0,0,0.1)", flexShrink: 0 }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ════ ABOUT SECTION ════ */}
      <section className="about-simple">
        <div className="about-simple-inner">
          {/* Left — Photo */}
          <div className="about-simple-photo">
            <Image
              src="/about-vikram.jpg"
              alt="Vikram Bhai Joshi — Best Ambaji Upasak Astrologer"
              width={540}
              height={620}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              priority
            />
          </div>

          {/* Right — Text */}
          <div className="about-simple-text">
            <h2 className="about-simple-heading">
              About <span className="about-simple-line" />
            </h2>

            <p className="about-simple-body">
              The quest for clarity and purpose burns within all of us. Our journey through
              life and the mysteries we face have driven seekers to the stars for centuries,
              searching for answers that transcend the ordinary.
            </p>

            <p className="about-simple-body">
              Pandit Vikram Bhai Joshi is here to guide you through life&#39;s challenges
              and unlock the wisdom hidden in your Kundali — helping you navigate love,
              career, health and spirituality with the sacred knowledge passed down through
              five generations of Vedic practice.
            </p>

            {/* Experience badge */}
            <div className="about-simple-exp">
              <div className="about-simple-exp-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8562A" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="2" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="22" y2="12" />
                </svg>
              </div>
              <span className="about-simple-exp-num">25+</span>
              <div className="about-simple-exp-label">
                <span>Years Of</span>
                <strong>Experience</strong>
              </div>
            </div>

            <a href="/about" className="btn-gold" style={{
              padding: "14px 36px", fontSize: "0.85rem", letterSpacing: "0.15em",
            }}>
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* ════ SERVICE CARDS ════ */}
      <section style={{ background: "#f5e8e0", padding: "64px 32px 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <TimelineContent as="div" animationNum={5} timelineRef={sectionRef}
          style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="section-label" style={{ marginBottom: 14, display: "inline-block" }}>Our Expertise</span>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3.5vw,2.5rem)",
            fontWeight: 700, letterSpacing: "0.06em", color: "var(--text-primary)", marginTop: 14,
          }}>
            Services That <span className="gold-text">Transform Lives</span>
          </h2>
        </TimelineContent>

        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {serviceCards.map((card, index) => (
            <TimelineContent key={card.name} as="a" animationNum={index + 6}
              timelineRef={sectionRef} href={card.href} style={{
                position: "relative", aspectRatio: "16/10", borderRadius: 12,
                overflow: "hidden", display: "block", textDecoration: "none",
                border: "1px solid rgba(232,86,42,0.12)", boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                background: "linear-gradient(135deg, rgba(50,20,10,0.85) 0%, rgba(80,30,15,0.75) 50%, rgba(50,20,10,0.9) 100%)",
              }}>
              <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(232,86,42,0.85)", backdropFilter: "blur(8px)", color: "#fff", fontFamily: "var(--font-ui)", fontSize: "0.64rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4 }}>{card.tag}</div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 16px 16px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.88rem,1.8vw,1.1rem)", fontWeight: 700, letterSpacing: "0.05em", color: "#fff", marginBottom: 3, lineHeight: 1.2 }}>{card.name}</h3>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.74rem", color: "rgba(255,255,255,0.72)", letterSpacing: "0.03em" }}>{card.desc}</p>
              </div>
            </TimelineContent>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
          <a href="/services" className="btn-gold" style={{
            padding: "15px 38px", fontSize: "0.88rem", letterSpacing: "0.15em",
          }}>
            Explore More Services
          </a>
        </div>
        </div>
      </section>

      <style>{`
        /* ── Carousel ── */
        .hero-carousel {
          position: relative;
          width: 100%;
          height: 720px;
          overflow: hidden;
        }
        .carousel-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.7s ease;
          pointer-events: none;
        }
        .carousel-slide.active {
          opacity: 1;
          pointer-events: all;
        }
        .carousel-bg {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .carousel-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(90deg, rgba(20,8,4,0.82) 0%, rgba(20,8,4,0.55) 40%, rgba(20,8,4,0.15) 65%, transparent 100%),
            linear-gradient(to top, rgba(20,8,4,0.6) 0%, transparent 40%);
        }
        .carousel-text {
          position: absolute;
          bottom: 0; right: 0;
          padding: 20px 24px;
          text-align: right;
          max-width: 400px;
        }
        .carousel-label {
          display: inline-block;
          font-family: var(--font-ui);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(245,216,200,0.9);
          background: rgba(232,86,42,0.55);
          padding: 3px 10px;
          border-radius: 2px;
          margin-bottom: 8px;
        }
        .carousel-headline {
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 3.5vw, 1.5rem);
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #fff;
          line-height: 1.2;
          margin: 0 0 4px;
        }
        .carousel-sub {
          font-family: var(--font-ui);
          font-size: 0.7rem;
          color: rgba(255,255,255,0.72);
          letter-spacing: 0.06em;
          margin: 0;
        }

        /* ── Left hero text ── */
        .hero-left-overlay {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 55%;
          z-index: 8;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 0 40px clamp(28px, 5vw, 72px);
          pointer-events: none;
        }
        .hero-left-overlay > * { pointer-events: auto; }

        .hero-left-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-ui);
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-bottom: 16px;
        }
        .hero-left-label-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #E8562A;
          box-shadow: 0 0 8px rgba(232,86,42,0.6);
          animation: heroDotPulse 2s ease infinite;
        }
        @keyframes heroDotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.4); }
        }

        .hero-left-name {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: 0.03em;
          color: #fff;
          margin: 0 0 20px;
          text-shadow: 0 4px 40px rgba(0,0,0,0.4);
        }
        .hero-left-name-line {
          display: block;
        }
        .hero-left-name em {
          font-style: italic;
          color: #E8562A;
          text-shadow: 0 0 60px rgba(232,86,42,0.3);
        }

        .hero-left-tagline {
          font-family: var(--font-body);
          font-size: clamp(0.9rem, 1.8vw, 1.12rem);
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
          max-width: 420px;
          margin: 0 0 32px;
        }

        /* Staggered entrance */
        .hero-left-anim {
          animation: heroLeftReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hero-left-anim--1 { animation-delay: 0.15s; }
        .hero-left-anim--2 { animation-delay: 0.3s; }
        .hero-left-anim--3 { animation-delay: 0.45s; }
        @keyframes heroLeftReveal {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-left-overlay { width: 80%; padding-left: 24px; padding-bottom: 60px; }
          .hero-left-name { font-size: clamp(2rem, 8vw, 3.2rem); }
          .hero-left-tagline { font-size: 0.85rem; max-width: 300px; }
          .hero-left-cta { padding: 14px 28px; font-size: 0.7rem; }
        }
        @media (max-width: 480px) {
          .hero-left-overlay { width: 90%; padding-bottom: 70px; }
        }

        /* Arrows */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 34px; height: 34px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 50%;
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          z-index: 10;
        }
        .carousel-arrow:hover {
          background: rgba(232,86,42,0.7);
          transform: translateY(-50%) scale(1.08);
        }
        .carousel-prev { left: 12px; }
        .carousel-next { right: 12px; }

        /* Dots */
        .carousel-dots {
          position: absolute;
          bottom: 14px; right: 16px;
          display: flex; gap: 6px;
          z-index: 10;
        }
        .carousel-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          border: none; cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .carousel-dot.active {
          background: #fff;
          width: 20px;
          border-radius: 3px;
        }

        /* Progress bar */
        .carousel-progress {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: rgba(255,255,255,0.15);
          z-index: 10;
        }
        .carousel-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #E8562A, #F06830);
          animation: carouselProgress 5s linear forwards;
        }
        @keyframes carouselProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* ── About Simple Section ── */
        .about-simple {
          width: 100%;
          padding: 80px 32px;
          background: var(--bg-void);
        }
        .about-simple-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .about-simple-photo {
          overflow: hidden;
        }
        .about-simple-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .about-simple-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #E8562A;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }
        .about-simple-line {
          display: inline-block;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #E8562A, #F06830);
        }
        .about-simple-body {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.6vw, 1.08rem);
          color: var(--text-secondary);
          line-height: 1.85;
          margin-bottom: 18px;
        }
        .about-simple-exp {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 16px 0 32px;
        }
        .about-simple-exp-icon {
          width: 56px; height: 56px;
          border-radius: 50%;
          border: 1.5px solid rgba(232,86,42,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .about-simple-exp-num {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 700;
          color: #E8562A;
          line-height: 1;
        }
        .about-simple-exp-label {
          font-family: var(--font-ui);
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          color: var(--text-secondary);
          line-height: 1.3;
          display: flex;
          flex-direction: column;
        }
        .about-simple-exp-label strong {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 0.06em;
        }
        @media (max-width: 768px) {
          .about-simple { padding: 48px 20px; }
          .about-simple-inner {
            grid-template-columns: 1fr !important;
            gap: 32px;
          }
          .about-simple-photo { max-width: 420px; margin: 0 auto; }
          .about-simple-text { align-items: center; text-align: center; }
          .about-simple-heading { justify-content: center; }
          .about-simple-exp { justify-content: center; }
        }

        /* ── Marquee Bar ── */
        .hero-marquee-wrapper {
          width: 100%;
          overflow: hidden;
          background: linear-gradient(90deg, #F9F0E8, #F5E8E0, #F9F0E8);
          border-top: 1px solid rgba(232,86,42,0.15);
          border-bottom: 1px solid rgba(232,86,42,0.15);
        }
        .hero-marquee-track {
          display: flex;
          width: max-content;
          animation: heroMarqueeScroll 30s linear infinite;
        }
        .hero-marquee-item {
          display: inline-flex;
          align-items: center;
          padding: 14px 32px;
          font-family: var(--font-ui);
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(232,86,42,0.85);
          white-space: nowrap;
          border-right: 1px solid rgba(232,86,42,0.12);
        }
        @keyframes heroMarqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .stats-bar-row { flex-wrap: wrap !important; gap: 24px 0; }
          .stats-bar-row > div[style*="width: 1px"] { display: none; }
        }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .hero-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .hero-carousel { height: 560px; } }
        @media (max-width: 480px) { .hero-carousel { height: 440px; } }
      `}</style>
    </div>
  );
}
