// ----------------------- Hamburger menu -------------------------

const menuButton = document.querySelector("#menuButton"); // Selecteert de knop met het id 'menuButton'
const hetMenu = document.querySelector("#menu"); // Selecteert het menu-element met het id 'menu'
const hamburgerIcon = document.querySelector(".img-hamburger"); // Selecteert het hamburgericoon

menuButton.addEventListener("click", toggleMenu); // Als je het menu openklikt, roept hij 'toggleMenu' aan

function toggleMenu() { // Voegt of verwijdert de class 'open' van het menu-element 'hetMenu'
    hetMenu.classList.toggle("open"); // Dit zorgt ervoor dat het menu zichtbaar wordt of verbergt bij elke klik

    // Verandert de afbeelding afhankelijk van de 'open' class
    if (hetMenu.classList.contains("open")) {
        // Als het menu open is, verander de afbeelding naar de 'close' afbeelding
        hamburgerIcon.src = "./assets/close-icon.svg"; // Zet hier het pad naar je sluit-icoon
    } else {
        // Als het menu gesloten is, verander de afbeelding terug naar de 'hamburger' afbeelding
        hamburgerIcon.src = "./assets/hamburger-icon-closed.svg"; // Zet hier het pad naar je hamburger-icoon
    }
}

// ----------------------- Carousel producten -------------------------

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

// ----------------------- Toevoegen aan winkelwagen -------------------------

let btnCards = document.querySelectorAll(".btn-card");
let popUp = document.querySelector(".pop-up");

btnCards.forEach(btnCard => {
    let productElement = btnCard.closest(".product"); // Selecteer het bovenliggende productelement
    let plusIcon = productElement.querySelector(".plus-icon"); // Zoek de plus-icon binnen dit product
    let shopIcon = productElement.querySelector(".shop-icon"); // Zoek de shop-icon binnen dit product
    let hetLabel = productElement.querySelector(".knop-add-card p"); // Selecteer het juiste label binnen dit product
    let cardIcon = document.querySelector(".card-icon"); // Universele card-icon
    let iconState = true; // Zorg ervoor dat elke knop zijn eigen status heeft

    // Event listener voor elke knop
    btnCard.addEventListener("click", function() {
        if (iconState) {
            // Update de iconen en toon de pop-up bij eerste klik
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
            }, 500);

            // Verberg de pop-up na 5 seconden
            setTimeout(function() {
                popUp.classList.remove('show');
            }, 8000);
        } else {
            // Herstel de iconen en verberg de pop-up bij tweede klik
            plusIcon.src = './assets/plus-icon.svg'; 
            cardIcon.src = './assets/card-icon.svg'; 
            shopIcon.src = './assets/add-to-card-icon.svg';
            popUp.classList.remove('show'); 
            btnCard.classList.remove('first-icon-active'); 
        }

        iconState = !iconState; // Zorgt ervoor dat je oneindig kan klikken
    });

    // Label 'toevoegen aan winkelwagen'
    btnCard.addEventListener("click", function() {
        hetLabel.classList.toggle("label-visible"); // zorgt ervoor dat het label niet zichtbaar is bij klikken
    });
});

// Zorgt ervoor dat een knop met een link '#' niet omhoog scrollt
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Voorkomt het springen naar de bovenkant van het scherm
  });
});




