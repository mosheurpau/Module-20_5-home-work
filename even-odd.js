function isEven(number) {
    if (number % 2 == 0) {
        return number + ' is Even';
    }
    return number + ' is Odd';
}

const myNumber = 6;
let result = isEven(myNumber);
console.log(result);

const myNumber2 = 7;
let result2 = isEven(myNumber2);
console.log(result2);