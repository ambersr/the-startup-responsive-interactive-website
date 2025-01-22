# Platform Weird Cool Stuff
Tijdens sprint 5 heb ik me verdiept in interacties met JavaScript. Alle leerstof van afgelopen sprints worden toegepast in dit project. Daarbij kijk ik naar een semantieke HTML-opbouw, styleguids & stylesheets, mobile-first (media queries), interacties i.c.m javascript, toegankelijkheid (voor screenreaders) en code conventies. In dit project heb ik van mijn opdrachtgever Lab Digital de opdracht gekregen om een goed doordacht mobile-first website te bouwen. Het bedrijf waarvoor de website bouwen is een fictief bedrijf: Cool Weird Stuff. Dit bedrijf verkoopt allerlei unieke en gekke producten.

Linkje naar de pagina: https://ambersr.github.io/the-startup-responsive-interactive-website/

#### Wie is Lab Digital?
Lab Digital is een jong dynamisch bedrijf opgericht in 2015. Ze ontwikkelen webshops voor b2b en b2c bedrijven. Daarnaast beschikken ze over een groot ervaren team met expertise in technologie. Ze onderscheiden zich van andere bedrijven door het leveren van hoogwaardige digitale oplossingen en ze staan bekend om het bouwen van langdurige, betrouwbare samenwerkingen met klanten.

#### Vraag opdrachtgever
De opdrachtgever heeft de volgende vraag aan mij opgesteld: ontwikkel een mobile-first platform. De focus ligt op een optimale ervaring voor mobiel. Er is goed nagedacht over positionering en de layout op een mobiel scherm. Het platform is responsive, op deze manier blijft de pagina gebruiksvriendelijk.

