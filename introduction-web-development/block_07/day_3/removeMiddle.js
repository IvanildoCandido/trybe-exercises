const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (arr) => {
  const middle = Math.floor(arr.length / 2);
  const arrayAux = [];
  arrayAux.push(arr[middle]);
  arr.splice(middle, 1);
  return arrayAux;
};

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
