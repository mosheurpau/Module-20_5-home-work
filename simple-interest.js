function simpleInterest(principal, rate, time) {
    let interest = (principal * rate * time) / 100;
    return interest;
}
// const principal1 = 200, rate1 = 10, time1 = 2;
// console.log('Principa1 ' + principal1 + ' Rate of Interest ' + rate1 + '% after ' + time1 + ' years interest:', simpleInterest(principal1, rate1, time1));

// const principal2 = 500, rate2 = 5, time2 = 5;
// console.log('Principa2 ' + principal2 + ' Rate of Interest ' + rate2 + '% after ' + time2 + ' years interest:', simpleInterest(principal2, rate2, time2));

// const principal3 = 1000, rate3 = 5, time3 = 5;
// console.log('Principa2 ' + principal3 + ' Rate of Interest ' + rate3 + '% after ' + time3 + ' years interest:', simpleInterest(principal3, rate3, time3));

// const principal4 = 5000, rate4 = 5, time4 = 5;
// console.log('Principa4 ' + principal4 + ' Rate of Interest ' + rate4 + '% after ' + time4 + ' years interest:', simpleInterest(principal4, rate4, time4));

let principa = [200, 500, 1000, 5000, 7000];
let rate = [20, 15, 10, 5, 5];
let time = [2, 3, 4, 5, 5];
let Number = 1;

for (var i = 0; i < principa.length; i++) {
    console.log(Number + i + ') Principa ' + principa[i] + 'Tk Rate of Interest ' + rate[i] + '% after ' + time[i] + ' years interest:', simpleInterest(principa[i], rate[i], time[i]));
}