/* eslint-disable no-unused-vars */
function displayLightBox(medias) {
    // On recreer chaque card Html stocker dans cardsDom
    const domLightBox = medias.map((media) => {
        document.querySelector('.lightbox__title').innerHTML = media.title;
        //console.log(medias);
        return typeof media.image !== "undefined"
            ? `<img src="./assets/thumbnails/imagesMedias/${media.image}" alt="imagecloseup view" class="slide hide" data-media-lightbox="${media.id}"/>`
            : `<video controls width="250" class="slide hide"><source src="./assets/thumbnails/videosMedias/${media.video}" type="video/mp4"></video>`;
    })
    document.querySelector(".lightbox__content").innerHTML = domLightBox.join("");//("") supprimer les , d'un array
}

function openLightBox(cardClicked) {
    //console.log('carousel');
    document.getElementById('carousel').classList.remove('hide');  // OUVRE lightbox en supprimant le hide
    hideAllMedia();
    let id = cardClicked.dataset['media'];    // On trouve la data-media qui identifie la media
    document.querySelector('[data-media-lightbox="' + id + '"]').classList.remove('hide');// on l'affiche en suppr le hide
}

function hideAllMedia() {
    document.querySelectorAll('.slide').forEach((element) => {
        element.classList.add('hide') // on cache les autres images du carousel 
    })
}

function closeLightBox() {
    document.getElementById('carousel').classList.add('hide')// ajout sur la class un "hide" pour FERMER carousel
}

function nextSlide() {
    let currentSlide = document.querySelector('.slide:not(.hide)') // slide affichée
    currentSlide.classList.add('hide') // on la masque puisqu'on passe à la suivante
   
    // Si on n'est pas à la fin du carrousel
    if (currentSlide.nextSibling) { 
        currentSlide.nextSibling.classList.remove('hide');
    } else {
        // Si on est a la fin du carrousel on va afficher la 1ere slide
        let firstSlide = document.querySelector('.slide:first-child');
        firstSlide.classList.remove('hide');
    }
}

function previousSlide() {
    let currentSlide = document.querySelector('.slide:not(.hide)') // slide affiché
    currentSlide.classList.add('hide')
    console.dir(currentSlide);
// si on n'est pas au debut du carousel
    if (currentSlide.previousSibling) {
        currentSlide.previousSibling.classList.remove('hide');
    } else {
        let lastSlide = document.querySelector('.slide:last-child');// si on est à la fin , affiche la derniere
        lastSlide.classList.remove('hide');
    }
}

    
      
    

