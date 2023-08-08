document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.collapseAll');
  const btnText = document.querySelector('.all');

  let isToggled = false;

  toggleBtn.addEventListener('click', () => {
    isToggled
      ? (btnText.textContent = 'Show all answers')
      : (btnText.textContent = 'Hide all answers');
    isToggled = !isToggled;
  });
});
