import { memo } from "react";

const STACK = [
  {
    categoria: "IA & Automação",
    itens: [
      { nome: "ChatGPT / GPT-4o", emoji: "🤖" },
      { nome: "LangChain",        emoji: "🔗" },
      { nome: "Power Automate",   emoji: "⚡" },
      { nome: "n8n",              emoji: "🔁" },
      { nome: "Make (Integromat)",emoji: "🛠️" },
    ],
  },
  {
    categoria: "Dados & Backend",
    itens: [
      { nome: "SQL / PostgreSQL", emoji: "🗄️" },
      { nome: "REST APIs",        emoji: "🔌" },
      { nome: "Node.js",          emoji: "🟩" },
      { nome: "Python",           emoji: "🐍" },
      { nome: "Excel Avançado",   emoji: "📊" },
    ],
  },
  {
    categoria: "Produto & Gestão",
    itens: [
      { nome: "Product Owner",    emoji: "🎯" },
      { nome: "Jira / Scrum",     emoji: "📋" },
      { nome: "Power BI",         emoji: "📈" },
      { nome: "Microsoft 365",    emoji: "☁️" },
      { nome: "UX / UI",          emoji: "🎨" },
    ],
  },
  {
    categoria: "Sistemas & Infra",
    itens: [
      { nome: "ERPs (TOTVS, FOCCO, Bling)", emoji: "🏭" },
      { nome: "TMS / WMS",                  emoji: "📦" },
      { nome: "React / TypeScript",          emoji: "⚛️" },
      { nome: "Git / GitHub",               emoji: "🐙" },
      { nome: "Vercel / CI-CD",             emoji: "🚀" },
    ],
  },
];

const Stack = memo(function Stack() {
  return (
    <div>
      <h2>Stack</h2>
      <p style={{ marginBottom: "0.5rem" }}>
        Ferramentas que uso para construir, conectar e automatizar — em produção, não em tutorial.
      </p>
      <div className="grid">
        {STACK.map((grupo) => (
          <div className="card" key={grupo.categoria}>
            <h3>{grupo.categoria}</h3>
            <ul>
              {grupo.itens.map((item) => (
                <li key={item.nome}>
                  {item.emoji} {item.nome}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Stack;
