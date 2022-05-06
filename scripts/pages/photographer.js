    
 async function getPhotographers() {
    // on recupere dans un 1er temps le contenu de la reponse HTTP
    return fetch("./data/photographers.json")
    
        .then(function (response) {
           // console.log(response);
            return response.json();
        })
        // on recupere les data  du fichier que des photographers
        .then((data) => {
              //console.log(data);
            return data.photographers;
        })
        // catch  = si erreur
        .catch(err => console.log('an error', err));

}

// affichage MEDIAS  gallerie
async function getMedias() {
    // on recupere dans un 1er temps le contenu de la reponse HTTP
    return fetch("./data/photographers.json")
        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then((data) => {
            // on recupere toutes les donnees
           // console.log(data);
            return data;
        })
        // catch  = si erreur
        .catch(err => console.log('an error', err));
}



 //affichage HEADER  photographe 
 async function displayDataHeader() {

    const profilHeader = await getPhotographers();
    
    //console.log(profilHeader);
      const profilHeaderSection = document.querySelector(".photograph-header");
  
      profilHeader.forEach((photographer) => {
          const profilHeaderModel = headerFactory(photographer);
          const headerCardDOM = profilHeaderModel.getHeaderCardDOM();
          profilHeaderSection.appendChild(headerCardDOM);
      });
  };
displayDataHeader();
 


// //affichage MEDIA GALLERY
// async function displayMedias() {
//     const myUrl = new URL(window.location.href);
//     const photographerId = myUrl.searchParams.get("photographer");
//     // on recupere l 'ID du photographer
//    // console.log(photographerId)

//     // dataJson  = resultat de fetch avec tout la base de donnes inclus media et photographers
//     const dataJson = await getMedias();

//     // chercher les datas media d'un photographer click = searchParams( le ID  du photogrpahe) 
//     let medias = dataJson.media.filter(media => media.photographerId == photographerId);
   

//     //console.log(medias); // les medias correspondant à l ID

//     const gallerySection = document.querySelector(".gallery-section");

//     medias.forEach((media) => {
//         //console.log(media);
//         const mediaModel = new mediaFactory(media);
//         const mediaCardDOM = mediaModel.getMediaCardDOM();
//         gallerySection.appendChild(mediaCardDOM);
//     });
// }
// displayMedias();





