/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function dispatchEvent(medias) {
  eventMediaSort(medias);
  eventForLightbox();
  eventForHeart();
  eventModalForm();
  eventPagination();
  eventKeyboard();
  /***       EVENT  du  TRI         ***/ 

  function eventMediaSort(medias) {
    document.getElementById("sort-choice").addEventListener("click", function (event) {
      document.getElementById("sort-choice").classList.toggle("actived");
      let type = document.querySelector("#sort-choice").value;
      sortMediasByType(medias, type); //on trie par type
      displayMedias(medias); //on relance les medias
      displayLightBox(medias); //on lance les medias pour la lightbox
      showTotalLikes();
    });
  }
  /***      EVENT pour cibler : OPEN LIGHTBOX   ***/   

  function eventForLightbox() {
    document.querySelector(".gallery-wrapper").addEventListener("click", function (e) {
      let target = event.target;
      // convertit en minuscule
      if (target.nodeName.toLowerCase() == "a") {
        target = target.querySelector("img");
      }

      if (target.classList.contains("media")) {
        //si contient media
        openLightBox(target); // ouverture de la lightbox
      }
    });
    document
      .getElementById("lightboxClose")
      .addEventListener("click", closeLightBox);
  }

  function eventPagination() {
    //  cible les fleches
    document.querySelector(".lightbox__next").addEventListener("click", nextSlide);
    document.querySelector(".lightbox__prev").addEventListener("click", previousSlide);
  }

  /***     CLAVIER  ACCES   Keyboard   ***/   

  function eventKeyboard() {
    document.addEventListener("keydown", (e) => {
      if (e.key == "ArrowRight") {
        // Clavier à droite : Next
        //console.log("ArrowRight");
        nextSlide();
      } else if (e.key == "ArrowLeft") {
        // Clavier à gauche : Prev
        //console.log("ArrowLeft");
        previousSlide();
      }
      if (e.key == "Escape") {
        console.log("Escape");
        // Clavier Croix X : Fermer
        closeLightBox();
      }
      if (e.key == "Enter") {
        //console.log("Enter");
        if (e.target.nodeName.toLowerCase() == "span") clickLike(e.target);
      }
      if (e.target.nodeName.toLowerCase() == "mdContainer")toggle(active);
    });
  }

  function eventForHeart() {
    document.querySelector(".gallery-wrapper").addEventListener("click", function (event) {
      const target = event.target;
      //console.log(target);
      if (target.classList.contains("numberLike")) {
        //si contient  numberLike
        clickLike(target);
      }
    });
  }
  /***     EVENT   Modal  Formulaire       ***/  

  function eventModalForm() {
    const mdContainer = document.querySelector(".md-container");
    const closed = document.querySelectorAll(".closed");
    closed.forEach((trigger) =>
      trigger.addEventListener("click", function () {
        mdContainer.classList.toggle("active");
        document.getElementById("firstName").focus();
      })
    );
  }
  // RESET  du formulaire
  const formSubscribe = document.getElementById("formSubscribe");
  function resetFormSubscribe() {
    // reinitialise le formulaire lorsqu il est correctement rempli
    formSubscribe.reset();
  }
  formSubscribe.addEventListener("submit", (e) => {
    e.preventDefault(); // empechera la soumission du formulaire
    resetFormSubscribe(); // effacera
  });
}
