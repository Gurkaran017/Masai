// index.js
const randomWords = require('random-words');
const { checkPalindrome, countVowels } = require('./fun');

// Generate an array of 5 random words
const words = randomWords(5);

words.forEach((word, index) => {
  const vowelCount = countVowels(word);
  const isPal = checkPalindrome(word);
  console.log(`word ${index + 1} -> ${word} -> vowelsCount: ${vowelCount} -> isPalindrome: ${isPal}`);
});
