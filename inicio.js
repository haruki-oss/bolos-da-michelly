
let currentSlide = 0;
const slides = document.querySelector('#carousel .slides');
const totalSlides = document.querySelectorAll('#carousel .slides img').length;
const slideWidth = slides.clientWidth;

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  slides.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

function automaticSlide() {
  setInterval(() => {
    nextSlide();
  }, 3000);
}

automaticSlide();
