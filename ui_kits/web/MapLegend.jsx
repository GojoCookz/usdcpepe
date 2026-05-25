// MapLegend.jsx — glass panel showing the Safe Index gradient + key.

function MapLegend() {
  const bins = [
    { label: "Critical", color: "#82123b" },
    { label: "High Risk", color: "#be1c1c" },
    { label: "Elevated Risk", color: "#e82c2c" },
    { label: "Caution", color: "#fbbf24" },
    { label: "Low Risk", color: "#22c55e" },
    { label: "Safe", color: "#34d399" },
  ];
  return (
    <div
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background: "rgba(13,28,50,0.90)",
        border: "1px solid rgba(36,59,85,0.35)",
        borderRadius: 12,
        padding: 14,
        minWidth: 160,
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.45)",
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "#829ab1",
          marginBottom: 10,
        }}
      >
        Safe Index
      </div>
      <div
        style={{
          height: 10,
          borderRadius: "9999px",
          background:
            "linear-gradient(to right, #82123b, #be1c1c, #e82c2c, #fbbf24, #22c55e, #34d399)",
          marginBottom: 8,
          boxShadow: "0 0 8px rgba(34,211,238,0.12)",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: 10,
          color: "#486581",
          marginBottom: 12,
        }}
      >
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {bins.map((b) => (
          <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                background: b.color,
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 11, color: "#829ab1" }}>{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.MapLegend = MapLegend;
