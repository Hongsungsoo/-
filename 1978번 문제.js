let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0];
let number = input[1].split(' ');
let result = [];

for (let i = 0; i < n; i++) {
  if (number[i] > 1) {
    let h = 0;
    for (let j = 2; j < number[i]; j++) {
      if (!(number[i] % j)) {
        h++;
      }
    }
    if (!h) {
      result.push(number[i]);
    }
  }
}

console.log(result.length);
