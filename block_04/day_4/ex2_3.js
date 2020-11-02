function lowerValue(array) {
  let value = null;
  let index = null;
  for (key in array) {
    if (array[key] < value) {
      value = array[key];
      index = key;
    }
  }
  return index;
}
console.log(lowerValue([2, 4, 6, 7, 10, 0, -3]));
