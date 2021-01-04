function stringVowel(char) {
  if (char.toLowerCase() === 'a') {
    return 1;
  }
  if (char.toLowerCase() === 'e') {
    return 2;
  }
  if (char.toLowerCase() === 'i') {
    return 3;
  }
  if (char.toLowerCase() === 'o') {
    return 4;
  }
  if (char.toLowerCase() === 'u') {
    return 5;
  }
  return char;
}

function stringNumber(char) {
  if (char === '1') {
    return 'a';
  }
  if (char === '2') {
    return 'e';
  }
  if (char === '3') {
    return 'i';
  }
  if (char === '4') {
    return 'o';
  }
  if (char === '5') {
    return 'u';
  }
  return char;
}

function encode(sentence) {
  // seu código aqui
  let sentenceEncoded = '';
  for (let i = 0; i < sentence.length; i += 1) {
    sentenceEncoded += stringVowel(sentence[i]);
  }
  return sentenceEncoded;
}
function decode(sentence) {
  // seu código aqui
  let sentenceDecoded = '';
  for (let i = 0; i < sentence.length; i += 1) {
    sentenceDecoded += stringNumber(sentence[i]);
  }
  return sentenceDecoded;
}
exports.encode = encode;
exports.decode = decode;
