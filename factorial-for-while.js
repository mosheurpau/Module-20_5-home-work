// factorial using for loop
function getFactorial(factorialNumber) {
    factorial = 1;
    for (var i = 1; i <= factorialNumber; i++) {
        factorial *= i;
    }
    return factorial;
}

const number = 3;
const result = getFactorial(number);
console.log(number, '! =', result);

const number2 = 7;
const result2 = getFactorial(number2);
console.log(number2, '! =', result2);

// factorial using while loop 
function getFactorial2(numberFac) {
    let factorial = 1;
    let i = 1;
    while (i <= numberFac) {
        factorial *= i;
        i++;
    }
    return factorial;
}

const myNumber = 5;
const myResult = getFactorial2(myNumber);
console.log('using while loop: ', myNumber + '! =', myResult);

const myNumber2 = 9;
const myResult2 = getFactorial2(myNumber2);
console.log('using while loop: ', myNumber2 + '! =', myResult2);