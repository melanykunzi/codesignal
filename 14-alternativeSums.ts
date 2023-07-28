// @ts-ignore
function solution(a: number[]): number[] {
    let team1: number[] = []
    let team2: number[] = []
    let x: boolean = true
    for (let i = 0; i<a.length; i++){
        if (x == true){
            team1.push(a[i])
            x = false
        } else if (x == false){
            team2.push(a[i])
            x = true
        }
    }
    let sumaTeam1 = team1.reduce((suma, elemento) => suma + elemento, 0);
    let sumaTeam2 = team2.reduce((suma, elemento) => suma + elemento, 0);
    return [sumaTeam1, sumaTeam2]
}

//tests
console.log(solution([50, 60, 60, 45, 70]));
console.log(solution([100, 50]));