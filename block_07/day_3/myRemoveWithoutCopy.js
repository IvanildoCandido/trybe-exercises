const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
//Exercise 3.1
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
//Exercise 3.2
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
//Exercise 3.3
const arrayValues = [6, 7, 8, 9];
myRemoveWithoutCopy(arrayValues, 9);
assert.notDeepStrictEqual(arrayValues, [6, 7, 8, 9]);
//Exercise 3.4
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
