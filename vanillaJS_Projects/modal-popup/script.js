const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

// Open modal
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Close modal (X button)
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
