/* eslint-disable no-undef */


//trouve l ID  du photographer
const request = new URLSearchParams(location.search);
const photographerId = request.get("photographer");

fetch("./data/photographers.json")
  .then(function (response) {
    return response.json();
  })
  //renvoi les photographes et les medias
  .then(function (response) {
    const { photographers, media } = response;
    successPage(photographers, media, photographerId);
    return;
  })
  .catch(function (response) {
    console.dir(response);
    return;
});

function successPage(photographers, media, photographerId) {
  // On récupere les infos du photographe selectionné
  const photographer = photographers.find((photographer) => {
    return photographer.id == photographerId;
  });

  // On isole les medias qui concerne uniquement le photographe selectionné
  let medias = media.filter((media) => {
    return media.photographerId == photographerId;
  });

  // On affiche le header de la page
  displayDataHeader(photographer);

  /* Trie des cards */
  sortMediasByType(medias)

  /* Ajout du carrousel */
  displayLightBox(medias);

  /* Création des cards dans la page */
  displayMedias(medias);
  
  /* déclanchement des evenements sur la page (ex: click sur un trie) */
  dispatchEvent(medias);
}
