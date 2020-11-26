const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (arr) => {
  let auxArr = [];
  for (let index = 0; index < arr.length; index++) {
    auxArr[index] = arr[index].length;
  }
  return auxArr;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
