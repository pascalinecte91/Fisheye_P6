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
    //console.log(response);
    successPage(photographers, media, photographerId);
    return;
  })

  .catch(function (response) {
     //console.dir(response);
   //errorPage(photographerId);
   return;
  });

function successPage(photographers, media, photographerId) {
  const photographer = photographers.find((photographer) => {
    return photographer.id == photographerId;
  });
  let medias = media.filter((media) => {
    return media.photographerId == photographerId;
  });

  displayDataHeader(photographer);


  /* affichage  de la selection du menu deroulant par les 3 choix */

  getTitleSort(medias)
  document.getElementById("sort-choice").addEventListener("change", displayFilter);

  function displayFilter(type) {
    if (type.target.value === "popularité") {
      getLikesSort(medias)
    }
    else if (type.target.value === "date") {
      getByDataSort(medias)
    }
    else if (type.target.value === "titre") {
      getTitleSort(medias)
    }
  }


   function getTitleSort(medias) {
   //console.log(medias)
   medias =  medias.sort(function (a, b) {
       if (a.title < b.title) { return -1; }
       if (a.title > b.title) { return 1; }
          return 0; 
     });
     displayMedias(medias);
    }

  /********************  filter by popularity  ***********/

    function getLikesSort(medias) {
      console.log(medias)
      medias =   medias.sort(function (a, b) {
        if (a.likes < b.likes) { return -1; }
        if (a.likes > b.likes) { return 1; }
        return 0; 
        });
        displayMedias(medias);
      }

  /****************     filter by data   ***************/

    function getByDataSort(medias) {

    medias = medias.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
    });
    // console.log(medias)
      displayMedias(medias);
    }

    function errorPage(photographerId) {
      document.querySelector(".photograph-header").innerHTML =
        "le photographe " + photographerId + " est incorrect";
      (document.querySelector(".gallery-section").innerHTML = "pas de media récupéré")
    }

      /****************************************************************************/
    function displayDataHeader(photographerId) {
      const profilHeaderSection = document.querySelector(".photograph-header");
      const profilHeaderModel = headerFactory(photographerId);
      //console.log(profilHeaderModel);
      const headerCardDOM = profilHeaderModel.getHeaderCardDOM();
      // console.log(headerCardDOM);
      profilHeaderSection.innerHTML += headerCardDOM;
      document.getElementById("nameModal").innerHTML= photographer.name;
      document.getElementById("modal").addEventListener("click", toggleModal)
    }

      /***********    Affichage  des medias de l ID *******************************/
    function displayMedias(medias) {    
      //console.log(medias); 
      const gallerySection = document.querySelector(".gallery-section"); 
      medias.forEach((medias) => {
        const mediaModel = galleryFactory(medias);
        //console.log(medias);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        //console.log(mediaCardDOM)
        gallerySection.innerHTML += mediaCardDOM; 
      });
    }
    
  
    function displayLightbox(medias) {
      const lightboxSection = document.querySelector("lightbox-section");
      const lightboxModel = lightboxFactory(medias);
      const lightboxCardDOM = lightboxModel.getLikeboxCardDOM();
      lightboxSection.innerHTML += lightboxCardDOM;
    }
    }