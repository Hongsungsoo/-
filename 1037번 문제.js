let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let indexNumber = input[0];
let numberArray = input[1].split(' ').sort((a, b) => a - b);

let minNumber = numberArray[0];
let maxNumber = numberArray[indexNumber - 1];

console.log(minNumber * maxNumber);
