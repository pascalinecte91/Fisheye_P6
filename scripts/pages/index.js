async function getPhotographers() {

    return fetch("./data/photographers.json")
        .then(function (response) {
            return response.json();
        })
        .then((data) => {
            return data.photographers;
        })
        .catch(err => console.log('an error', err));
}


async function displayData() {
    const photographers = await getPhotographers();
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};


// Récupère les datas des photographes
    displayData();



