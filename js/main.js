const carouselContainer = document.getElementById("carousel-container");
const slides = carouselContainer.getElementsByClassName("slide");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentSlide = 0;

slides[currentSlide].style.display = "block";

prevButton.addEventListener("click", function() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
});

nextButton.addEventListener("click", function() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
});
