// creo una funzione che faccia scorrere le immagini

const carousel = () => {
    // faccio un ciclo sulle immagini
    slides.forEach(slide => {
        // manipolo lo style
        slide.style.transform = `translateX(-${counter * 100}%)`
    });
}

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

// aggancio un ascoltatore di eventi a ognuno dei bottoni

nextBtn.addEventListener('click', () => {
    // aumento il contatore
    counter++;
    carousel();
})
prevBtn.addEventListener('click', () => {
    // aumento il contatore
    counter--;
    carousel();
})