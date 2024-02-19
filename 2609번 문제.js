let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let a = input[0];
let b = input[1];

let c = [];

for (let i = 1; i < a + 1; i++) {
  if (!(a % i) && !(b % i)) {
    c.push(i);
  }
}

c.sort((a, b) => b - a);

console.log(c[0]);

let d = 1;
while ((d * a) % b) {
  d++;
}
console.log(d * a);
