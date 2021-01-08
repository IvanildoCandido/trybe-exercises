const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalsFilter = Animals.filter((animal) => animal.age === age);
      console.log(animalsFilter);
      if (animalsFilter.length > 0) return resolve(animalsFilter);
      return reject('Nenhum animal com essa idade!');
    }, 200);
  });
};

it('Verificar retornos quando a idade é encontrada', () => {
  expect.assertions(1);
  return findAnimalByAge(5).then((data) =>
    expect(data).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]),
  );
});
it('Verificar retornos quando a idade não é encontrada', () => {
  return findAnimalByAge(12).catch((error) => {
    expect(error).toEqual('Nenhum animal com essa idade!');
  });
});
