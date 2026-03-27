import { memo } from "react";
import Sobre from "./Sobre";
import Projetos from "./Projetos";
import Stack from "./Stack";

const CONTATO_INICIAL = { nome: "", email: "", mensagem: "" };

const Contato = memo(function Contato({ form, status, loading, handleChange, handleSubmit }) {
  return (
    <div className="contact-card">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit} noValidate className="glass-form">
        <input
          name="nome" type="text" value={form.nome}
          onChange={handleChange} placeholder="Seu nome"
          required autoComplete="name"
        />
        <input
          name="email" type="email" value={form.email}
          onChange={handleChange} placeholder="seu@email.com"
          required autoComplete="email"
        />
        <textarea
          name="mensagem" value={form.mensagem}
          onChange={handleChange} placeholder="Como posso te ajudar?"
          rows={5} required
        />
        <button type="submit" className="cta-button" disabled={loading}>
          {loading ? "Enviando…" : "Enviar mensagem"}
        </button>
        {status && (
          <p className={`status-msg ${status.includes("sucesso") ? "status-msg--sucesso" : "status-msg--erro"}`}
            role="alert" aria-live="polite">
            {status}
          </p>
        )}
      </form>
    </div>
  );
});

const Sections = memo(function Sections({ form, status, loading, handleChange, handleSubmit }) {
  return (
    <>
      <section id="sobre"    aria-label="Sobre mim">    <Sobre />    </section>
      <section id="projetos" aria-label="Projetos">     <Projetos /> </section>
      <section id="stack"    aria-label="Stack técnica"><Stack />    </section>
      <section id="contato"  aria-label="Contato">
        <Contato
          form={form} status={status} loading={loading}
          handleChange={handleChange} handleSubmit={handleSubmit}
        />
      </section>
    </>
  );
});

export default Sections;
