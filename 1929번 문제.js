let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let M = +input[0];
let N = +input[1];

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimes(M, N) {
  const primes = [];
  for (let i = M; i <= N; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

const result = findPrimes(M, N);
console.log(result.join('\n'));
