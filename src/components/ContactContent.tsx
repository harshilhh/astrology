"use client";
import { useState } from "react";
import Link from "next/link";

const PHONE = "+919737168423";
const EMAIL = "astro@officialastrology.com";
const WA_LINK = "https://wa.me/919737168423";
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

const contactCards = [
  {
    label: "Call Directly",
    value: PHONE,
    sub: "Available 24/7, All Days",
    href: `tel:${PHONE}`,
    btnText: "Call Now",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "Chat Instantly",
    sub: "Quick reply guaranteed",
    href: WA_LINK,
    btnText: "Open WhatsApp",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: EMAIL,
    sub: "Response within 24 hours",
    href: `mailto:${EMAIL}`,
    btnText: "Send Email",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
  {
    label: "Visit Us",
    value: "Ahmedabad",
    sub: "Gujarat, India",
    href: "https://maps.google.com/?q=Ahmedabad,Gujarat,India",
    btnText: "Get Directions",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const serviceOptions = [
  "Talk To Astrologer Online",
  "Kundali Matching",
  "Love Marriage Problem Solution",
  "Live-in Partner Problem Solutions",
  "Black Magic Removal",
  "Child Birth Issue Problem",
  "Marriage Prediction by Date of Birth",
  "Wealth, Business Prediction & Solution",
  "Job, Career, Study, Report",
  "Love Problems",
  "Intercaste Love Marriage",
  "Relationship Problem",
  "Husband & Wife Problem",
  "Extra Marital Affairs",
  "Divorce Problem",
  "Education & Jobs Problems",
  "Career & Financial Problems",
  "Health Problems",
  "Family Problems",
  "Lucky Gems Stones",
  "Property / Legal Disputes",
  "Vastu Consultation",
  "Visa / Immigration Problem",
  "Infertility / Family Issues",
  "One Sided Love Problem",
  "Ex Love Back",
  "Lost Love Back",
  "Break Up Relationship",
  "In-Laws Problem",
  "Love Life Problem",
  "Sexual Life Dissatisfaction",
  "Personalized Problem Prediction",
  "Other",
];

export default function ContactContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const payload = {
        ...form,
        timestamp: new Date().toISOString(),
      };

      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus("sent");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <>
      {/* Header Bar */}
      <section className="ct-header-bar">
        <div className="ct-header-inner">
          <h1 className="ct-page-title">Contact Us</h1>
          <nav className="ct-breadcrumb">
            <Link href="/">Home</Link>
            <span className="ct-breadcrumb-sep">&rsaquo;</span>
            <span className="ct-breadcrumb-current">Contact</span>
          </nav>
        </div>
        <div className="ct-header-decor" />
      </section>

      {/* Main Content */}
      <section className="ct-body">
        <div className="ct-wrap">
          <div className="ct-columns">

            {/* ── LEFT: Contact Info ── */}
            <div className="ct-info">
              {contactCards.map((c, i) => {
                const num = String(i + 1).padStart(2, "0");
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="ct-card"
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    {/* Fire stripe */}
                    <div className="ct-card-stripe" />
                    {/* Ghost number */}
                    <span className="ct-card-ghost">{num}</span>
                    {/* Icon */}
                    <div className="ct-card-icon">{c.icon}</div>
                    {/* Text */}
                    <div className="ct-card-text">
                      <span className="ct-card-label">{c.label}</span>
                      <span className="ct-card-value">{c.value}</span>
                      <span className="ct-card-sub">{c.sub}</span>
                    </div>
                    {/* Arrow */}
                    <div className="ct-card-arrow">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                    {/* Corner deco */}
                    <div className="ct-card-corner" />
                  </a>
                );
              })}

              {/* Quote Box */}
              <div className="ct-quote">
                <div className="ct-quote-stripe" />
                <svg className="ct-quote-mark" width="32" height="32" viewBox="0 0 24 24" fill="rgba(232,86,42,0.1)">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <p className="ct-quote-text">
                  You are just one call away from your solution. Whatever problem you are facing — Pandit Vikram Bhai Joshi has helped <strong>90,000+</strong> people find peace.
                </p>
                <div className="ct-quote-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              </div>
            </div>

            {/* ── RIGHT: Contact Form ── */}
            <div className="ct-form-wrap">
              <div className="ct-form-header">
                <div className="ct-form-header-lines">
                  <div className="ct-form-header-line ct-form-header-line--left" />
                  <span className="ct-form-label">Get In Touch</span>
                  <div className="ct-form-header-line ct-form-header-line--right" />
                </div>
                <h2 className="ct-form-title">
                  Send Us a <span className="ct-gold-text">Message</span>
                </h2>
                <p className="ct-form-subtitle">
                  Fill in the form below and we&apos;ll get back to you within 24 hours. First consultation is completely free.
                </p>
              </div>

              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-name">Full Name</label>
                  <input
                    id="ct-name"
                    name="name"
                    type="text"
                    className="ct-input"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ct-field-row">
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-email">Email Address</label>
                    <input
                      id="ct-email"
                      name="email"
                      type="email"
                      className="ct-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="ct-phone">Phone Number</label>
                    <input
                      id="ct-phone"
                      name="phone"
                      type="tel"
                      className="ct-input"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-service">Select Service</label>
                  <select
                    id="ct-service"
                    name="service"
                    className="ct-input ct-select"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Choose a service...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-message">Your Message</label>
                  <textarea
                    id="ct-message"
                    name="message"
                    className="ct-input ct-textarea"
                    placeholder="Briefly describe your concern or question..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`ct-submit ${status === "sending" ? "ct-submit--loading" : ""}`}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span className="ct-spinner" />
                      Sending...
                    </>
                  ) : status === "sent" ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                      Send Message
                    </>
                  )}
                </button>

                {status === "sent" && (
                  <p className="ct-status ct-status--success">Thank you! We&apos;ll contact you shortly.</p>
                )}
                {status === "error" && (
                  <p className="ct-status ct-status--error">Something went wrong. Please try calling us directly.</p>
                )}
              </form>
            </div>
          </div>

          {/* ── Map Section ── */}
          <div className="ct-map-section">
            <div className="ct-map-header">
              <div className="ct-map-header-line" />
              <span className="ct-map-label">Our Location</span>
              <div className="ct-map-header-line" />
            </div>
            <div className="ct-map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29891750457!2d72.41530798476052!3d23.02049611700768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vikram Astrology - Ahmedabad Location"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Header ── */
        .ct-header-bar {
          position: relative;
          background: linear-gradient(180deg, var(--bg-pale-yellow) 0%, var(--bg-cream) 100%);
          padding: 40px 32px;
        }
        .ct-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ct-page-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }
        .ct-breadcrumb {
          font-family: var(--font-ui);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ct-breadcrumb a {
          color: var(--gold-warm);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ct-breadcrumb a:hover { color: var(--gold-glow); }
        .ct-breadcrumb-sep { color: var(--text-muted); font-size: 1rem; }
        .ct-breadcrumb-current { color: var(--text-muted); }
        .ct-header-decor {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 15%, rgba(232,86,42,0.2) 50%, transparent 85%);
        }

        /* ── Body ── */
        .ct-body {
          background: linear-gradient(180deg, var(--bg-cream) 0%, var(--bg-void) 6%, var(--bg-void) 92%, var(--bg-white) 100%);
          padding: 56px 32px 80px;
        }
        .ct-wrap {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── Two Columns ── */
        .ct-columns {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 48px;
          align-items: start;
        }

        /* ══════════════════════════════════
           LEFT — Contact Info
           ══════════════════════════════════ */
        .ct-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* ── Contact Card ── */
        .ct-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 22px 24px 22px 26px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          text-decoration: none;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1),
                      box-shadow 0.4s cubic-bezier(0.23,1,0.32,1),
                      border-color 0.35s ease;
          animation: ctCardIn 0.5s ease both;
        }
        .ct-card:hover {
          transform: translateY(-3px);
          border-color: rgba(232,86,42,0.35);
          box-shadow:
            0 12px 36px rgba(0,0,0,0.06),
            0 0 0 1px rgba(232,86,42,0.1),
            0 0 28px rgba(232,86,42,0.04);
        }

        .ct-card-stripe {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--gold-warm), var(--gold-glow));
          opacity: 0.25;
          transition: opacity 0.35s ease, width 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s ease;
        }
        .ct-card:hover .ct-card-stripe {
          opacity: 1;
          width: 4px;
          box-shadow: 3px 0 18px rgba(232,86,42,0.2);
        }

        .ct-card-ghost {
          position: absolute;
          top: -4px; right: 8px;
          font-family: var(--font-display);
          font-size: 3.8rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          color: rgba(232,86,42,0.035);
          pointer-events: none;
          user-select: none;
          transition: color 0.35s ease, transform 0.45s cubic-bezier(0.23,1,0.32,1);
        }
        .ct-card:hover .ct-card-ghost {
          color: rgba(232,86,42,0.07);
          transform: translateY(-3px);
        }

        .ct-card-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-warm);
          background: rgba(232,86,42,0.06);
          border: 1px solid rgba(232,86,42,0.12);
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .ct-card:hover .ct-card-icon {
          background: rgba(232,86,42,0.1);
          border-color: rgba(232,86,42,0.25);
          transform: scale(1.05);
        }

        .ct-card-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
          position: relative;
          z-index: 1;
        }
        .ct-card-label {
          font-family: var(--font-ui);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold-warm);
          opacity: 0.6;
        }
        .ct-card:hover .ct-card-label { opacity: 1; }
        .ct-card-value {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--text-primary);
          transition: color 0.3s;
        }
        .ct-card:hover .ct-card-value { color: var(--gold-warm); }
        .ct-card-sub {
          font-family: var(--font-ui);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--text-muted);
        }

        .ct-card-arrow {
          margin-left: auto;
          color: var(--gold-warm);
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.3s, transform 0.3s;
          flex-shrink: 0;
        }
        .ct-card:hover .ct-card-arrow {
          opacity: 0.7;
          transform: translateX(0);
        }

        .ct-card-corner {
          position: absolute;
          bottom: 0; right: 0;
          width: 18px; height: 18px;
          border-bottom: 1px solid rgba(232,86,42,0.1);
          border-right: 1px solid rgba(232,86,42,0.1);
          transition: border-color 0.3s, width 0.3s, height 0.3s;
        }
        .ct-card:hover .ct-card-corner {
          width: 26px; height: 26px;
          border-color: rgba(232,86,42,0.35);
        }

        @keyframes ctCardIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Quote Box ── */
        .ct-quote {
          position: relative;
          padding: 28px 28px 24px;
          background: var(--bg-light-yellow);
          border: 1px solid rgba(232,86,42,0.15);
          margin-top: 4px;
          overflow: hidden;
          animation: ctCardIn 0.5s ease both;
          animation-delay: 0.3s;
        }
        .ct-quote-stripe {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, var(--gold-warm), var(--gold-glow));
        }
        .ct-quote-mark {
          margin-bottom: 8px;
        }
        .ct-quote-text {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin: 0 0 12px;
          font-style: italic;
        }
        .ct-quote-text strong {
          color: var(--gold-warm);
          font-weight: 700;
        }
        .ct-quote-stars {
          font-size: 1rem;
          color: var(--gold-warm);
          letter-spacing: 0.15em;
        }

        /* ══════════════════════════════════
           RIGHT — Contact Form
           ══════════════════════════════════ */
        .ct-form-wrap {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          padding: 40px 36px;
          position: relative;
          overflow: hidden;
          animation: ctFormIn 0.6s ease both;
          animation-delay: 0.15s;
        }
        @keyframes ctFormIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ct-form-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold-warm), var(--gold-glow), var(--gold-warm));
        }

        /* Form header */
        .ct-form-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .ct-form-header-lines {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 14px;
        }
        .ct-form-header-line {
          height: 1px; width: 40px;
        }
        .ct-form-header-line--left {
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.5));
        }
        .ct-form-header-line--right {
          background: linear-gradient(90deg, rgba(232,86,42,0.5), transparent);
        }
        .ct-form-label {
          font-family: var(--font-ui);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold-warm);
        }
        .ct-form-title {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin-bottom: 10px;
        }
        .ct-gold-text {
          background: linear-gradient(135deg, var(--gold-warm), var(--gold-glow));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ct-form-subtitle {
          font-family: var(--font-body);
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 400px;
          margin: 0 auto;
        }

        /* Form fields */
        .ct-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ct-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .ct-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .ct-label {
          font-family: var(--font-ui);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .ct-input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid var(--card-border);
          background: var(--bg-void);
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .ct-input::placeholder {
          color: var(--text-muted);
          font-style: italic;
          opacity: 0.7;
        }
        .ct-input:focus {
          border-color: rgba(232,86,42,0.45);
          box-shadow: 0 0 0 3px rgba(232,86,42,0.08);
        }
        .ct-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23E8562A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 44px;
          cursor: pointer;
          font-style: normal;
        }
        .ct-textarea {
          resize: vertical;
          min-height: 120px;
        }

        /* Submit button */
        .ct-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 32px;
          background: var(--gold-warm);
          color: #fff;
          border: none;
          font-family: var(--font-ui);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
        }
        .ct-submit:hover:not(:disabled) {
          background: var(--gold-glow);
          box-shadow: 0 8px 28px rgba(232,86,42,0.35);
          transform: translateY(-1px);
        }
        .ct-submit:active:not(:disabled) {
          transform: translateY(0);
        }
        .ct-submit:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }

        /* Spinner */
        .ct-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: ctSpin 0.6s linear infinite;
        }
        @keyframes ctSpin {
          to { transform: rotate(360deg); }
        }

        /* Status messages */
        .ct-status {
          font-family: var(--font-ui);
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: 12px 16px;
          text-align: center;
          animation: ctFadeIn 0.3s ease;
        }
        .ct-status--success {
          color: #16a34a;
          background: rgba(22,163,74,0.06);
          border: 1px solid rgba(22,163,74,0.2);
        }
        .ct-status--error {
          color: #dc2626;
          background: rgba(220,38,38,0.06);
          border: 1px solid rgba(220,38,38,0.2);
        }
        @keyframes ctFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ══════════════════════════════════
           MAP SECTION
           ══════════════════════════════════ */
        .ct-map-section {
          margin-top: 64px;
        }
        .ct-map-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }
        .ct-map-header-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.2), transparent);
        }
        .ct-map-label {
          font-family: var(--font-ui);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .ct-map-frame {
          width: 100%;
          height: 380px;
          border: 1px solid var(--card-border);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.06);
        }
        .ct-map-frame iframe {
          display: block;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .ct-columns {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .ct-form-wrap { padding: 32px 24px; }
        }
        @media (max-width: 768px) {
          .ct-header-inner {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
          .ct-body { padding: 36px 20px 64px; }
          .ct-field-row { grid-template-columns: 1fr; }
          .ct-map-frame { height: 280px; }
        }
        @media (max-width: 480px) {
          .ct-form-wrap { padding: 28px 18px; }
          .ct-card { padding: 18px 20px 18px 22px; }
        }
      `}</style>
    </>
  );
}
