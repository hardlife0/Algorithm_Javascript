function solution(n, lost, reserve) {
    // 여벌 체육복을 가져왔지만 도난당한 학생 제거 및 정렬
    let realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    
    // 체육수업을 들을 수 있는 학생의 수 초기화
    let cnt = n - realLost.length;
    
    realLost.forEach(lostNumber => {
        // 체육복을 빌려줄 수 있는 학생의 인덱스 찾기
        const index = realReserve.findIndex(reserveNumber => Math.abs(reserveNumber - lostNumber) === 1);
        if (index !== -1) {
            // 체육복을 빌려줄 수 있는 학생이 있다면, cnt 증가시키고 해당 학생을 realReserve에서 제거
            cnt++;
            realReserve.splice(index, 1);
        }
    });
    
    return cnt;
}

//https://doong-yi-nuna.tistory.com/32 문제해설