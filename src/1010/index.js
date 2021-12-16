let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

let [PROD1, PROD2] = lines.map(item => item.split(' ').map((e, i) => i == 2 ? parseFloat(e) : parseInt(e)));

let [CODE1, UNIT1, PRICE1] = PROD1.map((item, i) => item);
let [CODE2, UNIT2, PRICE2] = PROD2.map((item, i) => item);

let VALUE = ((UNIT1 * PRICE1) + (UNIT2 * PRICE2)).toFixed(2);

console.log('VALOR A PAGAR: R$', VALUE);