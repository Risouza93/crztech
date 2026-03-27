import { useEffect, useState, useCallback } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import "./style.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Sections from "./components/Sections";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import Toast from "./components/Toast";
import TypebotBubble from "./components/TypebotBubble";

function App() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [toast, setToast] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  const scrollTo = useCallback((id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollContato = useCallback(() => scrollTo("#contato"), [scrollTo]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.15 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  /* ========================= */
  /* 🔒 PROTEÇÃO JS (CAMADA 2) */
  /* ========================= */
  useEffect(() => {
    // Bloqueia botão direito
    const blockContextMenu = (e) => e.preventDefault();

    // Bloqueia atalhos comuns
    const blockKeys = (e) => {
      const key = e.key.toLowerCase();

      // Permite digitação normal em inputs/textarea
      const isInput =
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA";

      if (isInput) return;

      if (
        (e.ctrlKey && ["c", "u", "s", "a"].includes(key)) ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockKeys);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.email) {
      setToast({ message: "⚠️ Preencha todos os campos!", type: "erro" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setToast({ message: "✅ Mensagem enviada com sucesso!", type: "sucesso" });
      setForm({ nome: "", email: "", mensagem: "" });
      setLoading(false);
    }, 2000);
  };

  return (
    <ThemeProvider>
      <CustomCursor />
      <ScrollToTop />
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "" })}
      />
      <Header scrollContato={scrollContato} />
      <Nav scrollTo={scrollTo} />
      <Sections
        form={form}
        status={toast}
        loading={loading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TypebotBubble />
    </ThemeProvider>
  );
}

export default App;