/* eslint-disable no-unused-vars */

/***********        TRI      ************************/  

function sortMediasByType(medias, type) {
  if (type === "titre") { // si.... triera  par titres
    sortByTitle(medias);
  }
  else if (type === "date") {
    sortByDate(medias); // sinon   triera par date
  }
  else {
    sortByLike(medias); // sinon ce sera par  pop
  }

  /***************    FILTRES  *************************/

  /***************   BY  TITLE   ***********************/
  function sortByTitle(medias) {
    return medias.sort(function (a, b) {
      // triera par ordre alphabetique +1 ou -1 selon lettre
      if (a.title < b.title) { return -1; }
      if (a.title > b.title) { return 1; }
      return 0;
    });
  }

  /***************    BY POLULARITY  *******************/
  function sortByLike(medias) {
    return medias.sort(function (a, b) {
      // Du plus populaire au moins populaire
      if (a.likes < b.likes) { return 1; }
      if (a.likes > b.likes) { return -1; }
      return 0;
    });
  }

  /****************   BY  DATA   ***********************/
  function sortByDate(medias) {
    return medias.sort(function (a, b) {
      //du media le plus recent
      return new Date(b.date) - new Date(a.date);
    });
  }
}
