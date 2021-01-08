function hydrate(string) {
  let numbers = string.split(' ');
  let glasses = numbers.reduce((acc, number) => {
    if (parseInt(number)) {
      acc += parseInt(number);
    }
    return acc;
  }, 0);
  return glasses > 1 ? `${glasses} copos de água` : `${glasses} copo de água`;
}
module.exports = hydrate;
