//trouve l ID  du photographer
const request = new URLSearchParams(location.search)
const photographerId = request.get('photographer');

fetch('./data/photographers.json')
    .then(function (response) {
        return response.json();
    })

//renvoi les photographes et les medias
    .then(function (response) {
        const { photographers, medias } = response;
        //console.log(response);
        successPage(photographers, medias, photographerId);
        return;
    })
    .catch(function (response) {
        errorPage(photographerId);
        return;
    });


function successPage(photographers, media, photographerId) {
    const photographer = photographers.find((photographer) => {
        return photographer.id == photographerId;
    });
    // const medias = media.filter((media) => {
    //     console.log(media);
    //     return medias.photographer.id == photographerId;
    // });

    displayDataHeader(photographer);
    // displayMedias(media);
}

function errorPage(photographerId) {
    (document.querySelector(".photograph-header").innerHTML = "le photographe " + photographerId + " est incorrect"
    )
    //  (document.querySelector(".gallery-section").innerHTML ="pas de media récupéré")
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
    medias.foreach((media) => {

        const mediaModel = new mediaFactory(media);
        const mediaCardDom = mediaModel.getMediaCardDom();
        document.querySelector(".gallery-section").appendChild(mediaCardDom);
    });
}

