let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberOfOdd = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 != 0) {
    numberOfOdd += 1;
  }
}
if (numberOfOdd === 0) {
  console.log("No odd values ​​found!");
} else {
  console.log(`There is "${numberOfOdd}" odd values found!`);
}
