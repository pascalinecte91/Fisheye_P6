// elements home page html - 

function photographerFactory(data) {
  const { name, portrait, city, country, price, tagline, id } = data;
  const image = `assets/photographers/${portrait}`;


  function getUserCardDOM() {
    const article = document.createElement("article");
    const linkURL = "photographer.html";
    const url = `${linkURL}?photographer=${id}`;
    article.innerHTML = `
        <a href=${url}><img src=${image} alt="photo">
          <h1 class="photographer-detail">${name}</h1>
        </a>
        <div>
          <p class="where">${country} ${city} </p>
          <p class="tagline">${tagline}</p>
          <p class="price">${price}€/jour</p>
        </div>`;

    return article;
  }

  return { name, image, getUserCardDOM };
}


function headerFactory(data) {
  const { name, portrait, city, tagline, id } = data;
  const image = `assets/photographers/${portrait}`;


  function getHeaderCardDOM() {
    const articleHeader = document.createElement("articleHeader");
    const linkURL = "photographer.html";
    const url = `${linkURL}?photographer=${id}`;
    articleHeader.innerHTML = `
        <a href=${url}><img src=${image} alt="photo">
          <h1 class="photograph-header">${name}</h1>
        </a>
        <div>
          <p class="where"> ${city} </p>
          <p class="tagline">${tagline}</p>
        </div>`;

    return articleHeader;
  }

  return { name, image, getHeaderCardDOM };
}



function galleryFactory(data) {
  const { portrait, id, likes, } = data;
  console.log(data);
  const image = `assets/thumbnails${portrait}`;

  function getGalleryCardDOM() {
    // on cree la gallery dans la page
      const articleGallery = document.createElement("articleGallery");
      const heart = document.createElement("");
      const title = document.createElement("h3");
     
      return articleGallery;
      
  }

  return { portrait, getGalleryCardDOM };
}
