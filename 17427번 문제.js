let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = 0;

for (let i = 1; i <= input; i++) {
  result += Math.floor(input / i) * i;
}

console.log(result);
