/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/***        HEADER profil du photographe   ***/

function headerFactory(photograph) {
  const { name, portrait, city, tagline, id } = photograph;
  const image = `assets/photographers/${portrait}`;

  function getHeaderCardDOM() {
    const linkURL = "photographer.html";
    // eslint-disable-next-line linebreak-style
    const url = `${linkURL}?photographer=${id}`;
    return `
    <article>
      <a class="profil" tabindex ="0">
        <h1 >${name}</h1>
        <div class="content-photograph">
        <p class="where" aria-label="Pays du photographe" alt="Pays du photographe">${city}</p>
        <p class="tagline" aria-label="phrase du photographe" alt="phrase du photographe" >${tagline}</p>
        </div>
      </a> 
        <button tabindex="0" class="modal-btn closed" id="modal">Contactez moi</button>
      <div>
        <a href=${url}><img tabindex="0" src=${image} alt="photo"></ a>
    	</div>
    </article>`;
  }
  return { name, image, getHeaderCardDOM };
}

/***    ELEMENTS  du  DOM partie GALERIES    ***/

//si c'est une image, et si c'est une video et
// le factory va faire un choix, image ou video
function galleryFactory(data, type) {
  let mediaDom = "";

  //console.log(type);
  //console.log(data);
  switch (type) {
  case "image":
    mediaDom = buildCardImage(data);
    //console.log(mediaDom);
    break;
  case "video":
    mediaDom = buildCardVideo(data);
    break;
    //si c'est ni une image, ni une video : msg
  default:
    mediaDom = "type media est incorrect";
  }
  return mediaDom;
}
/***                        DISPLAY                   ***/

function displayDataHeader(photographer) {
  const profilHeaderModel = headerFactory(photographer);
  document.querySelector(".photograph-header").innerHTML =
    profilHeaderModel.getHeaderCardDOM();
  document.getElementById("nameModal").innerHTML = photographer.name;
  document.getElementById("photographerPrice").innerHTML = photographer.price;
}

/***               DES MEDIAS de l ID                 ***/

function displayMedias(medias) {
  let totalLike = 0;
  // On recreer chaque card Html stocker dans cardsDom
  const cardsDom = medias.map((media) => {
    totalLike += media.likes;
    mediaType = typeof media.image !== "undefined" 
      ? "image" 
      : "video";
    //console.log(mediaType);
    return galleryFactory(media, mediaType);
  });
  // On ecrase la section des cards par la nouvelle
  document.querySelector(".gallery-wrapper").innerHTML = cardsDom.join("");
  document.querySelector("#totalLike").innerHTML = totalLike;
  document.querySelector(".bannerLikes-section").classList.remove("hide");
}
