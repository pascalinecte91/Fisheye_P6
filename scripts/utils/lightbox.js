/* eslint-disable no-unused-vars */
function displayLightBox(medias) {
   // console.dir(medias);

      // On recreer chaque card Html stocker dans cardsDom
    const domLightBox = medias.map((media) => {
        //console.log(medias);
        return typeof media.image !== "undefined" 
        ? `<img src="./assets/thumbnails/imagesMedias/${media.image}" alt="imagecloseup view" class="hide" data-media-lightbox="${media.id}"/>` 
        : `<video controls width="250" class="hide"><source src="./assets/thumbnails/videosMedias/${media.video}" type="video/mp4"></video>
        <p class="lightbox__title"> ${media.title}`;
        
    })
    //("")  permet de supprimer les , d'un array*/
    document.querySelector(".lightbox__content").innerHTML = domLightBox.join("");
   
}

function openLightBox(cardClicked) {
    // On affiche le carrousel

    document.getElementById('carousel').classList.remove('hide');
  
    //On masque toutes les images autres  medias du carrousel
    document.querySelectorAll('[data-media-lightbox]').forEach((element) => {
        element.classList.add('hide')
    })

    // On trouve la data-media qui identifie la media
    let id = cardClicked.dataset['media'];

    // On affiche le data-media-carrousel identique a l'identifiant data-media trouvé
    document.querySelector('[data-media-lightbox="'+ id +'"]').classList.remove('hide');
}

function closeLightBox() {
    console.log('tititi');
   document.getElementById('carousel').classList.add('hide');

    }


function nextSlide() {
    // affiche la suivante uniquement
}

function previousSlide() {
    // affiche la suivante uniquement
}


  
