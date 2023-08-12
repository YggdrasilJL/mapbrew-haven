document.addEventListener('DOMContentLoaded', () => {
  // const toggleBtn = document.querySelector('.collapseAll');
  const btn = document.querySelector('.all');
  const colContain = document.querySelectorAll('.contain');
  let isToggled = false;

  function toggleAns() {
    btn.addEventListener('click', () => {
      isToggled = !isToggled;

      if (isToggled) {
        for (const container of colContain) {
          if (!container.classList.contains('show')) {
            const collapseElement = new bootstrap.Collapse(container);
            collapseElement.show();
          }
        }
        btn.textContent = 'Roll up scrolls';
      } else {
        for (const container of colContain) {
          if (container.classList.contains('show')) {
            const collapseElement = new bootstrap.Collapse(container);
            collapseElement.hide();
          }
        }
        btn.textContent = 'Unroll scrolls';
      }
    });
  }

  toggleAns();
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonClickSound = document.getElementById("buttonClickSound");
  buttonClickSound.volume = 0.5;

  // Add event listeners to the images
  const images = document.querySelectorAll(".swiper-slide img");
  images.forEach(image => {
    image.addEventListener("click", function () {
      buttonClickSound.currentTime = 2.5; // Rewind to the beginning of the audio
      buttonClickSound.play(); // Play the audio
    });
  });
});