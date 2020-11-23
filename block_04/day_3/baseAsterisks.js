let numberOfBase = 5;
let halfCentral = (numberOfBase + 1) / 2;
let lineAux = '';
let left = halfCentral;
let right = halfCentral;

for (i = 0; i <= halfCentral; i += 1) {
  for (j = 1; j <= numberOfBase; j += 1) {
    if (j > right && j < left) {
      lineAux += '*';
    } else {
      lineAux += ' ';
    }
  }
  console.log(lineAux);
  lineAux = '';
  right -= 1;
  left += 1;
}
