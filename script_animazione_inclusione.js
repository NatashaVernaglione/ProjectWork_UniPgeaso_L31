// Aspetta che il DOM sia completamente caricato prima di eseguire il codice
document.addEventListener('DOMContentLoaded', function(){
// Seleziona tutti gli elementi con classe "counter-value" (i numeri che andranno animati)
const counters = document.querySelectorAll('.counter-value');

// Configurazione per IntersectionObserver: l'elemento deve essere visibile al 50% prima di attivare
const options = {threshold: 0.5};

// Funzione che anima il numero da 0 al valore target
function animateValue(el){
    // Legge il valore target dal data-attribute 'data-target' dell'elemento (es. data-target="120")
    const target = parseInt(el.dataset.target, 10) || 0;
    
    // Legge il suffisso opzionale dal data-attribute 'data-suffix' (es. data-suffix="%" mostra "65%")
    const suffix = el.dataset.suffix || '';
    
    // Durata dell'animazione in millisecondi (1400ms = 1.4 secondi)
    const duration = 1400;
    
    // Valore iniziale del contatore (inizia da 0)
    let start = 0;
    
    // Calcola il tempo tra ogni aggiornamento in ms: divide la durata totale per il numero di step
    // Math.max assicura che il tempo minimo sia 10ms per evitare troppi aggiornamenti
    const stepTime = Math.max(Math.floor(duration / (target || 1)), 10);
    
    // Calcola di quanto incrementare il numero a ogni step (salti più grandi = animazione più liscia)
    const increment = Math.ceil(target / (duration / stepTime));
    
    // Crea un intervallo che esegue il codice ogni 'stepTime' millisecondi
    const timer = setInterval(()=>{
        // Incrementa il valore corrente
        start += increment;
        
        // Se abbiamo raggiunto o superato il target
        if(start >= target){
            // Mostra il valore finale esatto + suffisso (per evitare che sia leggermente diverso)
            el.textContent = target + suffix;
            // Ferma l'intervallo perché l'animazione è terminata
            clearInterval(timer);
        } else {
            // Altrimenti, aggiorna il testo dell'elemento con il valore attuale + suffisso
            el.textContent = start + suffix;
        }
    }, stepTime);
}

// Crea un IntersectionObserver per rilevare quando un elemento entra nel viewport
const io = new IntersectionObserver((entries, observer)=>{
    // Itera su tutti gli elementi osservati che hanno cambiato visibilità
    entries.forEach(entry=>{
        // Se l'elemento è visibile nel viewport (threshold 50%)
        if(entry.isIntersecting){
            // Avvia l'animazione per questo elemento
            animateValue(entry.target);
            // Smette di osservare questo elemento (l'animazione deve partire una sola volta)
            observer.unobserve(entry.target);
        }
    });
}, options);

// Aggiunge ogni contatore alla lista di elementi da osservare
counters.forEach(c=> io.observe(c));
});