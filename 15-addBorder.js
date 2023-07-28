function solution(picture) {
    const conAsteriscos = picture.map(elemento => '*' + elemento + '*');
    conAsteriscos.push('*'.repeat(conAsteriscos[0].length))
    conAsteriscos.unshift('*'.repeat(conAsteriscos[0].length))
    return conAsteriscos
}

//tests
console.log(solution(["abc", 
"ded"]));
console.log(solution(["aa", 
"**", 
"zz"]));