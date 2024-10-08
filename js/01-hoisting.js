//! Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// Hoisting with traditional function

console.log(getName);
getName();
console.log(x);

var x = 10;

function getName() {
  console.log('Hello World');
}

// Hoisting with arrow function -> Arrow function behave like variable

// console.log(getName);
// getName();
// console.log(x);

// var x = 10;

// var getName = () => {
//   console.log('Hello World');
// };
