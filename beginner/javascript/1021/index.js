let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

let value = parseFloat(lines.shift().replace(',', '.'));
const MONEY = [100.0, 50.0, 20.0, 10.0, 5.0, 2.0, 1.0, 0.5, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:");
MONEY.forEach((money, idx) => {
    let count = 0;
    while (value >= money) {
        value = (value - money).toFixed(2);
        count++;
    }

    if (money === 1.0) console.log("MOEDAS:");

    if (money >= 2.0)
        console.log(`${count} nota(s) de R$ ${money.toFixed(2)}`);
    else
        console.log(`${count} moeda(s) de R$ ${money.toFixed(2)}`);
});