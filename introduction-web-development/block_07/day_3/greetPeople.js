const greetPeople = (people) => {
  let arrResult = [];

  for (let person in people) {
    let greeting = 'Hello ';
    greeting += people[person];
    arrResult.push(greeting);
  }
  return arrResult;
};

const assert = require('assert');
const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
