let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');


let [x, y] = lines.map((e, i) => i === 0 ? parseInt(e) : parseFloat(e));
let averageConsuption = (x / y).toFixed(3);

console.log(`${averageConsuption} km/l`);