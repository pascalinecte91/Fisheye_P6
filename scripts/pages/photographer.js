import  Request  from "../modules/Request.js";
 // recup  l'id dans url correspondant au  photographe

 const request = new Request();
 const photographerId = request.getPhotographerId;

// charge la classe QUI VA LIRE JE JSON
 const photographer = photographerProvider();

//on reup dans le fichier json que les medias u photopgraphe ( id de l url ) 
 const medias = photographerProvider.getPhotographerMedia();

 //ON RECUPERE DANS LE FICHIER JSON QUE LES MEDIAS
 const photographer = photgrapherProvider.getPhotographerData();
 console.log(photographerId)