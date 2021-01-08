let randonNumber = require('./ex1.test');

it('Testa a nova implementação', () => {
  randonNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  expect(randonNumber(4, 2)).toBe(2);
  expect(randonNumber).toHaveBeenCalled();
  expect(randonNumber).toHaveBeenCalledTimes(1);
  expect(randonNumber).toHaveBeenCalledWith(4, 2);
});
