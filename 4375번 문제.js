let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = input.map((input) => {
  let i = 1;
  let count = 1;
  while (i % input !== 0) {
    i = (i * 10 + 1) % input;
    count++;
  }
  return count;
});

console.log(result.join('\n'));
