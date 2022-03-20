const slider = document.querySelector(".login__slides");
const slides = document.querySelectorAll(".login__slide");
const dotContainer = document.querySelector(".controls__list");

let currentSlide = 0;

let totalSlides = slides.length;

const sliderTimer = 5000; //time in milliseconds

const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<li class="controls__item">
            <button
            class="controls__button"
            role="slider"
            title="controls"
            data-slide=${i}
            >
            &nbsp;
            </button>
        </li>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll(".controls__button")
    .forEach((dot) => dot.classList.remove("controls__button--active"));

  document
    .querySelector(`.controls__button[data-slide="${slide}"]`)
    .classList.add("controls__button--active");
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide--;
  }
  showSlide(currentSlide);
  activateDot(currentSlide);
};

const showSlide = function (curSlide) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[curSlide].style.display = "block";
};

const nextSlide = function () {
  if (currentSlide === totalSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  showSlide(currentSlide);
  activateDot(currentSlide);
};

setInterval(nextSlide, sliderTimer);

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("controls__button")) {
    const { slide } = e.target.dataset;
    showSlide(slide);
    activateDot(slide);
  }
});

createDots();

showSlide(currentSlide);

activateDot(0);
