let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

const values = lines.shift().split(' ').map(e => parseInt(e));
const sorted = [...values];

for (let j = 0; j < sorted.length; j++) {
    for (let i = 0; i < sorted.length - j - 1; i++) {
        if (sorted[i + 1] < sorted[i]) {
            [sorted[i + 1], sorted[i]] = [sorted[i], sorted[i + 1]];
        }
    }
}

sorted.forEach(s => console.log(s));
console.log('');
values.forEach(v => console.log(v));
