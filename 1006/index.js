let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

let [A, B, C] = lines.map(item => parseFloat(item));
let AWeight = 2;
let BWeight = 3;
let CWeight = 5;
let weight = AWeight + BWeight + CWeight;

let MEDIA = (((A * AWeight) + (B * BWeight) + (C * CWeight)) / weight).toFixed(1);

console.log('MEDIA =', MEDIA);