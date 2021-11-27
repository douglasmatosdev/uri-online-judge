let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

const POSSIBLE_BANKNOTES = [100, 50, 20, 10, 5, 2, 1];
let value = parseInt(lines.shift());
const necessaryBanknotes = POSSIBLE_BANKNOTES.reduce((previousValue, banknote) => {
    let count = 0;
    while (value - banknote >= 0) {
        count = count + 1;
        value = value - banknote;
    }
    return [...previousValue, `${count} nota(s) de R$ ${banknote},00`];
}, [value]);
necessaryBanknotes.forEach(value => console.log(value));

/**
 * FIRST METHOD - RETURN A UNIQ STRING
 */
// let necessaryBanknotes = `${value}\n`;
// POSSIBLE_BANKNOTES.forEach((banknote, idx) => {
//     let count = 0;
//     while (value - banknote >= 0) {
//         count = count + 1;
//         value = value - banknote;
//     }
//     necessaryBanknotes = necessaryBanknotes + `${count} nota(s) de R$ ${banknote},00 \n`;
// });
// console.log(necessaryBanknotes);

/**
 * SECOND METHOD - RETURN A UNIQ STRING
 */
// const necessaryBanknotes = POSSIBLE_BANKNOTES.reduce((stringResult, banknote) => {
//     let count = 0;
//     while (value - banknote >= 0) {
//         count = count + 1;
//         value = value - banknote;
//     }
//     return stringResult = stringResult + `${count} nota(s) de R$ ${banknote},00 \n`;
// }, `${value}\n`);
// console.log(necessaryBanknotes);

/**
 * THIRD METHOD
 */
// const necessaryBanknotes = [`${value}`];
// for (const idx in POSSIBLE_BANKNOTES) {
//     let count = 0;
//     while (value - POSSIBLE_BANKNOTES[idx] >= 0) {
//         count = count + 1;
//         value = value - POSSIBLE_BANKNOTES[idx];
//     }
//     necessaryBanknotes.push(`${count} nota(s) de R$ ${POSSIBLE_BANKNOTES[idx]},00`);
// }
// necessaryBanknotes.forEach(e => console.log(e));