let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

let [SELLER, SALARY, SALES] = lines.map((item, i) => i !== 0 ? parseFloat(item) : item);

let rate = 15;
let comission = (rate * SALES) / 100;

let TOTAL = (SALARY + comission).toFixed(2);

console.log('TOTAL = R$', TOTAL);