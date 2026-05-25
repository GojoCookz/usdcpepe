// Toggle.jsx — cyan-glow filter switch.

function Toggle({ checked, onChange, label, color = "#22d3ee" }) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <button
        role="switch"
        aria-checked={checked}
        onClick={(e) => {
          e.preventDefault();
          onChange(!checked);
        }}
        style={{
          position: "relative",
          width: 52,
          height: 28,
          flexShrink: 0,
          borderRadius: "9999px",
          border: 0,
          padding: 0,
          cursor: "pointer",
          transition: "all 200ms",
          background: checked ? color : "#1c2d45",
          boxShadow: checked
            ? `0 0 22px ${color}65, 0 0 9px ${color}40, inset 0 1px 0 rgba(255,255,255,0.18), 0 1px 4px rgba(0,0,0,0.25)`
            : "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.30)",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 4,
            left: checked ? 28 : 4,
            width: 20,
            height: 20,
            borderRadius: "9999px",
            background: checked ? "#fff" : "#8ca0b8",
            transition: "all 200ms",
            boxShadow: checked
              ? `0 1px 6px rgba(0,0,0,0.35), 0 0 0 1.5px ${color}40`
              : "0 1px 3px rgba(0,0,0,0.4)",
          }}
        />
      </button>
      <span
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: checked ? "#f1f8ff" : "#7a90aa",
          transition: "color 200ms",
        }}
      >
        {label}
      </span>
    </label>
  );
}

window.Toggle = Toggle;
