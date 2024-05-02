function solution(brown, yellow) {
    var answer = [];
    var sum = brown + yellow;

    for(var i = Math.floor(Math.sqrt(sum)); i >= 3; i--){
        if(sum % i === 0){ // sum을 i로 나눈 나머지가 0인 경우만 고려 (정수 조건)
            var height = i;
            var width = sum / i;
            if((width - 2) * (height - 2) === yellow){ // 내부(노란색 부분) 크기 체크
                answer[0] = width; // 너비가 더 크거나 같으므로 answer[0]에 할당
                answer[1] = height;
                break; // 정답을 찾았으니 반복문 종료
            }
        }
    }

    return answer;
}
//https://doong-yi-nuna.tistory.com/51