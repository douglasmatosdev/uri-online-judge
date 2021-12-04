let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

let value = parseFloat(lines.shift());

if (value > 100 || value < 0) {
    console.log("Fora de intervalo");

} else if (value >= 75 && value <= 100) {
    console.log("Intervalo (75,100]");

} else if (value > 25 && value <= 50.0000000) {
    console.log("Intervalo (25,50]");

} else if (value >= 0 && value <= 25.0000) {
    console.log("Intervalo [0,25]");
    
} else {
    console.log("Fora de intervalo");
}
