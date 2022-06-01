/* eslint-disable no-unused-vars */
function displayLightBox(medias) {
    // On recreer chaque card Html stocker dans cardsDom
    const domLightBox = medias.map((media) => {
        //console.log(medias);
        return typeof media.image !== "undefined"
            ? `<img src="./assets/thumbnails/imagesMedias/${media.image}" alt="imagecloseup view" class="hide" data-media-lightbox="${media.id}"/>`
            : `<video controls width="250" class="hide"><source src="./assets/thumbnails/videosMedias/${media.video}" type="video/mp4"></video>
        <div class="lightbox__title"> ${media.title}`;
    })
    //("")  permet de supprimer les , d'un array*/
    document.querySelector(".lightbox__content").innerHTML = domLightBox.join("");
}

function openLightBox(cardClicked) {
    //  Ouverture du slide au clic sur l' image
    //console.log('carousel');
    document.getElementById('carousel').classList.remove('hide');

    //  On cache toutes les autres images du carousel du photographe
    document.querySelectorAll('[data-media-lightbox]').forEach((element) => {
        element.classList.add('hide')
    })

    // On trouve la data-media qui identifie la media
    let id = cardClicked.dataset['media'];

    // On affiche le data-media-carrousel identique a l'identifiant data-media trouvé
    document.querySelector('[data-media-lightbox="' + id + '"]').classList.remove('hide');
}

function closeLightBox() {
    document.getElementById('carousel').classList.add('hide');
}

function nextSlide() {
   
    // affiche la suivante uniquement
}

function previousSlide() {
    // affiche la suivante uniquement
}



