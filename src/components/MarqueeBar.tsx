export default function MarqueeBar() {
  const items = [
    "✦ Love Problem Solution",
    "✦ Ex Love Back",
    "✦ Vashikaran Specialist",
    "✦ Black Magic Removal",
    "✦ Love Marriage",
    "✦ Husband-Wife Dispute",
    "✦ Career & Business Growth",
    "✦ Horoscope Predictions",
    "✦ Intercaste Marriage",
    "✦ Breakup Solutions",
    "✦ Delay in Marriage",
    "✦ Childbirth Issues",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "linear-gradient(90deg, var(--gold-deep), var(--gold-amber), var(--gold-glow), var(--gold-amber), var(--gold-deep))",
        padding: "13px 0",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 4px 20px rgba(180,140,0,0.25)",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          gap: 0,
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              padding: "0 28px",
              fontFamily: "var(--font-heading)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#1a0e00",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
