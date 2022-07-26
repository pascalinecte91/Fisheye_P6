/* eslint-disable no-unused-vars */
// elements home page html -

function photographerFactory(data) {
  const { name, portrait, city, country, price, tagline, id } = data;
  const image = `assets/photographers/${portrait}`;

  /*************    elements du DOM Accueil     *****/

  function getUserCardDOM() {
    const article = document.createElement("article");
    const linkURL = "photographer.html";
    const url = `${linkURL}?photographer=${id}`;
    article.innerHTML = `
          <a href=${url} tabindex="0"><img src=${image} alt="image portrait${name}">
            <h2>${name}</h2>              
          <aside class="photographer-content">
            <h3 aria-hidden="false" aria-label="${city}">${country}/${city} </h3>
            <p class="tagline">${tagline}</p>
            <p class="price" aria-label="tarif${price}€/jour">${price}€/jour</p>     
          </aside>
          </a>`;
    return article;
  }
  return { name, image, getUserCardDOM };
}
