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
const specialMonth = data.specialMonth.monthNumber;
const specialDay = data.specialDay.dayNumber;

// button
const checkBtn = document.querySelector('#checkBtn');
const checkMonthBtn = document.querySelector('#checkMonthBtn');
const checkDayBtn = document.querySelector('#checkDayBtn');

// inputs
let dayInput = document.querySelector('#dayInput');
let monthInput = document.querySelector('#monthInput');
let yearInput = document.querySelector('#yearInput');

// special
let monthSpecial = document.querySelector('#monthInputSpecial');
let yearSpecial = document.querySelector('#yearInputSpecial');

// help func
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

// main func

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

function getSpecialMonth() {
  let month = monthSpecial.value;
  if (month === '') {
    monthSpecial.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
    return month
  }
  monthSpecial.parentElement.querySelector('.info').innerHTML = '';
  month = parseInt(month);
  return month
}

function getSpecialYear() {
  let year = yearSpecial.value;
  let currentYear = new Date().getFullYear();
  if (year === '') {
    yearSpecial.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
    return
  } else if (year > currentYear) {
    yearSpecial.parentElement.querySelector('.info').innerHTML = 'Podaj poprawny rok';
    return
  } else
  yearSpecial.parentElement.querySelector('.info').innerHTML = '';
  if (year >= 10) year = reduceToDigit(year);
  if (year >= 10) year = reduceToDigit(year);
  return year
}

function putSpecialMonth() {

  let dayB = getDay();
  let monthB = getMonth();
  let sumB = dayB + monthB;
  if (sumB >= 10) sumB = reduceToDigit(sumB);
  let monthS = getSpecialMonth();
  let yearS = getSpecialYear();
  let sumS = monthS + yearS;
  if (sumS >= 10) sumS = reduceToDigit(sumS);

  let monthNumber = sumB + sumS;
  if (monthNumber >= 10) monthNumber = reduceToDigit(monthNumber);

  if (monthS !== '' || yearS !== undefined || monthB !== '' || dayB !== undefined) {
    document.querySelector('#omenInfo').innerHTML= 'Twoja wróżba jest gotowa'
    document.querySelector('#specialMonthOutput').innerHTML = monthNumber;
    document.querySelector('#special-month .descContent').innerHTML = specialMonth[monthNumber].description;
  } else {
    return
  }
}

checkMonthBtn.addEventListener('click', () => {
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