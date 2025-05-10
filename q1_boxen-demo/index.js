// index.js
import boxen from 'boxen';

const message = 'I am using my first external module!';
const title = ' Hurray!!! ';

const classicBox = boxen(message, {
  title,
  padding: 1,
  margin: 1,
  borderStyle: 'classic'
});

const singleDoubleBox = boxen(message, {
  title,
  padding: 1,
  margin: 1,
  borderStyle: 'singleDouble'
});

const roundBox = boxen(message, {
  title,
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  backgroundColor: 'blue', // Bonus: Add background color
  borderColor: 'yellow'
});

console.log(classicBox);
console.log(singleDoubleBox);
console.log(roundBox);
