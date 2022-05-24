//  function displayModal() {
//      const modalContainer = document.querySelector(".modal-container");
//  	modalContainer.style.display = "block";
//  }

// function closeModal() {
//     const modalTriggers  = document.querySelectorAll("modal-trigger");
//     modalTriggers.style.display = "none";
// }

const bodalContainer = document.querySelector(".bodal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");


 modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  bodalContainer.classList.toggle("active")
  
}