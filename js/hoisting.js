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

//! What is the difference between undefined and is not defined?
// In JavaScript, undefined is a value that indicates that a variable or property has not been assigned a value.

// On the other hand, "is not defined" is a reference error that occurs because the variable or property is not defined in the current scope, and it cannot be accessed.

// let x;
// console.log(x); // logs "undefined"

// console.log(y); // throws "ReferenceError: y is not defined"
