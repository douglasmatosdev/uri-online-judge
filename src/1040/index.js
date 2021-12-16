let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

const wheights = [2, 3, 4, 1];
const notes = lines.shift().split(' ').map(e => parseFloat(e));

const average = notes.reduce((acc, curr, idx) => acc + curr * wheights[idx], 0) / wheights.reduce((acc, curr) => acc + curr, 0);
console.log('Media:', average.toFixed(1));

function validationStatus(note) {
    if (note >= 5.0 && note <= 6.9) {
        console.log('Aluno em exame.');
        console.log('Nota do exame:', lines[0]);
        let mediaFinal = (parseFloat(lines[0]) + note) / 2;
        if (mediaFinal<=0) {
            console.log('Aluno reprovado.');
        }else{
            console.log('Aluno aprovado.');
        }
        console.log('Media final:', mediaFinal.toFixed(1));
    }
    if (note < 5.0) {
        console.log('Aluno reprovado.');
    }
    if (note >= 7.0) {
        console.log('Aluno aprovado.');
    }
}

validationStatus(average);