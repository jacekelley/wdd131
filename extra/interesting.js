const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your score (0-100): ", (answer) => {
    const score = Number(answer);
    let grade;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else if (score >= 0) {
        grade = "F";
    } else {
        grade = null;
    }

    if (grade) {
        console.log(`Your grade is ${grade}`);
    } else {
        console.log("Invalid score. Please enter 0-100.");
    }

    rl.close();
});