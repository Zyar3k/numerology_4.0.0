// console.log('start');
'use strict';

function scrollAppear() {
  const introMenu = document.querySelector('.introMenu');
  const start = document.querySelector('#start')
  const startPosition = start.getBoundingClientRect().bottom / 2;
  console.log(startPosition)
  const screenPosition = window.outerHeight;

  console.log('screenPosition', screenPosition)

  if(startPosition < screenPosition) {
    introMenu.classList.add('introAppear')
  }
}

window.addEventListener('scroll', scrollAppear)


// const logo = document.querySelectorAll('#logo path')

// for (let i = 0; i < logo.length; i++) {
//   // const element = array[i];
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
// }

// hamburger
const burger = document.querySelector('.fa-hamburger');
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
let currentYear = new Date().getFullYear();

// inputs
  // destiny
const dInpDest = document.querySelector('#dayBInput');
const mInpDest = document.querySelector('#monthBInput');
const yInpDest = document.querySelector('#yearBInput');
  // special month
const mSplMonth = document.querySelector('#monthSMInput');
const ySplMonth = document.querySelector('#yearSMInput');
  // special day
const dSpDay = document.querySelector('#daySDInput');
const mSpDay = document.querySelector('#monthSDInput');
const ySpDay = document.querySelector('#yearSDInput');

// outputs
  // start
const destNumber = document.querySelector('.destinyNumber');
  // destiny
const destNum = document.querySelector('#destNum'); // loop
const destDesc = document.querySelector('#destiny .descContent');
  // personal-year
const yearNum = document.querySelector('#yearNum');
const yearDesc = document.querySelector('#personal-year .descContent');
  // birthday
const birthNum = document.querySelector('#birthdayNum');
const birthDesc = document.querySelector('#birthday .descContent');
  // special month
const specialMonthNum = document.querySelector('#specialMonthOutput');
const sMonDesc = document.querySelector('#special-month .descContent');
  // special day
const specialDayNum = document.querySelector('#specialDayOutput');
const sDayDesc = document.querySelector('#special-day .descContent');

// func
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
      if (split >= 10) split = reduceToDigit(split);
    return split
  }
}

function getNumber(input) {
  input = input.value;
  return input
}

function dayStart() {
  let day = reduceToDigit(getNumber(dInpDest));
  console.log(day)
  if (day === undefined) {
    dInpDest.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
  } else if (getNumber(dInpDest) <= 0 || getNumber(dInpDest) > 31) {
    dInpDest.parentElement.querySelector('.info').innerHTML = 'Podaj poprawny dzień';
  } else
    dInpDest.parentElement.querySelector('.info').innerHTML = '';
  return day
}

function monthStart() {
  const month = reduceToDigit(getNumber(mInpDest));
  if (month === undefined) {
    mInpDest.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
  } else mInpDest.parentElement.querySelector('.info').innerHTML = '';
  return month
}

function yearStart() {
  let year = reduceToDigit(getNumber(yInpDest));
  if (year === undefined) {
    yInpDest.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
  } else if (year <= 0 || getNumber(yInpDest) > currentYear) {
    yInpDest.parentElement.querySelector('.info').innerHTML = 'Podaj poprawny rok';
  } else
    yInpDest.parentElement.querySelector('.info').innerHTML = '';
  return year
}

function getDestinyNum() {
  const day = dayStart();
  const month = monthStart();
  const year = yearStart();
  const destiny = reduceToDigit(day + month + year);
  return destiny
}

function putDestinyInfo() {
  let num = getDestinyNum();

  if (num) {
    destNumber.innerHTML = num;
    destNum.innerHTML = num;
    document.querySelector('.destinyNumberWrap').classList.add('appear');
    destDesc.innerHTML = destinyNumber[num].description;
  }
  return
}

function putPersonalYear() {
  const day = dayStart();
  const month = monthStart();
  let persYear = reduceToDigit(day + month + reduceToDigit(currentYear));
  if (persYear) {
    yearNum.innerHTML = currentYear;
    yearDesc.innerHTML = personalYearDB[persYear].description;
  }
  return
}

function putBirthdayInfo() {
  let birthNumb = getNumber(dInpDest);

  if (birthNumb) {
    birthNum.innerHTML = birthNumb;
    birthDesc.innerHTML = birthdayNumber[birthNumb].description;
  }
  return
}

checkBtn.addEventListener('click', ()=> {
  console.log('click');

  putDestinyInfo();
  putPersonalYear()
  putBirthdayInfo();
});

function monthSM() {
  const month = reduceToDigit(getNumber(mSplMonth));
  if (month === undefined) {
    mSplMonth.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
  } else mSplMonth.parentElement.querySelector('.info').innerHTML = '';
  return month
}

function yearSM() {
  let year = reduceToDigit(getNumber(ySplMonth));
  if (year === undefined) {
    ySplMonth.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
  } else if (year <= 0) {
    ySplMonth.parentElement.querySelector('.info').innerHTML = 'Podaj poprawny rok';
  } else
  ySplMonth.parentElement.querySelector('.info').innerHTML = '';
  return year
}


function putSpecialMonth() {
  const bDay = dayStart();
  const bMonth = monthStart();
  const spMonth = monthSM();
  const spYear = yearSM();
  
  const num = reduceToDigit(bDay + bMonth + spMonth + spYear);
  if (num) {
    specialMonthNum.innerHTML = num;
    document.querySelector('#month-input .omenInfo').innerHTML = 'Twoja wróżba jest gotowa';
    sMonDesc.innerHTML = specialMonth[num].description;
  }
  return
}

checkMonthBtn.addEventListener('click', () => {
  putSpecialMonth();
});

function daySP() {
  let day = reduceToDigit(getNumber(dSpDay));
  if (day === undefined) {
    dSpDay.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
  } else if (getNumber(dSpDay) <= 0 || getNumber(dSpDay) > 31) {
    dSpDay.parentElement.querySelector('.info').innerHTML = 'Podaj poprawny dzień';
  } else
    dSpDay.parentElement.querySelector('.info').innerHTML = '';
    console.log(day)
  return day
}

function monthSD() {
  const month = reduceToDigit(getNumber(mSpDay));
  if (month === undefined) {
    mSpDay.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
  } else mSpDay.parentElement.querySelector('.info').innerHTML = '';
  return month
}

function yearSD() {
  let year = reduceToDigit(getNumber(ySpDay));
  if (year === undefined) {
    ySpDay.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
  } else if (year <= 0) {
    ySpDay.parentElement.querySelector('.info').innerHTML = 'Podaj poprawny rok';
  } else
  ySpDay.parentElement.querySelector('.info').innerHTML = '';
  return year
}

function putSpecialDay() {
  const dest = getDestinyNum();
  const dSP = daySP();
  const mSP = monthSD();
  const ySP = yearSD();
  const specDest = reduceToDigit(dSP + mSP + ySP);
  const num = reduceToDigit(dest + specDest);
  if (num) {    
    specialDayNum.innerHTML = num;
    document.querySelector('#day-input .omenInfo').innerHTML = 'Twoja wróżba jest gotowa';
    sDayDesc.innerHTML = specialDay[num].description;
  }
  return
}

checkDayBtn.addEventListener('click', () => {
  putSpecialDay();
});