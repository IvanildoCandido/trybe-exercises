const longestWord = (sentence) => {
  let words = sentence.split(' ');
  let biggerWord = '';
  for (let index = 0; index < words.length; index++) {
    if (words[index].length > biggerWord.length) {
      biggerWord = words[index];
    }
  }
  return biggerWord;
};

console.log(
  longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'),
);
