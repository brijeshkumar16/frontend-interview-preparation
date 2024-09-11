//! Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

//! hoisting with traditional function

// console.log(getName);
// getName();
// console.log(x);

// var x = 10;

// function getName() {
//   console.log('Hello World');
// }

//! hoisting with arrow function

console.log(getName);
getName();
console.log(x);

var x = 10;

var getName = () => {
  console.log('Hello World');
};
