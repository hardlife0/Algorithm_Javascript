let input = require('fs').readFileSync(0, {encoding: "utf-8"}).split("\n").map(Number);
const N = input.shift();
let answer = -1;

for (let i = parseInt(N / 5); i >= 0; i--) {
    let remaining = N - (5 * i);
    if (remaining % 3 === 0) {
        answer = i + parseInt(remaining / 3);
        break;
    }
}

console.log(answer);
//https://doong-yi-nuna.tistory.com/17