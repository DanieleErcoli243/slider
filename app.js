// creo una funzione che faccia scorrere le immagini

const carousel = () => {
    // imposto le condizioni per non interrompere il carosello
    // if (counter === slides.length) {
    //     counter = 0;
    // }

    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }
    // faccio un ciclo sulle immagini

    // imposto le condizioni per mostrare o nascondere i pulsanti

    if (counter < slides.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none';

    };

    if (counter > 0) {
        prevBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';

    }
    slides.forEach(slide => {
        // manipolo lo style
        slide.style.transform = `translateX(-${counter * 100}%)`
    });
}

// seleziono gli elementi dal DOM
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
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
});

// imposto il display del bottone prev su none
prevBtn.style.display = 'none';

