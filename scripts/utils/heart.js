/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function clickLike(target) {
    let numberLike = parseInt(target.innerText); //montre le nombre de like
    // console.log(numberLike);
    if (target.classList.contains('liked')) { // si liké
        target.innerText = --numberLike;// je retire 1 heart
        target.classList.remove('liked');
    } else {
        target.innerText = ++numberLike;  //sinon  ajout  like
        target.classList.add('liked');
    }
    showTotalLikes();
}

function showTotalLikes() {
    let allLikes = document.querySelectorAll('.numberLike'); //recupere tous les likes de la page 
    //console.log(allLikes);
    let totalLikes = 0;
    allLikes.forEach(e => {
        totalLikes += parseInt(e.innerHTML); //renvoi un entier de tous les span (additionne)
        // console.log(totalLikes);
    })
    const likesBanner = document.getElementById("totalLike")
    likesBanner.innerHTML = totalLikes
}