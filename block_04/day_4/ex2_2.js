function highestValue(array) {
  let value = null;
  let index = null;
  for (key in array) {
    if (array[key] > value) {
      value = array[key];
      index = key;
    }
  }
  return index;
}
console.log(highestValue([2, 3, 6, 7, 10, 1]));
