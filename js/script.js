console.log('start');

// hamburger
const burger = document.querySelector('.fa-sun');
burger.addEventListener('click', () => {
  document.querySelector('#mobile ul').classList.toggle('active');
});

// db
const destinyNumber = data.destiny.destinyNumber;
const personalYearDB = data.personalYear.yearNumber;
const birthdayNumber = data.birthday.birthday;

// button
const checkBtn = document.querySelector('#checkBtn');
const checkMonthBtn = document.querySelector('#checkMonthBtn');
const checkDayBtn = document.querySelector('#checkDayBtn');

// var
let dayInput = document.querySelector('#dayInput');
let monthInput = document.querySelector('#monthInput');
let yearInput = document.querySelector('#yearInput');

function splitToDigit(n){
  return (n + '').split('').map((i) => { return Number(i); });
}

function reduceToDigit(n) {
  if (n === '') {
    return
  } else {
    let split = splitToDigit(n).reduce((a, b) => {
        return a+ b;
      });
    return split
  }
}

function getDay() {
  let day = dayInput.value;

  if (day === '') {
    dayInput.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
    return    
  } else if (0 >= day || day > 31) {
    dayInput.parentElement.querySelector('.info').innerHTML = 'Podaj poprawny dzień';
    return
  } else
  dayInput.parentElement.querySelector('.info').innerHTML = '';
  if (day >= 10) day = reduceToDigit(day);
  if (day >= 10) day = reduceToDigit(day);
  return day
}

function getMonth() {
  let month = monthInput.value;
  if (month === '') {
    monthInput.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
    return month
  }
  monthInput.parentElement.querySelector('.info').innerHTML = '';
  month = parseInt(month);
  return month
}

function getYear() {
  let year = yearInput.value;
  let currentYear = new Date().getFullYear();
  if (year === '') {
    yearInput.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
    return
  } else if (year > currentYear) {
    yearInput.parentElement.querySelector('.info').innerHTML = 'Podaj poprawny rok';
    return
  } else
  yearInput.parentElement.querySelector('.info').innerHTML = '';
  if (year >= 10) year = reduceToDigit(year);
  if (year >= 10) year = reduceToDigit(year);
  return year
}

function putDestiny() {
  let day = getDay();
  let month = getMonth();
  let year = getYear();

  if (day === undefined || month === '' || year === undefined) {
    return
  } 

  let destiny = day + month + year;
  if (destiny >= 10) destiny = reduceToDigit(destiny);
  if (destiny >= 10) destiny = reduceToDigit(destiny);
  document.querySelector('#destiny #destinyOutput').innerHTML = destiny;
  document.querySelector('#destiny .descContent').innerHTML = destinyNumber[destiny].description;
  document.querySelector('.destinyNumber').innerHTML = destiny;
}

function putPersonalYear() {
  let day = getDay();
  let month = getMonth();
  let currentYear = new Date().getFullYear();
  document.querySelector('#personal-year #yearOutput').innerHTML = currentYear;
  if (currentYear >= 10) currentYear = reduceToDigit(currentYear);
  if (currentYear >= 10) currentYear = reduceToDigit(currentYear);
  
  if (day === undefined || month === undefined || currentYear === undefined) {
    return
  }
 
  let personalYear = day + month + currentYear;
  if (personalYear >= 10) personalYear = reduceToDigit(personalYear);

  document.querySelector('#personal-year .descContent').innerHTML = personalYearDB[personalYear].description;
}

function putBirthday() {
  let birthday = dayInput.value;

  if (birthday === '') {
    return
  }
  document.querySelector('#birthday #birthdayOutput').innerHTML = birthday;
  document.querySelector('#birthday .descContent').innerHTML = birthdayNumber[birthday].description;
}


checkBtn.addEventListener('click', () => {

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