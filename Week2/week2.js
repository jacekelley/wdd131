// Constants and variables
const PI = 3.14;
let radius = 3;

console.log("PI:", PI);
console.log("Radius:", radius);

const one = 1;
const two = '2';
console.log("one + two:", one + two); // "12" string concatenation

// Global variable example
let course = "CSE131";

// Block-scoped variable example
let student;
if (true) {
    student = "John";
    console.log("Course:", course);
    console.log("Student inside block:", student);
}
console.log("Course outside block:", course);
console.log("Student outside block:", student);

// DOM elements
let selectElem = document.getElementById('webdevlist');
let output = document.getElementById('output');

// Event listener for dropdown
selectElem.addEventListener('change', function () {
    let value = selectElem.value;

    if (value === "html") {
        output.innerHTML = `
            <h2>HyperText Markup Language</h2>
            <ul>
                <li>Defines the structure and content of a web page.</li>
                <li>Without HTML there's nothing for the browser to display.</li>
            </ul>
        `;
    } else if (value === "css") {
        output.innerHTML = `
            <h2>Cascading Style Sheets</h2>
            <ul>
                <li>Controls how the HTML elements look.</li>
                <li>Without CSS pages look plain and unstyled.</li>
            </ul>
        `;
    } else if (value === "js") {
        output.innerHTML = `
            <h2>JavaScript</h2>
            <ul>
                <li>Adds interactivity and dynamic behavior.</li>
                <li>Without JavaScript nothing on the page responds dynamically to user actions.</li>
            </ul>
        `;
    } else {
        output.innerHTML = ""; // clear output if no selection
    }
});