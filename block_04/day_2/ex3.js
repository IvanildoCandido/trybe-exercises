let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
average = sum / numbers.length;
console.log("The aritmetic average of the array is:", average);
