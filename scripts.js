// HEADER

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navPrincipal');

// Abrir e fechar menu
hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// MODAL DE RESERVAS
const btnAbrir = document.getElementById("reservaBtn");
const modal = document.getElementById("modalReservas");
const btnFechar = document.getElementById("closeReservas");

// Abrir modal
btnAbrir.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("show");
  document.getElementById("nomeReserva").focus();
});

// Fechar modal com botão
btnFechar.addEventListener("click", () => {
  modal.classList.remove("show");
  btnAbrir.focus();
});

// Fechar modal clicando fora do conteúdo
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    btnAbrir.focus();
  }
});

// Fechar modal com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    modal.classList.remove("show");
    btnAbrir.focus();
  }
});

// Feedback a simular envio do formulário de reserva

function enviarForm(event) {
  event.preventDefault();
  const form = event.target;
  const nome = form.nomeReserva.value;
  const feedback = document.getElementById("feedback");

  feedback.textContent = "Mensagem enviada com sucesso! Obrigada pelo contacto " + nome + " 😊";

  form.reset();
}

// Feedback a simular subscrição para newsletter

function confirmarSubscricaoNewsletter (event) {
  event.preventDefault();
  const form = event.target;
  const nome = form.emailNewsletter.value;

  const feedback = document.getElementById("feedbackNewsletter");

  feedback.textContent = "Subscrição registada com sucesso para o e-mail " + nome + ". Obrigada pelo contacto 😊";

  form.reset();
}


// FOOTER

// Ano Corrente
let currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;