const { test } = require('@jest/globals');
const encodeDecode = require('./encodeDecode');

test('Teste se encode e decode são funções', () => {
  expect(typeof encodeDecode.encode).toBe('function');
  expect(typeof encodeDecode.decode).toBe('function');
});
test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
  expect(encodeDecode.encode('a')).toBe('1');
  expect(encodeDecode.encode('e')).toBe('2');
  expect(encodeDecode.encode('i')).toBe('3');
  expect(encodeDecode.encode('o')).toBe('4');
  expect(encodeDecode.encode('u')).toBe('5');
});
test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
  expect(encodeDecode.decode('1')).toBe('a');
  expect(encodeDecode.decode('2')).toBe('e');
  expect(encodeDecode.decode('3')).toBe('i');
  expect(encodeDecode.decode('4')).toBe('o');
  expect(encodeDecode.decode('5')).toBe('u');
});
test('Teste se as demais letras/números não são convertidos para cada caso', () => {
  expect(encodeDecode.encode('bcdfg')).toBe('bcdfg');
  expect(encodeDecode.encode('hjlmnkp')).toBe('hjlmnkp');
  expect(encodeDecode.encode('qvxywz')).toBe('qvxywz');
  expect(encodeDecode.decode('78')).toBe('78');
  expect(encodeDecode.decode('9')).toBe('9');
  expect(encodeDecode.decode('0')).toBe('0');
});
test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
  const sentence = 'ag72qjh5';
  expect(encodeDecode.encode(sentence).length).toBe(8);
  expect(encodeDecode.decode(sentence).length).toBe(8);
});
