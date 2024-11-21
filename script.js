const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');

const slideWidth = slides[0].getBoundingClientRect().width;

// Organiza os slides lado a lado
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// Mover para o slide desejado
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Botão para ir ao próximo slide
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    if (!nextSlide) {
        // Se não houver próximo slide, volta ao primeiro
        const firstSlide = slides[0];
        moveToSlide(track, currentSlide, firstSlide);
    } else {
        moveToSlide(track, currentSlide, nextSlide);
    }
});

// Botão para ir ao slide anterior
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    if (!prevSlide) {
        // Se não houver slide anterior, vai para o último
        const lastSlide = slides[slides.length - 1];
        moveToSlide(track, currentSlide, lastSlide);
    } else {
        moveToSlide(track, currentSlide, prevSlide);
    }
});
