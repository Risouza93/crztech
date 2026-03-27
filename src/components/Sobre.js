import { memo } from "react";

const Sobre = memo(function Sobre() {
  return (
    <div>
      <h2>Sobre</h2>
      <p>
        Sou Richard Feitosa — AI-Driven Project Architect com mais de 7 anos
        conectando tecnologia, processos e pessoas para gerar impacto real.
        Não entrego documentação. Entrego resultado mensurável.
      </p>
      <p>
        Comecei na operação — logística, comercial, suporte técnico em redes
        móveis na TIM. Fui aprendendo que o problema nunca é só técnico:
        é sempre sobre processo, comunicação e decisão. Isso me tornou
        um profissional que fala com C-Level sobre estratégia e com a
        operação sobre execução — sem ruído dos dois lados.
      </p>
      <p>
        Hoje especializo em Automação + IA Generativa aplicada a operações
        reais. Meu foco é simples: sua empresa escala eficiência
        sem escalar headcount.
      </p>

      <div className="grid" style={{ marginTop: "2rem" }}>
        <div className="card">
          <h3>⚡ Impacto direto</h3>
          <p>
            40% menos tempo em processos internos. 35% menos retrabalho.
            Resultados entregues no Grupo MOVE3 com automação real,
            não apresentação de slides.
          </p>
        </div>
        <div className="card">
          <h3>🔗 Integrador nato</h3>
          <p>
            APIs REST com DHL, UPS, Correos. ERPs, TMS, WMS.
            Sistemas que antes não se falavam, hoje trocam dados em tempo real.
          </p>
        </div>
        <div className="card">
          <h3>🧠 IA aplicada, não teórica</h3>
          <p>
            IA Generativa com foco em ROI mensurável. Construo fluxos
            inteligentes que a operação realmente adota — não só demos bonitos.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Sobre;
