function solution(citations) {

    citations.sort((a,b) => b-a);
  
    let answer = 0;
    for(let i = 0; i < citations.length; i++){
      if(citations[i] > i){
          answer++;
      }
    }
    return answer;
  }
  //https://doong-yi-nuna.tistory.com/19