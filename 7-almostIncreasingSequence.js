function solution(sequence) {
    var removed = false;
    for (var i = 1; i<sequence.length; i++){
        if (sequence[i] <= sequence[i-1]){
            if (removed){
                return false
            }
            if (i === 1 || i === sequence.length - 1 || sequence[i] > sequence[i - 2] || sequence[i + 1] > sequence[i - 1]) {
            removed = true;
            } else {
                return false;
            }
        }
    }
    return true
}

//tests
console.log(solution([1, 3, 2, 1]));
console.log(solution([1, 3, 2]));
