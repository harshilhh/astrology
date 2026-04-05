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
    img: "/hero-carousel-1.jpg",
    label: "Vedic Astrology",
    headline: "Discover Your Cosmic Path",
    sub: "Ancient wisdom for modern life",
  },
  {
    img: "/zodiac-signs-inside-of-horoscope-circle-astrology-in-the-sky-with-many-stars-and-moons-astrology-and-horoscopes-concept-photo.jpg",
    label: "Kundali Reading",
    headline: "Unlock Your Birth Chart",
    sub: "Personalised Vedic analysis",
  },
  {
    img: "/woman-holding-a-astrology-book-astrological-wheel-projection-choose-a-zodiac-sign-astrology-esoteric-concept-photo.jpg",
    label: "Love & Marriage",
    headline: "Find Your Perfect Match",
    sub: "Kundali matching & relationship guidance",
  },
  {
    img: "/astrology-book-zodiac-signs-shining-light-hands-holding-open-154355031.webp",
    label: "Black Magic Removal",
    headline: "Protection & Spiritual Healing",
    sub: "25+ years of proven Vedic remedies",
  },
];

/* ── Service cards ── */
const serviceCards = [
  { name: "Vedic Kundali Reading", desc: "Unlock the secrets of your birth chart", imgSrc: "/zodiac-signs-inside-of-horoscope-circle-astrology-in-the-sky-with-many-stars-and-moons-astrology-and-horoscopes-concept-photo.jpg", href: "/services", tag: "Most Popular" },
  { name: "Love & Marriage",       desc: "Kundali matching & love problem solutions", imgSrc: "/love-couple.jpg", href: "/services", tag: "Expert Guidance" },
  { name: "Kundali Matching",      desc: "Sacred compatibility analysis for couples", imgSrc: "/symbols-astrology-circle_87720-149274.avif", href: "/services", tag: "Vedic Tradition" },
  { name: "Black Magic Removal",   desc: "Powerful protection & spiritual cleansing", imgSrc: "/astrology-book-zodiac-signs-shining-light-hands-holding-open-154355031.webp", href: "/services", tag: "Proven Remedies" },
  { name: "Career & Business",     desc: "Astrological guidance for success & growth", imgSrc: "/woman-holding-a-astrology-book-astrological-wheel-projection-choose-a-zodiac-sign-astrology-esoteric-concept-photo.jpg", href: "/services", tag: "Life Changing" },
  { name: "Horoscope Forecast",    desc: "Daily, monthly & yearly predictions", imgSrc: "/hero-banner.jpg", href: "/services", tag: "Daily Guidance" },
];

const stats = [
  { value: "25+",  label: "Years Experience" },
  { value: "90K+", label: "Consultations" },
  { value: "5th Gen", label: "Astrologer" },
  { value: "4.9★", label: "Rating" },
];

