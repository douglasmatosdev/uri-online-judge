let input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n');

const ONE_HOUR = 3600; // In seconds
const ONE_MINUTE = 60; // In seconds

let totalSeconds = parseInt(lines.shift());

const hour = Math.floor(totalSeconds / ONE_HOUR);

const minute = Math.floor((totalSeconds % ONE_HOUR) / ONE_MINUTE);

const second = totalSeconds % ONE_MINUTE;

console.log(`${hour}:${minute}:${second}`);
