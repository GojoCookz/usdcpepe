// ScoreBadge.jsx — colored circle showing 0-100 with semantic label.

const SAFE_LABELS = [
  { max: 14, label: "Critical", color: "#82123b" },
  { max: 34, label: "High Risk", color: "#be1c1c" },
  { max: 54, label: "Elevated Risk", color: "#e82c2c" },
  { max: 69, label: "Caution", color: "#fbbf24" },
  { max: 84, label: "Low Risk", color: "#22c55e" },
  { max: 100, label: "Safe", color: "#34d399" },
];

function getSafe(score) {
  for (const b of SAFE_LABELS) if (score <= b.max) return b;
  return SAFE_LABELS[SAFE_LABELS.length - 1];
}

function ScoreBadge({ score, size = "md", showLabel = true }) {
  const { label, color } = getSafe(score);
  const dims = { sm: 40, md: 56, lg: 80 }[size];
  const fs = { sm: 14, md: 18, lg: 26 }[size];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div
        style={{
          width: dims,
          height: dims,
          fontSize: fs,
          borderRadius: "9999px",
          background: color,
          color: "#fff",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 20px ${color}40, inset 0 1px 0 rgba(255,255,255,0.18)`,
        }}
      >
        {Math.round(score)}
      </div>
      {showLabel && (
        <span style={{ fontSize: 11, fontWeight: 500, color }}>{label}</span>
      )}
    </div>
  );
}

window.ScoreBadge = ScoreBadge;
window.getSafe = getSafe;
