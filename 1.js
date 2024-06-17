const carouselView = document.querySelector('.carousel-view');
const carouselControls = document.querySelectorAll('.carousel-control');

let currentSlide = 0;
let slideInterval; 

const slideLeft = () => {
  currentSlide--;
  carouselView.style.transform = `translateX(${currentSlide * -100}%)`;
}

const slideRight = () => {
  currentSlide++;
  carouselView.style.transform = `translateX(${currentSlide * -100}%)`;
}

const startAutoplay = () => {
  slideInterval = setInterval(slideRight, 3000); 
}

const stopAutoplay = () => {
  clearInterval(slideInterval);
}


carouselControls.forEach(control => {
  control.addEventListener('click', () => {
    control.classList.contains('left') ? slideLeft() : slideRight();
    stopAutoplay();
  });
});

// Start autoplay on page load
window.addEventListener('DOMContentLoaded', startAutoplay);
