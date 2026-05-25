// DisclaimerPill.jsx — small dismissible amber-tint corner pill.

function DisclaimerPill() {
  const [dismissed, setDismissed] = React.useState(false);
  if (dismissed) return null;
  const { X } = window.Icons;
  return (
    <div
      role="alert"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        maxWidth: 230,
        borderRadius: 8,
        padding: "6px 10px",
        background: "rgba(8,4,0,0.38)",
        border: "1px solid rgba(217,119,6,0.14)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        backdropFilter: "blur(4px)",
      }}
    >
      <p
        style={{
          fontSize: 9.5,
          color: "rgba(254,243,199,0.4)",
          lineHeight: 1.4,
          margin: 0,
          flex: 1,
        }}
      >
        Estimates only.{" "}
        <a
          href="#"
          style={{
            color: "inherit",
            textDecoration: "underline",
            textUnderlineOffset: 2,
          }}
        >
          Methodology
        </a>
        .
      </p>
      <button
        aria-label="Dismiss"
        onClick={() => setDismissed(true)}
        style={{
          color: "rgba(180,83,9,0.4)",
          background: "transparent",
          border: 0,
          cursor: "pointer",
          padding: 0,
          display: "flex",
        }}
      >
        <X size={11} />
      </button>
    </div>
  );
}

window.DisclaimerPill = DisclaimerPill;
