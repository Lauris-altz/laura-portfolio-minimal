"use strict";




/* =========================================
   LA SOBREMESA — MANUAL CAROUSEL
========================================= */

const manualCarousel =
  document.querySelector("[data-manual-carousel]");

if (manualCarousel) {

  const manualSlides = Array.from(
    manualCarousel.querySelectorAll(
      "[data-manual-slide]"
    )
  );

  let currentManualSlide = 0;

  if (manualSlides.length > 1) {

    window.setInterval(() => {

      manualSlides[currentManualSlide]
        .classList.remove("is-active");


      currentManualSlide =
        (currentManualSlide + 1) %
        manualSlides.length;


      manualSlides[currentManualSlide]
        .classList.add("is-active");

    }, 3000);

  }

}


/* =========================================
   CATA LA LATA — AUTOMATIC SLIDERS
========================================= */

const cataSliders =
  document.querySelectorAll(".cata-slider");

cataSliders.forEach((slider) => {

  const images =
    slider.querySelectorAll(".cata-slide");

  let currentImage = 0;

  if (images.length > 1) {

    window.setInterval(() => {

      images[currentImage]
        .classList.remove("is-active");


      currentImage =
        (currentImage + 1) % images.length;


      images[currentImage]
        .classList.add("is-active");

    }, 3000);

  }

});


/* =========================================
   STARBUCKS IN NYC
   DESKTOP = HOVER
   MOBILE = TAP
========================================= */

const starbucksHoverItems =
  document.querySelectorAll(
    "[data-starbucks-hover]"
  );

starbucksHoverItems.forEach((item) => {

  item.addEventListener("click", () => {

    const isTouchDevice =
      window.matchMedia(
        "(hover: none)"
      ).matches;


    if (isTouchDevice) {

      item.classList.toggle(
        "is-flipped"
      );

    }

  });

});


/* =========================================
   MADE IN TÜRKIYE — MAGAZINE READER
========================================= */

const turkiyeReader =
  document.querySelector("[data-turkiye-reader]");

