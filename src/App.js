import { useEffect, useState, useCallback } from "react";
import "./App.css";
import "./style.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Sections from "./components/Sections";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.email) {
      setStatus({ mensagem: "⚠️ Preencha todos os campos!", tipo: "erro" });
      return;
    }
    setLoading(true);
    setStatus({ mensagem: "", tipo: "" });
    setTimeout(() => {
      setStatus({ mensagem: "✅ Mensagem enviada com sucesso!", tipo: "sucesso" });
      setForm({ nome: "", email: "" });
      setLoading(false);
    }, 2000);
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
