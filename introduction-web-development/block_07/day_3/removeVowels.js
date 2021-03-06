const removeVowels = (word) => {
  let count = 1;
  const characters = word.split('');
  let results = '';

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results += count;
      count += 1;
    } else {
      results += characters[i];
    }
  }
  return results;
};

const parameter = 'Dayane';
const result = 'D1y2n3';
const assert = require('assert');

assert.strictEqual(removeVowels(parameter), result);
