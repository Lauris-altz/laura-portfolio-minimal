"use strict";

/* HOME CAROUSEL */

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

/* LA SOBREMESA MANUAL CAROUSEL */

const manualCarousel = document.querySelector("[data-manual-carousel]");

if (manualCarousel) {
  const manualSlides = Array.from(
    manualCarousel.querySelectorAll("[data-manual-slide]")
  );

  let currentManualSlide = 0;

  if (manualSlides.length > 1) {
    window.setInterval(() => {
      manualSlides[currentManualSlide].classList.remove("is-active");
      currentManualSlide = (currentManualSlide + 1) % manualSlides.length;
      manualSlides[currentManualSlide].classList.add("is-active");
    }, 3000);
  }
}
/* CATA LA LATA SLIDERS */

const cataSliders = document.querySelectorAll(".cata-slider");

cataSliders.forEach((slider) => {
  const images = slider.querySelectorAll(".cata-slide");
  let currentImage = 0;

  if (images.length > 1) {
    setInterval(() => {
      images[currentImage].classList.remove("is-active");

      currentImage = (currentImage + 1) % images.length;

      images[currentImage].classList.add("is-active");
    }, 3000);
  }
});