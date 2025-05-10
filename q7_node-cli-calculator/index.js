// index.js

// Import the crypto module for random number generation
const crypto = require("crypto");

// Get command-line arguments
const args = process.argv.slice(2); // [operation, ...numbers]

// Destructure operation and remaining values
const [operation, ...rest] = args;

// Convert remaining args to numbers where needed
const numbers = rest.map(Number);

// Helper: Validate number inputs
const areValidNumbers = numbers.every((num) => !isNaN(num));

// Calculator Logic
switch (operation) {
  case "add":
    if (numbers.length >= 2 && areValidNumbers) {
      const sum = numbers.reduce((a, b) => a + b, 0);
      console.log("Result:", sum);
    } else {
      console.log("Please provide valid numbers for addition.");
    }
    break;

  case "sub":
    if (numbers.length >= 2 && areValidNumbers) {
      const result = numbers.reduce((a, b) => a - b);
      console.log("Result:", result);
    } else {
      console.log("Please provide valid numbers for subtraction.");
    }
    break;

  case "mult":
    if (numbers.length >= 2 && areValidNumbers) {
      const result = numbers.reduce((a, b) => a * b, 1);
      console.log("Result:", result);
    } else {
      console.log("Please provide valid numbers for multiplication.");
    }
    break;

  case "divide":
    if (numbers.length >= 2 && areValidNumbers) {
      if (numbers.slice(1).includes(0)) {
        console.log("Error: Cannot divide by zero.");
      } else {
        const result = numbers.reduce((a, b) => a / b);
        console.log("Result:", result);
      }
    } else {
      console.log("Please provide valid numbers for division.");
    }
    break;

  case "sin":
    if (numbers.length === 1 && areValidNumbers) {
      console.log("Result:", Math.sin(numbers[0]));
    } else {
      console.log("Please provide one valid number for sine.");
    }
    break;

  case "cos":
    if (numbers.length === 1 && areValidNumbers) {
      console.log("Result:", Math.cos(numbers[0]));
    } else {
      console.log("Please provide one valid number for cosine.");
    }
    break;

  case "tan":
    if (numbers.length === 1 && areValidNumbers) {
      console.log("Result:", Math.tan(numbers[0]));
    } else {
      console.log("Please provide one valid number for tangent.");
    }
    break;

  case "random":
    if (numbers.length === 0) {
      console.log("Provide length for random number generation.");
    } else if (numbers.length === 1 && areValidNumbers) {
      const length = numbers[0];
      const randomValue = crypto.randomBytes(length).toString("hex");
      console.log("Random Number:", randomValue);
    } else {
      console.log("Please provide one valid length for random number generation.");
    }
    break;

  default:
    console.log("Invalid operation");
}
