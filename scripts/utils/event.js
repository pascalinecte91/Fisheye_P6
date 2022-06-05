/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function dispatchEvent(medias) {
    eventMediaSort(medias);
    eventForLightbox();
    eventForHeart();
    eventModalForm();
    eventPagination();

    // evenement pour  le tri section
    function eventMediaSort(medias) {
        document.getElementById("sort-choice").addEventListener("change", function (event) {//on chang les données triees
            let type = document.querySelector("#sort-choice").value;
            sortMediasByType(medias, type)//on trie par type
            displayMedias(medias); //on relance les medias
            displayLightBox(medias); // on lance les medias pour la lightbox
        });
    }
    //  evenement  pour cibler : ouverture lightbox 
    function eventForLightbox() {
        document.querySelector('.gallery-section').addEventListener("click", function (event) {
            const target = event.target;
            // console.log(target);
            if (target.classList.contains('media')) {// si contient media
                openLightBox(target);// ouverture de la lightbox
            }
        });
        document.getElementById('lightboxClose').addEventListener("click", closeLightBox)

    }
    function eventForHeart() {
        document.querySelector('.gallery-section').addEventListener("click", function (event) {
            const target = event.target;
            if (target.classList.contains('numberLike')) {// si contient  numberLike
                clickLike(target);
            }
        });
    }

    // evenement de la modal de contact
    function eventModalForm() {
        const mdContainer = document.querySelector(".md-container");
        const modalTriggers = document.querySelectorAll(".modal-trigger");
        modalTriggers.forEach(trigger => trigger.addEventListener("click", function () {
            mdContainer.classList.toggle("active")
        }))
    }

    function eventPagination() { //  cible les fleches 
        document.querySelector(".lightbox__next").addEventListener("click", nextSlide)
        document.querySelector(".lightbox__prev").addEventListener("click", previousSlide)

    }
}