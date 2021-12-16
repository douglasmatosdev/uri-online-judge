let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

const [A, B, C] = lines.shift().split(' ').map(e => parseFloat(e));

function formulaBhaskara(a, b, c) {
    const delta = b * b - 4 * a * c;
    return delta;
}

if ((A === 0) || formulaBhaskara(A, B, C) < 0) {
    console.log("Impossivel calcular");
    return;
}

const delta = Math.sqrt(formulaBhaskara(A, B, C));

const R1 = (-B + delta) / (2 * A);
const R2 = (-B - delta) / (2 * A);

console.log("R1 =", R1.toFixed(5));
console.log("R2 =", R2.toFixed(5));
