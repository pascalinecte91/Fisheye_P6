/* eslint-disable no-unused-vars */
// elements home page html -

function photographerFactory(data) {
	const { name, portrait, city, country, price, tagline, id } = data

	const image = `assets/photographers/${portrait}`

	/*************    elements du DOM Accueil     *****/

	function getUserCardDOM() {
		const article = document.createElement("article")
		const linkURL = "photographer.html"
		const url = `${linkURL}?photographer=${id}`
		article.innerHTML = `
          <a href=${url}><img  src=${image} tabindex="0"   alt="image du photographe">
            <h2 tabindex="0">${name}</h2>
          </a>
          <div class="photographer-content">
            <h3 tabindex="0">${country}/${city} </h3>
            <p class="tagline" tabindex="0" >${tagline}</p>
            <p tabindex="0" class="price">${price}€/jour</p>
          </div>`
		return article
	}
	return { name, image, getUserCardDOM }
}
