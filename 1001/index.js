/**
 * Primeiro exemplo de como se realizar a soma lendo um arquivo
 */
// Crie um arquivo e coloque dentro dele os valores que deseja ler
let input1 = require('fs').readFileSync('stdin', 'utf8');
let lines1 = input1.split('\n'); // seprando a string na quebra de linha

let A1 = parseInt(lines1.shift()); // armazenando o primeiro e removendo o último item
let B1 = parseInt(lines1.shift()); // armazenando o primeiro e removendo o último item

let X1 = A1 + B1;

console.log('X1 =', X1);

/**
 * Segunda forma de se fazer 
 */

let input2 = require('fs').readFileSync('stdin', 'utf8');
let lines2 = input2.split('\n'); // seprando a string na quebra de linha

let [A2, B2] = lines2.map(item => parseInt(item));

let X2 = A2 + B2;

console.log(`X2 = ${X2}`);