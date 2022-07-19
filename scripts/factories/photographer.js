/* eslint-disable no-unused-vars */
/*******          elements partie Header profil du photographe   ******/
function headerFactory(photograph) {
	const { name, portrait, city, tagline, id } = photograph;
	const image = `assets/photographers/${portrait}`;

	function getHeaderCardDOM() { 
		const linkURL = "photographer.html";
		// eslint-disable-next-line linebreak-style
		const url = `${linkURL}?photographer=${id}`;
		return `
    <article>
      <a class="profil">
        <h1 tabindex ="0">${name}</h1>
        <div class="content-photograph">
        <p class="where" aria-label="Pays du photographe" alt="Pays du photographe" tabindex="0">${city}</p>
        <p class="tagline" aria-label="phrase du photographe" alt="phrase du photographe" tabindex="0">${tagline}</p>
        </div>
      </a> 
        <button tabindex="0" class="modal-btn closed" id="modal">Contactez moi</button>
      <div>
        <a href=${url}><img tabindex="0" src=${image} alt="photo"></ a>
    </div>
    </article>`;
	}

	return { name, image, getHeaderCardDOM };
}

/****     elements DOM partie GALERIES    **********/

function galleryFactory(data, type) {
	switch (type) {
		case 'image':
			mediaDom = buildImageCard(data);
			break;
		case 'video':
			mediaDom = buildVideoCard(data); 
			break;
		default:
			mediaDom = 'Le type de media est invalide';
	}

	return mediaDom;
}

/****************************************************************************/

function displayDataHeader(photographer) {
	const profilHeaderModel = headerFactory(photographer);
	document.querySelector(".photograph-header").innerHTML = profilHeaderModel.getHeaderCardDOM();
	document.getElementById("nameModal").innerHTML = photographer.name;
	document.getElementById("photographerPrice").innerHTML = photographer.price;
}

/*********** Affichage  des medias de l ID *******************************/
function displayMedias(medias) {
	// console.log(medias);
	let totalLike = 0;
	// On recreer chaque card Html stocker dans cardsDom
	const cardsDom = medias.map((media) => {
		totalLike += media.likes;
		mediaType = typeof media.image !== "undefined"
			? 'image'
			: 'video';

		return galleryFactory(media, mediaType);
	});

	// On ecrase la section des cards par la nouvelle
	document.querySelector(".gallery-wrapper").innerHTML = cardsDom.join("");
	document.querySelector("#totalLike").innerHTML = totalLike;
	document.querySelector(".bannerLikes-section").classList.remove("hide");
}