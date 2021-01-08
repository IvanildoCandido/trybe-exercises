const strFunctions = require('./ext4.data');
jest.mock('./ext4.data');

it('testa se a função strToUp retorna a string em caixa baixa', () => {
  strFunctions.strToUp.mockImplementation((str) => str.toLowerCase());
  expect(strFunctions.strToUp('IVANILDO')).toBe('ivanildo');
});
it('testa se a função strFirstChar retorna a última letra da string', () => {
  strFunctions.strFirstChar.mockImplementation((str) => str[str.length - 1]);
  expect(strFunctions.strFirstChar('IVANILDO')).toBe('O');
});
it('testa se a função strConcat retorna 3 strings concatenadas', () => {
  strFunctions.strConcat.mockImplementation(
    (str1, str2, str3) => str1 + str2 + str3,
  );
  expect(strFunctions.strConcat('I', 'LOVE', 'YOU')).toBe('ILOVEYOU');
});
