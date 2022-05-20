/*******          elements partie Header profil du photographe   ******/
function headerFactory(data) {
  const { name, portrait, city, tagline, id } = data;

  const image = `assets/photographers/${portrait}`;

  function getHeaderCardDOM() {
    const article = document.createElement("article");

    const linkURL = "photographer.html";
    const url = `${linkURL}?photographer=${id}`;

    article.innerHTML = ` 
    <div class"profil">
    <h1>${name}</h1>
    <p class="where">${city}</p>
    <p class="tagline">${tagline}</p>
    </div>  
    <button 
    aria-label="close modal"
    class="close-modal modal-trigger">contactez moi</button>
    <div>
    <a href=${url}><img src=${image} alt="photo"></ a>
    </div>`;
    return article;
  }
  return {name, image, getHeaderCardDOM,
  };
}

/****     elements DOM partie GALERIES    **********/

function galleryFactory(data) {
  const { id, image, title, videos, likes, date } = data;
  //console.log(data);
  const imagesMedias = `assets/thumbnails/ImagesMedias/${image}`;
  //console.log(data);
  const videosMedias = `assets/thumbnails/VideosMedias${videos}`;

  function getMediaCardDOM() {
    // on cree la gallery dans la page
    const articleMedia = document.createElement("articleMedia");

    const linkURL = "photographer.html";
    const url = `${linkURL}?imagesMedias=${id}`;
    // console.log(url);
    articleMedia.innerHTML = `   
      <class="gallery-section">
        <div>
            <a href=${url}><img src=${imagesMedias} alt="images"></a>
          </div>
          <p class="infoMedia"> ${title} ${likes}<i class="fa-solid fa-heart"></i>
          </p>
            <p class="date"> ${date}</p>  
      </div>`;
    return articleMedia;
  }
  //console.log(imagesMedias);
  //console.log(image);
  return { imagesMedias, videosMedias, getMediaCardDOM };
}
