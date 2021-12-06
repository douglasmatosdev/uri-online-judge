let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

let pi = Math.PI.toFixed(5); // 3.14159
// ou
// let pi = 3.14159;

let r = Math.pow(parseFloat(lines.shift()), 2);

let A = (pi * r).toFixed(4);

// console.log('A='+A);
// ou
console.log(`A=${A}`);