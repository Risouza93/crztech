import { memo } from "react";

const PROJETOS = [
  {
    emoji: "📦",
    titulo: "Integração Transportadoras Internacionais",
    empresa: "Grupo MOVE3",
    descricao:
      "APIs REST conectando DHL, UPS e Correos ao sistema interno. Automatizou rastreio, geração de etiquetas e conciliação de fretes — eliminando planilhas manuais e reduzindo erros operacionais.",
    impacto: "Operação internacional sem intervenção manual",
  },
  {
    emoji: "⚙️",
    titulo: "Automação de Testes e Relatórios",
    empresa: "Grupo MOVE3",
    descricao:
      "Implementação de automações com Microsoft 365 e Power Platform que cortaram em 40% o tempo de análise manual. Relatórios que antes levavam horas, passaram a rodar em minutos.",
    impacto: "−40% tempo de análise operacional",
  },
  {
    emoji: "🚀",
    titulo: "Product Owner — MOOVE Portugal & LEVOO",
    empresa: "Grupo MOVE3",
    descricao:
      "Gestão de produtos SaaS com operação internacional. Priorização de backlog, alinhamento com stakeholders e entrega de valor em ciclos curtos — com foco em adoção real pelos usuários.",
    impacto: "Operação SaaS rodando em Portugal",
  },
  {
    emoji: "🔧",
    titulo: "MegaSorter Damon — Implantação",
    empresa: "Grupo MOVE3",
    descricao:
      "Atuação direta na instalação e entrega de um dos projetos logísticos mais relevantes do grupo. Interface entre áreas técnicas, operação e diretoria durante toda a execução.",
    impacto: "Impacto direto na produtividade do CD",
  },
  {
    emoji: "🔁",
    titulo: "Reengenharia de Fluxos Sistêmicos",
    empresa: "Grupo MOVE3",
    descricao:
      "Reestruturação de fluxos operacionais e sistêmicos com foco em eliminação de retrabalho. Mapeamento, análise de gargalos e redesenho com SQL/Postgres e UX orientado à adoção.",
    impacto: "−35% retrabalho operacional",
  },
  {
    emoji: "🛒",
    titulo: "Operação E-Commerce Multicanal",
    empresa: "Aesir Store",
    descricao:
      "Gestão completa de e-commerce com integração via ERP Bling em Mercado Livre, B2W, Shopee, Via Varejo e Magalu. Automação de etiquetas, notas fiscais e controle de estoque multicanal.",
    impacto: "Expansão para 5 marketplaces simultâneos",
  },
];

const Projetos = memo(function Projetos() {
  return (
    <div>
      <h2>Projetos</h2>
      <p style={{ marginBottom: "0.5rem" }}>
        Não são protótipos. São entregas que rodaram — e ainda rodam — em produção.
      </p>
      <div className="grid">
        {PROJETOS.map((p) => (
          <div className="card" key={p.titulo}>
            <h3>{p.emoji} {p.titulo}</h3>
            <p style={{ fontSize: "0.75rem", marginBottom: "0.5rem", opacity: 0.5 }}>
              {p.empresa}
            </p>
            <p>{p.descricao}</p>
            <p style={{
              marginTop: "1rem",
              fontSize: "0.8rem",
              color: "#22c55e",
              fontWeight: 600,
            }}>
              ✅ {p.impacto}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projetos;
