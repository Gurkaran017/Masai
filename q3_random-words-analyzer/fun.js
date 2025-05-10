// fun.js

// Function to check if a word is a palindrome
function checkPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

// Function to count vowels in a word
function countVowels(word) {
  const vowels = 'aeiou';
  return word
    .toLowerCase()
    .split('')
    .filter(char => vowels.includes(char)).length;
}

module.exports = {
  checkPalindrome,
  countVowels
};
