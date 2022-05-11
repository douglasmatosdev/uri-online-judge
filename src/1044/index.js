let input = require('fs').readFileSync('stdin2', 'utf8');
lines = input.split(' ');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());

const message = ["Sao Multiplos", "Nao sao Multiplos"];

function isMutliple(a, b) {
    (a % b === 0) ? console.log(message[0]) : console.log(message[1]);
}

if (A < B) isMutliple(B, A);
else isMutliple(A, B);