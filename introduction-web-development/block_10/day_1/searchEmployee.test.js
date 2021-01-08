const searchEmployee = require('./searchEmployee');

describe('Testa se searchEmployee está definida e é uma função!', () => {
  test('Verifica searchEmployee existe', () => {
    expect(searchEmployee).toBeDefined();
  });
  test('Verifica se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
});
describe('Testa se ao passar um id existente é retornado a informação correta', () => {
  test('Passando o id "5569-4" e a informação "firstName"', () => {
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
  });
  test('Passando o id "4456-4" e a informação "lastName"', () => {
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
  });
  test('Passando o id "4678-2" e a informação "specialities"', () => {
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
  });
});
describe('Testa se ao passar um id não existente é retornado um erro', () => {
  test('Passando o id "1452-3" e a informação "firstName"', () => {
    expect(searchEmployee('1452-3', 'firstName')).toBe('ID não identificada');
  });
  test('Passando o id "null" e a informação "lastName"', () => {
    expect(searchEmployee('null', 'lastName')).toBe('ID não identificada');
  });
});
describe('Testa se ao passar uma informação não existente é retornado um erro', () => {
  test('Passando o id "9852-2-2" e a informação "nome"', () => {
    expect(searchEmployee('9852-2-2', 'nome')).toBe('Informação indisponível');
  });
  test('Passando o id "4456-4" e a informação "sobrenome"', () => {
    expect(searchEmployee('4456-4', 'sobrenome')).toBe(
      'Informação indisponível',
    );
  });
});
