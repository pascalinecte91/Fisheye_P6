/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
function buildCardVideo(data) {
  	const { id, video, title, likes } = data;
    const imagesMedias = `assets/thumbnails/videosMedias/${video}`.replace(".mp4", ".jpg");
	return ` 
    <article>  
      <div class ="gallery-section">
      <figure>
      <a href="#" tabindex="0" class= "media" id="${id}" aria-label="ouvrir la media">
           <img src=${imagesMedias} alt="media" aria-hidden="false" class="media" data-media="${id}"> 
      </a>
          <figcaption>
            <h3 tabindex="0" class="infoMedia" aria-hidden="false">${title}
            </h3>   
            <span tabindex="0" class="numberLike" aria-hidden="false" id="heart">${likes} </span> 
          </figcaption>
      </figure>
      </div>
    </article>`;
}

