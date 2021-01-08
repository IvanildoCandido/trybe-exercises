let randonNumber = () => parseInt(Math.random() * 101);

it('Testa se a função foi chamada', () => {
  randonNumber = jest.fn(() => 10);
  randonNumber();
  expect(randonNumber).toHaveBeenCalled();
});
it('Testa o retorno da função', () => {
  expect(randonNumber()).toBe(10);
});
it('Testa quantas vezes a função foi chamada', () => {
  randonNumber();
  randonNumber();
  expect(randonNumber).toHaveBeenCalledTimes(4);
});
module.exports = randonNumber;
