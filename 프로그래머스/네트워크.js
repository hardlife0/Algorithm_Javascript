function solution(n, computers) {
    // 컴퓨터의 개수 n에 맞게 visited 배열을 동적으로 확장하고 false로 초기화합니다.
    let visited = new Array(n).fill(false);
    let answer = 0;

    function dfs(i) {
        visited[i] = true;
        for(let j=0; j<computers[i].length; j++) {
            if(computers[i][j]===1 && !visited[j]){
                dfs(j);
            }
        }
    }
    
    for (let i=0; i < n; i++) { // computers.length 대신 n을 사용하여 반복합니다.
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    return answer;
}
//https://doong-yi-nuna.tistory.com/35