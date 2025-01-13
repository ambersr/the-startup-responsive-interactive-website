// Code voor openklappen hamburger menu in nav
const menuButton = document.querySelector("#menuButton"); // Selecteert de knop met het id 'menuButton'

const hetMenu = document.querySelector("#menu"); // Selecteert het menu-element met het id 'menu'

menuButton.addEventListener("click", toggleMenu); // Als je het menu openklikt dan roept hij 'toggleMenu' aan

function toggleMenu() { // Voegt of verwijdert de class 'open' van het menu-element 'hetMenu'
    hetMenu.classList.toggle("open"); // Dit zorgt ervoor dat het menu zichtbaar wordt of verbergt bij elke klik
}
