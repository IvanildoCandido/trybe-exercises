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
addShift(lesson2, 'turno', 'Manhã');
console.log(lesson2);
//Exercise 2
const listKeys = (object) => Object.keys(object);
console.table(listKeys(lesson2));
//Exercise 3
const objectLength = (object) => Object.keys(object).length;
console.log(objectLength(lesson2));
//Exercise 4
const listValues = (object) => Object.values(object);
console.table(listValues(lesson2));
//Exercise 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);
//Exercise 6
const totalStudents = (object) => {
  const values = Object.entries(object);
  let count = 0;
  for (const key in values) {
    count += values[key][1].numeroEstudantes;
  }
  return count;
};
console.log(totalStudents(allLessons));
//Exercise 7
const getValueByNumber = (object, number) => Object.values(object)[number];
console.log(getValueByNumber(lesson1, 0));
//Exercise 8
const verifyPair = (object, key, value) => object[key] === value;
console.log(verifyPair(lesson3, 'turno', 'noite'));
