const slidesContainer = document.getElementById('slides');
const dotsContainer = document.getElementById('dots');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Example images
const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1045/600/400"
];

let currentIndex = 0;

// Render images
images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  slidesContainer.appendChild(img);

  const dot = document.createElement('span');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
});

// Select dots
const dots = document.querySelectorAll('.dot');
dots[0].classList.add('active');

function updateSlider() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 600}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});
