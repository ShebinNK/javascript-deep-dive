function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // Stop if no audio

  audio.currentTime = 0; // Rewind to start
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0; // reset to start
  }, 1000);

  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // Skip other transitions
  e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
