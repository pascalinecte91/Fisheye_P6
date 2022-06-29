const inputs = document.querySelectorAll("input")
const textarea = document.querySelectorAll("textarea")

const validatedModal = (input) => {
    input.addEventListener('invalid', (e) => {
        //lis le dom invalide   =   ajoute le message d erreur
        console.dir(input);
        e.preventDefault()
        if (!e.target.validity.valid) {
            e.target.parentElement.classList.add('error')
        }
    })
    input.addEventListener('input', (e) => {
        //lis le dom  valide   = efface le  message  d'erreur
       // console.log(input);  
        if (e.target.validity.valid) {
            e.target.parentElement.classList.remove('error')
        }
    })
}

Array.from(inputs).forEach(validatedModal);
//renvoi un tableau des 3 inputs  si clic sur submit sans rien remplir
//console.log(inputs); 
Array.from(textarea).forEach(validatedModal);

//document.getElementById('form').reset()