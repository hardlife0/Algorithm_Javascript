function solution(s) {
    var answer = '';
    let word=[];
    word=s.split(' ')
    for(let i=0;i<word.length;i++){
        word[i]=word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase()
    }
    answer=word.join(' ');
    return answer;
}

//https://doong-yi-nuna.tistory.com/41