function repeatMore(array) {
    let count = 0;
    let moreRepeat = 0;
    let auxNumber = null;
    let number = null;
  
    for (let i in array) {
      for (let j in array) {
        if (array[i] === array[j]) {
          count++;
          auxNumber = array[i];
        }
      }
      if (count > moreRepeat) {
        moreRepeat = count;
        number = auxNumber;
      }
      count = 0;
    }
    return number;
  }
  console.log(repeatMore([2, 3, 2, 5, 8, 2, 3]));