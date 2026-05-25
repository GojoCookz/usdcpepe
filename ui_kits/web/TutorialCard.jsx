// TutorialCard.jsx — bottom-center overlay with steps.

const TUTORIAL_STEPS = [
  { icon: "⛑️", title: "Welcome to SafeNSound", body: "The hex map colors every neighborhood by safety score. Green = safer, red = higher risk." },
  { icon: "🔍", title: "Search Any Address", body: "Type any US address or city. The map flies straight to it and loads local hex data." },
  { icon: "🗺️", title: "Focus on a State", body: "Pick a state to zoom in and load high-resolution data for that area only." },
  { icon: "🎛️", title: "Customize Your Filters", body: "Toggle crime, environmental, and family-safety layers. Each updates hex scores in real time." },
];

function TutorialCard({ onDismiss }) {
  const [step, setStep] = React.useState(0);
  const { ChevronRight } = window.Icons;
  const current = TUTORIAL_STEPS[step];
  const isLast = step === TUTORIAL_STEPS.length - 1;
  return (
    <div
      style={{
        width: 340,
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        background: "linear-gradient(160deg, #071020 0%, #0b1a30 100%)",
        border: "1px solid rgba(34,211,238,0.26)",
        boxShadow:
          "0 24px 60px rgba(0,0,0,0.75), inset 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px rgba(34,211,238,0.06)",
      }}
    >
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(to right, transparent, rgba(34,211,238,0.8), transparent)",
        }}
      />
      <div style={{ padding: "20px 20px 16px" }}>
        <div
          key={step}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 14,
            marginBottom: 16,
            animation: "sns-stepIn 220ms ease-out forwards",
          }}
        >
          <span style={{ fontSize: 28, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>
            {current.icon}
          </span>
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.3 }}>
              {current.title}
            </h3>
            <p style={{ fontSize: 12, color: "#829ab1", margin: "6px 0 0", lineHeight: 1.55 }}>
              {current.body}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            {TUTORIAL_STEPS.map((_, i) => {
              const active = i === step;
              const past = i < step;
              return (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  aria-label={`Step ${i + 1}`}
                  style={{ background: "transparent", border: 0, padding: 2, cursor: "pointer" }}
                >
                  <span
                    style={{
                      display: "block",
                      width: active ? 16 : 6,
                      height: 6,
                      borderRadius: "9999px",
                      background: active
                        ? "#22d3ee"
                        : past
                        ? "rgba(8,145,178,0.5)"
                        : "rgba(36,59,85,0.8)",
                      transition: "all 200ms",
                    }}
                  />
                </button>
              );
            })}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={onDismiss}
              style={{ background: "transparent", border: 0, fontSize: 11, color: "#627d98", cursor: "pointer" }}
            >
              Skip
            </button>
            <button
              onClick={() => (isLast ? onDismiss() : setStep((s) => s + 1))}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 16px",
                borderRadius: 12,
                background: "rgba(34,211,238,0.15)",
                color: "#67e8f9",
                fontSize: 12,
                fontWeight: 600,
                border: "1px solid rgba(34,211,238,0.30)",
                cursor: "pointer",
              }}
            >
              {isLast ? "Got it" : "Next"}
              {!isLast && <ChevronRight size={12} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

window.TutorialCard = TutorialCard;
