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

//Step 5
function setFriday(fridaysArray) {
  const btnFriday = document.querySelector('#btn-friday');
  const friday = document.getElementsByClassName('friday');
  let newText = 'FRIDAY!';

  btnFriday.addEventListener('click', function () {
    for (i = 0; i < friday.length; i += 1) {
      if (friday[i].innerHTML !== newText) {
        friday[i].innerHTML = newText;
      } else {
        friday[i].innerHTML = fridaysArray[i];
      }
    }
  });
}
let dezFridays = [4, 11, 18, 25];
setFriday(dezFridays);

//Step 6
function mouseOver() {
  const days = document.querySelector('#days');
  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '28px';
    event.target.style.fontWeight = 'bold';
  });
}
function mouseOut() {
  const days = document.querySelector('#days');
  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = 'normal';
  });
}
mouseOver();
mouseOut();

//Step 7
const taskContainer = document.querySelector('.my-tasks');
function addTaskSpan(taskName) {
  const newTask = document.createElement('span');
  newTask.innerText = taskName;
  taskContainer.appendChild(newTask);
}
addTaskSpan('Resolver os exercícios de 1 ao 7');

//Step 8
function addTaskSubtitle(color) {
  const divSubtitle = document.createElement('div');
  divSubtitle.className = 'task';
  divSubtitle.style.backgroundColor = color;
  taskContainer.appendChild(divSubtitle);
}
addTaskSubtitle('red');

//Step 9
function toggleTask() {
  const task = document.querySelector('.task');

  task.addEventListener('click', function (event) {
    const taskSelected = document.querySelector('.selected');
    if (taskSelected === null) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}
toggleTask();
//Step 10
function toogleDayColor() {
  const days = document.querySelector('#days');
  days.addEventListener('click', function (event) {
    const taskSelected = document.querySelector('.selected');
    if (taskSelected !== null) {
      if (event.target.style.color === taskSelected.style.backgroundColor) {
        event.target.style.color = 'rgb(119,119,119)';
      } else {
        event.target.style.color = taskSelected.style.backgroundColor;
      }
    }
  });
}
toogleDayColor();
//Step bonus
function addAppointment() {
  document.addEventListener('keydown', function (event) {
    if (event.keyCode !== 13) return;
    btnAdd.click();
  });
  const btnAdd = document.querySelector('#btn-add');
  const txtAppointment = document.querySelector('#task-input');
  const ulAppointments = document.querySelector('.task-list');
  btnAdd.addEventListener('click', function () {
    if (txtAppointment.value === '') {
      alert('Não é possivel adicionar um compromisso em branco!');
    } else {
      let li = document.createElement('li');
      li.innerText = txtAppointment.value;
      ulAppointments.appendChild(li);
    }
  });
}
addAppointment();
