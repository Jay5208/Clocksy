const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeIcon.classList.toggle("ri-moon-line");
    themeIcon.classList.toggle("ri-sun-line");
});

// Slider Functionality
const slides = document.querySelector(".slides");
let index = 0;

function nextSlide() {
    index = (index + 1) % 4;
    slides.style.transform = `translateX(-${index * 100}vw)`;
}
setInterval(nextSlide, 3000);