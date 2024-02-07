let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = input.map((input) => {
  let i = 1;
  let count = 1;
  while (i % input !== 0) {
    i += 10 ** count;
    count++;
  }
  return count;
});

console.log(result.join('\n'));
