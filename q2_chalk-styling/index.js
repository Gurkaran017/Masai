// index.js
const chalk = require('chalk');

// Simple colored text
console.log(chalk.blue('Hello, World!'));
console.log(chalk.yellow('Learning Chalk is fun!'));

// Text with background color
console.log(chalk.black.bgYellow('Warning! Proceed with caution.'));
console.log(chalk.white.bgRed('Error! Something went wrong.'));

// Mixed color segments
console.log(chalk.green('Success:') + ' ' + chalk.white('Operation completed!'));
console.log(chalk.cyan('Loading...') + ' ' + chalk.magenta('Please wait'));

// Custom themes using functions
const error = chalk.bold.red;
const warning = chalk.bold.hex('#FFA500'); // Orange using HEX
const success = chalk.bold.green;

console.log(error('Error: Unable to connect to the server!'));
console.log(warning('Warning: Low disk space!'));
console.log(success('Success: Data saved successfully!'));

// 🎁 Bonus: Styles with underline, italic, strikethrough, and RGB
console.log(chalk.underline.rgb(255, 165, 0)('This is an underlined orange RGB message'));
console.log(chalk.italic.hex('#8A2BE2')('This is italic and purple'));
console.log(chalk.strikethrough.red('This is a strikethrough red message'));
