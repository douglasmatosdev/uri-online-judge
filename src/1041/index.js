let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

const [x, y] = lines.shift().split(' ').map(e => parseFloat(e));

function run(x, y) {
    if (x === 0.0 && y === 0.0) {
        console.log('Origem');
    }
    if (x === 0.0 && (y > 0 || y < 0)) {
        console.log('Eixo Y');
    }
    if ((x < 0 || x > 0) && y === 0.0) {
        console.log('Eixo X');
    }
    if (x > 0 && y > 0) {
        console.log('Q1');
    }
    if (x < 0 && y > 0) {
        console.log('Q2');
    }
    if (x < 0 && y < 0) {
        console.log('Q3');
    }
    if (x > 0 && y < 0) {
        console.log('Q4');
    }
}

run(x, y);