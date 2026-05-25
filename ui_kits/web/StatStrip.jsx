// StatStrip.jsx — four-up trust section grid from homepage.

function StatStrip() {
  const stats = [
    { value: "50", label: "States Covered" },
    { value: "44,891", label: "Schools Indexed" },
    { value: "7", label: "Safety Factors" },
    { value: "100%", label: "Public Data" },
  ];
  return (
    <section style={{ textAlign: "center" }}>
      <h2
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: "#d9e2ec",
          margin: "0 0 16px",
          letterSpacing: "-0.01em",
        }}
      >
        Transparent &amp; Data-Driven
      </h2>
      <p
        style={{
          color: "#829ab1",
          maxWidth: 640,
          margin: "0 auto 32px",
          lineHeight: 1.6,
        }}
      >
        Every safety score comes with a full explanation of contributing
        factors, data sources, and methodology. We believe in complete
        transparency about how our insights are generated.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              padding: 16,
              background: "rgba(22,32,50,0.4)",
              borderRadius: 8,
              border: "1px solid rgba(36,59,85,0.4)",
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 800, color: "#22d3ee" }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "#627d98", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.StatStrip = StatStrip;
