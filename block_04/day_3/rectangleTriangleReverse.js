let value = 5;
let position = value;

for (let i = 0; i < value; i += 1) {
  let lineAux = '';
  for (let j = 0; j <= value; j += 1) {
    if (j < position) {
      lineAux += ' ';
    } else {
      lineAux += '*';
    }
  }
  console.log(lineAux);
  position -= 1;
}
