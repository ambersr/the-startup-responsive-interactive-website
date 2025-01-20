// Code voor openklappen hamburger menu in nav

const menuButton = document.querySelector("#menuButton"); // Selecteert de knop met het id 'menuButton'

const hetMenu = document.querySelector("#menu"); // Selecteert het menu-element met het id 'menu'

menuButton.addEventListener("click", toggleMenu); // Als je het menu openklikt dan roept hij 'toggleMenu' aan

function toggleMenu() { // Voegt of verwijdert de class 'open' van het menu-element 'hetMenu'
    hetMenu.classList.toggle("open"); // Dit zorgt ervoor dat het menu zichtbaar wordt of verbergt bij elke klik
}


// Carousel producten

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


// Product toevoegen aan winkelwagen

let plusIcon = document.querySelector(".plus-icon"); 
let shopIcon = document.querySelector(".shop-icon");
let cardIcon = document.querySelector(".card-icon");
let btnCard = document.querySelector(".btn-card");
let popUp = document.querySelector(".pop-up");
let iconState = true;

btnCard.addEventListener("click", function() {
    if (iconState) {
        plusIcon.src = './assets/check-groen.svg'; 
        cardIcon.src = './assets/card-icon-15.svg'; 
        shopIcon.src = './assets/icon-shopping-card-white.svg';
        popUp.classList.add('show'); 
        btnCard.classList.add('first-icon-active'); 
        
        // Voeg de animatie toe voor de card-icon
        cardIcon.classList.add('icon-switch-animation');
        
        // Verwijder de animatieklasse na 0.5s (de duur van de animatie)
        setTimeout(function() {
            cardIcon.classList.remove('icon-switch-animation');
        }, 500); // Verwijder de animatie na 10000ms

        // Verberg de pop-up na 5 seconden
        setTimeout(function() {
            popUp.classList.remove('show');
        }, 8000);
    } else {
        plusIcon.src = './assets/plus-icon.svg'; 
        cardIcon.src = './assets/card-icon.svg'; 
        shopIcon.src = './assets/add-to-card-icon.svg';
        popUp.classList.remove('show'); 
        btnCard.classList.remove('first-icon-active'); 
    }

    iconState = !iconState; 
});


let hetLabel = document.querySelector(".knop-add-card p"); // Selecteert het menu-element met het id 'menu'

btnCard.addEventListener("click", labelAnimatie); // Als je het menu openklikt dan roept hij 'toggleMenu' aan

function labelAnimatie() { // Voegt of verwijdert de class 'open' van het menu-element 'hetMenu'
    hetLabel.classList.toggle("label-visible"); // Dit zorgt ervoor dat het menu zichtbaar wordt of verbergt bij elke klik
}


// Zorgt ervoor dat een knop met een link: '#' niet omhoog scrollt
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Voorkomt het springen naar de bovenkant
  });
});




