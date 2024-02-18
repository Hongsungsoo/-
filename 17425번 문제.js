let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let number = input[0];

let results = [];

function g(x) {
  const divisorSum = new Array(x + 1).fill(1);

  for (let i = 2; i <= x; i++) {
    for (let j = i; j <= x; j += i) {
      divisorSum[j] += i;
    }
  }

  const sum = new Array(x + 1).fill(0);
  for (let i = 1; i <= x; i++) {
    sum[i] = sum[i - 1] + divisorSum[i];
  }

  return sum;
}

for (let i = 1; i <= number; i++) {
  const N = parseInt(input[i]);
  const result = g(N);
  results.push(result[N]);
}

console.log(results.join('\n'));
