// en todos los archivos .ts tuve que poner @ts-ignore porque sino no me dejaba ejecutar las funciones
// @ts-ignore
function solution(s1: string, s2: string): number {
    let arr1: string[] = s1.split('')
    let arr2: string[] = s2.split('')
    let counter: number = 0
    for (let i = 0; i<arr1.length; i++){
        let char: string = arr1[i]
        if (arr2.includes(char)){
            counter++;
            arr2.splice(arr2.indexOf(char), 1)
        }
    }
    return counter
}
//tests
// npx ts-node 10-commonCharacterCount.ts
console.log(solution("aabcc", "adcaa"));
console.log(solution("zzzz", "zzzzzzz"));