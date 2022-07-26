/* eslint-disable no-unused-vars */
function displayLightBox(medias) {
  // On recreer chaque card Html stocker dans cardsDom
  const domLightBox = medias.map((media) => {
    //console.log(media.title);
    //console.log(media.id);
    return typeof media.image !== "undefined"
      ? `
        <div class="slide hide" data-media-lightbox="${media.id}"/>
        <img src="./assets/thumbnails/imagesMedias/${media.image}" aria-label="image${media.title}" alt="imagecloseup view" data-title="${media.title}">
        <div class="lightbox__title" aria-hidden="true">${media.title}</div>
        </div>
        `
      : `
        <div class="slide hide" data-media-lightbox="${media.id}">
         <video src="./assets/thumbnails/videosMedias/${media.video}"/> 
          </video>
        <div class="lightbox__title">${media.title}</div>
        </div>`;
  });
  //("") supp, d'un array
  document.querySelector(".lightbox__content").innerHTML = domLightBox.join("");
  document.querySelector("video").addEventListener("click", (e) => {
    if(e.target.paused) {
      e.target.play();
    }else {
      e.target.pause();
    }
  });
}

function openLightBox(cardClicked) {
  // OUVRE LB en supprimant le hide
  document.getElementById("carousel").classList.remove("hide");
  hideAllMedia();
  //trouve la data-media qui identifie la media
  let id = cardClicked.dataset["media"];
  
  //affiche en suppr le hide
  document.querySelector("[data-media-lightbox=\"" + id + "\"]").classList.remove("hide");
}

function hideAllMedia() {
  document.querySelectorAll(".slide").forEach((element) => {
    element.classList.add("hide"); // on cache les autres images du carousel 
  });
}

function closeLightBox() {
  //ajout sur la class un "hide" pour FERMER
  document.getElementById("carousel").classList.add("hide");
}

function nextSlide() {
  let currentSlide = document.querySelector(".slide:not(.hide)"); // slide affichée
  currentSlide.classList.add("hide"); //  masque puisqu'on passe à la suivante

  // Si on n'est pas à la fin du carrousel
  // ElementSibling renvoie l element suivant
  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.remove("hide");
  } else {
    // Si on est a la fin du carrousel on va afficher la 1ere slide
    let firstSlide = document.querySelector(".slide:first-child");
    firstSlide.classList.remove("hide");
  }
}

function previousSlide() {
  let currentSlide = document.querySelector(".slide:not(.hide)");
  // :not  va cibler tout ce qui n'est pas .hide
  currentSlide.classList.add("hide");
  //console.dir(currentSlide);  // toute la div.slide.hide en previous
  // si on n'est pas au debut du carousel,   
  if (currentSlide.previousElementSibling) {
    currentSlide.previousElementSibling.classList.remove("hide");
  } else {
    //si on est à la fin , affiche la derniere
    let lastSlide = document.querySelector(".slide:last-child");
    lastSlide.classList.remove("hide");
  }
}