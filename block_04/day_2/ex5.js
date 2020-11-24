let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let greater = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > greater) {
    greater = numbers[i];
  }
}
console.log("The largest number of the array is", greater);