/* ── Hero Carousel component ── */
function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 700);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

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

  return (
    <div ref={sectionRef} style={{ background: "var(--bg-void)", paddingTop: 77 }}>

      {/* ════ CAROUSEL ════ */}
      <div style={{ width: "100%" }}>
        <HeroCarousel />
      </div>

      {/* ════ HERO TEXT ════ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 32px 48px" }}>

        {/* Badge */}
        <TimelineContent as="div" animationNum={1} timelineRef={sectionRef}
          style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <a href="/about" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(165,32,32,0.06)", border: "1px solid rgba(165,32,32,0.22)",
            borderRadius: 999, padding: "5px 8px 5px 5px", textDecoration: "none",
          }}>
            <span style={{
              background: "linear-gradient(135deg,#A52020,#B52424)", color: "#fff",
              fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 700,
              letterSpacing: "0.1em", borderRadius: 999, padding: "4px 12px",
            }}>Trusted</span>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "var(--text-secondary)" }}>
              ✦ 90,000+ Lives Transformed Across India &amp; Globe
            </span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A52020" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </TimelineContent>

        {/* Heading */}
        <TimelineContent as="h1" animationNum={2} timelineRef={sectionRef} style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,5.5vw,4.5rem)",
          fontWeight: 700, letterSpacing: "0.04em", lineHeight: 1.1,
          color: "var(--text-primary)", textAlign: "center", maxWidth: 860, margin: "0 auto 20px",
        }}>
          Discover Your{" "}
          <span style={{
            background: "linear-gradient(135deg,#6B0E0E 0%,#A52020 40%,#B52424 70%,#8B1A1A 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>Cosmic Path</span>{" "}
          with Vedic Wisdom
        </TimelineContent>

        {/* Subheading */}
        <TimelineContent as="p" animationNum={3} timelineRef={sectionRef} style={{
          fontFamily: "var(--font-body)", fontSize: "clamp(1rem,2vw,1.25rem)",
          color: "var(--text-muted)", textAlign: "center", maxWidth: 600,
          margin: "0 auto 36px", lineHeight: 1.75, fontStyle: "italic",
        }}>
          5th generation Vedic astrologer Vikram Bhai Joshi brings 25+ years of
          ancient wisdom to guide you through love, career, health and every turning point of life.
        </TimelineContent>

        {/* CTAs */}
        <TimelineContent as="div" animationNum={4} timelineRef={sectionRef} style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 14, flexWrap: "wrap", marginBottom: 56,
        }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold"
            style={{ padding: "15px 34px", fontSize: "0.88rem", letterSpacing: "0.15em" }}>
            Book Free Consultation
          </a>
          <a href={`tel:${PHONE}`} className="btn-outline-gold"
            style={{ padding: "15px 34px", fontSize: "0.88rem", letterSpacing: "0.12em" }}>
            📞 Call Now
          </a>
        </TimelineContent>

        {/* Stats */}
        <TimelineContent as="div" animationNum={5} timelineRef={sectionRef} style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          flexWrap: "wrap", borderTop: "1px solid rgba(165,32,32,0.12)",
          borderBottom: "1px solid rgba(165,32,32,0.12)", padding: "22px 0", marginBottom: 72,
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              padding: "0 36px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(165,32,32,0.15)" : "none",
            }}>
              <span style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,3vw,2.1rem)",
                fontWeight: 700, lineHeight: 1.1,
                background: "linear-gradient(135deg,#A52020,#B52424)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>{s.value}</span>
              <span style={{
                fontFamily: "var(--font-ui)", fontSize: "0.68rem", fontWeight: 600,
                letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 4,
              }}>{s.label}</span>
            </div>
          ))}
        </TimelineContent>
      </section>

      {/* ════ SERVICE CARDS ════ */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 96px" }}>
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
                border: "1px solid rgba(165,32,32,0.12)", boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              }}>
              <Image src={card.imgSrc} alt={card.name} fill sizes="(max-width:768px) 100vw,33vw" style={{ objectFit: "cover" }} />
              <ProgressiveBlur className="pointer-events-none absolute bottom-0 left-0 h-[55%] w-full" blurIntensity={0.6} direction="bottom" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(30,8,8,0.82) 0%,rgba(30,8,8,0.28) 50%,transparent 100%)", borderRadius: 12 }} />
              <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(165,32,32,0.85)", backdropFilter: "blur(8px)", color: "#fff", fontFamily: "var(--font-ui)", fontSize: "0.64rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4 }}>{card.tag}</div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 16px 16px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.88rem,1.8vw,1.1rem)", fontWeight: 700, letterSpacing: "0.05em", color: "#fff", marginBottom: 3, lineHeight: 1.2 }}>{card.name}</h3>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.74rem", color: "rgba(255,255,255,0.72)", letterSpacing: "0.03em" }}>{card.desc}</p>
              </div>
            </TimelineContent>
          ))}
        </div>
      </section>

      <style>{`
        /* ── Carousel ── */
        .hero-carousel {
          position: relative;
          width: 100%;
          height: 480px;
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
          background: linear-gradient(135deg, rgba(107,14,14,0.55) 0%, rgba(30,8,8,0.4) 50%, transparent 100%);
        }
        .carousel-text {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 20px 24px;
          background: linear-gradient(to top, rgba(20,5,5,0.75) 0%, transparent 100%);
        }
        .carousel-label {
          display: inline-block;
          font-family: var(--font-ui);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(242,200,200,0.9);
          background: rgba(165,32,32,0.55);
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
          background: rgba(165,32,32,0.7);
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
          background: linear-gradient(90deg, #A52020, #B52424);
          animation: carouselProgress 5s linear forwards;
        }
        @keyframes carouselProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* ── Responsive ── */
        @media (max-width: 900px) { .hero-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .hero-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .hero-carousel { height: 360px; } }
        @media (max-width: 480px) { .hero-carousel { height: 260px; } }
      `}</style>
    </div>
  );
}
