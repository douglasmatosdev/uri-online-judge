let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

let [A, B, C, D] = lines.map(item => parseInt(item));

let DIFFERENCE = (A * B) - (C * D);

console.log('DIFERENCA =', DIFFERENCE);