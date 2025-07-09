// Navigation toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll Reveal Animations
ScrollReveal({
  distance: "50px",
  duration: 1000,
  delay: 200,
  reset: true,
});

ScrollReveal().reveal(".header__content", { origin: "top" });
ScrollReveal().reveal(".header__image", { origin: "bottom" });
ScrollReveal().reveal(".about__image", { origin: "left" });
ScrollReveal().reveal(".about__content", { origin: "right" });
ScrollReveal().reveal(".service__card", { origin: "bottom", interval: 100 });
ScrollReveal().reveal(".portfolio__card", { origin: "top", interval: 100 });
ScrollReveal().reveal(".contact__socials", { origin: "bottom" });

// Enhance project descriptions
const projectCards = document.querySelectorAll(".portfolio__card");
projectCards.forEach((card) => {
  card.style.padding = "1.5rem";
  card.style.background = "#ffffff";
  card.style.color = "#222";
  card.style.borderRadius = "1rem";
  card.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";

  const title = card.querySelector("h4");
  if (title) {
    title.style.color = "#e9615e";
    title.style.marginTop = "1rem";
    title.style.marginBottom = "0.5rem";
    title.style.fontSize = "1.2rem";
  }

  const desc = card.querySelector("p");
  if (desc) {
    desc.style.fontSize = "0.95rem";
    desc.style.lineHeight = "1.6";
    desc.style.color = "#555";
  }
});