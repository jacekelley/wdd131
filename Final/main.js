const buttons = document.querySelectorAll('.choices button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('selected')) {
      button.classList.remove('selected');
    } else {
      buttons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    }
  });
});