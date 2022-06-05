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
        <p class="where">${city}</p>
        <p class="tagline">${tagline}</p>
      </a> 
      <div class="centerButton">
        <button class="modal-btn modal-trigger" id="modal">Contactez moi</button>
      </div>
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
  // const videosMedias = typeof video !== "undefined"
    ? `assets/thumbnails/imagesMedias/${image}`
    : `assets/thumbnails/videosMedias/${video}`; 
  const linkURL = "photographer.html";
  const url = `${linkURL}?imagesMedias=${id}`;
  return ` 
    <article>  
      <div class ="gallery-section">
      <a href="#" class= "media" id="${id}" aria-label="ouvrir modal media">
        <figure>
          <img src=${imagesMedias} alt="pictures" tabindex="0" class="media" data-media="${id}">
          </a>
          <figcaption>
          <p class="infoMedia">${title}</p>
          <span class="numberLike" id="photoId-${id}">${likes}</span>
         </figcaption>
        </figure>
      </div>
    </article>`;
    
}

function banniere(data){
  const { price, id } = data; 
  return `
  <section id="banniere">
  <span class="totalLikes">${likes}</span>
  <p class="price">${price}€/jour</p> 
  </section>`;
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

function displayBanner(){
  return banniere();
}
document.querySelector('totalLikes').innerHTML= banniere;

