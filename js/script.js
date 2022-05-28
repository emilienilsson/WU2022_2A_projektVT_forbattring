const nav = document.getElementById("nav-links")
const burger = document.getElementById("burger")
const main = document.getElementById("??")
 
function toggleMenu() {
    nav.classList.toggle("nav-active")
    burger.classList.toggle("crossed_line")
    main.classList.toggle("hide-item")
}
 
burger.addEventListener("click", toggleMenu)


