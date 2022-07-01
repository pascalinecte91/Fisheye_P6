/* eslint-disable no-unused-vars */
const inputs = document.querySelectorAll("input")
const textarea = document.querySelectorAll("textarea")
const formSubscribe = document.getElementById('formSubscribe');

const validatedModal = (input) => {
    input.addEventListener('invalid', (e) => {
        console.log(input);
        e.preventDefault()
        if (!e.target.validity.valid) {
             //  ajoute le message d erreur sur le ou les input non remplis
            e.target.parentElement.classList.add('error')
        }
    })
    input.addEventListener('input', (e) => {
        // console.log(input);  
        if (e.target.validity.valid) {
             // retire message d erreur à chaque champ remplis
            e.target.parentElement.classList.remove('error')
        }
    })
}
Array.from(inputs).forEach(validatedModal);
//console.log(inputs); 
Array.from(textarea).forEach(validatedModal);


//reset du formulaire
function resetFormSubscribe() {
  // reinitialise le formulaire lorsqu il est correctement rempli
    formSubscribe.reset();
}
formSubscribe.addEventListener('submit', (e) => {
    e.preventDefault();
     resetFormSubscribe();
} )