if (turkiyeReader) {

  /* GET ALL 24 PAGES */

  const sourceImages = Array.from(
    document.querySelectorAll("[data-turkiye-source]")
  );


  const pages = sourceImages.map((image) => ({
    src: image.getAttribute("src"),
    alt: image.getAttribute("alt")
  }));


  /* ELEMENTS */

  const spread =
    document.querySelector("[data-turkiye-spread]");

  const leftSlot =
    document.querySelector("[data-turkiye-left-slot]");

  const rightSlot =
    document.querySelector("[data-turkiye-right-slot]");

  const leftImage =
    document.querySelector("[data-turkiye-left-image]");

  const rightImage =
    document.querySelector("[data-turkiye-right-image]");

  const previousButton =
    document.querySelector("[data-turkiye-prev]");

  const nextButton =
    document.querySelector("[data-turkiye-next]");

  const counter =
    document.querySelector("[data-turkiye-counter]");


  /*
    DESKTOP:
    0  = portada
    1  = páginas 1 + 2
    2  = páginas 3 + 4
    ...
    11 = páginas 21 + 22
    12 = contraportada

    MOBILE:
    0–23 = una página cada vez
  */


  let desktopSpreadIndex = 0;
  let mobilePageIndex = 0;


  let previousMobileMode =
    window.matchMedia(
      "(max-width: 650px)"
    ).matches;


  function isMobile() {

    return window.matchMedia(
      "(max-width: 650px)"
    ).matches;

  }


  /* =========================================
     UPDATE IMAGE
  ========================================= */

  function setImage(element, page) {

    if (!element || !page) {
      return;
    }

    element.src = page.src;
    element.alt = page.alt;

  }


  /* =========================================
     DESKTOP
  ========================================= */

  function renderDesktop() {

    /*
      13 STATES:
      0 = cover
      1–11 = spreads
      12 = back cover
    */

    const totalStates = 13;


    /* COVER */

    if (desktopSpreadIndex === 0) {

      spread.classList.add("is-single");

      setImage(
        leftImage,
        pages[0]
      );

      rightSlot.hidden = true;

      counter.textContent = "Cover";

      return;

    }


    /* BACK COVER */

    if (
      desktopSpreadIndex ===
      totalStates - 1
    ) {

      spread.classList.add("is-single");

      setImage(
        leftImage,
        pages[pages.length - 1]
      );

      rightSlot.hidden = true;

      counter.textContent =
        "Back cover";

      return;

    }


    /* INTERIOR SPREADS */

    spread.classList.remove("is-single");

    rightSlot.hidden = false;


    const leftPageIndex =
      1 + ((desktopSpreadIndex - 1) * 2);

    const rightPageIndex =
      leftPageIndex + 1;


    setImage(
      leftImage,
      pages[leftPageIndex]
    );

    setImage(
      rightImage,
      pages[rightPageIndex]
    );


    counter.textContent =
      `${leftPageIndex} — ${rightPageIndex} / 22`;

  }


  /* =========================================
     MOBILE
  ========================================= */

  function renderMobile() {

    spread.classList.add("is-single");

    rightSlot.hidden = true;


    setImage(
      leftImage,
      pages[mobilePageIndex]
    );


    if (mobilePageIndex === 0) {

      counter.textContent =
        "Cover";

    } else if (
      mobilePageIndex ===
      pages.length - 1
    ) {

      counter.textContent =
        "Back cover";

    } else {

      counter.textContent =
        `${mobilePageIndex} / 22`;

    }

  }


  /* =========================================
     RENDER
  ========================================= */

  function renderTurkiyeReader() {

    if (isMobile()) {

      renderMobile();

    } else {

      renderDesktop();

    }

  }


  /* =========================================
     PAGE TURN EFFECT
  ========================================= */

  function changePage(direction) {

    spread.classList.add(
      "is-turning"
    );


    window.setTimeout(() => {

      if (isMobile()) {

        mobilePageIndex +=
          direction;


        if (mobilePageIndex < 0) {

          mobilePageIndex =
            pages.length - 1;

        }


        if (
          mobilePageIndex >=
          pages.length
        ) {

          mobilePageIndex = 0;

        }


        renderMobile();

      } else {

        desktopSpreadIndex +=
          direction;


        if (
          desktopSpreadIndex < 0
        ) {

          desktopSpreadIndex = 12;

        }


        if (
          desktopSpreadIndex > 12
        ) {

          desktopSpreadIndex = 0;

        }


        renderDesktop();

      }


      spread.classList.remove(
        "is-turning"
      );

    }, 130);

  }


  /* =========================================
     BUTTONS
  ========================================= */

  if (previousButton) {

    previousButton.addEventListener(
      "click",
      () => {

        changePage(-1);

      }
    );

  }


  if (nextButton) {

    nextButton.addEventListener(
      "click",
      () => {

        changePage(1);

      }
    );

  }


  /* =========================================
     KEYBOARD ARROWS
  ========================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "ArrowLeft"
      ) {

        changePage(-1);

      }


      if (
        event.key === "ArrowRight"
      ) {

        changePage(1);

      }

    }
  );


  /* =========================================
     RESPONSIVE CHANGE
  ========================================= */

  window.addEventListener(
    "resize",
    () => {

      const mobileMode =
        isMobile();


      if (
        mobileMode !==
        previousMobileMode
      ) {

        previousMobileMode =
          mobileMode;

        desktopSpreadIndex = 0;
        mobilePageIndex = 0;

        renderTurkiyeReader();

      }

    }
  );


  /* FIRST RENDER */

  renderTurkiyeReader();

}


/* =========================================
   HOME INTRO
========================================= */

const introScreen =
  document.getElementById(
    "introScreen"
  );

const introPrefix =
  document.getElementById(
    "introPrefix"
  );

const introName =
  document.getElementById(
    "introName"
  );


if (
  introScreen &&
  introPrefix &&
  introName
) {

  const prefixText =
  "";

const nameText =
  "Welcome to my portfolio :)";

  let prefixIndex = 0;
  let nameIndex = 0;


  function typePrefix() {

    if (
      prefixIndex <
      prefixText.length
    ) {

      introPrefix.textContent +=
        prefixText.charAt(
          prefixIndex
        );

      prefixIndex++;

      window.setTimeout(
        typePrefix,
        85
      );

    } else {

      typeName();

    }

  }


  function typeName() {

    if (
      nameIndex <
      nameText.length
    ) {

      introName.textContent +=
        nameText.charAt(
          nameIndex
        );

      nameIndex++;

      window.setTimeout(
        typeName,
        85
      );

    } else {

      window.setTimeout(() => {

        introScreen.classList.add(
          "is-hidden"
        );

      }, 1150);

    }

  }


  window.setTimeout(
    typePrefix,
    250
  );

}