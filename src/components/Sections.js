export default function Sections({ form, status, loading, handleChange, handleSubmit }) {
  return (
    <>
      <section id="resultados">
        <h2>📊 Impacto real, não promessa</h2>
        <div className="grid">
          <div className="card"><h3>40%</h3><p>Redução no tempo de processos</p></div>
          <div className="card"><h3>35%</h3><p>Menos retrabalho operacional</p></div>
          <div className="card"><h3>Global</h3><p>Integrações com DHL, UPS e Correos</p></div>
          <div className="card"><h3>SaaS</h3><p>Produtos rodando internacionalmente</p></div>
        </div>
      </section>

      <section id="sobre">
        <h2>🧠 O problema que eu resolvo</h2>
        <p>Empresas perdem dinheiro todos os dias com processos manuais e sistemas desconectados.</p>
        <p>Eu transformo esse cenário em operações inteligentes usando Automação, Integrações e IA Generativa.</p>
        <p>O foco é simples: eficiência mensurável, escala e ROI real.</p>
        <h2 style={{ marginTop: 40 }}>🧠 Como eu resolvo problemas</h2>
        <div className="grid">
          <div className="card"><h3>1. Diagnóstico</h3><p>Identifico gargalos e perdas ocultas</p></div>
          <div className="card"><h3>2. Arquitetura</h3><p>Desenho soluções escaláveis</p></div>
          <div className="card"><h3>3. Execução</h3><p>Implemento com foco em resultado</p></div>
          <div className="card"><h3>4. Otimização</h3><p>Melhoria contínua baseada em dados</p></div>
        </div>
      </section>

      <section id="experiencia">
        <h2>💼 Experiência</h2>
        <div className="grid">
          <div className="card">
            <h3>Grupo MOVE3</h3>
            <p>Analista de Projetos</p>
            <ul>
              <li>Integrações via APIs (DHL, UPS, Correos)</li>
              <li>SQL / PostgreSQL</li>
              <li>Product Owner SaaS internacional</li>
              <li>Projetos logísticos de alto impacto</li>
            </ul>
          </div>
          <div className="card">
            <h3>MOOVE Portugal</h3>
            <p>SaaS logístico internacional</p>
            <ul>
              <li>+ integração global</li>
              <li>+ eficiência operacional</li>
            </ul>
          </div>
        </div>
        <h2 style={{ marginTop: 40 }}>⚡ Transformação real</h2>
        <div className="grid">
          <div className="card"><h3>Antes</h3><p>Processos manuais, retrabalho, falta de integração</p></div>
          <div className="card"><h3>Depois</h3><p>Automação, dados confiáveis e operação escalável</p></div>
        </div>
        <h2 style={{ marginTop: 40 }}>🔥 Por que eu?</h2>
        <ul>
          <li>Visão estratégica + execução técnica</li>
          <li>Foco obsessivo em ROI</li>
          <li>Tradução entre negócio e tecnologia</li>
          <li>IA aplicada a problemas reais</li>
        </ul>
      </section>

      <section id="contato">
        <div className="contact-card">
          <h2>📩 Vamos construir algo grande?</h2>
          <p style={{ color: "#94a3b8", marginTop: 8, marginBottom: 24 }}>
            Se sua empresa quer escalar eficiência sem aumentar headcount, a gente precisa conversar.
          </p>
          <form className="glass-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={form.email}
              onChange={handleChange}
            />
            <button type="submit" className="cta-button" disabled={loading}>
              {loading ? "Enviando..." : "Enviar mensagem →"}
            </button>
            {status.mensagem && (
              <p style={{ color: status.tipo === "erro" ? "#f87171" : "#4ade80", textAlign: "center" }}>
                {status.mensagem}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
