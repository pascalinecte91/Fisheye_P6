/* eslint-disable no-unused-vars */

let numberClic = 0;

function countClics() {
    console.log(numberClic);
    return function() {
        return numberClic++;
    }


}


    
