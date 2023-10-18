const burgerMenu = document.querySelector(".burger-menu");
const ul = document.querySelector("nav ul");
const log = document.querySelector(".log");
const nav = document.querySelector("nav");
let isMenuOpen = false;

burgerMenu.addEventListener("click", () => {
    if (isMenuOpen) {
        ul.style.display = "none";
        log.style.display = "none";
        nav.classList.remove("expanded");
        isMenuOpen = false;
    } else {
        ul.style.display = "block";
        log.style.display = "block";
        nav.classList.add("expanded");
        isMenuOpen = true;
    }
});
