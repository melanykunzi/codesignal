// @ts-ignore
function solution(a: number[]): number[] {
    // creamos un array ordenado sin los -1
    let sortedArray: number[] = a.filter(height => height !== -1).sort((a, b) => a - b)
    for (let i = 0; i<a.length; i++){
        // recorremos el array original y donde haya un -1 lo agregamos al array ordenado
        if (a[i] == -1){
            sortedArray.splice(i, 0, -1);
        }
    }
    return sortedArray
}
//tests
console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(solution([-1, -1, -1, -1, -1]));