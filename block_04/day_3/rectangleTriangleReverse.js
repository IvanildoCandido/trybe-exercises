let value = 5;
let auxLine = [];
let lineAux = "";

for (let line = 1; line <= value; line += 1) {
  let columnAux = value - line;
  let lineAux = "";
  for (let column = 0; column <= value - 1; column += 1) {
    if (column < columnAux) {
      auxLine[column] = " ";
    } else {
      auxLine[column] = "*";
    }
  }
  for( let i = 0 ; i < value ; i += 1){
    lineAux += auxLine[i];
  }
  console.log(lineAux);  
}
