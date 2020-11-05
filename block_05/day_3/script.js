function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Step 1
const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];
//This function generates the days of the month based on a matrix
function generateDays(array) {
  const ulDays = document.querySelector('#days');

  for (i = 0; i < dezDaysList.length; i += 1) {
    const liDay = document.createElement('li');
    liDay.classList.add('day');
    if (
      dezDaysList[i] === 24 ||
      dezDaysList[i] === 25 ||
      dezDaysList[i] === 31
    ) {
      liDay.classList.add('holiday');
    }
    if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18 ||
      dezDaysList[i] === 25
    ) {
      liDay.classList.add('friday');
    }
    liDay.innerText = dezDaysList[i];
    ulDays.appendChild(liDay);
  }
}

generateDays(dezDaysList);

// Step 2
const divButtonsContainer = document.querySelector('.buttons-container');

function holidays(nameOfButton) {
  const btnHolidays = document.createElement('button');
  btnHolidays.innerText = nameOfButton;
  btnHolidays.id = 'btn-holiday';
  divButtonsContainer.appendChild(btnHolidays);
}
holidays('Feriados');

// Step 3
function setHolidays() {
  const btnHolidays = document.querySelector('#btn-holiday');
  const holiday = document.querySelectorAll('.holiday');
  let defaultColor = 'rgb(238,238,238)';
  let highLightColor = 'white';
  btnHolidays.addEventListener('click', function () {
    for (i = 0; i < holiday.length; i += 1) {
      if (holiday[i].style.backgroundColor === highLightColor) {
        holiday[i].style.backgroundColor = defaultColor;
      } else {
        holiday[i].style.backgroundColor = highLightColor;
      }
    }
  });
}
setHolidays();

//Step 4
function friday(friday) {
  let btnFriday = document.createElement('button');
  btnFriday.innerText = friday;
  btnFriday.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(btnFriday);
}

friday('Sexta-feira');
