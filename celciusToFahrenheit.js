function celciusToFahrenheit(celcius) {
    let fahrenheit = (celcius * 1.8) + 32;
    return fahrenheit;
}
const myCelcius = -10;
const getFahrenheit = celciusToFahrenheit(myCelcius);
console.log(myCelcius, 'C =', getFahrenheit, 'F');

const myCelcius2 = 0;
const getFahrenheit2 = celciusToFahrenheit(myCelcius2);
console.log(myCelcius2, 'C =', getFahrenheit2, 'F');

const myCelcius3 = 5;
const getFahrenheit3 = celciusToFahrenheit(myCelcius3);
console.log(myCelcius3, 'C =', getFahrenheit3, 'F');

const myCelcius4 = 25;
const getFahrenheit4 = celciusToFahrenheit(myCelcius4);
console.log(myCelcius4, 'C =', getFahrenheit4, 'F');