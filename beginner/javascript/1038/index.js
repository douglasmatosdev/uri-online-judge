let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

const table = [4.00, 4.50, 5.00, 2.00, 1.50];

const [x, y] = lines.shift().split(' ').map(e => parseFloat(e));

const total = table[x - 1] * y;

console.log(`Total: R$ ${total.toFixed(2)}`);