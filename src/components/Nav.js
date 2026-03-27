import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Nav({ scrollTo }) {
  const [active, setActive] = useState("#resultados");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const links = [
    { id: "#resultados", label: "Resultados" },
    { id: "#sobre", label: "Sobre" },
    { id: "#experiencia", label: "Experiência" },
    { id: "#contato", label: "Contato" },
  ];

  return (
    <nav>
      <div className="nav-container">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={clsx("nav-link", active === link.id && "active")}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
