// @ts-ignore
function solution(picture: string[]): string[] {
    // agregamos los * a cada elemento del array
    const conAsteriscos: string[] = picture.map(elemento => '*' + elemento + '*');
    // agregamos como primer elemento la cantidad de * que tenga de caracteres el primer elemento del array
    conAsteriscos.push('*'.repeat(conAsteriscos[0].length))
    // agregamos como ultimo elemento la cantidad de * que tenga de caracteres el ultimo elemento del array
    conAsteriscos.unshift('*'.repeat(conAsteriscos[0].length))
    return conAsteriscos
}

//tests
console.log(solution(["abc", 
"ded"]));
console.log(solution(["aa", 
"**", 
"zz"]))