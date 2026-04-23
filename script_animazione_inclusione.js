// Esegue il codice quando il DOM è pronto
document.addEventListener('DOMContentLoaded', function(){

// Seleziona i contatori
const counters = document.querySelectorAll('.counter-value');

// Attiva quando visibile al 50%
const options = {threshold: 0.5};

// Anima il numero fino al valore target
function animateValue(el){
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    
    let start = 0;
    
    const stepTime = Math.max(Math.floor(duration / (target || 1)), 10);
    const increment = Math.ceil(target / (duration / stepTime));
    
    const timer = setInterval(()=>{
        start += increment;
        
        if(start >= target){
            el.textContent = target + suffix;
            clearInterval(timer);
        } else {
            el.textContent = start + suffix;
        }
    }, stepTime);
}

// Avvia animazione quando l’elemento entra nel viewport
const io = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            animateValue(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, options);

// Osserva tutti i contatori
counters.forEach(c=> io.observe(c));

});
