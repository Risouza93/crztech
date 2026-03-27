<<<<<<< HEAD
// src/components/TypebotBubble.js - 0 WARNINGS
=======
// src/components/TypebotBubble.js
>>>>>>> 5f4d81cb7c877378cba90552bf02de680cddcec3
import { useState } from "react";

const TypebotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [isHovered, setIsHovered] = useState(false);
  const typebotUrl = "https://typebot.onboarding-jresh.typebot.io";

  // ✅ Estilos SEPARADOS (sem duplicatas)
  const baseStyle = {
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
  };

  const hoveredStyle = {
    ...baseStyle,
    background: "linear-gradient(135deg, #0ea5e9, #16a34a, #eab308)",
    transform: "scale(1.15) rotate(360deg)",
    boxShadow: "0 20px 48px rgba(56,189,248,0.7), 0 0 0 8px rgba(56,189,248,0.2)",
  };

  const normalStyle = {
    ...baseStyle,
    background: "linear-gradient(135deg, #38bdf8, #22c55e)",
    transform: "scale(1)",
    boxShadow: "0 8px 24px rgba(56,189,248,0.4)",
  };

=======
  const typebotUrl = "https://typebot.onboarding-jresh.typebot.io";

>>>>>>> 5f4d81cb7c877378cba90552bf02de680cddcec3
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={isHovered ? hoveredStyle : normalStyle}
=======
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
>>>>>>> 5f4d81cb7c877378cba90552bf02de680cddcec3
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
<<<<<<< HEAD
            title="Chat IA CRZTech"  // ✅ A11y corrigido
=======
>>>>>>> 5f4d81cb7c877378cba90552bf02de680cddcec3
          />
        </div>
      )}
    </>
  );
};

<<<<<<< HEAD
export default TypebotBubble;
=======
export default TypebotBubble;
>>>>>>> 5f4d81cb7c877378cba90552bf02de680cddcec3
