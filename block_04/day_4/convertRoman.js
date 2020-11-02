function convertRoman(number) {
  let upNumber = number.toUpperCase();
  let arrayConvert = [];
  let romanNunbers = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let result = 0;
  for (let index in upNumber) {
    for (let i in romanNunbers) {
      if (upNumber[index] === i) {
        arrayConvert[index] = romanNunbers[i];
      }
    }
  }
  for (i = 0; i < arrayConvert.length; i++) {
    if (arrayConvert[i] < arrayConvert[i + 1]) {
      result -= arrayConvert[i];
    } else {
      result += arrayConvert[i];
    }
  }
  return result;
}

console.log(convertRoman('ix'));
