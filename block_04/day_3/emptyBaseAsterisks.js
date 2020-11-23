let baseNumber = 7;
let lineAux = [];
let baseMatrix = [];
let matrix = [];
let left = 1;
let right = baseNumber - 2;

for (lineColumn = 0; lineColumn < baseNumber; lineColumn += 1) {
  baseMatrix[lineColumn] = '*';
}
matrix[0] = baseMatrix;

for (let indexLine = 1; indexLine < baseNumber; indexLine += 1) {
  for (lineColumn = 0; lineColumn < baseNumber; lineColumn += 1) {
    if (lineColumn === left || lineColumn === right) {
      lineAux[lineColumn] = '*';
    } else {
      lineAux[lineColumn] = ' ';
    }
  }
  matrix[indexLine] = lineAux;
  left += 1;
  right -= 1;
  lineAux = [];
  if (left > right) {
    break;
  }
}
let result = '';

for (lineIndex = matrix.length - 1; lineIndex >= 0; lineIndex -= 1) {
  for (let lineColumn = 0; lineColumn < baseNumber; lineColumn += 1) {
    result = result + matrix[lineIndex][lineColumn];
  }
  console.log(result);
  result = '';
}
