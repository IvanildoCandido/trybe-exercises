let value = 'ROOKs';

let piece = value.toLowerCase();
let moviments = null;

switch (piece) {
  case 'king': {
    moviments = "vertical, horizontal and diagonal one position";
    break;
  }
  case 'queen': {
    moviments = "vertical, horizontal and diagonal many position";
    break;
  }
  case 'rook': {
    moviments = "vertical and horizontal many positions";
    break;
  }
  case 'bishop': {
    moviments = "diagonal many positions";
    break;
  }
  case 'knight': {
    moviments =
      "two vertical and one horizontal position or two horizontal and one vertical position";
    break;
  }
  case 'pawn': {
    moviments = "front one position";
    break;
  }
  default:
    moviments = "The piece informed is not valid";
}
console.log("Piece informed:", piece, "| Moviments:", moviments);
