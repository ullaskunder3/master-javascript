// 1. Function Basics:
//    - Functions are reusable blocks of code that perform a specific task.
//    - They help in organizing code, promoting reusability, and improving readability.
//    - Functions can be defined using the `function` keyword or through function expressions.

// 2. Function Declaration:
//    - A function declaration defines a named function with optional parameters.
//    - It consists of the `function` keyword, followed by the function name, a list of parameters in parentheses, and the function body enclosed in curly braces.

function regularFunction(a, b) {
  return a + b;
}

console.log(regularFunction(2, 3)); // Output: 5

// 3. Function Expression:
//    - A function expression assigns a function to a variable or property.
//    - It can be anonymous or have a name.

var multiply = function (a, b) {
  return a * b;
};
const functionExpression = function (a, b) {
  return a - b;
};

console.log(functionExpression(5, 3)); // Output: 2

// 4. Arrow Functions (ES6):
//    - Arrow functions provide a concise syntax for writing functions.
//    - They have a shorter syntax compared to regular functions.

var square = (x) => x * x;
console.log(square(2)); // Output: 4

// 5. IIFE (Immediately Invoked Function Expression):
//    - An IIFE is a function that is executed immediately after it is defined.
//    - It helps create a new scope, preventing variable collisions.

(function () {
  console.log("IIFE executed!");
})();

// 6. Function Parameters:
//    - Functions can accept parameters, which are placeholders for values passed to the function.
//    - Parameters are listed in the function declaration or expression, separated by commas.

function greet(name) {
  console.log("Hello, " + name + "!");
}

// 7. Default Parameters (ES6):
//    - Default parameters allow you to specify default values for function parameters.
//    - If a value is not passed for a parameter, the default value is used instead.

function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

// 8. Rest Parameters (ES6):
//    - Rest parameters allow you to pass multiple arguments to a function as an array.
//    - The rest parameter is prefixed with three dots (`...`).

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// 9. Return Statement:
//    - The `return` statement specifies the value to be returned by a function.
//    - It terminates the function execution and sends the value back to the caller.

function square(x) {
  return x * x;
}

// 10. Callback Functions:
// - A callback function is a function passed as an argument to another function.
// - It allows asynchronous operations and is called when the task is complete.

function callbackFunction(callback) {
  callback();
}

callbackFunction(function () {
  console.log("Callback function executed!");
});

// 11. Higher-Order Functions:
// - Higher-order functions are functions that accept other functions as arguments or return functions.
// - They provide a powerful way to manipulate and abstract over functions.

function higherOrderFunction(callback) {
  return callback(2, 3);
}

const addition = function (a, b) {
  return a + b;
};

console.log(higherOrderFunction(addition)); // Output: 5

// 12. Recursive

// - Recursive functions are functions that call themselves.
// - They are useful for solving problems that can be divided into smaller, similar subproblems.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120

// 7. Closure
function outerFunction() {
  const outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I am from the outer function

// 10. Generator Function
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorFunction();

console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3

// 11. Promises and Async/Await:
// Promises and async/await are used for handling asynchronous operations.
// Promises allow you to handle the result of an asynchronous operation when it's available,
// while async/await provides a more synchronous-like way of writing asynchronous code.

function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = "Some data";
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Output: Some data
  })
  .catch((error) => {
    console.log(error);
  });

// Async/Await

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Some data";
      resolve(data);
    }, 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
    // Output: Some data
  } catch (error) {
    console.log(error);
  }
}

getData();

// Higher-Order Functions and Function Composition
// Higher-order functions as I mentioned above and
// They are often used for function composition,
// which is the process of combining multiple functions to create a new function.

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function compose(func1, func2) {
  return function (a, b) {
    return func2(func1(a, b), b);
  };
}

const addAndMultiply = compose(add, multiply);
console.log(addAndMultiply(2, 3)); // Output: 10
