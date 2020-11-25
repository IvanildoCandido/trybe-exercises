const main = document.querySelector('main');
const btnBgWhite = document.querySelector('#btn-bg-white');
const btnBgBlack = document.querySelector('#btn-bg-black');
const btnBgRed = document.querySelector('#btn-bg-red');
const btnBgBlue = document.querySelector('#btn-bg-blue');
const p = document.querySelector('p');

const btnTxtWhite = document.querySelector('#btn-txt-white');
const btnTxtBlack = document.querySelector('#btn-txt-black');
const btnTxtRed = document.querySelector('#btn-txt-red');
const btnTxtBlue = document.querySelector('#btn-txt-blue');

const btn10 = document.querySelector('#btn-10');
const btn12 = document.querySelector('#btn-12');
const btn14 = document.querySelector('#btn-14');
const btn20 = document.querySelector('#btn-20');

const btn1 = document.querySelector('#btn-1');
const btnNormal = document.querySelector('#btn-normal');
const btn1_5 = document.querySelector('#btn-1_5');
const btn2_0 = document.querySelector('#btn-2_0');

const btnArial = document.querySelector('#btn-arial');
const btnTnr = document.querySelector('#btn-tnr');

backgroundColor(btnBgWhite, main, 'white');
backgroundColor(btnBgBlack, main, 'black');
backgroundColor(btnBgRed, main, 'red');
backgroundColor(btnBgBlue, main, 'blue');

textColor(btnTxtWhite, main, 'white');
textColor(btnTxtBlack, main, 'black');
textColor(btnTxtRed, main, 'red');
textColor(btnTxtBlue, main, 'blue');

fontHeight(btn10, main, '10');
fontHeight(btn12, main, '12');
fontHeight(btn14, main, '14');
fontHeight(btn20, main, '20');

lineHeight(btn1, main, '10px');
lineHeight(btnNormal, main, 'normal');
lineHeight(btn1_5, main, '15px');
lineHeight(btn2_0, main, '20px');

fontFamily(btnArial, main, 'Arial');
fontFamily(btnTnr, main, 'Times New Roman');

function backgroundColor(btn, object, color) {
  btn.addEventListener('click', function () {
    object.style.backgroundColor = color;
    localStorage.setItem('bgColor', color);
  });
}

function textColor(btn, object, color) {
  btn.addEventListener('click', function () {
    object.style.color = color;
    localStorage.setItem('txtColor', color);
  });
}

function fontHeight(btn, object, size) {
  btn.addEventListener('click', function () {
    object.style.fontSize = size + 'px';
    localStorage.setItem('fontSize', size + 'px');
  });
}

function lineHeight(btn, object, size) {
  btn.addEventListener('click', function () {
    object.style.lineHeight = size;
    localStorage.setItem('lineHeight', size);
  });
}

function fontFamily(btn, object, font) {
  btn.addEventListener('click', function () {
    object.style.fontFamily = font;
    localStorage.setItem('fontFamily', font);
  });
}

window.onload = function () {
  function setConfig() {
    main.style.backgroundColor = localStorage.getItem('bgColor');
    main.style.color = localStorage.getItem('txtColor');
    main.style.fontSize = localStorage.getItem('fontSize');
    main.style.lineHeight = localStorage.getItem('lineHeight');
    main.style.fontFamily = localStorage.getItem('fontFamily');
  }
  setConfig();
};
