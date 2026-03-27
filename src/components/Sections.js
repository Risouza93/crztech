import { memo } from "react";
import { motion } from "framer-motion";
import Sobre from "./Sobre";
import Projetos from "./Projetos";
import Stack from "./Stack";
import Skills from "./Skills";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const AnimatedSection = memo(function AnimatedSection({ id, label, children }) {
  return (
    <motion.section
      id={id}
      aria-label={label}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.section>
  );
});

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
        {status && typeof status === "string" && (
          <p
            className={`status-msg ${status.includes("sucesso") ? "status-msg--sucesso" : "status-msg--erro"}`}
            role="alert"
            aria-live="polite"
          >
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
      <AnimatedSection id="sobre"    label="Sobre mim">    <Sobre />    </AnimatedSection>
      <AnimatedSection id="projetos" label="Projetos">     <Projetos /> </AnimatedSection>
      <AnimatedSection id="stack"    label="Stack técnica"><Stack />    </AnimatedSection>
      <AnimatedSection id="skills"   label="Skills">       <Skills />   </AnimatedSection>
      <AnimatedSection id="contato"  label="Contato">
        <Contato
          form={form} status={status} loading={loading}
          handleChange={handleChange} handleSubmit={handleSubmit}
        />
      </AnimatedSection>
    </>
  );
});

export default Sections;