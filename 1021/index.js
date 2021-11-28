let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

const NOTES = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00];
const COINS = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

let value = parseFloat(lines.shift().replace(',', '.'));

console.log('NOTAS:');
for (let i = 0; i < NOTES.length; i++) {
    console.log(`${Math.floor(value / NOTES[i])} nota(s) de R$ ${NOTES[i].toFixed(2)}`);
    value = value % NOTES[i];
}
console.log('MOEDAS:');
let coin = 0;
for (let i = 0; i < COINS.length; i++) {
    coin = Math.floor(value / COINS[i]);
    console.log(`${coin} moeda(s) de R$ ${COINS[i].toFixed(2)}`);
    value = value % COINS[i];
}
