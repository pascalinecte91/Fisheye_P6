 function displayModal() {
     const modalContainer = document.querySelector(".modal-container");
 	modalContainer.style.display = "block";
 }

function closeModal() {
    const modalTriggers  = document.querySelectorAll("modal-trigger");
    modalTriggers.style.display = "none";
}



// modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

// function toggleModal(){
//   modalContainer.classList.toggle("active")
// }