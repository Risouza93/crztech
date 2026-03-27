import { useEffect, useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import "./style.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Sections from "./components/Sections";

emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

function App() {
  const [form, setForm] = useState({ nome: "", email: "" });
  const [status, setStatus] = useState({ mensagem: "", tipo: "" });
  const [loading, setLoading] = useState(false);

  const scrollTo = useCallback((id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollContato = useCallback(() => {
    scrollTo("#contato");
  }, [scrollTo]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome || !form.email) {
      setStatus({ mensagem: "⚠️ Preencha todos os campos!", tipo: "erro" });
      return;
    }
    setLoading(true);
    setStatus({ mensagem: "", tipo: "" });

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { nome: form.nome, email: form.email }
      );
      setStatus({ mensagem: "✅ Mensagem enviada com sucesso!", tipo: "sucesso" });
      setForm({ nome: "", email: "" });
    } catch (error) {
      setStatus({ mensagem: "❌ Erro ao enviar. Tente novamente.", tipo: "erro" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header onScrollContato={scrollContato} />
      <Nav scrollTo={scrollTo} />
      <main className="container">
        <Sections
          form={form}
          status={status}
          loading={loading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </main>
      <footer>
        <p>© 2024 Richard Feitosa · AI Project Architect</p>
      </footer>
    </>
  );
}

export default App;
