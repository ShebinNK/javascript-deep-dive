const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');

// Example images (use any free images or placeholders)
const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1045/600/400",
  "https://picsum.photos/id/1055/600/400",
  "https://picsum.photos/id/1065/600/400"
];

// Render gallery dynamically
images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Gallery Image";
  img.addEventListener('click', () => {
    modal.style.display = "flex";
    modalImg.src = src;
  });
  gallery.appendChild(img);
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// Close modal when clicking outside image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
