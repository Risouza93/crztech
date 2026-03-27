// Header.js – 100% corrigido para glass + hover via CSS
import { memo, useMemo } from "react";

const STATS = [
  "⚡ 40% menos tempo operacional",
  "🔁 35% menos retrabalho",
  "🌍 DHL · UPS · Correos",
  "🚀 SaaS com operação global",
];

const LINKEDIN_URL = "https://www.linkedin.com/in/richard-de-souza-feitosa/";

const Header = memo(function Header({ scrollContato }) {
  const renderedStats = useMemo(
    () => STATS.map((stat) => <span key={stat} className="stat-badge">{stat}</span>),
    []
  );

  return (
    <header>
      <div className="container">
        <img
          src="/pictures/perfil.jpeg"
          alt="Foto de Richard Feitosa"
          width={196}
          height={196}
          style={{
            borderRadius: "50%",
            border: "2px solid rgba(56,189,248,0.3)",
            objectFit: "cover",
            display: "block",
            margin: "0 auto 1.5rem",
          }}
        />

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #38bdf8, #22c55e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Transformo caos operacional em
          <br />
          eficiência com IA
        </h1>

        <p
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            color: "#b8c5d6",
            maxWidth: "540px",
            margin: "0 auto 2rem",
            lineHeight: 1.7,
          }}
        >
          AI-Driven Project Architect · Automação &amp; IA Generativa ·
          Redução de até 40% no tempo de processos
          <br />
          · Integrações via APIs
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            className="cta-button"
            onClick={scrollContato}
            aria-label="Ir para seção de contato"
          >
            <span aria-hidden="true">🚀</span>
            Quero escalar minha operação
          </button>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver perfil no LinkedIn"
            className="linkedin-btn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="linkedin-icon"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="linkedin-label">LinkedIn</span>
          </a>
        </div>

        <div
          className="hero-stats"
          aria-label="Resultados em destaque"
          style={{ marginTop: "2rem" }}
        >
          {renderedStats}
        </div>
      </div>
    </header>
  );
});

export default Header;