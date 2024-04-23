const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]); 
let bricks = [];

for (let i = 1; i <= N; i++) {
  const [area, height, weight] = input[i].split(" ").map(Number);
  bricks.push({index: i, area, height, weight});
}

bricks.sort((a, b) => a.weight - b.weight);

let dp = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  dp[i] = bricks[i].height;
  for (let j = 0; j < i; j++) {
    if (bricks[j].area < bricks[i].area && dp[i] < dp[j] + bricks[i].height) {
      dp[i] = dp[j] + bricks[i].height;
    }
  }
}

let maxIndex = 0;
for (let i = 1; i < N; i++) {
  if (dp[maxIndex] < dp[i]) {
    maxIndex = i;
  }
}

let maxHeight = dp[maxIndex];
let result = [];
for (let i=maxIndex; i>=0; i--) {
  if(dp[i] === maxHeight) {
    result.push(bricks[i].index);
    maxHeight -= bricks[i].height;
  }
  if (maxHeight === 0) break;
}

console.log(result.length);
result.reverse().forEach(index => console.log(index));
//https://doong-yi-nuna.tistory.com/39