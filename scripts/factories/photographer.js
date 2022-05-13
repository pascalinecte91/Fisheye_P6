// elements home page html - 

function photographerFactory(data) {
  const { name, portrait, city, country, price, tagline, id } = data;
  const image = `assets/photographers/${portrait}`;
 
  //elements du DOM Accueil
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



//elements partie Header profil du photographe -
function headerFactory(data) {
  const { name, portrait, city, tagline, id } = data;
   const image = `assets/photographers/${portrait}`;
   //console.log(data);

  function getHeaderCardDOM() {
    console.log(getHeaderCardDOM);
    const article = document.createElement("article");
    const linkURL = "photographer.html";
    const url = `${linkURL}?photographer=${id}`;
    article.innerHTML = ` 
    <div class"profil">
    <h1>${name}</h1>
    <p class="where"> ${city} </p>
    <p class="tagline">${tagline}</p>
    </div>  
    <button class="photograph-contact-button">Contactez-moi</button> 
    <div><a href=${url}><img src=${image} alt="photo"></a>
    </div>`;
    return article;
  }
  return { name, image, getHeaderCardDOM };
}


// elements DOM partie GALERIES
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

