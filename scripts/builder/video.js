buildVideoCard = function (data)
{
    const { id, title, video, likes } = data;
	const imagesMedias = `assets/thumbnails/videosMedias/${video}`.replace(".mp4", ".jpg");

	return `
    <article>
      <div class ="gallery-section">
      <figure>
      <a href="#" class= "media" id="${id}" aria-label="ouvrir la media">
          <img tabindex="0" src=${imagesMedias} alt="media" aria-hidden="false" class="media" data-media="${id}"> </a>
          <figcaption>
          <h3 tabindex="0" class="infoMedia" aria-hidden="false">${title}</h3>
          <span class="numberLike" aria-hidden="false" id="heart">${likes} </span> 
         </figcaption>
        </figure>
      </div>
    </article>`;
}
