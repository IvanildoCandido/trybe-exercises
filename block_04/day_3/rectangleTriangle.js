let value = 5;
let auxLine = "";

for (let line = 1; line <= value; line += 1) {
  let setLine = line + 1;
  auxLine = "";
  for (let column = 1; column < setLine; column += 1) {
    auxLine += "*";
  }
  console.log(auxLine);
}