## Inhoudsopgave Readme

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Code conventies](#Code-conventies)
  * [Bronnen](#bronnen)

## Beschrijving

### Responsive
De doelstelling van dit project is het mobile-first werken. Hierbij staat mobiel schermgrootte centraal en wordt het ontwerp vanuit een mobiel ontwikkeld. De website bevat meerdere breakpoints: 820px, 1120px en 1600px. Deze breakpoints zijn toegepast met mediaqueries.

Schermbreedte < 820px:
<img width="300" alt="image" src="https://github.com/user-attachments/assets/369543b0-fc18-4462-8eb6-f4bb9f0d7ef5" />

Schermbreedte > 820px:
<img width="300" alt="image" src="https://github.com/user-attachments/assets/369543b0-fc18-4462-8eb6-f4bb9f0d7ef5" />

Schermbreedte > 1120px;
<img width="300" alt="image" src="https://github.com/user-attachments/assets/7fec0855-a817-4b9e-9af9-8064437ffb5c" />

### Ontwerpkeuzes
Er is een desktop design aangeleverd door de opdrachtgever. Hij heeft me de opdracht gegeven om deze op mobiel verder uit te werken. Voordat ik met het ontwerpen van de mobiele versie aan de slag ben gegaan heb ik de huisstijl geïnventariseerd (zie onderstaande afbeelding). De grootste uitdaging was het navigatie menu, deze is op desktop vrij log/groot om te zien, aan mij de uitdaging om deze op mobiel zo goed mogelijk naar voren te laten komen. Alle contentblokken zijn op mobiel zo gepositioneerd dat deze voor  de gebruiker makkelijk leesbaar en bruikbaar is.

Styleguide:

<img width="794" alt="image" src="https://github.com/user-attachments/assets/fa8182ef-588a-41a3-8494-935edcefc2d2" />

Responsive ontwerp:

<img width="283" alt="image" src="https://github.com/user-attachments/assets/df5a92a2-c670-4d30-a8fc-78a490e55871" />

### Het ontwikkelde platform
In de afgelopen 3 weken heb ik me gefocust op het ontwikkelen van de home pagina van Weird Cool Stuff. Een belangrijk punt is het responsive krijgen van het navigatiemenu op mobiel. Deze heb ik zo ontwikkeld dat ook op mobiel de belangrijkste elementen tot zijn recht komtn. Daarnaast heb ik me voornamelijk ook gefocust op het bedenken van een coole interactie i.c.m javascript. Dit heb ik toegepast op de 'Toevoegen aan winkelwagen' knop bij de producten. Zodra je op de knop klikt wordt er een animatie afgespeeld.

Linkje naar de pagina: https://ambersr.github.io/the-startup-responsive-interactive-website/

### Belangrijke features:
- Interactief element (Toevoegen aan winkel wagen)

Zodra je een product toevoegd aan je winkelwagen wordt een animatie in gang gezet. Als je op de knop klikt krijg je een pop up met 'Toegevoegd aan winkelwagen' en daarnaast wordt het aantal in het winkelwagen aangepast. Voor toegankelijkheid zijn er een aantal extra labels toegevoegd zoals 'toevoegen aan winkelwagen'.

<img width="300" alt="image" src="https://github.com/user-attachments/assets/cac6be8d-0570-42a2-94ec-2deb9a0f2335" />

- Responsive navigatie menu

Het navigatie menu is op mobiel responsive gemaakt. Daarbij is gekeken naar elementen die prioriteit hebben en naar de opbouw van het dropdown menu.

<img width="300" alt="image" src="https://github.com/user-attachments/assets/81080140-59a1-4496-a119-bd12037751de" />

## Kenmerken
### Toegankelijkheid HTML
De HTML bevat code voor een skiplink. Op deze manier kunnen screenreader gebruikers de navigatie overslaan. Ook hebben een aantal HTML-elementen hebben aria-labels toegevoegd gekregen en hebben alle elementen een semantieke functionaliteit.

Skiplink:
https://github.com/ambersr/the-startup-responsive-interactive-website/blob/82aeedfc009d2bd0d1fb9ea333f6ab60ace1d6e7/index.html#L15-L16

Arialabels:
https://github.com/ambersr/the-startup-responsive-interactive-website/blob/82aeedfc009d2bd0d1fb9ea333f6ab60ace1d6e7/index.html#L21-L23

### Belangrijke aspecten in CSS
De styling wordt ingeladen aan de hand van een stylesheet waarin het huisstijl vast staat. Daarnaast wordt er een aparte CSS bestand gebruikt om de overige styling van de pagina's aan te passen.

Stylesheet: 
https://github.com/ambersr/the-startup-responsive-interactive-website/blob/main/styles/stylesheet.css

Overige styling:
https://github.com/ambersr/the-startup-responsive-interactive-website/blob/main/styles/style.css

### Belangrijke aspecten Javascript
De Javascript wordt gebruikt om de animatie van het openklappen en dichtklappen van het hamburger menu te functioneren. Daarnaast wordt dit ook gebruik voor de functionaliteit van het toevoegen van een product aan winkelwagen.

Animatie hamburger menu:
https://github.com/ambersr/the-startup-responsive-interactive-website/blob/82aeedfc009d2bd0d1fb9ea333f6ab60ace1d6e7/scripts/script.js#L1-L20

Animatie product in winkelwagen:
https://github.com/ambersr/the-startup-responsive-interactive-website/blob/82aeedfc009d2bd0d1fb9ea333f6ab60ace1d6e7/scripts/script.js#L46-L102

## Code conventies
### Ademruimte en inspringen
De code bevat ademruimte en sprint in bij nieuwe elementen.

https://github.com/ambersr/the-startup-responsive-interactive-website/blob/c76f53d6c2a95b815a687fd1edae5e87d748a28c/index.html#L463-L486

### Volgorde en nesten van CSS selectors
De volgorde van de code is aangehouden aan de hand de pagina opbouw en de CSS selectors zijn genest.

https://github.com/ambersr/the-startup-responsive-interactive-website/blob/13c38ce4bfe7a47ea06d41c98845bf681b960112/styles/style.css#L1118-L1127

### Nesten van media queries
De media queries zijn genest in het element zelf.

https://github.com/ambersr/the-startup-responsive-interactive-website/blob/c76f53d6c2a95b815a687fd1edae5e87d748a28c/styles/style.css#L36-L48

### Naamgeving
De naamgeving van classes/variabelen hebben een logische/bijpassende naam.

https://github.com/ambersr/the-startup-responsive-interactive-website/blob/13c38ce4bfe7a47ea06d41c98845bf681b960112/styles/stylesheet.css#L9-L20

## Bronnen
- Figma bestand (High-fi ontwerp) Linkje: https://www.figma.com/design/khZWTkmMq5v72YZ32GvtH3/Lab-Digital---Design-Challenge?node-id=541-1684&t=GQKxx2KdtEBUFXMI-1


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
