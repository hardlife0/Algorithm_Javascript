function solution(n) {
    var answer = 0;
    let countOne = n.toString(2).split('').filter(x => x === '1').length; // n의 1의 개수를 세어줍니다.
    for (let i = n + 1; ; i++) { // n보다 큰 수를 차례대로 확인합니다.
        if (i.toString(2).split('').filter(x => x === '1').length === countOne) { // 1의 개수가 같은지 확인합니다.
            answer = i;
            break; // 조건을 만족하는 가장 작은 수를 찾으면 반복을 종료합니다.
        }
    }
    return answer;
}
//https://doong-yi-nuna.tistory.com/47