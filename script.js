let menu = document.querySelector(".menu");
let katalog = document.querySelector(".katalog");

menu.addEventListener("click", () => {
  if (katalog.classList.contains("katalog-none") == true) {
    katalog.classList.remove("katalog-none");
  } else {
    katalog.classList.add("katalog-none");
  }
});




let menuTwo = document.querySelector(".menuTwo");
let dropdown = document.querySelector(".dropdown");

menuTwo.addEventListener("click", () => {
  if (dropdown.classList.contains("dropdown-none") == true) {
    dropdown.classList.remove("dropdown-none");
  } else {
    dropdown.classList.add("dropdown-none");
  }
});
