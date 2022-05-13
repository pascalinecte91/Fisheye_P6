async function getPhotographers() {
    // on recupere dans un 1er temps le contenu de la reponse HTTP
    return (
        fetch("./data/photographers.json")
            .then(function (response) {
               // console.log(response);
                return response.json();
            })
            // on recupere les data  du fichier que des photographers
            .then((data) => {
                //console.log(data);
                return data.photographers;
            })
            // catch  = si erreur
            .catch((err) => console.log("an error", err))
    );
}

async function displayData() {
    
    const photographers = await getPhotographers();

    const photographersSection = document.querySelector(".photographer-section");
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}
// Récupère les datas des photographes
displayData();
