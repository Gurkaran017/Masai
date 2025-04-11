let currentSlide = 1;
let lastClickTime = 0;
let clickCount = 0;

const imageEl = document.getElementById("image");
const slideNumberEl = document.getElementById("slideNumber");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateSlide(direction) {
  const now = Date.now();

  if (now - lastClickTime < 1000) {
    clickCount++;
    if (clickCount > 3) {
      alert("Chill chill, loading it!!");
      return;
    }
    return; // throttle: block rapid clicks
  }

  lastClickTime = now;
  clickCount = 1;

  if (direction === "next") {
    currentSlide++;
  } else if (direction === "prev" && currentSlide > 1) {
    currentSlide--;
  }

  imageEl.src = `https://picsum.photos/600/400?random=${Math.random()}`;
  slideNumberEl.textContent = `Slide #${currentSlide}`;
}

nextBtn.addEventListener("click", () => updateSlide("next"));
prevBtn.addEventListener("click", () => updateSlide("prev"));
