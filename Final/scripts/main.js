const buttons = document.querySelectorAll('.choices button');
const startButton = document.querySelector('#startbutton button');
let selectedDifficulty = null;

// Handle selecting/deselecting difficulty
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('selected')) {
      // Click again to unselect
      button.classList.remove('selected');
      selectedDifficulty = null;
    } else {
      buttons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
      selectedDifficulty = button.id; // "beginner" or "nerd"
    }
  });
});

// Handle start button
startButton.addEventListener('click', () => {
  if (selectedDifficulty) {
    // Only go to quiz.html if a difficulty is selected
    window.location.href = 'quiz.html';
  } else {
    alert('Please select a difficulty before starting!');
  }
});