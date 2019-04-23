// References
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

const moveSlides = () => {
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
};
moveSlides();

const showNextPhoto = () => {
  if (counter >= carouselImages.length - 1) return;
  counter++;
  carouselSlide.style.transition = 'transform 200ms ease-in-out';
  moveSlides();
};

const showPrevPhoto = () => {
  if (counter <= 0) return;
  counter--;
  carouselSlide.style.transition = 'transform 200ms ease-in-out';
  moveSlides();
};

// Button listeners
nextBtn.addEventListener('click', showNextPhoto);
prevBtn.addEventListener('click', showPrevPhoto);

carouselSlide.addEventListener('transitionend', () => {
  if ((carouselImages[counter].id === 'lastClone') | (carouselImages[counter].id === 'firstClone')) {
    carouselSlide.style.transition = 'none';
  }
  if (carouselImages[counter].id === 'lastClone') {
    counter = carouselImages.length - 2;
    moveSlides();
  } else if (carouselImages[counter].id === 'firstClone') {
    counter = carouselImages.length - counter;
    moveSlides();
  }
});
