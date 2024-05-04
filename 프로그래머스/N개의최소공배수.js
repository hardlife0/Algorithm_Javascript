const gcd = (num1, num2) => {
    while(num2 > 0){
      let r = num1 % num2;
      num1 = num2;
      num2 = r;
    }
    return num1;
  }
  
  const calc=(a,b)=> {
      return (a*b) / gcd(a,b);
  };
  
  function solution(arr){
    let answer = 1;
    for (let i = 0; i < arr.length; i++) {
      answer = calc(answer, arr[i]);
    };
    return answer;
  };

//https://doong-yi-nuna.tistory.com/52