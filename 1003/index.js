let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

let [A, B] = lines.map(item => parseInt(item));

let SOMA = A + B;

console.log('SOMA =', SOMA);