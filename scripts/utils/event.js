/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function dispatchEvent(medias) {
    eventMediaSort(medias);
    eventLightBox();
    eventHeart(medias);


    function eventMediaSort(medias) {
        // 
        document.getElementById("sort-choice").addEventListener("change", function (event) {//on chang les données triees
            let type = document.querySelector("#sort-choice").value;
            sortMediasByType(medias, type)//on trie par type
            displayMedias(medias); //on relance les medias
            displayLightBox(medias); // on lance les medias pour la lightbox
        });
    }


//tarrgent = utilsé pour implementer

    function eventLightBox() {
        document.querySelector('.gallery-section').addEventListener("click", function (event) {
            const target = event.target;
            if (target.classList.contains('media')) {// si contient media
                openLightBox(target);// ouverture de la lightbox
            }
        });
        document.getElementById('lightboxClose').addEventListener("click", closeLightBox)
    }
   


    // evenement de la modal de contact
    const mdContainer = document.querySelector(".md-container");
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

    function toggleModal() {
        mdContainer.classList.toggle("active")
    }



    //au clic sur le coeur
    function eventHeart() {
        document.querySelector('.fa-heart').addEventListener("click",
            countClics)
    }
}

//     function eventHeart(medias) {
//         const nbrLike = document.querySelectorAll (".gallery-section");
//         console.log(nbrLike);
//         nbrLike.forEach(nbrLike => nbrLike.addEventListener("click", countClics));
        
    
// }