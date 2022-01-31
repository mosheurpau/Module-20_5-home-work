function fahrenheitToCelcius(fahrenheit) {
    let celcius = (fahrenheit - 32) * (5 / 9);
    return parseFloat(celcius.toFixed(2));
}

const myFahrenheit = 0;
const getCelcius = fahrenheitToCelcius(myFahrenheit);
console.log(myFahrenheit, 'F =', getCelcius, 'C');

const myFahrenheit2 = 35;
const getCelcius2 = fahrenheitToCelcius(myFahrenheit2);
console.log(myFahrenheit2, 'F =', getCelcius2, 'C');

const myFahrenheit3 = 45;
const getCelcius3 = fahrenheitToCelcius(myFahrenheit3);
console.log(myFahrenheit3, 'F =', getCelcius3, 'C');