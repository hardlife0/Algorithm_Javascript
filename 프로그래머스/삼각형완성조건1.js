function solution(sides) {
    let answer=0;
    let long=Math.max.apply(null,sides);
    let index=sides.indexOf(long)
    sides.splice(index,1);
    let sum=sides.reduce((acc,cur)=>acc+cur,0);
    if(long<sum){
        answer=1;
    }
    else if(long>=sum){
        answer=2;
    }
    return answer;
}
//https://doong-yi-nuna.tistory.com/7