const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
//Exercise 1.1
assert.strictEqual(sum(4, 5), 9);
//Exercise 1.2
assert.strictEqual(sum(0, 0), 0);
//Exercise 1.3
assert.throws(() => sum(4, '5'));
//Exercise 1.4
assert.throws(() => sum(4, '5'), 'Error: parameters must be numbers');
