let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

const [d] = lines.map(e => parseFloat(e));

console.log(`${(d*60)/30} minutos`);
