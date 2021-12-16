let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

const [A, B, C, D] = lines.shift().split(' ').map(e => parseInt(e));

let CD = C + D;
let AB = A + B;

if (B > C && D > A && CD > AB && C >= 0 && D >= 0 && A % 2 === 0) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}
