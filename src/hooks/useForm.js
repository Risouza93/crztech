import { useState } from "react";
import emailjs from "@emailjs/browser";

export function useForm() {
  const [form, setForm] = useState({ nome: "", email: "" });
  const [status, setStatus] = useState({ mensagem: "", tipo: "" });
  const [loading, setLoading] = useState(false);

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

  return { form, status, loading, handleChange, handleSubmit };
}
