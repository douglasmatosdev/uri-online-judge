let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

let pi = Math.PI.toFixed(5);
let R = parseInt(lines);

let VOLUME = ((4 / 3) * pi * Math.pow(R, 3)).toFixed(3);

console.log('VOLUME =', VOLUME);