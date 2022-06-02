/* eslint-disable no-unused-vars */
/*******          elements partie Header profil du photographe   ******/
function headerFactory(photograph) {
  const { name, portrait, city, tagline, id } = photograph;

  const image = `assets/photographers/${portrait}`;

  function getHeaderCardDOM() {
    const linkURL = "photographer.html";
    const url = `${linkURL}?photographer=${id}`;
    return ` 
    <article>
      <div class="profil">
        <h1>${name}</h1>
        <p class="where">${city}</p>
        <p class="tagline">${tagline}</p>
      </div> 
        <button class="modal-btn modal-trigger" id="modal">Contactez moi</button>
      <div>
        <a href=${url}><img src=${image} alt="photo"></ a>
    </div>
    </article>`;
  }
  
  return { name, image, getHeaderCardDOM };
}

/****     elements DOM partie GALERIES    **********/

function galleryFactory(data) {
  const { id, image, title, video, likes, date } = data;
  const imagesMedias = typeof image !== "undefined" 
    ? `assets/thumbnails/imagesMedias/${image}`
    : `https://picsum.photos/200/300`; // a remplacer par le chemin de l'image associé a la vidéo

  const linkURL = "photographer.html";
  const url = `${linkURL}?imagesMedias=${id}`;
  return ` 
    <article>  
      <div class ="gallery-section">
        <figure>
          <img src=${imagesMedias} alt="pictures" tabindex="0" class="media" data-media="${id}">
          <figcaption>
          <p class="infoMedia"> ${title}</p>
          <span class="numberLike" id="clicHeart">${likes}</span><i class="fa fa-solid fa-heart"></i>
         </figcaption>
        </figure>
      </div>
    </article>`;
}

/****************************************************************************/

function displayDataHeader(photographer) {
  const profilHeaderModel = headerFactory(photographer);
  document.querySelector(".photograph-header").innerHTML = profilHeaderModel.getHeaderCardDOM();
  document.getElementById("nameModal").innerHTML = photographer.name;
}

/*********** Affichage  des medias de l ID *******************************/
function displayMedias(medias) {
  // On recreer chaque card Html stocker dans cardsDom
  const cardsDom = medias.map((media) => {
    return galleryFactory(media);
  });

  // On ecrase la section des cards par la nouvelle
  document.querySelector(".gallery-section").innerHTML = cardsDom;
}