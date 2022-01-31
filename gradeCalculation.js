function gradeCaculation(grade) {
    if (grade <= 100 && grade >= 80) {
        return 'A+ ' + grade;
    }
    else if (grade < 80 && grade >= 75) {
        return 'A ' + grade;
    }
    else if (grade < 75 && grade >= 70) {
        return 'A- ' + grade;
    }
    else if (grade < 70 && grade >= 65) {
        return 'B+ ' + grade;
    }
    else if (grade < 65 && grade >= 60) {
        return 'B ' + grade;
    }
    else if (grade < 60 && grade >= 55) {
        return 'B- ' + grade;
    }
    else if (grade < 55 && grade >= 50) {
        return 'C ' + grade;
    }
    else if (grade < 50 && grade >= 45) {
        return 'D ' + grade;
    }
    else if (grade < 45 && grade >= 40) {
        return 'E ' + grade;
    }
    else {
        return 'F ' + grade;
    }

}

const mySubjest1 = 88;
const subjestResult1 = gradeCaculation(mySubjest1);
console.log('Your grade is', subjestResult1);

const mySubjest2 = 33;
const subjestResult2 = gradeCaculation(mySubjest2);
console.log('Your grade is', subjestResult2);

const mySubjest3 = 53;
const subjestResult3 = gradeCaculation(mySubjest3);
console.log('Your grade is', subjestResult3);

const mySubjest4 = 63;
const subjestResult4 = gradeCaculation(mySubjest4);
console.log('Your grade is', subjestResult4);

const mySubjest5 = 43;
const subjestResult5 = gradeCaculation(mySubjest5);
console.log('Your grade is', subjestResult5);