function solution(a) {
    let sortedArray = a.filter(height => height !== -1).sort((a, b) => a - b)
    for (let i = 0; i<a.length; i++){
        if (a[i] == -1){
            sortedArray.splice(i, 0, -1);
        }
    }
    return sortedArray;
}

//tests
console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(solution([-1, -1, -1, -1, -1]));