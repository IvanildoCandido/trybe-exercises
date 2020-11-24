let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}
average = sum / numbers.length;
if (average > 20) {
  console.log("The value is greater than 20!");
} else {
  console.log("The value is less than or equal to 20!");
}
