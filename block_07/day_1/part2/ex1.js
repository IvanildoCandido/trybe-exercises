// const factorial = (number) => {
//   let aux = number;
//   while (number > 2) {
//     aux *= number - 1;
//     number--;
//   }
//   return aux;
// };

// const factorialRecursive = (number) =>
//   number > 1 ? number * factorialRecursive(number - 1) : 1;

// console.log(factorial(6));
// console.log(factorialRecursive(6));
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;

console.log(factorial(5));
