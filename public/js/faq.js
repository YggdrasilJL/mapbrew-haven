document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.collapseAll');
  const btnText = document.querySelector('.all');
  const colContain = document.querySelectorAll('.contain');
  let isToggled = false;

  function toggleAns() {
    toggleBtn.addEventListener('click', () => {
      isToggled = !isToggled;

      if (isToggled) {
        for (const container of colContain) {
          if (!container.classList.contains('show')) {
            const collapseElement = new bootstrap.Collapse(container);
            collapseElement.show();
          }
        }
        btnText.textContent = 'Hide all answers';
      } else {
        for (const container of colContain) {
          if (container.classList.contains('show')) {
            const collapseElement = new bootstrap.Collapse(container);
            collapseElement.hide();
          }
        }
        btnText.textContent = 'Show all answers';
      }
    });
  }



  toggleAns();
});
