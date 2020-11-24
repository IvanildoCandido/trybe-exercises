const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//Exercise 1
const addShift = (object, key, value) => (object[key] = value);
addShift(lesson2, 'shift', 'Manhã');
console.log(lesson2);
//Exercise 2
const listKeys = (object) => Object.keys(object);
console.table(listKeys(lesson2));
