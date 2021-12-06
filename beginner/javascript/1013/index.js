let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

let [a, b, c] = lines[0].split(' ').map(item => parseInt(item));

let Maior = (a, b, c) => {
    
    let dif = (a + b + (Math.abs(a - b))) / 2;

    return (dif + c + (Math.abs(dif - c))) / 2;
}


console.log(`${Maior(a, b, c)} eh o maior`);