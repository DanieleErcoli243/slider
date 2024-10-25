// seleziono gli elementi dal DOM
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
// creo un contatore
let counter = 0;

// faccio un ciclo sulle immagini

slides.forEach((slide, index) => {
    // manipolo lo stile delle slide
    slide.style.left = `${index * 100}%`;
});

