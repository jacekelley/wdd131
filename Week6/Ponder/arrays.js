function convert(grade) {
  let points;
  switch (grade) {
    case 'A': points = 4; break;
    case 'B': points = 3; break;
    case 'C': points = 2; break;
    case 'D': points = 1; break;
    case 'F': points = 0; break;
    default: points = 0;
  }
  return points;
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const students = [
  { last: 'Andrus', first: 'Aaron' },
  { last: 'Masa', first: 'Manny' },
  { last: 'Tanda', first: 'Tamanda' }
];

const longWords = words.filter(w => w.length > 6);
const upperWords = words.map(w => w.toUpperCase());
const sortedWords = [...words].sort();

const studentNames = students.map(s => `${s.first} ${s.last}`);

const grades = ['A', 'B', 'C', 'F'];
const gradePoints = grades.map(convert);

document.querySelector("#wordsOutput").textContent =
  `Long words: ${longWords.join(", ")} | Uppercase: ${upperWords.join(", ")} | Sorted: ${sortedWords.join(", ")}`;

document.querySelector("#studentsOutput").textContent =
  `Students: ${studentNames.join(", ")}`;

document.querySelector("#gradesOutput").textContent =
  `Grades: ${grades.join(", ")} | Points: ${gradePoints.join(", ")}`;