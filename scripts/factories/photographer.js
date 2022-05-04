// elemnts home page - 1440x 1024

function photographerFactory(data) {
    const { name, portrait, city, country, price, tagline, id } = data;
  
    const image = `assets/photographers/${portrait}`;
  
    function getUserCardDOM() {
      const article = document.createElement("article");
      const linkURL = "photographer.html";
      const url = `${linkURL}?photographer=${id}`;
      article.innerHTML = `
        <a href=${url}>
          <img src=${image} alt="">
          <h1 class="photographer_detail">${name}</h1>
        </a>
        <div>
          <p class="where">${country} ${city}</p>
          <p class="tagline">${tagline}</p>
          <p class="price">${price}€/jour</p>
        </div>
  `;
      return article;
    }
  
    return { name, image, getUserCardDOM };
  }