/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//trouve l ID  du photographer
const request = new URLSearchParams(location.search);
const photographerId = request.get("photographer");

fetch("./data/photographers.json")
  .then(function (response) {
    return response.json();
  })
  // la methode renvoie  les donnees
  .then(function (response) { //alors renvoi des medias et des photographes
    const { photographers, media } = response;
    successPage(photographers, media, photographerId); //page ok photographers, medias, identifiant
    return;
  })
  .catch(function (response) {
    return;
  });

function successPage(photographers, media, photographerId) {
  const photographer = photographers.find((photographer) => { // on cherche info photographer
    return photographer.id == photographerId; // retourne  l'identifiant photographer
  });

  let medias = media.filter((media) => { // on filtre les medias du photographer concerné
    return media.photographerId == photographerId;
  });
  displayDataHeader(photographer); //affichage du header du photographe
  sortMediasByType(medias); //trie des medias par type
  displayLightBox(medias); //affiche le carousel
  displayMedias(medias); //affiches les medias
  // console.log(medias);
  dispatchEvent(medias);//declenchement des evenements
}
