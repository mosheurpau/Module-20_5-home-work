function isLeepYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2022;
let result = isLeepYear(myYear);
console.log('is leep year: ', result);
const myYear2 = 2024;
let result2 = isLeepYear(myYear2);
console.log('is leep year: ', result2);
const myYear3 = 2100;
let result3 = isLeepYear(myYear3);
console.log('is leep year: ', result3);
