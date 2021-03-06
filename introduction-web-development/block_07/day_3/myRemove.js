const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
//Exercise 2.1
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
//Exercise 2.2
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
//Exercise 2.3
const myList = [1, 2, 3, 4];
myRemove(myList, 4);
assert.deepStrictEqual(myList, [1, 2, 3, 4]);
//Exercise 2.4
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
