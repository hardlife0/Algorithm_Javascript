function solution(s) {
    var answer = 0;

    for (let i = 0; i < s.length; i++) {
        // 문자열을 회전시킵니다.
        const rotatedString = s.slice(i) + s.slice(0, i);
        // 회전된 문자열이 올바른 괄호 문자열인지 확인합니다.
        if (isValid(rotatedString)) {
            answer++;
        }
    }

    return answer;
}

// 올바른 괄호 문자열인지 판별하는 함수
function isValid(str) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of str) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
//https://doong-yi-nuna.tistory.com/59