// EmergencyButton.jsx — red glass-encased "submit a report" button.

function EmergencyButton({ onClick }) {
  const [pulse, setPulse] = React.useState(true);
  return (
    <div
      style={{
        padding: 6,
        borderRadius: "50%",
        background: "rgba(6,13,25,0.70)",
        border: "1px solid rgba(239,68,68,0.18)",
        boxShadow:
          "0 0 24px rgba(239,68,68,0.12), 0 4px 16px rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
        position: "relative",
      }}
    >
      {pulse && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "rgba(239,68,68,0.18)",
            animation: "sns-ping 2s cubic-bezier(0,0,0.2,1) infinite",
          }}
        />
      )}
      <button
        aria-label="Submit a report"
        onClick={() => {
          setPulse(false);
          onClick && onClick();
        }}
        style={{
          position: "relative",
          width: 44,
          height: 44,
          border: 0,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
          boxShadow:
            "0 4px 20px rgba(239,68,68,0.55), inset 0 1px 0 rgba(255,255,255,0.18)",
          cursor: "pointer",
          transition: "transform 200ms",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.10)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#fff">
          <path
            fillRule="evenodd"
            d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

window.EmergencyButton = EmergencyButton;
