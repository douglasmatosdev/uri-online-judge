let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

let [A, B] = lines.map(item => parseFloat(item));

let AWeight = 3.5;
let BWeight = 7.5;

let weight = AWeight + BWeight;

let MEDIA = ((( (A * AWeight) + (B * BWeight) ) / weight)).toFixed(5);

console.log('MEDIA =', MEDIA);