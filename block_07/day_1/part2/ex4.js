const mySkills = ['Javascript', 'HTML', 'CSS', 'BASH', 'Node'];
const findX = (word) => `Trybe ${word} aqui`;
const skills = (name) => {
  let orderSkills = mySkills.sort();
  let result = `
  ${findX(name)}
  Minhas cinco principais habilidades são:        
    `;
  for (let index = 0; index < orderSkills.length; index++) {
    if (index !== 4) {
      result += `${orderSkills[index]}
    `;
    } else {
      result += `${orderSkills[index]}`;
    }
  }

  return `${result}
  #goTrybe`;
};
console.log(skills('Ivanildo'));
