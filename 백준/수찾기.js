const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const A = input[1].split(' ').map(v=>+v); // 탐색 대상
const B = input[3].split(' ').map(v=>+v);
let answer = [];
A.sort((a,b) => a - b);  // 탐색대상을 먼저 정렬한다. 
B.forEach(v => {
    let start = 0; // 탐색대상의 처음 index=0
    let end = A.length - 1;  // 탐색대상의 끝은 A의 길이-1 ! 
    let result = false;
    while (start <= end) { //start 값이 end보다 작거나 같을때까지 (전부 비교해본 것) 
        let mid = parseInt((start + end) / 2); // 탐색대상의 시작과 끝의 중간값 구하기
        if (v < A[mid]) { // B배열의 요소가 탐색 대상의 중간값보다 작으면 중간값에 -1을 해서 탐색범위를 반으로 줄임
            end = mid - 1; // 
        } else if (v > A[mid]) { // 반대로 크면, 중간값 + 1해서 탐색 범위를 줄여줌
            start = mid + 1;
        } else {
            result = true; //작거나 크지 않고 그 값이라면 찾은것이기 떄문에 빠져나간다
            break;
        }
    }
    if (result === true) {
        answer.push(1); //result 값이 true가 된다면 answer 배열에 1을 push한다. 
    } else {
        answer.push(0); // false라면 answer 배열에 0을 push한다. 
    }
})
console.log(answer.join('\n'));
//https://doong-yi-nuna.tistory.com/23