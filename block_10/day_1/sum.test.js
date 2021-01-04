const { test } = require('@jest/globals');
const sum = require('./sum');

test('A função sum(2, 3) retorna 5', () => {
  expect(sum(2, 3)).toBe(5);
});
test('A função sum(4, 5) retorna 9', () => {
  expect(sum(4, 5)).toBe(9);
});
test('A função sum(0, 0) retorna 0', () => {
  expect(sum(0, 0)).toBe(0);
});
test('A função sum lança um erro quando os parametros são 4 e "5" (string 5)', () => {
  expect(() => sum(4, '5')).toThrow();
});
test('A mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
  expect(() => sum(4, '5')).toThrow('parameters must be numbers');
});
