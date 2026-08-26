/* =========================================================
   SOJEONG LEE PORTFOLIO
   Minimal Interaction
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------------
     01. NAVIGATION ACTIVE STATE
  ------------------------------------------------------- */

  const navLinks = document.querySelectorAll(".main-nav a");

  const sections = [
    document.querySelector("#work"),
    document.querySelector("#process"),
    document.querySelector("#about")
  ].filter(Boolean);

  const updateActiveNav = () => {
    const scrollPosition = window.scrollY + 180;

    let currentSection = "";

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", updateActiveNav);

  updateActiveNav();


  /* -------------------------------------------------------
     02. SCROLL REVEAL
  ------------------------------------------------------- */

  const revealTargets = document.querySelectorAll(
    ".featured-project, .project-card, .process-item, .about-grid"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealTargets.forEach(target => {
      target.classList.add("reveal");
      observer.observe(target);
    });

  } else {

    revealTargets.forEach(target => {
      target.classList.add("is-visible");
    });

  }


  /* -------------------------------------------------------
     03. PROJECT IMAGE ERROR FALLBACK
  ------------------------------------------------------- */

  const images = document.querySelectorAll(
    ".featured-image img, .project-card-image img"
  );

  images.forEach(image => {

    image.addEventListener("error", () => {

      const parent = image.parentElement;

      parent.classList.add("image-placeholder");

      image.style.display = "none";

    });

  });


  /* -------------------------------------------------------
     04. BACK TO TOP
  ------------------------------------------------------- */

  const brand = document.querySelector(".brand");

  if (brand) {

    brand.addEventListener("click", event => {

      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }

});
