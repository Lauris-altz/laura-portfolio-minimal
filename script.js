"use strict";

const slides = Array.from(document.querySelectorAll("[data-slide]"));
const projectLabel = document.querySelector("[data-project-label]");
let currentSlide = 0;

if (slides.length > 1) {
  window.setInterval(() => {
    slides[currentSlide].classList.remove("is-active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("is-active");

    if (projectLabel) {
      projectLabel.textContent = slides[currentSlide].dataset.projectName || "";
    }
  }, 3000);
}
