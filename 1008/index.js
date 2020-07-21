let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

let [NUMBER, HOURS, TIMEVALUE] = lines.map(item => item);

let SALARY = (parseFloat(TIMEVALUE) * HOURS).toFixed(2);

console.log(`NUMBER = ${NUMBER}\nSALARY = U$ ${SALARY}`);