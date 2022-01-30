function inchToFeet(inch) {
    let getFeet = inch / 12;
    return getFeet;
}

const myInch = 50;
let result = inchToFeet(myInch);
console.log(myInch, 'inch =', result.toFixed(2), 'Feet');

const herInch = 40;
let herResult = inchToFeet(herInch);
console.log(herInch, 'inch =', herResult.toFixed(2), 'Feet');

