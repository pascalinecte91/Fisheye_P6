/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */

function buildCardImage(data){
  	const { id, image, title, likes } = data;
  return ` 
    <article>  
      <div class ="gallery-section">
      <figure>
      <a href="#" tabindex="0" class="media" id="${id}">
          <img src="assets/thumbnails/imagesMedias/${image}" aria-label="ouvrir la media" alt="media" aria-hidden="false" class="media" data-media="${id}"> 
      </a>
          <figcaption>
          <h3 aria-hidden="false">${title}</h3>
          <span tabindex="0" class="numberLike" aria-hidden="false" id="heart">${likes} </span> 
          </figcaption>
      </figure>
      </div>
    </article>`;
}

