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
  { name: "Love Problems", desc: "Expert solutions for all love-related issues", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop", href: "/services/love-marriage-solution" },
  { name: "Intercaste Love Marriage", desc: "Remove family & social obstacles for love marriage", img: "/services/intercaste-love-marriage.jpg", href: "/services/love-marriage-solution" },
  { name: "Relationship Problem", desc: "Heal broken bonds & restore harmony in relationships", img: "/services/relationship-problem.jpg", href: "/services/love-marriage-solution" },
  { name: "Husband & Wife Problem", desc: "Restore love, trust & peace in your marriage", img: "/services/husband-wife-problem.jpg", href: "/services/love-marriage-solution" },
  { name: "Extra Marital Affairs", desc: "Discreet Vedic guidance to restore marital fidelity", img: "/services/extra-marital-affair.jpg", href: "/services/love-marriage-solution" },
  { name: "Divorce Problem", desc: "Prevent divorce & rebuild your marriage with Vedic remedies", img: "/services/divorce-problem.jpg", href: "/services/love-marriage-solution" },
  { name: "Education & Jobs Problems", desc: "Overcome academic & career obstacles with astrology", img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&h=400&fit=crop", href: "/services/job-career-study" },
  { name: "Career & Financial Problems", desc: "Astrological guidance for wealth & professional growth", img: "/services/finance-problem.jpg", href: "/services/wealth-business-prediction" },
  { name: "Health Problems", desc: "Vedic remedies for chronic health issues & well-being", img: "/services/health-problem.jpg", href: "/services" },
  { name: "Family Problems", desc: "Resolve family disputes & restore peace at home", img: "/services/family-problem.jpg", href: "/services" },
  { name: "Child Birth Issues", desc: "Divine guidance for parenthood & family planning", img: "/services/child-birth-issue.jpg", href: "/services/child-birth-issue" },
  { name: "Property & Legal Disputes", desc: "Astrological solutions for property & court cases", img: "/services/property-problem.jpg", href: "/services" },
  { name: "Black Magic Removal", desc: "Powerful protection & spiritual cleansing from negativity", img: "/services/black-magic-removal.jpg", href: "/services/black-magic-removal" },
  { name: "Business Problem", desc: "Overcome business obstacles & achieve lasting success", img: "/services/business-problem.jpg", href: "/services/wealth-business-prediction" },
  { name: "Visa/Immigration Problem", desc: "Astrological remedies for travel & settlement abroad", img: "/services/visa-problem.jpg", href: "/services" },
];

const statsData = [
  { num: 25, suffix: "+", label: "Years Experience" },
  { num: 90000, suffix: "+", label: "Consultations" },
  { num: 5, suffix: "th Gen", label: "Astrologer", hasSup: true },
  { num: 4.9, suffix: "/5", label: "Client Rating", decimals: 1 },
];

function AnimatedStat({ num, suffix, label, decimals = 0, active, hasSup = false }: {
  num: number; suffix: string; label: string; decimals?: number; active: boolean; hasSup?: boolean;
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
        fontWeight: 400, fontStyle: "italic", lineHeight: 1, color: "var(--text-primary)",
        marginBottom: 8,
      }}>
        {display}{hasSup ? <><sup style={{ fontSize:"0.45em", fontWeight:300, verticalAlign:"super" }}>th</sup>{" Gen"}</> : suffix}
      </div>
      <div style={{
        fontFamily: "var(--font-ui)", fontSize: "0.62rem", fontWeight: 400,
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
      <section style={{ background: "#f5e8e0", padding: "64px 32px 96px", position: "relative", overflow: "hidden" }}>
        {/* Animated astrology circles */}
        <div className="svc-astro-circle svc-astro-circle--1">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="190" stroke="#E8562A" strokeWidth="1.5" opacity="0.25" />
            <circle cx="200" cy="200" r="160" stroke="#E8562A" strokeWidth="0.8" opacity="0.18" strokeDasharray="5 7" />
            <circle cx="200" cy="200" r="120" stroke="#E8562A" strokeWidth="1" opacity="0.2" />
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i * 30) * Math.PI / 180;
              return <line key={i} x1={200 + Math.cos(a) * 120} y1={200 + Math.sin(a) * 120} x2={200 + Math.cos(a) * 190} y2={200 + Math.sin(a) * 190} stroke="#E8562A" strokeWidth="0.6" opacity="0.2" />;
            })}
            <circle cx="200" cy="200" r="70" stroke="#E8562A" strokeWidth="0.6" opacity="0.15" strokeDasharray="3 5" />
            <circle cx="200" cy="200" r="30" fill="#E8562A" opacity="0.06" />
          </svg>
        </div>
        <div className="svc-astro-circle svc-astro-circle--2">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="190" stroke="#E8562A" strokeWidth="1.2" opacity="0.22" />
            <circle cx="200" cy="200" r="150" stroke="#E8562A" strokeWidth="0.8" opacity="0.16" strokeDasharray="4 6" />
            <circle cx="200" cy="200" r="100" stroke="#E8562A" strokeWidth="1" opacity="0.2" />
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i * 30) * Math.PI / 180;
              return <line key={i} x1={200 + Math.cos(a) * 100} y1={200 + Math.sin(a) * 100} x2={200 + Math.cos(a) * 190} y2={200 + Math.sin(a) * 190} stroke="#E8562A" strokeWidth="0.5" opacity="0.18" />;
            })}
            <circle cx="200" cy="200" r="50" stroke="#E8562A" strokeWidth="0.6" opacity="0.12" />
            <circle cx="200" cy="200" r="20" fill="#E8562A" opacity="0.05" />
          </svg>
        </div>

        <div className="svc-astro-circle svc-astro-circle--3">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="190" stroke="#E8562A" strokeWidth="1" opacity="0.18" />
            <circle cx="200" cy="200" r="140" stroke="#E8562A" strokeWidth="0.6" opacity="0.12" strokeDasharray="6 5" />
            <circle cx="200" cy="200" r="80" stroke="#E8562A" strokeWidth="0.8" opacity="0.15" />
            {Array.from({ length: 8 }).map((_, i) => {
              const a = (i * 45) * Math.PI / 180;
              return <line key={i} x1={200 + Math.cos(a) * 80} y1={200 + Math.sin(a) * 80} x2={200 + Math.cos(a) * 190} y2={200 + Math.sin(a) * 190} stroke="#E8562A" strokeWidth="0.4" opacity="0.12" />;
            })}
            <circle cx="200" cy="200" r="30" fill="#E8562A" opacity="0.04" />
          </svg>
        </div>
        <div className="svc-astro-circle svc-astro-circle--4">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="190" stroke="#E8562A" strokeWidth="0.8" opacity="0.15" />
            <circle cx="200" cy="200" r="130" stroke="#E8562A" strokeWidth="0.5" opacity="0.1" strokeDasharray="3 7" />
            <circle cx="200" cy="200" r="60" stroke="#E8562A" strokeWidth="0.6" opacity="0.12" />
            <circle cx="200" cy="200" r="20" fill="#E8562A" opacity="0.04" />
          </svg>
        </div>
        <div className="svc-astro-circle svc-astro-circle--6">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="190" stroke="#E8562A" strokeWidth="1" opacity="0.2" />
            <circle cx="200" cy="200" r="145" stroke="#E8562A" strokeWidth="0.6" opacity="0.14" strokeDasharray="5 6" />
            <circle cx="200" cy="200" r="90" stroke="#E8562A" strokeWidth="0.8" opacity="0.16" />
            {Array.from({ length: 10 }).map((_, i) => {
              const a = (i * 36) * Math.PI / 180;
              return <line key={i} x1={200 + Math.cos(a) * 90} y1={200 + Math.sin(a) * 90} x2={200 + Math.cos(a) * 190} y2={200 + Math.sin(a) * 190} stroke="#E8562A" strokeWidth="0.4" opacity="0.14" />;
            })}
            <circle cx="200" cy="200" r="40" fill="#E8562A" opacity="0.04" />
          </svg>
        </div>
        <div className="svc-astro-circle svc-astro-circle--5">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="190" stroke="#E8562A" strokeWidth="1.2" opacity="0.2" />
            <circle cx="200" cy="200" r="155" stroke="#E8562A" strokeWidth="0.5" opacity="0.14" strokeDasharray="4 8" />
            <circle cx="200" cy="200" r="110" stroke="#E8562A" strokeWidth="0.8" opacity="0.16" />
            {Array.from({ length: 6 }).map((_, i) => {
              const a = (i * 60) * Math.PI / 180;
              return <line key={i} x1={200 + Math.cos(a) * 110} y1={200 + Math.sin(a) * 110} x2={200 + Math.cos(a) * 190} y2={200 + Math.sin(a) * 190} stroke="#E8562A" strokeWidth="0.5" opacity="0.14" />;
            })}
            <circle cx="200" cy="200" r="50" stroke="#E8562A" strokeWidth="0.4" opacity="0.1" />
          </svg>
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
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
              timelineRef={sectionRef} href={card.href} className="svc-card" style={{
                position: "relative", aspectRatio: "16/10", borderRadius: 12,
                overflow: "hidden", display: "block", textDecoration: "none",
                border: "1px solid rgba(232,86,42,0.12)", boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              }}>
              <img src={card.img} alt={card.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }} className="svc-card-img" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,5,2,0.85) 0%, rgba(10,5,2,0.4) 45%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 16px 16px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.88rem,1.8vw,1.1rem)", fontWeight: 700, letterSpacing: "0.05em", color: "#fff", marginBottom: 3, lineHeight: 1.2 }}>{card.name}</h3>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.74rem", color: "rgba(255,255,255,0.72)", letterSpacing: "0.03em", margin: 0 }}>{card.desc}</p>
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
          object-position: 85% center;
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
        .svc-card:hover .svc-card-img { transform: scale(1.08); }

        .svc-astro-circle {
          position: absolute;
          pointer-events: none;
        }
        .svc-astro-circle--1 {
          top: -10%;
          left: -8%;
          width: 600px;
          height: 600px;
          animation: svc-spin 55s linear infinite;
        }
        .svc-astro-circle--2 {
          bottom: -15%;
          right: -6%;
          width: 420px;
          height: 420px;
          animation: svc-spin-rev 45s linear infinite;
        }
        .svc-astro-circle--3 {
          top: 40%;
          right: 15%;
          width: 280px;
          height: 280px;
          animation: svc-spin 70s linear infinite;
        }
        .svc-astro-circle--4 {
          bottom: 5%;
          left: 10%;
          width: 200px;
          height: 200px;
          animation: svc-spin-rev 50s linear infinite;
        }
        .svc-astro-circle--6 {
          bottom: 30%;
          left: -160px;
          width: 320px;
          height: 320px;
          animation: svc-spin 58s linear infinite;
        }
        .svc-astro-circle--5 {
          top: 15%;
          right: -3%;
          width: 350px;
          height: 350px;
          animation: svc-spin 65s linear infinite;
        }
        @keyframes svc-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes svc-spin-rev {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .hero-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .hero-carousel { height: 560px; } }
        @media (max-width: 480px) { .hero-carousel { height: 440px; } }
      `}</style>
    </div>
  );
}
