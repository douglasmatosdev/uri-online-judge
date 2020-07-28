let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

let [x1, y1] = lines[0].split(' ').map(e => parseFloat(e));
let [x2, y2] = lines[1].split(' ').map(e => parseFloat(e));

let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(4);

console.log(distance);