// Code voor openklappen hamburger menu in nav
const menuButton = document.querySelector("#menuButton"); // Selecteert de knop met het id 'menuButton'

const hetMenu = document.querySelector("#menu"); // Selecteert het menu-element met het id 'menu'

menuButton.addEventListener("click", toggleMenu); // Als je het menu openklikt dan roept hij 'toggleMenu' aan

function toggleMenu() { // Voegt of verwijdert de class 'open' van het menu-element 'hetMenu'
    hetMenu.classList.toggle("open"); // Dit zorgt ervoor dat het menu zichtbaar wordt of verbergt bij elke klik
}





let slidesContainer = document.querySelector('.producten'); // Container van de producten
let slides = document.querySelectorAll('.product'); // Alle producten
let nextButton = document.querySelector('#next'); // Volgende knop

let currentSlide = 0; // Startpositie bij de eerste slide

// Sliden van de carousels
function updateCarousel() {
  slidesContainer.classList.remove('slide-0', 'slide-1'); // Voeg hier meer klassen toe als je meer slides hebt

  slidesContainer.classList.add(`slide-${currentSlide}`);  // Voeg de klasse toe die overeenkomt met de huidige slide
}


document.querySelector('#next').addEventListener('click', () => {   // selecteer de knop 'volgende' en voer dan een click uit met een functie.
  if (currentSlide < slides.length - 1) {  // wanneer de huidige slide kleiner is dan de totale slides - 1
    currentSlide++; // verhoog de waarde van de slide met 1
    updateCarousel();  // voer dan de functie updateCarousel uit
  }
});










const blogartikelen = document.querySelector('.blogartikelen');
const prevButton = document.querySelector('.prev');
const nexxtButton = document.querySelector('.next');

let currentIndex = 0;

nexxtButton.addEventListener('click', () => {
    const totalItems = document.querySelectorAll('.blogartikel').length;
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        blogartikelen.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        blogartikelen.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});






