function biggestName(array) {
  let name = array[0];
  for (let i in array) {
    if (array[i].length > name.length) {
      name = array[i];
    }
  }
  return name;
}
console.log(
  biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']),
);
