let value1 = 10;
let value2 = 7;
let value3 = 6;
let bigger = null;

if (value1 > value2) {
  bigger = value1;
} else if (value2 > value3) {
  bigger = value2;
} else {
  bigger = value3;
}

console.log("The highest value among the three numbers is: ", bigger);
