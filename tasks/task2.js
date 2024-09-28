function reverseWithoutNumbers(str) {
  let chars = [];
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i]))) {
      chars.push(str[i]);
    }
  }

  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (isNaN(parseInt(str[i]))) {
      result += chars.pop();
    }
  }

  return result;
}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;
