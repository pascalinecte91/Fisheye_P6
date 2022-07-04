/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function clickLike(target) {
    let numberLike = parseInt(target.innerText); //montre le nombre de like
    // console.log(numberLike);
    if (target.classList.contains('liked')) { // si liké
        target.innerText = --numberLike;// je retire 1 heart
        target.classList.remove('liked');
        target.style.color = "#901c1c";
       
    } else {
        target.innerText = ++numberLike;  //sinon  ajout  like
        target.classList.add('liked');
        target.style.color = "red";
    }
    showTotalLikes(); 
}

function showTotalLikes() {
    //recupere tous les likes de la page 
    let allLikes = document.querySelectorAll('.numberLike'); 
    //console.log(allLikes);
    let totalLikes = 0;
    allLikes.forEach(e => {
         //renvoi un entier de tous les span (additionne)
        totalLikes += parseInt(e.innerHTML);
        // console.log(totalLikes);
    })
    const likesBanner = document.getElementById("totalLike")
    likesBanner.innerHTML = totalLikes
}