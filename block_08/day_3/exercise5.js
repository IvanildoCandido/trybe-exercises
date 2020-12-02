const assert = require('assert');
const { count } = require('console');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const numberOfOccurences = names.map((name) =>
    name
      .split('')
      .reduce(
        (count, char) => (char === 'A' || char === 'a' ? count + 1 : count),
        0,
      ),
  );
  return numberOfOccurences.reduce((acc, value) => acc + value);
}

assert.deepStrictEqual(containsA(), 20);
