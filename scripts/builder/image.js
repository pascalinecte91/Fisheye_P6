/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */

function buildCardImage(data){
  	const { id, image, title, likes } = data;
  return ` 
    <article>  
      <div class ="gallery-section">
      <figure>
      <a href="#" class="media" id="${id}">
          <img src="assets/thumbnails/imagesMedias/${image}" aria-hidden="false" aria-label="image${title}" alt="media" class="media" data-media="${id}"> 
      </a>
          <figcaption>
          <h3 tabindex="0" aria-hidden="false">${title}</h3>
          <span tabindex="0" class="numberLike" aria-hidden="false"  id="heart" aria-label="${likes}like">${likes}</span> 
          </figcaption>
      </figure>
      </div>
    </article>`; 
}

