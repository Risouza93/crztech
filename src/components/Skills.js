import { useEffect, useRef } from 'react';

const skills = [
  {
    category: 'Automação & IA',
    items: [
      { name: 'n8n / Make (Integromat)', level: 100 },
      { name: 'LangChain / GPT APIs', level: 100 },
      { name: 'Power Automate', level: 100 },
      { name: 'Python (automação)', level: 100 },
    ],
  },
  {
    category: 'Integrações & APIs',
    items: [
      { name: 'REST APIs', level: 100 },
      { name: 'ERPs (TOTVS, FOCCO, Bling)', level: 100 },
      { name: 'TMS / WMS', level: 100 },
      { name: 'Node.js', level: 100 },
    ],
  },
  {
    category: 'Frontend & Ferramentas',
    items: [
      { name: 'React / TypeScript / Javascript', level: 100 },
      { name: 'Power BI', level: 100 },
      { name: 'Git / Vercel / CI-CD', level: 100 },
      { name: 'UX / UI', level: 100 },
    ],
  },
];

export default function Skills() {
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.level + '%';
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
                    ref={(el) => barsRef.current.push(el)}
                    style={{ width: '0%' }}
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
