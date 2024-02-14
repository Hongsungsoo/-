let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let number = input[0];

let result = [];

for (let i = 1; i <= number; i++) {
  result.push(g(input[i]));
}

function g(x) {
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    sum += Math.floor(x / i) * i;
  }
  return sum;
}

console.log(result.join('\n'));
