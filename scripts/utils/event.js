/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function dispatchEvent(medias) {
    eventMediaSort(medias);
    eventForLightbox()
    eventForHeart();
    eventModalForm();
    eventPagination();
    keyboardLightbox();

    // evenement pour  le tri section
    function eventMediaSort(medias) {
        document.getElementById("sort-choice").addEventListener("change", function (event) { //on chang les données triees
            let type = document.querySelector("#sort-choice").value;
            
            sortMediasByType(medias, type) //on trie par type
            displayMedias(medias); //on relance les medias
            displayLightBox(medias); //on lance les medias pour la lightbox
            showTotalLikes()
        });
    }

    //  evenement  pour cibler : ouverture lightbox 
    function eventForLightbox() {
        document.querySelector('.gallery-section').addEventListener("click", function (event) {
            const target = event.target;
             //console.log(target);
            if (target.classList.contains('media')) { // si contient media
                openLightBox(target); // ouverture de la lightbox
            }
        });
        document.getElementById('lightboxClose').addEventListener("click", closeLightBox);
    }

    function eventPagination() { //  cible les fleches 
        document.querySelector(".lightbox__next").addEventListener("click", nextSlide)
        document.querySelector(".lightbox__prev").addEventListener("click", previousSlide)
    }
    // evenement pour accessibilité CLAVIER  gauche droit et fermeture
    function keyboardLightbox() {
        document.addEventListener("keydown", (e) => {
            // console.log(e.key);
            if (e.key == "ArrowRight") { // code fleche gauche next
                nextSlide();
            }
            else if (e.key == "ArrowLeft") { // code fleche de droite prev
                previousSlide();
            }
            if (e.key == "Escape") { // code X  pour fermer
                closeLightBox();
            }
        })
    }
    function eventForHeart() {
        document.querySelector('.gallery-section').addEventListener("click", function (event) {
            const target = event.target;
            if (target.classList.contains('numberLike')) { //si contient  numberLike
                clickLike(target);
            }
        });
    }
    // evenement de la modal de contact
    function eventModalForm() {
        const mdContainer = document.querySelector(".md-container");
        const closed = document.querySelectorAll(".closed");
        closed.forEach(trigger => trigger.addEventListener("click", function () {
            mdContainer.classList.toggle("active")
        }))
    }
}