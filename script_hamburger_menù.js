// Selezione elementi
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle menu al click
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Chiude il menu quando si clicca un link
const menuLinks = navMenu.querySelectorAll('a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
