/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function dispatchEvent(medias) {
    eventMediaSort(medias);
    eventLightBox();
 
   
    
    function eventMediaSort(medias) {
        // Au click du trie, on refait un trie et on ecrase la section par les données triées
        document.getElementById("sort-choice").addEventListener("change", function(event) {
           
            let type = document.querySelector("#sort-choice").value;
        
            // On trie les medias par la valeur selectionnée
            sortMediasByType(medias, type)
        
            // On rafraichit les medias
            displayMedias(medias);
        
            // On rafraichit le carrousel
            displayLightBox(medias);
        });
    }

    function eventLightBox() {
        document.querySelector('.gallery-section').addEventListener("click", function(event) {
            const target = event.target;

            // Si je clique sur une media uniquement
            if (target.classList.contains('media')) {
                // On affiche le carousel
                openLightBox(target);
                
            }
      
        });

        document.getElementById('lightboxClose').addEventListener("click", closeLightBox)
    
    }


    // evenement de la modal de contact
    const mdContainer = document.querySelector(".md-container");
    const modalTriggers = document.querySelectorAll(".modal-trigger");
   
    
     modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))
    
    function toggleModal(){
      mdContainer.classList.toggle("active")   
    
}


    

         

}