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
      <a class="profil">
        <h1>${name}</h1>
        <div class="content-photograph">
        <p class="where" aria-label="Pays du photographe" alt="Pays du photographe" tabindex="0">${city}</p>
        <p class="tagline" aria-label="phrase du photographe" alt="phrase du photographe" tabindex="0">${tagline}</p>
        </div>
      </a> 
        <button class="modal-btn closed" id="modal">Contactez moi</button>
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
  // console.log(data);
  const imagesMedias = typeof image !== "undefined"
    ? `assets/thumbnails/imagesMedias/${image}`
    : `assets/thumbnails/videosMedias/${video}`.replace('.mp4', '.jpg');
  return ` 
    <article>  
      <div class ="gallery-section">
      <figure>
      <a href="#" class= "media" id="${id}" aria-label="ouvrir la media">
          <img src=${imagesMedias} alt="pictures" tabindex="0" class="media" data-media="${id}">
          </a>
          <figcaption>
          <h3 class="infoMedia">${title}</h3>
          <span class="numberLike">${likes}</span>
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
  document.getElementById('photographerPrice').innerHTML = photographer.price;
}

/*********** Affichage  des medias de l ID *******************************/
function displayMedias(medias) {
  // console.log(medias);
  let totalLike = 0;
  // On recreer chaque card Html stocker dans cardsDom
  const cardsDom = medias.map((media) => {
    totalLike += media.likes
    return galleryFactory(media);

  });
  // On ecrase la section des cards par la nouvelle
  document.querySelector(".gallery-section").innerHTML = cardsDom.join('');
  document.querySelector('#totalLike').innerHTML = totalLike;
  document.querySelector('.bannerLikes-section').classList.remove('hide');
}