//trouve l ID  du photographer
const request = new URLSearchParams(location.search);
const photographerId = request.get("photographer");

fetch("./data/photographers.json")
    .then(function (response) {
        return response.json();
    })

    //renvoi les photographes et les medias
    .then(function (response) {
        const {
            photographers,
            media
        } = response;
        //console.log(response);
        successPage(photographers, media, photographerId);
        return;
    })
    .catch(function (response) {
        // console.dir(response);
        errorPage(photographerId);
        return;
    });

function successPage(photographers, media, photographerId) {
    const photographer = photographers.find((photographer) => {
        return photographer.id == photographerId;
    }); 
    const medias = media.filter((media) => {
        return media.photographerId == photographerId;
    });
    // console.log(medias);


    displayDataHeader(photographer);

    displayMedias(medias);
 
}


function errorPage(photographerId) {
    document.querySelector(".photograph-header").innerHTML =
        "le photographe " + photographerId + " est incorrect";
    //(document.querySelector(".gallery-section").innerHTML = "pas de media récupéré")
}

/****************************************************************************/
function displayDataHeader(photographerId) {
    const profilHeaderSection = document.querySelector(".photograph-header");
    const profilHeaderModel = headerFactory(photographerId);
    //console.log(profilHeaderModel);
    const headerCardDOM = profilHeaderModel.getHeaderCardDOM();
    // console.log(headerCardDOM);
    profilHeaderSection.appendChild(headerCardDOM);
}

/************************************************************************** */
function displayMedias(medias) {
    const gallerySection = document.querySelector(".gallery-section");
    medias.forEach((medias) => {
    const mediaModel = galleryFactory(medias);
   //console.log(medias);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    gallerySection.appendChild(mediaCardDOM);
});
}
