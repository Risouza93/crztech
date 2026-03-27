// pega o botão pelo ID
const botao = document.getElementById("btnContato");

// adiciona ação de clique
botao.addEventListener("click", () => {
  document.getElementById("contato").scrollIntoView({
    behavior: "smooth"
});
});


