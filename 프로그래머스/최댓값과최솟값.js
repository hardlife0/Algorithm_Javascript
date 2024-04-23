function solution(s) {
	const arr = s.split(' ');
    return Math.min(...arr) + ' ' + Math.max(...arr)
}
//https://doong-yi-nuna.tistory.com/37