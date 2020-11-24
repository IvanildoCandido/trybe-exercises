function endWordCheck(word, end) {
  let auxWord = '';
  let auxEnd = '';
  for (i = word.length - 1; i >= word.length - end.length; i--) {
    auxWord += word[i];
  }
  for (i = end.length - 1; i >= 0; i--) {
    auxEnd += end[i];
  }
  if (auxWord === auxEnd) {
    return true;
  }
  return false;
}
console.log(endWordCheck('trybe', 'be'));
