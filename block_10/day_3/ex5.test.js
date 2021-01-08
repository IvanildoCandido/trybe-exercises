const strFunctions = require('./ext4.data');

it('testa se a função strToUp retorna a string em caixa baixa', () => {
  //Testando a função mocada
  const mockStrToUp = jest
    .spyOn(strFunctions, 'strToUp')
    .mockImplementation((str) => str.toLowerCase());
  expect(mockStrToUp('IVANILDO')).toBe('ivanildo');
  //Testando a função Original
  strFunctions.strToUp.mockRestore();
  expect(strFunctions.strToUp('ivanildo')).toBe('IVANILDO');
});
