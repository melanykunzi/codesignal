// @ts-ignore
function reverseSubstring(inputString: string, start: number, end: number){
    const sub: string = inputString.substring(start + 1, end)
    const reversed = sub.split('').reverse().join('')
    
    return reversed
}
// @ts-ignore
function solution(inputString: string): string {
    //buscar el ultimo '('
    let apertura: number = inputString.lastIndexOf('(')
    //si apertura es '-1' significa que no esta en el string, entonces devolvemos el string sin modificaciones
    if (apertura === -1){
        return inputString
    }
    // hay que poner apertura como segundo argumento para asegurarnos de encontrar el parentesis correspondiente
    let cierre = inputString.indexOf(')', apertura)
    let reversed = reverseSubstring(inputString, apertura, cierre)
    //en la siguiente linea unimos todo, de 0 a apertura (no se incluye apertura) + la cadena reversed y desde el parentesis de cierre hasta el final sin incluir al ultimo parentesis
    let nuevoString = inputString.slice(0, apertura) + reversed + inputString.slice(cierre + 1);
    
    return solution(nuevoString)
}
//tests
console.log(solution("(rab)"));
console.log(solution("foo(bar(baz))blim"));