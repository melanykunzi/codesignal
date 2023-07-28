function solution(inputString) {
    let x = inputString.split('').reverse().join('')
    return inputString === x
}

//tests
console.log(solution("aabaa"));
console.log(solution("aaabaaaa"));