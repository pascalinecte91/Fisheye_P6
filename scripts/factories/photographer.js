

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
    <button class="photograph-contact-button">Contactez-moi</button> 
    <div>
    <a href=${url}><img src=${image} alt="photo"></ a>
    </div>`;
    return article;
  }
  return {name,image ,getHeaderCardDOM };
}

/****     elements DOM partie GALERIES    en cours**********/

function galleryFactory(data) {
  const { id, image, title, videos, date, likes } = data;
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
        <div class="infoMedia"> 
            <a href=${url}><img src=${imagesMedias} alt="images"></a>
            <div="heart">
            <p class="title">${title}</p> 
            <p> ${likes}<i class="fas-solid fa-heart"></i></p>
            </div>
        </div=>
      </div>`;

    return articleMedia;
  }
  //console.log(imagesMedias);
  console.log(image);
  return {imagesMedias,videosMedias,getMediaCardDOM,
  };
}