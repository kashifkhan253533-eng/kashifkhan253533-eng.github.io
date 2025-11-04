/* =========================================================
   SCRIPT.JS — Dynamic Effects for My Best Website
   ========================================================= */

// --- Like Button Counter ---
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

if (likeBtn && likeCount) {
  likeBtn.addEventListener("click", () => {
    let current = parseInt(likeCount.textContent);
    likeCount.textContent = current + 1;
    likeBtn.style.transform = "scale(1.2)";
    setTimeout(() => (likeBtn.style.transform = "scale(1)"), 200);
  });
}

// --- Fake Online User Counter ---
const onlineCount = document.getElementById("onlineCount");
if (onlineCount) {
  setInterval(() => {
    let base = 400 + Math.floor(Math.random() * 200);
    onlineCount.textContent = base;
  }, 3000);
}

// --- Engagement Progress Animation ---
const progressFill = document.getElementById("progressFill");
if (progressFill) {
  let width = 40;
  setInterval(() => {
    width = 40 + Math.random() * 50;
    progressFill.style.width = width + "%";
  }, 2000);
}

// --- Carousel (for featured tools) ---
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".indicator");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    indicators[i].classList.toggle("active", i === index);
  });
}

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
});

setInterval(() => {
  if (slides.length > 0) {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
}, 4000);
