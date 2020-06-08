console.log('start');

// hamburger

const burger = document.querySelector('.fa-sun');

burger.addEventListener('click', () => {
  document.querySelector('#mobile ul').classList.toggle('active');
});

// button
const checkBtn = document.querySelector('#checkBtn');
const checkMonthBtn = document.querySelector('#checkMonthBtn');
const checkDayBtn = document.querySelector('#checkDayBtn');

function putDestiny() {
  document.querySelector('#destiny #destinyOutput').innerHTML = '2';
  document.querySelector('#destiny .descContent').innerHTML = 'desccription';
  document.querySelector('.destinyNumber').innerHTML = "2";
}

function putPersonalYear() {
  document.querySelector('#personal-year #yearOutput').innerHTML = '2020';
  document.querySelector('#personal-year .descContent').innerHTML = 'desccription';
}

function putBirthday() {
  document.querySelector('#birthday #birthdayOutput').innerHTML = '13';
  document.querySelector('#birthday .descContent').innerHTML = 'desccription';
}


checkBtn.addEventListener('click', () => {
  console.log('click');
  putDestiny();
  putPersonalYear();
  putBirthday();

});

function putSpecialMonth() {
  document.querySelector('#specialMonthOutput').innerHTML = "6";
  document.querySelector('#special-month .descContent').innerHTML = 'description';
}

checkMonthBtn.addEventListener('click', () => {
  console.log('checkMonthBtn')
  putSpecialMonth();

});

function putSpecialDay() {
  document.querySelector('#specialDayOutput').innerHTML = "8";
  document.querySelector('#special-day .descContent').innerHTML = 'description';
}

checkDayBtn.addEventListener('click', () => {
  console.log('checkDayBtn')
  putSpecialDay();
  

});