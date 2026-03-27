import { memo } from "react";

const LINKEDIN_URL = "https://www.linkedin.com/in/richard-de-souza-feitosa/";

const Footer = memo(function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Richard Feitosa — AI-Driven Project Architect
        {" · "}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#38bdf8",
            textDecoration: "none",
            fontWeight: 600,
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          LinkedIn ↗
        </a>
      </p>
    </footer>
  );
});

export default Footer;
