let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

const AVERAGE_CONSUMPTION = 12 // 12Km/L

const [hours, speed] = lines.map(item => parseInt(item));

const trevelledDistance = hours * speed

const necessaryFuel = trevelledDistance / AVERAGE_CONSUMPTION

console.log(necessaryFuel.toFixed(3))