import { useState } from "react";

const TypebotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const typebotUrl = "https://typebot.onboarding-jresh.typebot.io";

  const buttonStyle = {
    position: "fixed",
    bottom: "90px",
    right: "32px",
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    border: "none",
    fontSize: "24px",
    color: "white",
    zIndex: 99999,
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    background: isHovered 
      ? "linear-gradient(135deg, #0ea5e9, #16a34a, #eab308)"
      : "linear-gradient(135deg, #38bdf8, #22c55e)",
    transform: isHovered ? "scale(1.15) rotate(360deg)" : "scale(1)",
    boxShadow: isHovered
      ? "0 20px 48px rgba(56,189,248,0.7), 0 0 0 8px rgba(56,189,248,0.2)"
      : "0 8px 24px rgba(56,189,248,0.4)",
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={buttonStyle}
      >
        🤖
      </button>
      {isOpen && (
        <div style={{
          position: "fixed",
          bottom: "170px",
          right: "32px",
          width: "380px",
          height: "500px",
          zIndex: 99998,
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          border: "1px solid rgba(56,189,248,0.2)",
          background: "white",
        }}>
          <iframe
            src={typebotUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Chat IA CRZTech"
          />
        </div>
      )}
    </>
  );
};

export default TypebotBubble;