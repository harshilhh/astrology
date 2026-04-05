"use client";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      style={{
        background: "var(--bg-light-yellow)",
        padding: "72px 24px",
        position: "relative",
        borderTop: "3px solid var(--gold-warm)",
        borderBottom: "3px solid var(--gold-warm)",
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, rgba(232,86,42,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Icon */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "white",
            border: "2px solid rgba(232,86,42,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            margin: "0 auto 24px",
            boxShadow: "0 6px 24px rgba(232,86,42,0.12)",
          }}
        >
          📰
        </div>

        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "var(--text-primary)",
            marginBottom: 12,
          }}
        >
          Our <span className="gold-text">Newsletter</span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            marginBottom: 32,
          }}
        >
          Receive daily horoscope, lovescope, tarot readings &amp; astrology tips
          directly in your inbox. Stay connected with the cosmos.
        </p>

        {submitted ? (
          <div
            style={{
              background: "white",
              border: "1px solid rgba(232,86,42,0.35)",
              borderRadius: 12,
              padding: "20px 32px",
              fontFamily: "var(--font-ui)",
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--gold-deep)",
              boxShadow: "0 4px 20px rgba(232,86,42,0.1)",
            }}
          >
            ✅ Thank you! You have been subscribed to our newsletter.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              gap: 0,
              maxWidth: 480,
              margin: "0 auto",
              boxShadow: "0 8px 32px rgba(232,86,42,0.12)",
              borderRadius: 10,
              overflow: "hidden",
              border: "1px solid rgba(232,86,42,0.25)",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                padding: "15px 20px",
                border: "none",
                outline: "none",
                fontFamily: "var(--font-ui)",
                fontSize: "1.02rem",
                color: "var(--text-primary)",
                background: "white",
              }}
            />
            <button
              type="submit"
              className="btn-gold"
              style={{
                padding: "15px 28px",
                fontSize: "1rem",
                borderRadius: 0,
                flexShrink: 0,
                letterSpacing: "0.08em",
              }}
            >
              Go
            </button>
          </form>
        )}

        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "1rem",
            color: "var(--text-muted)",
            marginTop: 16,
          }}
        >
          No spam, unsubscribe at any time. Your privacy is respected.
        </p>
      </div>
    </section>
  );
}
