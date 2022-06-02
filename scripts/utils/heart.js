/* eslint-disable no-unused-vars */
var isChecked = false;

function countClics() {
    let currentCount = parseInt(document.getElementById('clicHeart').innerHTML);// renvoi un entier
   
    if (isChecked) {
        //console.log(isChecked);
        currentCount--;
        isChecked = false;
    } else {
        //console.log(isChecked);
        currentCount++;
        isChecked = true;
    }
    //console.log(typeof isChecked);
    document.getElementById('clicHeart').innerHTML = currentCount;
}

let CountEnd = [];

