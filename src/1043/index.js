let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split(' ');

const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());
const C = parseFloat(lines.shift());

if (A + B > C && A + C > B && B + C > A) { // Verifica se é um triangulo
    const perimetroTriangulo = A + B + C;
    console.log(`Perimetro = ${perimetroTriangulo.toFixed(1)}`);

} else {

    const areaTrapezio = ((A + B) * C) / 2;
    console.log(`Area = ${areaTrapezio.toFixed(1)}`);
}
