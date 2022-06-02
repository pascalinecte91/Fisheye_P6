/* eslint-disable no-unused-vars */
function sortMediasByType(medias, type) {
    if (type === "titre") { // si.... triera  par titres
        sortByTitle(medias);
    }
    else if (type === "date") {
        sortByDate(medias) // sinon   triera par date
    }
    else {
        sortByLike(medias); // sinon ce sera par  pop
    }

   function sortByTitle(medias) {
        return medias.sort(function (a, b) {
            if (a.title < b.title) { return -1; } // triera par ordre alphabetique +1 ou -1 selon lettre
            if (a.title > b.title) { return 1; } 
            return 0; 
        });
    }
   
    /********************  filter by popularity  ***********/
    function sortByLike(medias) {
        return medias.sort(function (a, b) {
            if (a.likes < b.likes) { return -1; }
            if (a.likes > b.likes) { return 1; }
            return 0; 
        });
    }
   
    /****************     filter by data   ***************/
    function sortByDate(medias) {
        return medias.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
        });
    }
}
  