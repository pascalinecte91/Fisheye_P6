/*******          elements partie Header profil du photographe   ******/
function headerFactory(data) {
  const { name, portrait, city, tagline, id } = data;

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
  return { name, image, getHeaderCardDOM,
  };
}

/****     elements DOM partie GALERIES    **********/

function galleryFactory(data) {
  const { id, image, title, video, likes, date } = data;
  //console.log(videos);
  const imagesMedias = `assets/thumbnails/imagesMedias/${image}`;
  //console.log(data);
 

  function getMediaCardDOM() {
    const linkURL = "photographer.html";
    const url = `${linkURL}?imagesMedias=${id}`;
    return ` 
    <article>  
      <div class ="gallery-section">
        <div>
          <a href=${url}><img src=${imagesMedias} alt="pictures" tabindex="0"></a>
          <p class="infoMedia"> ${title} ${likes}<i class="fa fa-solid fa-heart"></i></p>
          <p class="date"> ${date}</p>  
        </div>
      </div>
    </article>`;
  }
  return { getMediaCardDOM, title, image, } 

/***********   affichage de la lightbox   ******************/ 

  function lightboxFactory(data) {
    const { id, image, title, likes, video } = data;
    const imageLightbox = `./assets/thumbnails/${id}/${image}`;
    const videolLightbox = `./assets/thumbnais/${id}/${video}`;


  function getLightboxCardDOM() {
    return ` 
    <article>
    <div id="modale" class="lightbox show">
    <div class="light-content">
      <img src="" alt="lightbox">
    </div>
  </div>
  </article>`;
  }
  return { getLightboxCardDOM } 

}}