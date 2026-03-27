document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // SCROLL SUAVE BOTÃO HERO
  // =========================
  const botaoTopo = document.getElementById("btnContato");

  if (botaoTopo) {
    botaoTopo.addEventListener("click", () => {
      document.getElementById("contato").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // =========================
  // SCROLL NAV LINKS
  // =========================
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const destino = document.querySelector(link.getAttribute("href"));

      destino.scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // =========================
  // ANIMAÇÃO AO SCROLL
  // =========================
  const sections = document.querySelectorAll("section");

  const revelar = () => {
    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;

      if (top < window.innerHeight - 100) {
        sec.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revelar);
  revelar(); // executa ao carregar

  // =========================
  // FORMULÁRIO PROFISSIONAL
  // =========================
  const form = document.getElementById("formContato");
  const mensagem = document.getElementById("mensagemStatus");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const botao = form.querySelector("button");

      // validação
      if (!nome || !email) {
        mensagem.textContent = "⚠️ Preencha todos os campos!";
        mensagem.className = "erro";
        return;
      }

      // loading
      botao.classList.add("loading");
      botao.textContent = "Enviando...";
      botao.disabled = true;

      mensagem.textContent = "";

      // simulação envio (depois você pode conectar API)
      setTimeout(() => {
        mensagem.textContent = "✅ Mensagem enviada com sucesso!";
        mensagem.className = "sucesso";

        botao.classList.remove("loading");
        botao.textContent = "🚀 Enviar mensagem";
        botao.disabled = false;

        form.reset();
      }, 2000);
    });
  }

});