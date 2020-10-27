let value = 10;
let setLine = "";

if (value < 1) {
  console.log("The input value must be greater than 1!");
} else {
  for (let line = 1; line <= value; line += 1) {
    setLine += "*";
  }
  for (let i = 1; i <= value; i += 1) {
    console.log(setLine);
  }
}
