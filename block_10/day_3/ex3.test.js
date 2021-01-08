let randonNumber = require('./ex1.test');

it('Multiplicando 3 parametros', () => {
  randonNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  expect(randonNumber(1, 2, 3)).toBe(6);
  expect(randonNumber).toHaveBeenCalled();
  expect(randonNumber).toHaveBeenCalledTimes(1);
  expect(randonNumber).toHaveBeenCalledWith(1, 2, 3);
});
it('Retornando o dobro do parametro', () => {
  randonNumber.mockReset();
  expect(randonNumber).toHaveBeenCalledTimes(0);
  randonNumber.mockImplementation((a) => a * 2);
  expect(randonNumber(2)).toBe(4);
  expect(randonNumber).toHaveBeenCalled();
  expect(randonNumber).toHaveBeenCalledTimes(1);
  expect(randonNumber).toHaveBeenCalledWith(2);
});
