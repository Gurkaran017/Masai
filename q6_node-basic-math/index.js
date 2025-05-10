const sum = require('./sum');
const multiply = require('./multiplication');
const subtract = require('./subtraction');
const divide = require('./division');

// Basic test
let sumA = 3;
let sumB = 5;
console.log(`Sum: ${sum(sumA, sumB)}`);

let mulA = 4;
let mulB = 6;
console.log(`Multiplication: ${multiply(mulA, mulB)}`);

let subA = 10;
let subB = 3;
console.log(`Subtraction: ${subtract(subA, subB)}`);

let divA = 20;
let divB = 4;
console.log(`Division: ${divide(divA, divB)}`);

// Bonus: Command line usage
const args = process.argv.slice(2); // Example: node index.js sum 3 5

if (args.length === 3) {
  const [operation, aStr, bStr] = args;
  const a = Number(aStr);
  const b = Number(bStr);

  let result;
  switch (operation) {
    case 'sum':
      result = sum(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
    default:
      result = 'Invalid operation. Use sum, subtract, multiply, divide.';
  }
  console.log(`Result from CLI: ${result}`);
}
