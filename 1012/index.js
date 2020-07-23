let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

const pi = Math.PI.toFixed(5);
const [A, B, C] = lines[0].split(' ').map(item => parseFloat(item));

const TRIANGULO = ((A * C) / 2).toFixed(3); // A = (b * h) / 2
const CIRCULO = (pi * Math.pow(C, 2)).toFixed(3); // A = þr²
const TRAPEZIO = (((A + B) * C) / 2).toFixed(3); // A = ((B + b) * h) / 2
const QUADRADO = Math.pow(B, 2).toFixed(3); // A = L * L ou A = L²
const RETANGULO = (A * B).toFixed(3); // A = b * h

console.log(`TRIANGULO: ${TRIANGULO}\nCIRCULO: ${CIRCULO}\nTRAPEZIO: ${TRAPEZIO}\nQUADRADO: ${QUADRADO}\nRETANGULO: ${RETANGULO}`);
