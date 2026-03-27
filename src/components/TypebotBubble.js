// src/components/TypebotBubble.js
import { useState } from "react";

const TypebotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const typebotUrl = "https://typebot.onboarding-jresh.typebot.io";

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "90px",
          right: "32px",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #38bdf8, #22c55e)",
          border: "none",
          boxShadow: "0 8px 24px rgba(56,189,248,0.4)",
          fontSize: "24px",
          color: "white",
          zIndex: 99999,
          cursor: "pointer",
        }}
      >
        🤖
      </button>

      {isOpen && (
        <div
          style={{
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
          }}
        >
          <iframe
            src={typebotUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </>
  );
};

export default TypebotBubble;
