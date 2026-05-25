// GradientBar.jsx — score-tinted progress bar with label + raw value.

function GradientBar({ score, label, rawValue }) {
  const { color } = window.getSafe(score);
  const width = Math.max(2, Math.min(100, score));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
        <span style={{ color: "#9fb3c8" }}>{label}</span>
        <span style={{ color, fontWeight: 500 }}>
          {Math.round(score)}
          {rawValue && (
            <span style={{ color: "#627d98", marginLeft: 6, fontWeight: 400 }}>
              ({rawValue})
            </span>
          )}
        </span>
      </div>
      <div
        style={{
          height: 8,
          background: "rgba(36,59,85,0.5)",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            borderRadius: "9999px",
            background: color,
            boxShadow: `0 0 8px ${color}60`,
            transition: "width 500ms",
          }}
        />
      </div>
    </div>
  );
}

window.GradientBar = GradientBar;
