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
  return {
    name, image, getHeaderCardDOM,
  };
}

/****     elements DOM partie GALERIES    **********/

function galleryFactory(data) {
  const { id, image, title, video, likes, date } = data;
  //console.log(videos);
  const imagesMedias = `assets/thumbnails/ImagesMedias/${image}`;
  //console.log(data);
  const videosMedias = `assets/thumbnails/VideosMedias/${video}`;
  console.log(videosMedias);

  function getMediaCardDOM() {
    // on cree la gallery dans la page
    const articleMedia = document.createElement("articleMedia");
    //console.log(articleMedia);
    const linkURL = "photographer.html";
    const url = `${linkURL}?imagesVideosMedias=${id}`;
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

    return articleMedia;

  }
  //console.log(imagesMedias);
  //console.log(image);
  //console.log(videosMedias);

  function getMediaVideoCardDOM() {
    const articleMediaVideo = document.creatElement("articleVideo");
    console.log(articleVideoMedia);
    const linkURL = "photographer.html";
    const url = `${linkURL}?imagesVideosMedias=${id}`;

    articleMediaVideo.innerHTML = `
    <div>
            <a href=${url}><img src=${videosMedias} alt="videos" tabindex="0"></a>
        </div>
          <p class="infoMedia"> ${title} ${likes}<i class="fa-solid fa-heart"></i>
          </p>
            <p class="date"> ${date}</p>  
      </div>`;

    return articleMediaVideo;
  }
  return { imagesMedias, videosMedias, getMediaCardDOM, getMediaVideoCardDOM };
}

