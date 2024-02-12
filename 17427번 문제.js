let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

function sum(y) {
  let number = parseInt(y);
  let totalSum = 0;
  for (let i = 0; i < number + 1; i++) {
    if (number % i === 0) {
      totalSum += i;
    }
  }
  return totalSum;
}

function g(x) {
  let number = parseInt(x);
  let result = 0;
  for (let i = 0; i < number + 1; i++) {
    result += sum(i);
  }
  console.log(result);
}

g('10');
