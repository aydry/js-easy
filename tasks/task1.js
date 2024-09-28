function replaceVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let characters = str.split('');

  for (let i = 0; i < characters.length; i++) {
    if (vowels.includes(characters[i])) {
      characters[i] = '*';
    }
  }

  let result = characters.join('');

  return result;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;
