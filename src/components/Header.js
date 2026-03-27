import { memo } from "react";
import { motion } from "framer-motion";

const Header = memo(function Header({ onScrollContato }) {
  return (
    <header>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/pictures/perfil.jpeg`}
            alt="Richard Feitosa"
            style={{
              width: 220,
              height: 220,
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid rgba(56,189,248,0.4)",
              marginBottom: 24,
            }}
          />
          <p style={{ color: "#38bdf8", fontWeight: 600, marginBottom: 12 }}>
            👋 Olá, eu sou
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Richard Feitosa
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#94a3b8", marginBottom: 24 }}>
            AI Project Architect
          </p>
          <p style={{ maxWidth: 560, margin: "0 auto 32px", color: "#94a3b8", fontSize: 16 }}>
            Transformo operações em vantagem competitiva usando{" "}
            <strong style={{ color: "#e2e8f0" }}>Automação</strong>,{" "}
            <strong style={{ color: "#e2e8f0" }}>Integrações</strong> e{" "}
            <strong style={{ color: "#e2e8f0" }}>IA Generativa</strong>.
          </p>
          <div className="hero-stats">
            <span>⚡ Automação</span>
            <span>🔗 Integrações API</span>
            <span>🤖 IA Generativa</span>
            <span>📊 ROI Mensurável</span>
          </div>
          <motion.button
            onClick={onScrollContato}
            className="cta-button"
            style={{ marginTop: 40 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            Vamos conversar →
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
});

export default Header;
