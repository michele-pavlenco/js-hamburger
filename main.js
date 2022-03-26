
let button = document.querySelector(".fas.fa-bars");
let close = document.querySelector(".fas.fa-times");

let isOpen = true;
function handleHamburger() {
  let menu = document.querySelector(".hamburger-menu");
  if (isOpen) {
    menu.classList.add("active");
    isOpen = false;
  } else {
    menu.classList.remove("active");
    isOpen = true;
  }
}

button.addEventListener("click", handleHamburger);
close.addEventListener("click", handleHamburger);


