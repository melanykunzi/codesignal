// @ts-ignore
function solution(n: number): boolean {
    let firstHalfCount: number = 0;
    let secHalfCount: number = 0;
    let numberString: number[] = n.toString().split('').map(Number);
    for (let i = 0; i < numberString.length; i++){
        if (i <= numberString.length/2 - 1){
            firstHalfCount += numberString[i]
        } else {
            secHalfCount += numberString[i]
        }
    }
    return firstHalfCount === secHalfCount
}
//tests
console.log(solution(1230));
console.log(solution(239017));