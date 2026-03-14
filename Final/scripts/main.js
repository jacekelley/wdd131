// main.js - only difficulty selection functionality

const diffChoices = document.querySelector('.diffchoices');
const startButtonContainer = document.querySelector('#startbutton');
let selectedDifficulty = null;

if (diffChoices && startButtonContainer) {
  const buttons = diffChoices.querySelectorAll('button');
  const startButton = startButtonContainer.querySelector('button');

  // Select difficulty and highlight button
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('selected')) {
        button.classList.remove('selected');
        selectedDifficulty = null;
      } else {
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedDifficulty = button.dataset.difficulty; // 'easy' or 'hard'
      }
    });
  });

  // Start button navigates to quiz page and stores difficulty
  startButton.addEventListener('click', () => {
    if (selectedDifficulty) {
      localStorage.setItem('quizDifficulty', selectedDifficulty);
      window.location.href = 'quiz.html';
    } else {
      alert('Please select a difficulty before starting!');
    }
  });
}

// Additional logic for quiz page
const quizContainer = document.querySelector('#quiz-container');
if (quizContainer) {
  const storedDifficulty = localStorage.getItem('quizDifficulty');
  let quizQuestions = [];

  if (storedDifficulty === 'easy') {
    quizQuestions = easyQuestions;
  } else if (storedDifficulty === 'hard') {
    quizQuestions = hardQuestions;
  }

  console.log('Selected difficulty:', storedDifficulty);
  console.log('Quiz questions:', quizQuestions);

  const questionElement = document.querySelector('#question');
  const answersContainer = document.querySelector('#answers');
  const nextButton = document.querySelector('#next');
  const scoreElement = document.querySelector('#score');
  const quizInfoElement = document.querySelector('#quiz-info');

  // Create feedback element for "Correct!" or "Incorrect!"
  let feedbackElement = document.querySelector('#feedback');
  if (!feedbackElement) {
    feedbackElement = document.createElement('div');
    feedbackElement.id = 'feedback';
    feedbackElement.style.marginTop = '10px';
    feedbackElement.style.fontWeight = 'bold';
    feedbackElement.style.height = '1.2em';
    if (quizContainer) {
      quizContainer.appendChild(feedbackElement);
    }
  }
  feedbackElement.textContent = '';

  // Select up to 10 unique random questions
  let selectedQuestions = [];
  if (quizQuestions.length <= 10) {
    selectedQuestions = quizQuestions.slice();
  } else {
    const indices = new Set();
    while (indices.size < 10) {
      indices.add(Math.floor(Math.random() * quizQuestions.length));
    }
    selectedQuestions = Array.from(indices).map(i => quizQuestions[i]);
  }

  let currentQuestionIndex = 0;
  let score = 0;
  let currentQuestion = null;
  let waitingForNext = false; // flag to prevent multiple clicks during feedback display

  function shuffleArray(array) {
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i +1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function updateQuizInfo() {
    if (quizInfoElement) {
      quizInfoElement.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length} | Score: ${score}`;
    }
  }

  function showQuestion() {
    feedbackElement.textContent = '';
    waitingForNext = false;
    if (currentQuestionIndex >= selectedQuestions.length) {
      showFinalScore();
      return;
    }
    currentQuestion = selectedQuestions[currentQuestionIndex];
    if (questionElement && answersContainer) {
      questionElement.textContent = currentQuestion.question;

      // Clear previous options
      answersContainer.innerHTML = '';

      // Shuffle options
      const shuffledOptions = currentQuestion.options.slice();
      shuffleArray(shuffledOptions);

      shuffledOptions.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.type = 'button';
        optionButton.textContent = option;

        optionButton.addEventListener('click', () => {
          if (waitingForNext) return; // prevent selection change during feedback display
          // Toggle selected class on clicked button, ensuring only one selected at a time
          const allOptionButtons = answersContainer.querySelectorAll('button');
          if (optionButton.classList.contains('selected')) {
            optionButton.classList.remove('selected');
          } else {
            allOptionButtons.forEach(btn => btn.classList.remove('selected'));
            optionButton.classList.add('selected');
          }
        });

        answersContainer.appendChild(optionButton);
      });
    }
    updateQuizInfo();
  }

  function showFinalScore() {
    if (questionElement && answersContainer && nextButton) {
      questionElement.textContent = `Quiz complete! Your final score is ${score} out of ${selectedQuestions.length}.`;
      answersContainer.innerHTML = '';
      nextButton.style.display = 'none';
      feedbackElement.textContent = '';
      if (scoreElement) {
        scoreElement.textContent = `Final Score: ${score} / ${selectedQuestions.length}`;
      }
      if (quizInfoElement) {
        quizInfoElement.textContent = `Quiz complete! Final Score: ${score} / ${selectedQuestions.length}`;
      }
      // Create "Try Again" button
      let tryAgainButton = document.querySelector('#try-again');
      if (!tryAgainButton) {
        tryAgainButton = document.createElement('button');
        tryAgainButton.id = 'try-again';
        tryAgainButton.type = 'button';
        tryAgainButton.textContent = 'Try Again';

        // Style the button similar to nextButton
        const nextButtonStyles = window.getComputedStyle(nextButton);
        tryAgainButton.style.cssText = nextButton.style.cssText;
        tryAgainButton.style.display = 'inline-block';

        tryAgainButton.addEventListener('click', () => {
          window.location.href = 'index.html';
        });

        if (quizContainer) {
          quizContainer.appendChild(tryAgainButton);
        }
      } else {
        tryAgainButton.style.display = 'inline-block';
      }
    }
  }

  if (nextButton) {
    nextButton.style.display = 'inline-block';
    nextButton.addEventListener('click', () => {
      if (waitingForNext) return; // prevent multiple clicks during feedback display
      const selectedOption = answersContainer.querySelector('button.selected');
      if (!selectedOption) {
        alert('Please select an answer before proceeding!');
        return;
      }

      waitingForNext = true;

      // Check if selected answer is correct
      const isCorrect = selectedOption.textContent === currentQuestion.answer;
      if (isCorrect) {
        score++;
        feedbackElement.textContent = 'Correct!';
        feedbackElement.style.color = 'green';
      } else {
        feedbackElement.textContent = 'Incorrect!';
        feedbackElement.style.color = 'red';
      }

      if (scoreElement) {
        scoreElement.textContent = `Score: ${score} / ${selectedQuestions.length}`;
      }
      if (quizInfoElement) {
        quizInfoElement.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length} | Score: ${score}`;
      }

      // After 1 second, move to next question
      setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex >= selectedQuestions.length) {
          showFinalScore();
        } else {
          showQuestion();
        }
      }, 1000);
    });
  }

  const skipButton = document.querySelector('#skip');
if (skipButton) {
  skipButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= selectedQuestions.length) {
      showFinalScore();
    } else {
      showQuestion();
    }
  });
}

  // Initialize score display
  if (scoreElement) {
    scoreElement.textContent = `Score: 0 / ${selectedQuestions.length}`;
  }

  // Start quiz with first question
  showQuestion();
}