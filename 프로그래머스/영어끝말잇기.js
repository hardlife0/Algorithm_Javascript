function solution(n, words){
    let answer = [0, 0];
    let stack = [];
    for (let i = 0; i < words.length; i++){
      if (!stack[0]){
        stack.push(words[i]);
        continue;
      }
      if (stack.indexOf(words[i]) !== -1 || stack.at(-1).at(-1) !== words[i][0]){
        answer = [(i + 1) % n ? (i + 1) % n : n, Math.ceil((i + 1) / n)];
        break;
      }
      stack.push(words[i]);
    }
    return answer;
  }

  //https://doong-yi-nuna.tistory.com/57