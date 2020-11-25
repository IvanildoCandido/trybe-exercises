let number = 19;
let divisor;
count = 0;

for (let i = 2; i < number && divisor !== 1; i += 1) {
  divisor = 0;
  if (number % i === 0) {
    divisor += 1;
  }
}
if (divisor === 0) {
  console.log(`The number ${number} is prime!`);
} else {
  console.log(`The number ${number} isn't prime!`);
}
