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
//Exercise Bonus 1
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
const verifyPair = (object, key, value) => object[key] === value;

const hasMathClass = (object) => {
  const keys = Object.keys(object);
  let count = 0;
  for (const key in object) {
    if (object[key]['materia'] === 'Matemática') {
      count += object[key]['numeroEstudantes'];
    }
  }
  return count;
};
console.log(hasMathClass(allLessons));
//Exercise Bonus 1
const createReport = (object, teacher) => {
  const keys = Object.keys(object);
  const classList = [];
  const result = {};
  let count = 0;
  for (const key in object) {
    if (object[key]['professor'] === teacher) {
      classList.push(object[key]['materia']);
      count += object[key]['numeroEstudantes'];
    }
  }
  result.professor = teacher;
  result.aulas = classList;
  result.estudantes = count;
  return result;
};
console.log(createReport(allLessons, 'Maria Clara'));
