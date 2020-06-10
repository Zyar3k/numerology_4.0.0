// console.log('start');
'use strict';

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
  if (day === undefined) {
    dInpDest.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
  } else if (day <= 0 || day > 31) {
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
    sMonDesc.innerHTML = specialMonth[num].description;
  }
  return
}

checkMonthBtn.addEventListener('click', () => {
  putSpecialMonth();
});



// function getSpecialMonth() {
//   let month = monthSpecial.value;
//   if (month === '') {
//     monthSpecial.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
//     return month
//   }
//   monthSpecial.parentElement.querySelector('.info').innerHTML = '';
//   month = parseInt(month);
//   return month
// }

// function getSpecialYear() {
//   let year = yearSpecial.value;
//   let currentYear = new Date().getFullYear();
//   if (year === '') {
//     yearSpecial.parentElement.querySelector('.info').innerHTML = 'Wypełnij pole';
//     return
//   } else if (year > currentYear) {
//     yearSpecial.parentElement.querySelector('.info').innerHTML = 'Podaj poprawny rok';
//     return
//   } else
//   yearSpecial.parentElement.querySelector('.info').innerHTML = '';
//   if (year >= 10) year = reduceToDigit(year);
//   if (year >= 10) year = reduceToDigit(year);
//   return year
// }

// function putSpecialMonth() {

//   let dayB = getDay();
//   let monthB = getMonth();
//   let sumB = dayB + monthB;
//   if (sumB >= 10) sumB = reduceToDigit(sumB);
//   let monthS = getSpecialMonth();
//   let yearS = getSpecialYear();
//   let sumS = monthS + yearS;
//   if (sumS >= 10) sumS = reduceToDigit(sumS);

//   let monthNumber = sumB + sumS;
//   if (monthNumber >= 10) monthNumber = reduceToDigit(monthNumber);

//   if (monthS !== '' || yearS !== undefined || monthB !== '' || dayB !== undefined) {
//     document.querySelector('#omenInfo').innerHTML= 'Twoja wróżba jest gotowa'
//     document.querySelector('#specialMonthOutput').innerHTML = monthNumber;
//     document.querySelector('#special-month .descContent').innerHTML = specialMonth[monthNumber].description;
//   } else {
//     return
//   }
// }

// checkMonthBtn.addEventListener('click', () => {
//   putSpecialMonth();

// });

// function putSpecialDay() {
//   document.querySelector('#specialDayOutput').innerHTML = "8";
//   document.querySelector('#special-day .descContent').innerHTML = 'description';
// }

// checkDayBtn.addEventListener('click', () => {
//   console.log('checkDayBtn')
//   putSpecialDay();
  

// });