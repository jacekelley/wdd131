const PI = 3.14;
let radius = 3;

console.log(PI);
console.log(radius);

const one = 1;
const two = '2';

console.log(one + two);

let course = "CSE131"; // global scope

if (true) {
    let student = "John";
    console.log(course);
    console.log(student);
}

console.log(course);
console.log(student); // this will cause an error