import { useEffect, useRef } from "react";

const skills = [
  { category: "Automação & IA", items: [
    { name: "n8n / Make (Integromat)", level: 95 },
    { name: "LangChain / GPT APIs", level: 88 },
    { name: "Power Automate", level: 85 },
    { name: "Python (automação)", level: 80 },
  ]},
  { category: "Integrações & APIs", items: [
    { name: "REST APIs", level: 92 },
    { name: "ERPs (TOTVS, FOCCO, Bling)", level: 88 },
    { name: "TMS / WMS", level: 85 },
    { name: "Node.js", level: 78 },
  ]},
  { category: "Frontend & Ferramentas", items: [
    { name: "React / TypeScript", level: 82 },
    { name: "Power BI", level: 85 },
    { name: "Git / Vercel / CI-CD", level: 88 },
    { name: "UX / UI", level: 75 },
  ]},
];

export default function Skills() {
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.level + "%";
          }
        });
      },
      { threshold: 0.3 }
    );
    barsRef.current.forEach((bar) => bar && observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <h2>🎯 Skills</h2>
      <div className="skills-grid">
        {skills.map((cat) => (
          <div key={cat.category} className="skills-category">
            <h3>{cat.category}</h3>
            {cat.items.map((skill, i) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar"
                    data-level={skill.level}
                    ref={(el) => (barsRef.current.push(el))}
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}