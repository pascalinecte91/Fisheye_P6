/* eslint-disable no-unused-vars */
function clickLike(target) {
    let numberLike = parseInt(target.innerText); // montre le nombre de like
    if (target.classList.contains('liked')) { // si liké
        target.innerText = --numberLike;//  je retire 1 heart
        target.classList.remove('liked');
    } else {
        target.innerText = ++numberLike;  // sinon  ajout  like
        target.classList.add('liked');
    }
}

