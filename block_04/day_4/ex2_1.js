function verifyPalindrome(word) {
  let auxWord = '';
  for (i = word.length - 1; i >= 0; i -= 1) {
    auxWord += word[i];
  }
  if (auxWord === word) {
    return true;
  }
  return false;
}
console.log(verifyPalindrome('arara'));
