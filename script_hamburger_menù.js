// 1. Selezioniamo gli elementi del DOM (Document Object Model) tramite il loro ID
// Salviamo il riferimento al pulsante hamburger in una costante
const hamburger = document.getElementById('hamburger');

// Salviamo il riferimento al menu di navigazione in una costante
const navMenu = document.getElementById('nav-menu');

// 2. Aggiungiamo un "ascoltatore di eventi" (Event Listener) al pulsante
// Questo frammento "resta in attesa" che l'utente clicchi sul tasto hamburger
hamburger.addEventListener('click', () => {
    
    /* 3. Quando avviene il click, eseguiamo la funzione toggle() sulla classe 'active'.
       - Se la classe 'active' NON è presente, la aggiunge (mostrando il menu).
       - Se la classe 'active' È già presente, la rimuove (nascondendo il menu).
    */
    navMenu.classList.toggle('active');
    
});

// 4. chiusura hamburger menù
// Selezioniamo tutti i link all'interno del menu
const menuLinks = navMenu.querySelectorAll('a');

// Aggiungiamo un event listener a ogni link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Rimuoviamo la classe 'active' per nascondere il menu
        navMenu.classList.remove('active');
    });
});