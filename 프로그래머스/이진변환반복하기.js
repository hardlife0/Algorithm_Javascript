function solution(s) {
    let answer=[0,0]
    while(s!=='1'){
        s=s.split('');
        let num=s.filter(v=>v==='1').length;
        answer[1]=answer[1]+s.length-num;
        s=num.toString(2)
        answer[0]++;
    }
    return answer;
}
//https://doong-yi-nuna.tistory.com/42