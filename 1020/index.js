let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

const YEAR_MONTH_DAY = [365, 30, 1]; // In days
const STRING_YEAR_MONTH_DAY = ['ano(s)', 'mes(es)', 'dia(s)'];

let age = parseInt(lines.shift());

const ageInDays = YEAR_MONTH_DAY.reduce((previousValue, currentValue, idx) => {
    let count = 0;
    while (age - currentValue >= 0) {
        count = count + 1;
        age = age - currentValue;
    }
    return [...previousValue, `${count} ${STRING_YEAR_MONTH_DAY[idx]}`];
}, []);

ageInDays.forEach(value => console.log(value));