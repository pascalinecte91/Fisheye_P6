/* eslint-disable no-unused-vars */
const inputs = document.querySelectorAll("input")
const textareas = document.querySelectorAll("textarea")


const validatedModal = (input) => {
    
    input.addEventListener("invalid", (e) => {
        // l evenement INVALID ajoute la class error si pas rempli
        e.preventDefault()
        if (!e.target.validity.valid) {
             //  ajoute le message d erreur sur le ou les input non remplis
            e.target.parentElement.classList.add("error")
        }
    })
   
    input.addEventListener("input", (e) => {
        if (e.target.validity.valid) {
             // L evenement INPUT supprime  la class error ( si bien rempli)
            e.target.parentElement.classList.remove("error")
        }
    })
}

//  si la validation n'est pas ok , les messages d erreurs
Array.from(inputs).forEach(validatedModal);
Array.from(textareas).forEach(validatedModal);
// Affichage des elements remplis du formulaire de contact dans la console
const form = document.querySelector("form");

// e est ciblé sur le formulaire directement
form.addEventListener("submit", (e) => {
    e.preventDefault() // permet envoi du  form au serveur
    // recupere avec e.target les valeurs
    console.log("Nom:", e.target.lastName.value) 
    console.log("Prénom:", e.target.firstName.value)
    console.log("Email:", e.target.email.value)
    console.log("Message:", e.target.message.value)
});