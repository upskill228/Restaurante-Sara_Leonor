// HEADER

const nav = document.querySelector('.navPrincipal');
const toggle = document.querySelector(".menu-toggle");
const menuLinks = document.querySelectorAll(".menu-link");
const sections = document.querySelectorAll("section[id]");

// Menu mobile - Abrir e fechar
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.classList.toggle("active", isOpen);
  toggle.setAttribute("aria-expanded", isOpen);

  document.body.style.overflow = isOpen ? "hidden" : "";

  if (isOpen) {
    menuLinks[0].focus();
  } else {
    toggle.focus();
  }
});

// Fechar menu mobile ao clicar num link
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

// Fechar com ESC
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && nav.classList.contains("open")) {
    nav.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    toggle.focus();
  }
});

// Nav menu-links.active - quando se faz scroll pelas secções, destaca o link da secção correspondente
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        menuLinks.forEach(link => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      }
    });
  },
  {
    rootMargin: "-80px 0px -40% 0px",
    threshold: 0.2
  }
);

sections.forEach(section => observer.observe(section));

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