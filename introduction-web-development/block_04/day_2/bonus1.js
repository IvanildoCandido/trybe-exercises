let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let left = 1; left < numbers.length; left += 1) {
  for (let right = 0; right < left; right += 1) {
    if (numbers[left] < numbers[right]) {
      let aux = numbers[left];
      numbers[left] = numbers[right];
      numbers[right] = aux;
    }
  }
}
console.log(numbers);
