const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});

// Número fictício: substitua pelo WhatsApp real antes de usar em um cliente.
const whatsappNumber = "5546999999999";
const message = encodeURIComponent("Olá! Gostaria de agendar um horário na Vértice Barbearia.");
document.querySelector("#whatsapp-link").href = `https://wa.me/${whatsappNumber}?text=${message}`;
